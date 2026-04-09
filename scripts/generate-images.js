/**
 * Image Generation Script for ILMIA
 *
 * This script generates PNG versions of SVG files for:
 * - Favicons (16x16, 32x32, 180x180, 192x192, 512x512)
 * - OG Image (1200x630)
 *
 * Prerequisites:
 *   npm install sharp
 *
 * Usage:
 *   node scripts/generate-images.js
 *
 * Or add to package.json scripts:
 *   "generate-images": "node scripts/generate-images.js"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (e) {
  console.log('\n========================================');
  console.log('Sharp is not installed. Please run:');
  console.log('  npm install sharp --save-dev');
  console.log('\nThen run this script again:');
  console.log('  node scripts/generate-images.js');
  console.log('========================================\n');

  console.log('MANUAL ALTERNATIVE:');
  console.log('You can also use online tools to convert SVG to PNG:');
  console.log('1. https://cloudconvert.com/svg-to-png');
  console.log('2. https://svgtopng.com/');
  console.log('\nRequired files to generate:');
  console.log('- public/favicon-16x16.png (16x16)');
  console.log('- public/favicon-32x32.png (32x32)');
  console.log('- public/apple-touch-icon.png (180x180)');
  console.log('- public/icon-192.png (192x192)');
  console.log('- public/icon-512.png (512x512)');
  process.exit(0);
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Favicon sizes to generate
const FAVICON_SIZES = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

async function generateFavicons() {
  const faviconSvg = path.join(PUBLIC_DIR, 'favicon.svg');

  if (!fs.existsSync(faviconSvg)) {
    console.error('Error: favicon.svg not found in public directory');
    return;
  }

  console.log('Generating favicon PNGs...');

  for (const { name, size } of FAVICON_SIZES) {
    try {
      await sharp(faviconSvg)
        .resize(size, size)
        .png()
        .toFile(path.join(PUBLIC_DIR, name));
      console.log(`  ✓ Generated ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`  ✗ Failed to generate ${name}: ${error.message}`);
    }
  }
}

async function generateOgImage() {
  const ogJpg = path.join(PUBLIC_DIR, 'og-image.jpg');

  if (!fs.existsSync(ogJpg)) {
    console.error('Error: og-image.jpg not found in public directory');
    return;
  }

  console.log('Resizing OG image to 1200x630...');

  try {
    await sharp(ogJpg)
      .resize(1200, 630)
      .jpeg({ quality: 85 })
      .toFile(path.join(PUBLIC_DIR, 'og-image-resized.jpg'));

    // Replace original with resized
    fs.copyFileSync(path.join(PUBLIC_DIR, 'og-image-resized.jpg'), ogJpg);
    fs.unlinkSync(path.join(PUBLIC_DIR, 'og-image-resized.jpg'));

    console.log('  ✓ Resized og-image.jpg to 1200x630');
  } catch (error) {
    console.error(`  ✗ Failed to resize og-image.jpg: ${error.message}`);
  }
}

async function main() {
  console.log('\n🎨 ILMIA Image Generation Script');
  console.log('================================\n');

  await generateFavicons();
  console.log('');
  await generateOgImage();

  console.log('\n================================');
  console.log('✅ Image generation complete!');
  console.log('\nNext steps:');
  console.log('1. Rebuild the project: npm run build');
  console.log('2. Deploy: firebase deploy');
  console.log('================================\n');
}

main().catch(console.error);
