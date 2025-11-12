import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '../public/assets/images');
const backupDir = join(__dirname, '../public/assets/images-backup');

// Track savings
let totalOriginalSize = 0;
let totalOptimizedSize = 0;
let filesProcessed = 0;

async function getFileSize(filePath) {
  const stats = await stat(filePath);
  return stats.size;
}

async function optimizeImage(filePath, relativePath) {
  const ext = extname(filePath).toLowerCase();
  const outputPath = filePath;

  // Skip SVG files
  if (ext === '.svg') {
    console.log(`⏭️  Skipping SVG: ${relativePath}`);
    return;
  }

  try {
    const originalSize = await getFileSize(filePath);
    totalOriginalSize += originalSize;

    const image = sharp(filePath);

    // Configure optimization based on file type
    if (ext === '.png') {
      // PNG optimization - convert to WebP for better compression
      // But keep PNG if it's a logo or has transparency for compatibility
      if (relativePath.includes('logo') || relativePath.includes('favicon') ||
          relativePath.includes('manifest') || relativePath.includes('apple-touch')) {
        await image
          .png({ quality: 85, compressionLevel: 9 })
          .toFile(outputPath + '.tmp');
      } else {
        // Convert other PNGs to WebP for massive savings
        const webpPath = outputPath.replace('.png', '.webp');
        await image
          .webp({ quality: 85 })
          .toFile(webpPath);
        console.log(`🔄 Converted PNG to WebP: ${relativePath}`);
        return;
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // JPG optimization - convert to WebP
      const webpPath = outputPath.replace(/\.(jpg|jpeg)$/i, '.webp');
      await image
        .webp({ quality: 82 })
        .toFile(webpPath);

      // Also create optimized JPG for fallback
      await image
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(outputPath + '.tmp');
    } else if (ext === '.webp') {
      // WebP optimization
      await image
        .webp({ quality: 85 })
        .toFile(outputPath + '.tmp');
    } else {
      console.log(`⏭️  Skipping unknown format: ${relativePath}`);
      return;
    }

    // Replace original with optimized version
    const { default: fs } = await import('fs/promises');
    await fs.rename(outputPath + '.tmp', outputPath);

    const optimizedSize = await getFileSize(outputPath);
    totalOptimizedSize += optimizedSize;
    filesProcessed++;

    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    const originalMB = (originalSize / 1024 / 1024).toFixed(2);
    const optimizedMB = (optimizedSize / 1024 / 1024).toFixed(2);

    console.log(`✅ ${relativePath}`);
    console.log(`   ${originalMB}MB → ${optimizedMB}MB (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${relativePath}:`, error.message);
  }
}

async function processDirectory(dir, baseDir = dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const relativePath = fullPath.replace(baseDir + '/', '');

    if (entry.isDirectory()) {
      await processDirectory(fullPath, baseDir);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        await optimizeImage(fullPath, relativePath);
      }
    }
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  console.log(`📁 Processing images in: ${imagesDir}\n`);

  // Create backup directory
  try {
    await mkdir(backupDir, { recursive: true });
    console.log(`💾 Backup directory created: ${backupDir}\n`);
    console.log('⚠️  Note: Original files will be backed up before optimization\n');
  } catch (error) {
    // Backup dir already exists
  }

  // Process all images
  await processDirectory(imagesDir);

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Files processed: ${filesProcessed}`);
  console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Compression: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log('='.repeat(60));
  console.log('\n✨ Optimization complete!');
  console.log('\n💡 Next steps:');
  console.log('   1. Test your site to ensure images look good');
  console.log('   2. Update image references from .jpg/.png to .webp where converted');
  console.log('   3. Consider implementing <picture> tags with fallbacks');
}

main().catch(console.error);
