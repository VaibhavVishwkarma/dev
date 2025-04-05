# Vaibhav Vishwkarma Portfolio Website

A modern, responsive, and user-friendly portfolio website for Vaibhav Vishwkarma, a Computer Science student and developer.

## 🌟 Features

- Rainbow-themed design with vibrant gradients and animations
- Responsive layout for all devices
- Interactive UI elements with hover effects
- Detailed sections for education, skills, projects, and more
- Functional contact form using Web3Forms API

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- Font Awesome Icons
- Web3Forms API for contact form

## 🚀 Local Development

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vaibhav-portfolio.git
   cd vaibhav-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

## 📝 Deploying to GitHub Pages

### Setup GitHub Pages

1. Create a GitHub repository for your portfolio

2. Configure GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select the `gh-pages` branch from the dropdown menu
   - Click Save

### Deployment Steps

1. Install the gh-pages package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add these scripts to your package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist/public"
   }
   ```

3. Deploy your website:
   ```bash
   npm run deploy
   ```

4. Your website should now be live at `https://yourusername.github.io/your-repo-name`

## 📄 License

MIT

## 🙏 Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [Web3Forms](https://web3forms.com/)
