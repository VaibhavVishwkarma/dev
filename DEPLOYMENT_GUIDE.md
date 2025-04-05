# GitHub Pages Deployment Guide

This guide provides step-by-step instructions on how to deploy your portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. The portfolio code in a local repository

## Deployment Steps

### 1. Create a GitHub Repository

- Create a new repository on GitHub named `code-with-vaibhav`
- Make sure it's set to public

### 2. Prepare Your Local Repository

- Make sure your code is committed to your local git repository
- Connect your local repository to the GitHub repository:
```bash
git remote add origin https://github.com/your-username/code-with-vaibhav.git
git branch -M main
git push -u origin main
```

### 3. Configure for GitHub Pages

- The base path is already set in `client/index.html` with:
```html
<base href="/code-with-vaibhav/">
```

- All image and asset paths in the code have been updated to handle GitHub Pages base URL with:
```js
`${import.meta.env.BASE_URL || "/"}images/your-image.jpg`
```

### 4. Build and Deploy

- Run the deployment script:
```bash
./deploy.sh
```

This script will:
1. Build the project
2. Create a `.nojekyll` file to bypass Jekyll processing
3. Copy all images and CV files to correct locations
4. Deploy to GitHub Pages using gh-pages package

### 5. Configure GitHub Pages in Repository Settings

- Go to your GitHub repository
- Navigate to Settings > Pages
- For Source, select "Deploy from a branch"
- Select the "gh-pages" branch and "/ (root)" folder
- Click Save

### 6. Access Your Deployed Site

- Your site will be available at: `https://your-username.github.io/code-with-vaibhav/`
- It may take a few minutes for your site to be published

## Troubleshooting

### 404 Errors for Images or Assets

If you encounter 404 errors for images or assets:

1. Check that all asset paths use the proper BASE_URL format:
```js
`${import.meta.env.BASE_URL || "/"}path/to/asset`
```

2. Ensure the .nojekyll file exists in the root of the gh-pages branch

3. Verify that the images were properly copied to the correct location in the dist folder before deployment

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add your custom domain in GitHub repository settings
2. Create a CNAME file in the root of your project
3. Update the base path in index.html and image references accordingly
