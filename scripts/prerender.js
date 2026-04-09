/**
 * Prerender Script for ILMIA SPA
 *
 * This script generates static HTML for SEO purposes.
 * It uses Puppeteer to render the React app and save the output.
 *
 * Prerequisites:
 *   npm install puppeteer --save-dev
 *
 * Usage:
 *   1. First build the project: npm run build
 *   2. Serve the build: npx serve dist -p 3000
 *   3. Run this script: node scripts/prerender.js
 *
 * Or use the npm script:
 *   npm run prerender
 */

const fs = require('fs');
const path = require('path');

// Check if puppeteer is installed
let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (e) {
  console.log('\\n========================================');
  console.log('Puppeteer is not installed. Please run:');
  console.log('  npm install puppeteer --save-dev');
  console.log('\\nThen run this script again:');
  console.log('  node scripts/prerender.js');
  console.log('========================================\\n');
  console.log('\\nALTERNATIVE: For production, consider:');
  console.log('1. Using a prerender service like Prerender.io');
  console.log('2. Using Next.js for SSR/SSG');
  console.log('3. Using vite-plugin-prerender');
  process.exit(0);
}

const DIST_DIR = path.join(__dirname, '..', 'dist');
const BASE_URL = 'http://localhost:3000';

// Routes to prerender (hash routes for SPA)
const ROUTES = [
  '/',
  '/#about',
  '/#products',
  '/#news',
  '/#contact',
];

async function prerender() {
  console.log('\\n🚀 ILMIA Prerender Script');
  console.log('=========================\\n');

  console.log('Note: Make sure the dev server is running:');
  console.log('  npx serve dist -p 3000\\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();

    // Set viewport for desktop
    await page.setViewport({ width: 1280, height: 800 });

    // Wait for React to hydrate
    await page.setJavaScriptEnabled(true);

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`;
      console.log(`Prerendering: ${route}`);

      try {
        await page.goto(url, {
          waitUntil: 'networkidle0',
          timeout: 30000,
        });

        // Wait for content to render
        await page.waitForSelector('#root', { timeout: 10000 });
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Get the rendered HTML
        const html = await page.content();

        // For SPA, we save the main index.html with rendered content
        if (route === '/') {
          // Create a prerendered version
          const prerenderedPath = path.join(DIST_DIR, 'index-prerendered.html');
          fs.writeFileSync(prerenderedPath, html);
          console.log(`  ✓ Saved to: index-prerendered.html`);
        }

      } catch (error) {
        console.error(`  ✗ Failed to prerender ${route}: ${error.message}`);
      }
    }

  } finally {
    await browser.close();
  }

  console.log('\\n=========================');
  console.log('✅ Prerendering complete!');
  console.log('\\nNote: For better SPA SEO, consider:');
  console.log('1. Using a prerender service for dynamic rendering');
  console.log('2. The noscript content already provides static fallback');
  console.log('3. Structured data (JSON-LD) is already in the static HTML');
  console.log('=========================\\n');
}

prerender().catch(console.error);
