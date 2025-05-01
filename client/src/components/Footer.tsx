import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gradient-to-r from-purple/10 via-blue/10 to-pink/10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue">
              VV
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-6 md:mb-0">
            <a href="#home" className="text-gray-700 hover:text-purple transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-purple transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-purple transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/VaibhavVishwkarma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-purple hover:border-purple/50 transition-all duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/vaibhav-vishwkarma-b561a12a5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue hover:border-blue/50 transition-all duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://x.com/Vaibhav21077629" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 transition-all duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>© {currentYear} Vaibhav Vishwkarma. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;