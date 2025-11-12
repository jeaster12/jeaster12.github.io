import { readdir, stat, unlink } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '../public/assets/images');

// Files to keep (logos, icons, etc.)
const keepPatterns = [
  'logo',
  'favicon',
  'manifest',
  'apple-touch',
  'og.jpg' // Keep OG image as JPG for compatibility
];

let deletedCount = 0;
let deletedSize = 0;
let keptCount = 0;

async function shouldKeep(filename) {
  return keepPatterns.some(pattern => filename.toLowerCase().includes(pattern));
}

async function deleteOriginals(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await deleteOriginals(fullPath);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      const filename = entry.name;

      // Check if this is a JPG/PNG that has a WebP equivalent
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const webpName = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const webpPath = join(dir, webpName);

        // Check if WebP version exists
        try {
          await stat(webpPath);

          // WebP exists, check if we should keep this original
          if (await shouldKeep(filename)) {
            console.log(`⏭️  Keeping: ${filename} (logo/icon)`);
            keptCount++;
          } else {
            // Delete the original
            const fileSize = (await stat(fullPath)).size;
            await unlink(fullPath);
            deletedSize += fileSize;
            deletedCount++;
            console.log(`🗑️  Deleted: ${filename} (WebP version exists)`);
          }
        } catch (error) {
          // WebP doesn't exist, keep the original
          console.log(`⚠️  No WebP for: ${filename} - keeping original`);
          keptCount++;
        }
      }
    }
  }
}

async function main() {
  console.log('🧹 Starting cleanup of original JPG/PNG files...\n');
  console.log(`📁 Processing: ${imagesDir}\n`);
  console.log('Files to keep: logos, favicons, manifest icons, apple-touch-icon, og.jpg\n');

  await deleteOriginals(imagesDir);

  console.log('\n' + '='.repeat(60));
  console.log('📊 CLEANUP SUMMARY');
  console.log('='.repeat(60));
  console.log(`Files deleted: ${deletedCount}`);
  console.log(`Files kept: ${keptCount}`);
  console.log(`Space saved: ${(deletedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log('='.repeat(60));
  console.log('\n✨ Cleanup complete!');
  console.log('\n💡 Next: Update image references from .jpg/.png to .webp');
}

main().catch(console.error);
