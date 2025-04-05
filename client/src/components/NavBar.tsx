import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'} transition-all duration-300`}>
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-poppins gradient-text from-purple to-pink">
          Vaibhav.dev
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-poppins text-gray-700 hover:text-purple transition">About</a>
          <a href="#education" className="font-poppins text-gray-700 hover:text-purple transition">Education</a>
          <a href="#skills" className="font-poppins text-gray-700 hover:text-purple transition">Skills</a>
          <a href="#projects" className="font-poppins text-gray-700 hover:text-purple transition">Projects</a>
          <a href="#contact" className="font-poppins px-5 py-2 rounded-full bg-gradient-to-r from-purple to-pink text-white glow-btn">
            Contact Me
          </a>
        </div>
        
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white w-full py-4 px-6 shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          <a href="#about" className="font-poppins text-gray-700 hover:text-purple transition py-2" onClick={closeMobileMenu}>About</a>
          <a href="#education" className="font-poppins text-gray-700 hover:text-purple transition py-2" onClick={closeMobileMenu}>Education</a>
          <a href="#skills" className="font-poppins text-gray-700 hover:text-purple transition py-2" onClick={closeMobileMenu}>Skills</a>
          <a href="#projects" className="font-poppins text-gray-700 hover:text-purple transition py-2" onClick={closeMobileMenu}>Projects</a>
          <a href="#contact" className="font-poppins text-center px-5 py-2 rounded-full bg-gradient-to-r from-purple to-pink text-white glow-btn" onClick={closeMobileMenu}>
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
