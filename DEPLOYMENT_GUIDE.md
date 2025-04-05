# Deployment Guide for Portfolio Website

## Local Development

To run this portfolio website locally, follow these steps:

1. Clone the repository or download the project ZIP
```bash
git clone https://github.com/vaibhavvishwkarma/code-with-vaibhav.git
cd code-with-vaibhav
```

2. Install the dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000` to see the website.

## GitHub Pages Deployment

To deploy this portfolio website to GitHub Pages:

1. First, make sure you have GitHub Pages package installed:
```bash
npm install --save-dev gh-pages
```

2. Add the following scripts to your package.json:
```json
"homepage": "https://vaibhavvishwkarma.github.io/code-with-vaibhav",
"scripts": {
  // other existing scripts...
  "build:gh-pages": "vite build --base=/code-with-vaibhav/",
  "deploy": "npm run build:gh-pages && gh-pages -d dist"
}
```

3. Build and deploy your website:
```bash
npm run deploy
```

4. Configure GitHub repository settings:
   - Go to your GitHub repository
   - Navigate to Settings > Pages
   - Set the source to "gh-pages" branch
   - Save the settings

Your website will be deployed to: `https://vaibhavvishwkarma.github.io/code-with-vaibhav/`

## Static Build Generation

If you want to generate a static build for manual deployment to any server:

1. Build the project:
```bash
npm run build
```

2. The output will be in the `dist` folder, which you can upload to any web hosting service.

## Additional Configuration Notes

- Make sure all internal links use relative paths
- The favicon and other static assets are stored in the `public` folder
- The CV.pdf file is located at `public/CV.pdf` 
- All image assets are in `public/images/`