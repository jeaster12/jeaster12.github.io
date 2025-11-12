#!/usr/bin/env node
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

// Recursively get all files in a directory
async function getFiles(dir, ext = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const res = join(dir, entry.name);
      if (entry.isDirectory()) {
        return getFiles(res, ext);
      } else if (ext.length === 0 || ext.some((e) => entry.name.endsWith(e))) {
        return res;
      }
      return null;
    })
  );
  return files.flat().filter(Boolean);
}

// Get all images
const imageFiles = await getFiles('public/assets/images', [
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.svg',
  '.gif',
]);

// Get all source files
const sourceFiles = await getFiles('src', [
  '.astro',
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.md',
  '.mdx',
]);

// Read all source content
const sourceContent = (
  await Promise.all(
    sourceFiles.map(async (file) => {
      const content = await readFile(file, 'utf-8');
      return content;
    })
  )
).join('\n');

// Check which images are used
const unusedImages = [];
const usedImages = [];

for (const imagePath of imageFiles) {
  // Get just the filename
  const filename = imagePath.split('/').pop();
  const pathFromAssets = imagePath.replace('public/', '/');

  // Check if image is referenced in source
  const isUsed =
    sourceContent.includes(filename) ||
    sourceContent.includes(pathFromAssets) ||
    sourceContent.includes(imagePath);

  if (isUsed) {
    usedImages.push(imagePath);
  } else {
    unusedImages.push(imagePath);
  }
}

console.log('\n📊 Image Usage Report\n');
console.log(`Total images: ${imageFiles.length}`);
console.log(`Used images: ${usedImages.length}`);
console.log(`Unused images: ${unusedImages.length}\n`);

if (unusedImages.length > 0) {
  console.log('🗑️  Unused images:\n');
  unusedImages.forEach((img) => {
    console.log(`  - ${img}`);
  });
  console.log('\n');
} else {
  console.log('✅ All images are being used!\n');
}
