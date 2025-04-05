import { useState, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Track scrolling to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-sm shadow-md' : 'py-5'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <nav className="flex justify-between items-center">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = window.location.pathname;
            }}
            className="text-2xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue"
          >
            VV
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-gray-700 hover:text-purple transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple transition-colors">About</a>
            <a href="#education" className="text-gray-700 hover:text-purple transition-colors">Education</a>
            <a href="#skills" className="text-gray-700 hover:text-purple transition-colors">Skills</a>
            <a href="#certifications" className="text-gray-700 hover:text-purple transition-colors">Certifications</a>
            <a href="#projects" className="text-gray-700 hover:text-purple transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-purple transition-colors">Contact</a>
          </div>
          
          {/* Resume Button */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-purple to-blue text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Resume
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${
          isOpen ? 'max-h-screen py-5 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#home" className="text-gray-700 hover:text-purple transition-colors py-2" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="text-gray-700 hover:text-purple transition-colors py-2" onClick={handleLinkClick}>About</a>
          <a href="#education" className="text-gray-700 hover:text-purple transition-colors py-2" onClick={handleLinkClick}>Education</a>
          <a href="#skills" className="text-gray-700 hover:text-purple transition-colors py-2" onClick={handleLinkClick}>Skills</a>
          <a href="#certifications" className="text-gray-700 hover:text-purple transition-colors py-2" onClick={handleLinkClick}>Certifications</a>
          <a href="#projects" className="text-gray-700 hover:text-purple transition-colors py-2" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-purple transition-colors py-2" onClick={handleLinkClick}>Contact</a>
          
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple to-blue text-white font-medium text-center transition-all duration-300 hover:shadow-lg"
            onClick={handleLinkClick}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;