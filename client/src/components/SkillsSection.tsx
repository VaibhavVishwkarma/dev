import React from "react";

const SkillsSection = () => {
  // Technical Skills data
  const technicalSkills = [
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "TypeScript", level: 65 },
    { name: "Next.js", level: 60 },
    { name: "TensorFlow", level: 70 }
  ];

  // Languages data (without proficiency level notations)
  const languages = [
    { name: "English", level: 95 },
    { name: "Hindi", level: 100 },
    { name: "French", level: 45 },
    { name: "German", level: 30 }
  ];

  // Soft Skills data
  const softSkills = [
    "Problem-solving",
    "Team Collaboration",
    "Critical Thinking",
    "Adaptability",
    "Time Management",
    "Communication",
    "Leadership",
    "Creativity"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-purple/5 via-blue/5 to-pink/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-blue to-pink pb-2">Skills</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue to-pink rounded-full mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Technical Skills */}
          <div className="glass-card p-8 rounded-xl shadow-lg">
            <h3 className="font-poppins text-xl font-semibold mb-6 text-center">
              <i className="fas fa-laptop-code mr-2 text-purple"></i> Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="progress-bar h-full rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Languages */}
          <div className="glass-card p-8 rounded-xl shadow-lg">
            <h3 className="font-poppins text-xl font-semibold mb-6 text-center">
              <i className="fas fa-language mr-2 text-blue"></i> Languages
            </h3>
            <div className="space-y-5">
              {languages.map((language, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{language.name}</span>
                    <span className="text-gray-500 text-sm">{language.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="progress-bar h-full rounded-full" 
                      style={{ width: `${language.level}%`, backgroundImage: "linear-gradient(to right, #3b82f6, #8b5cf6)" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="glass-card p-8 rounded-xl shadow-lg">
            <h3 className="font-poppins text-xl font-semibold mb-6 text-center">
              <i className="fas fa-users mr-2 text-pink"></i> Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white px-4 py-3 rounded-lg shadow text-center hover:shadow-md transition-all hover:-translate-y-1 duration-300"
                >
                  <span className="text-gray-700 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;