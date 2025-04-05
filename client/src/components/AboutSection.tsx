const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-purple to-pink pb-2">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple to-pink rounded-full mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 bg-gradient-to-br from-white to-purple-50">
            <h3 className="text-2xl font-poppins font-semibold mb-4 text-gray-800">My Story</h3>
            <p className="text-gray-700 mb-6">
              Passionate about programming, artificial intelligence, and IoT-driven technologies. 
              Strong foundation in problem-solving and logical thinking. Eager to deepen knowledge in 
              software development, intelligent systems, and digital technologies, and apply skills in 
              a practical, technology-driven environment.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple">Problem Solver</span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-pink-100 text-pink">Tech Enthusiast</span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue">AI Passionate</span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green">IoT Explorer</span>
            </div>
          </div>
          
          <div className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 bg-gradient-to-br from-white to-purple-50">
            <h3 className="text-2xl font-poppins font-semibold mb-4 text-gray-800">Personal Details</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start space-x-3">
                <i className="fas fa-user-alt text-purple mt-1"></i>
                <span>Vaibhav Vishwkarma</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-pink mt-1"></i>
                <span>Uttar Pradesh, 246762, Nagina, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-language text-blue mt-1"></i>
                <span>Languages: Hindi (Native), English (B2), German (A2)</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-graduation-cap text-green mt-1"></i>
                <span>Bachelor of Computer Applications</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-globe text-orange mt-1"></i>
                <a href="https://vaibhavvishwkarma.github.io/Vaibhav-Web/" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline transition">
                  vaibhavvishwkarma.github.io/Vaibhav-Web/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
