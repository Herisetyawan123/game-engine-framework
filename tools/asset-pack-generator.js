#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'assets', 'images');
const outputFile = path.join(rootDir, 'assets', 'asset.pack.js');
const watchMode = process.argv.includes('--watch');

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp', '.avif']);
const MIME_TYPES = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.bmp': 'image/bmp',
  '.avif': 'image/avif'
};

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function listImageFiles(dirPath, files = []) {
  if (!fs.existsSync(dirPath)) return files;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      listImageFiles(fullPath, files);
    } else if (entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

function getRelativeAssetKey(filePath) {
  const relative = path.relative(sourceDir, filePath);
  const normalized = relative.split(path.sep).join('/');
  const ext = path.extname(normalized).toLowerCase();
  return normalized.slice(0, normalized.length - ext.length);
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

function buildAssetPackContent(images) {
  const entries = Object.entries(images).sort(([a], [b]) => a.localeCompare(b));
  const body = entries.map(([key, value]) => `    ${JSON.stringify(key)}: ${JSON.stringify(value)}`).join(',\n');

  return `window.__ASSETS_PACK__ = {\n  images: {\n${body ? body + '\n' : ''}  }\n};\n`;
}

function generateAssetPack() {
  ensureDirectory(path.dirname(outputFile));
  const imageFiles = listImageFiles(sourceDir);
  const images = {};

  for (const filePath of imageFiles) {
    const key = getRelativeAssetKey(filePath);
    const mimeType = getMimeType(filePath);
    const buffer = fs.readFileSync(filePath);
    const base64 = buffer.toString('base64');
    images[key] = `data:${mimeType};base64,${base64}`;
  }

  const content = buildAssetPackContent(images);
  fs.writeFileSync(outputFile, content, 'utf8');
  console.log(`[asset-pack] wrote ${Object.keys(images).length} image(s) to ${path.relative(rootDir, outputFile)}`);
}

function startWatching() {
  if (!fs.existsSync(sourceDir)) {
    console.error(`[asset-pack] source folder not found: ${sourceDir}`);
    process.exit(1);
  }

  generateAssetPack();
  console.log(`[asset-pack] watching ${path.relative(rootDir, sourceDir)} for changes...`);

  let timer = null;
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try {
        generateAssetPack();
      } catch (error) {
        console.error('[asset-pack] failed to regenerate asset pack:', error.message);
      }
    }, 150);
  };

  const watchDirectory = (dirPath) => {
    try {
      fs.watch(dirPath, { persistent: true }, (_eventType, filename) => {
        if (!filename || filename.startsWith('.')) return;
        schedule();
      });
    } catch (error) {
      console.warn(`[asset-pack] unable to watch ${dirPath}: ${error.message}`);
    }
  };

  watchDirectory(sourceDir);
  const subdirs = [];
  const walk = (dirPath) => {
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const child = path.join(dirPath, entry.name);
        subdirs.push(child);
        walk(child);
      }
    }
  };
  walk(sourceDir);
  subdirs.forEach(watchDirectory);
}

if (watchMode) {
  startWatching();
} else {
  generateAssetPack();
}
