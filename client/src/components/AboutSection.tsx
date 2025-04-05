import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-tl from-purple/5 via-blue/5 to-pink/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-purple to-blue pb-2">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple to-blue rounded-full mx-auto mt-2"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 animate-fadeIn">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple via-blue to-pink rounded-2xl blur opacity-30"></div>
              <div className="relative glass-card p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 font-poppins">Who I Am</h3>
                <p className="text-gray-600 mb-6">
                  I'm Vaibhav Vishwkarma, a Computer Science student and AI enthusiast with a passion for building applications that solve real-world problems. I combine creativity with technical expertise to develop innovative solutions.
                </p>
                <p className="text-gray-600">
                  My journey in technology started with a curiosity about how things work, which evolved into a deep interest in artificial intelligence, machine learning, and software development. I'm constantly learning and exploring new technologies to improve my skills.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple to-blue rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-code text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2 font-poppins">Software Development</h4>
                <p className="text-gray-600 text-sm">Building robust and efficient applications using modern frameworks and tools.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue to-purple rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-brain text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2 font-poppins">Machine Learning</h4>
                <p className="text-gray-600 text-sm">Developing algorithms and models that can learn from and make predictions on data.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-purple rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-mobile-alt text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2 font-poppins">Mobile App Development</h4>
                <p className="text-gray-600 text-sm">Creating intuitive and responsive applications for iOS and Android platforms.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue to-pink rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-database text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2 font-poppins">Data Science</h4>
                <p className="text-gray-600 text-sm">Extracting insights and knowledge from data to drive informed decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;