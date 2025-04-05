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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
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
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu - Slide from right */}
      <div 
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-br from-purple-100 to-blue-100 shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu items - Removed extra close button */}
        <div className="flex flex-col space-y-6 px-8 py-20 mt-10">
          <a href="#home" className="text-gray-700 hover:text-purple transition-colors py-2 text-lg font-medium" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="text-gray-700 hover:text-purple transition-colors py-2 text-lg font-medium" onClick={handleLinkClick}>About</a>
          <a href="#education" className="text-gray-700 hover:text-purple transition-colors py-2 text-lg font-medium" onClick={handleLinkClick}>Education</a>
          <a href="#skills" className="text-gray-700 hover:text-purple transition-colors py-2 text-lg font-medium" onClick={handleLinkClick}>Skills</a>
          <a href="#certifications" className="text-gray-700 hover:text-purple transition-colors py-2 text-lg font-medium" onClick={handleLinkClick}>Certifications</a>
          <a href="#projects" className="text-gray-700 hover:text-purple transition-colors py-2 text-lg font-medium" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-purple transition-colors py-2 text-lg font-medium" onClick={handleLinkClick}>Contact</a>
        </div>
        
        {/* Gradient decoration at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-purple to-blue opacity-20"></div>
      </div>
      
      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default NavBar;