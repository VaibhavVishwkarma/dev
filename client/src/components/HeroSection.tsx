const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple/10 via-pink/5 to-blue/10">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-4">
            Hi, I'm <span className="gradient-text from-purple via-pink to-blue">Vaibhav</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-poppins text-gray-600 mb-6">Computer Science Student & Developer</h2>
          <p className="text-gray-700 mb-8 max-w-lg">
            Passionate about programming, artificial intelligence, and IoT-driven technologies. 
            Strong foundation in problem-solving and logical thinking.
          </p>
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://www.linkedin.com/in/vaibhav-vishwkarma-b561a12a5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue to-purple text-white shadow-lg transition-transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/vaibhavVishwkarma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple to-pink text-white shadow-lg transition-transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://vaibhavvishwkarma.github.io/Vaibhav-Web/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink to-orange text-white shadow-lg transition-transform hover:scale-110"
              aria-label="Portfolio Website"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple to-pink text-white font-medium text-lg shadow-lg glow-btn">
            Get In Touch
          </a>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple via-pink to-blue rounded-full blur-3xl opacity-20"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white p-3 shadow-xl relative z-10">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple via-pink to-blue p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl text-gray-400 font-poppins">VV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
