import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 pb-32 bg-gradient-to-br from-purple/5 via-blue/5 to-pink/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <p className="text-purple font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold font-poppins mb-4">
              <span className="gradient-text from-purple to-blue">Vaibhav</span> <span className="gradient-text from-blue to-pink">Vishwkarma</span>
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-gray-700 mb-6">
              Computer Science Student & AI Enthusiast
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I'm a passionate student currently learning and exploring the world of software development, 
              data science, artificial intelligence, and machine learning. I'm building projects as I learn 
              and constantly working to improve my skills to become a better problem solver through code and technology.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple to-blue text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 glow-btn"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-white border border-purple/20 text-purple font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-purple/5"
              >
                Contact Me
              </a>
            </div>
            
            <div className="mt-4 flex justify-center lg:justify-start">
              <a 
                href="/CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-auto px-6 py-3 rounded-full bg-gradient-to-r from-pink to-purple text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 glow-btn flex items-center"
              >
                <i className="fas fa-download mr-2"></i> Download Resume
              </a>
            </div>
            
            <div className="flex gap-5 mt-10 justify-center lg:justify-start">
              <a 
                href="https://github.com/vaibhav-vishwkarma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple to-blue flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/vaibhav-vishwkarma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue to-purple flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://twitter.com/vaibhav_vishw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple to-pink flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple via-blue to-pink rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-full p-2 shadow-xl max-w-md mx-auto">
                <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
                  <img 
                    src="./images/user-img.png" 
                    alt="Vaibhav Vishwkarma" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute hidden lg:block">
              {/* Floating Elements */}
              <div className="absolute -top-10 right-10 w-16 h-16 bg-gradient-to-r from-purple to-blue rounded-xl rotate-12 opacity-10 animate-float"></div>
              <div className="absolute top-40 -right-10 w-20 h-20 bg-gradient-to-r from-blue to-pink rounded-full opacity-10 animate-float animation-delay-1000"></div>
              <div className="absolute top-20 -left-10 w-14 h-14 bg-gradient-to-r from-pink to-purple rounded-lg rotate-45 opacity-10 animate-float animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;