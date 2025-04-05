const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-purple/5 via-pink/5 to-blue/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-purple to-blue pb-2">Education & Training</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple to-blue rounded-full mx-auto mt-2"></div>
        </div>
        
        <div className="relative pl-8 space-y-10 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple before:via-pink before:to-blue">
          {/* Timeline Item 1 */}
          <div className="timeline-item relative pl-8">
            <div className="card rounded-xl overflow-hidden shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-poppins font-semibold text-gray-800">German Language A1 - A2</h3>
                <div className="px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue inline-flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i> Sep 2024 - Present
                </div>
              </div>
              <p className="text-gray-600 mb-4">Language Pantheon (Offline)</p>
              <div className="flex items-center">
                <i className="fas fa-globe text-pink mr-2"></i>
                <a href="https://languagepantheon.com/" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline">languagepantheon.com</a>
              </div>
            </div>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="timeline-item relative pl-8">
            <div className="card rounded-xl overflow-hidden shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-poppins font-semibold text-gray-800">Bachelor of Computer Applications</h3>
                <div className="px-4 py-2 rounded-full text-sm font-medium bg-purple-50 text-purple inline-flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i> Aug 2023 - June 2024
                </div>
              </div>
              <p className="text-gray-600 mb-2">Teerthanker Mahaveer University, Moradabad, India</p>
              <p className="text-gray-600 mb-4">Field of Study: Computer Science</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-award text-orange mr-2"></i>
                  <span className="text-gray-700">Final Grade: 8.74/10</span>
                </div>
                <a href="https://www.tmu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline">tmu.ac.in</a>
              </div>
            </div>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="timeline-item relative pl-8">
            <div className="card rounded-xl overflow-hidden shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-poppins font-semibold text-gray-800">Senior School Certificate</h3>
                <div className="px-4 py-2 rounded-full text-sm font-medium bg-pink-50 text-pink inline-flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i> Apr 2022 - Mar 2023
                </div>
              </div>
              <p className="text-gray-600 mb-2">Central Board of Secondary Education</p>
              <p className="text-gray-600 mb-4">Field of Study: Physics, Chemistry, Mathematics, Information Technology, Physical Education</p>
              <div className="flex items-center">
                <i className="fas fa-award text-green mr-2"></i>
                <span className="text-gray-700">Final Grade: 62.8%</span>
              </div>
            </div>
          </div>
          
          {/* Timeline Item 4 */}
          <div className="timeline-item relative pl-8">
            <div className="card rounded-xl overflow-hidden shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-poppins font-semibold text-gray-800">Secondary School Certificate</h3>
                <div className="px-4 py-2 rounded-full text-sm font-medium bg-green-50 text-green inline-flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i> Mar 2021 - Jul 2022
                </div>
              </div>
              <p className="text-gray-600 mb-2">Central Board of Secondary Education</p>
              <p className="text-gray-600 mb-4">Field of Study: Mathematics Standard, Science, Social Science, English, Information Technology</p>
              <div className="flex items-center">
                <i className="fas fa-award text-blue mr-2"></i>
                <span className="text-gray-700">Final Grade: 60.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
