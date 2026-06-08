const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distDir = path.resolve(__dirname, 'dist');

// Remove existing dist directory using system command (more robust against locks on macOS)
if (fs.existsSync(distDir)) {
  try {
    execSync(`rm -rf "${distDir}"`);
  } catch (e) {
    console.warn("System rm failed, falling back to fs.rmSync...");
    try {
      fs.rmSync(distDir, { recursive: true, force: true });
    } catch (err) {
      console.error("Failed to remove dist directory:", err);
    }
  }
}

// Re-create dist directory
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

const exclude = [
  'node_modules',
  'dist',
  '.git',
  '.env',
  '.env.example',
  'package.json',
  'package-lock.json',
  'vite.config.js',
  'build.js'
];

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    if (exclude.includes(entry.name)) continue;

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Building static site to dist/...');
copyDir(__dirname, distDir);
console.log('Build completed successfully!');
