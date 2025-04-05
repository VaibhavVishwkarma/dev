const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gradient-to-r from-purple to-pink text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-poppins">Vaibhav Vishwkarma</h2>
            <p className="text-white/80 mt-2">Computer Science Student & Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/vaibhav-vishwkarma-b561a12a5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/vaibhavVishwkarma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://vaibhavvishwkarma.github.io/Vaibhav-Web/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Portfolio Website"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Vaibhav Vishwkarma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
