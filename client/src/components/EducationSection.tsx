import React from "react";

const EducationSection = () => {
  const educationItems = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      location: "Delhi, India",
      period: "2020 - 2024",
      description: "Specializing in Artificial Intelligence and Machine Learning with coursework in Data Structures, Algorithms, Database Systems, and Software Engineering. Maintained a 9.2 CGPA throughout the program.",
      achievements: [
        "Member of the College Coding Club, organizing workshops and hackathons",
        "Runner-up in the National Algorithm Design Contest",
        "Published a research paper on Efficient Neural Network Architectures"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Delhi Public School",
      location: "Uttar Pradesh, India",
      period: "2018 - 2020",
      description: "Completed with a focus on Mathematics, Physics, and Computer Science. Achieved 95% in final examinations.",
      achievements: [
        "School topper in Computer Science",
        "Led the school's programming team to regional championship",
        "Developed an attendance management system for the school"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-tr from-blue/5 via-purple/5 to-pink/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-blue to-purple pb-2">Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue to-purple rounded-full mx-auto mt-2"></div>
        </div>
        
        <div className="relative pl-8 space-y-12 before:absolute before:inset-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue before:via-purple before:to-pink before:left-4 lg:pl-0 max-w-3xl mx-auto">
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
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <h4 className="font-semibold text-sm mb-2 text-purple">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
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