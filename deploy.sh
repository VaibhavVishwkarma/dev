#!/bin/bash

# Run the build
npm run build

# Create the .nojekyll file
touch dist/.nojekyll

# Create images directory in dist
mkdir -p dist/images

# Copy images from client/public/images to dist/images
cp -r client/public/images/* dist/images/ || true

# Copy CV to dist
cp client/public/CV.pdf dist/ || true

# Deploy to GitHub Pages
npx gh-pages -d dist
