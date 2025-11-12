import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '../src/content/portfolio');

// Files to exclude from conversion (logos, og images, etc.)
const excludePatterns = [
  'logo',
  'favicon',
  'manifest',
  'apple-touch',
  'og.jpg'
];

let filesUpdated = 0;
let referencesUpdated = 0;

function shouldExclude(path) {
  return excludePatterns.some(pattern => path.toLowerCase().includes(pattern));
}

async function updateImageRefs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await updateImageRefs(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      let content = await readFile(fullPath, 'utf-8');
      const originalContent = content;
      let fileRefsUpdated = 0;

      // Replace .jpg, .jpeg, .png with .webp (but not logos/icons)
      content = content.replace(/(['"])(\/assets\/images\/[^'"]+)\.(jpg|jpeg|png)(['"])/gi, (match, quote1, path, ext, quote2) => {
        if (shouldExclude(path)) {
          console.log(`  ⏭️  Skipping: ${path}.${ext} (excluded)`);
          return match; // Keep original
        }
        fileRefsUpdated++;
        referencesUpdated++;
        console.log(`  ✏️  ${path}.${ext} → ${path}.webp`);
        return `${quote1}${path}.webp${quote2}`;
      });

      if (content !== originalContent) {
        await writeFile(fullPath, content, 'utf-8');
        filesUpdated++;
        console.log(`✅ Updated ${entry.name} (${fileRefsUpdated} references)\n`);
      }
    }
  }
}

async function main() {
  console.log('🔄 Updating image references to WebP...\n');
  console.log(`📁 Processing: ${contentDir}\n`);

  await updateImageRefs(contentDir);

  console.log('\n' + '='.repeat(60));
  console.log('📊 UPDATE SUMMARY');
  console.log('='.repeat(60));
  console.log(`Files updated: ${filesUpdated}`);
  console.log(`References updated: ${referencesUpdated}`);
  console.log('='.repeat(60));
  console.log('\n✨ Update complete!');
}

main().catch(console.error);
