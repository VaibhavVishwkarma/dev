import React from "react";

const EducationSection = () => {
  const educationItems = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Teerthanker Mahaveer University",
      location: "Moradabad, India",
      period: "22/08/2023 – 30/06/2024",
      description: "Field of Study: Computer Science",
      grade: "Final Grade: 8.74/10",
      website: "https://www.tmu.ac.in/"
    },
    {
      degree: "Senior School Certificate",
      institution: "Central Board of Secondary Education",
      location: "India",
      period: "01/04/2022 – 01/03/2023",
      description: "Field of Study: Physics, Chemistry, Mathematics, Information Technology, Physical Education",
      grade: "Final Grade: 62.8%"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Central Board of Secondary Education",
      location: "India",
      period: "01/03/2021 – 14/07/2022",
      description: "Field of Study: Mathematics Standard, Science, Social Science, English, Information Technology",
      grade: "Final Grade: 60.2%"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-tr from-blue/5 via-purple/5 to-pink/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-blue to-purple pb-2">Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue to-purple rounded-full mx-auto mt-2"></div>
        </div>
        
        <div className="education-timeline relative pl-8 space-y-12 before:absolute before:inset-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue before:via-purple before:to-pink before:left-4 lg:pl-0 max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <div key={index} className="relative timeline-item pl-8 lg:pl-0">
              <div className="lg:grid lg:grid-cols-10 items-start">
                <div className="lg:col-span-3 mb-4 lg:mb-0 lg:text-right lg:pr-8">
                  <span className="text-sm text-gray-500 block">{item.period}</span>
                  <span className="font-semibold text-purple block mt-1">{item.institution}</span>
                  <span className="text-sm text-gray-600">{item.location}</span>
                </div>
                
                <div className="lg:col-span-7 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-semibold mb-2 font-poppins text-gray-800">{item.degree}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-gray-700 font-medium mb-2">{item.grade}</p>
                  
                  {item.website && (
                    <a 
                      href={item.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-purple hover:underline text-sm"
                    >
                      <span>Visit Institution Website</span>
                      <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;