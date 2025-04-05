#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Run the standard build
console.log("Running standard build...");
execSync('npm run build', { stdio: 'inherit' });

// Ensure .nojekyll file exists
console.log("Creating .nojekyll file...");
fs.writeFileSync(path.join('dist', '.nojekyll'), '');

// Copy images and CV
console.log("Copying image files and CV...");
try {
  // Create images directory if it doesn't exist
  if (!fs.existsSync(path.join('dist', 'images'))) {
    fs.mkdirSync(path.join('dist', 'images'), { recursive: true });
  }

  // Copy images
  if (fs.existsSync(path.join('client', 'public', 'images'))) {
    fs.readdirSync(path.join('client', 'public', 'images')).forEach(file => {
      fs.copyFileSync(
        path.join('client', 'public', 'images', file),
        path.join('dist', 'images', file)
      );
    });
  }

  // Copy CV
  if (fs.existsSync(path.join('client', 'public', 'CV.pdf'))) {
    fs.copyFileSync(
      path.join('client', 'public', 'CV.pdf'),
      path.join('dist', 'CV.pdf')
    );
  }
} catch (error) {
  console.error("Error copying files:", error);
}

console.log("Build completed successfully!");