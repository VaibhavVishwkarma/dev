const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-green to-blue pb-2">Skills & Abilities</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green to-blue rounded-full mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="glass-card rounded-xl overflow-hidden shadow-lg p-8 bg-gradient-to-br from-white to-blue-50">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-gray-800">Technical Skills</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Programming Languages</span>
                  <span className="text-blue font-medium">85%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="progress-bar h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue">C</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue">Python</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue">Pandas</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue">NumPy</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Web Development</span>
                  <span className="text-purple font-medium">90%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="progress-bar h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple">HTML</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple">CSS</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple">JavaScript</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple">Tailwind CSS</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple">React.js</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Design Tools</span>
                  <span className="text-pink font-medium">75%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="progress-bar h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-pink-100 text-pink">Figma</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-pink-100 text-pink">Adobe XD</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Data Analysis</span>
                  <span className="text-green font-medium">80%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="progress-bar h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green">Tableau</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green">MS Excel</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Language Skills */}
          <div className="glass-card rounded-xl overflow-hidden shadow-lg p-8 bg-gradient-to-br from-white to-purple-50">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-gray-800">Language Skills</h3>
            
            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Mother Tongue:</span> Hindi
              </p>
              <p className="text-gray-500 text-sm italic">
                Levels: A1/A2: Basic user; B1/B2: Independent user; C1/C2: Proficient user
              </p>
            </div>
            
            <div className="space-y-8">
              {/* English */}
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-700 font-medium">English</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue">B2 Level</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Understanding</p>
                    <div className="flex space-x-1">
                      <div className="w-6 h-2 rounded-full bg-blue"></div>
                      <div className="w-6 h-2 rounded-full bg-blue"></div>
                      <div className="w-6 h-2 rounded-full bg-blue"></div>
                      <div className="w-6 h-2 rounded-full bg-blue opacity-40"></div>
                      <div className="w-6 h-2 rounded-full bg-blue opacity-20"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Listening: B2, Reading: B1</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Speaking</p>
                    <div className="flex space-x-1">
                      <div className="w-6 h-2 rounded-full bg-blue"></div>
                      <div className="w-6 h-2 rounded-full bg-blue"></div>
                      <div className="w-6 h-2 rounded-full bg-blue"></div>
                      <div className="w-6 h-2 rounded-full bg-blue opacity-40"></div>
                      <div className="w-6 h-2 rounded-full bg-blue opacity-20"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Production: B2, Interaction: B2</p>
                  </div>
                </div>
                
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-1">Writing</p>
                  <div className="flex space-x-1">
                    <div className="w-6 h-2 rounded-full bg-blue"></div>
                    <div className="w-6 h-2 rounded-full bg-blue"></div>
                    <div className="w-6 h-2 rounded-full bg-blue"></div>
                    <div className="w-6 h-2 rounded-full bg-blue opacity-40"></div>
                    <div className="w-6 h-2 rounded-full bg-blue opacity-20"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Level: B2</p>
                </div>
              </div>
              
              {/* German */}
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-700 font-medium">German</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple">A2 Level</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Understanding</p>
                    <div className="flex space-x-1">
                      <div className="w-6 h-2 rounded-full bg-purple"></div>
                      <div className="w-6 h-2 rounded-full bg-purple"></div>
                      <div className="w-6 h-2 rounded-full bg-purple opacity-20"></div>
                      <div className="w-6 h-2 rounded-full bg-purple opacity-20"></div>
                      <div className="w-6 h-2 rounded-full bg-purple opacity-20"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Listening: A2, Reading: A2</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Speaking</p>
                    <div className="flex space-x-1">
                      <div className="w-6 h-2 rounded-full bg-purple"></div>
                      <div className="w-6 h-2 rounded-full bg-purple"></div>
                      <div className="w-6 h-2 rounded-full bg-purple opacity-20"></div>
                      <div className="w-6 h-2 rounded-full bg-purple opacity-20"></div>
                      <div className="w-6 h-2 rounded-full bg-purple opacity-20"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Production: A2, Interaction: A2</p>
                  </div>
                </div>
                
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-1">Writing</p>
                  <div className="flex space-x-1">
                    <div className="w-6 h-2 rounded-full bg-purple"></div>
                    <div className="w-6 h-2 rounded-full bg-purple"></div>
                    <div className="w-6 h-2 rounded-full bg-purple opacity-20"></div>
                    <div className="w-6 h-2 rounded-full bg-purple opacity-20"></div>
                    <div className="w-6 h-2 rounded-full bg-purple opacity-20"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Level: A2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
