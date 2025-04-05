import { useState, useEffect } from "react";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  
  const projects = [
    {
      title: "Customer Sales Insight Dashboard",
      description: "Developed a Tableau-based sales analytics dashboard analyzing 2.9M INR transaction data. Identified top spenders (25-34 age group), regional performance (Maharashtra as highest-grossing), and payment preferences (61% UPI adoption).",
      image: "./images/project1.jpg",
      tags: ["Tableau", "Data Analysis", "Dashboard", "Sales Analytics"],
      github: "https://github.com/vaibhavVishwkarma/Customer-Sales-Insight-Analysis",
      demo: "https://github.com/vaibhavVishwkarma/Customer-Sales-Insight-Analysis"
    },
    {
      title: "Nike Store E-Commerce Website",
      description: "Built an immersive sneaker storefront with manual slider, product customization, and responsive payment form. Features adaptive design and brand-specific aesthetics.",
      image: "./images/project2.jpg",
      tags: ["React", "CSS", "E-Commerce", "UI/UX"],
      github: "https://github.com/vaibhavVishwkarma/Shoes-Store-",
      demo: "https://github.com/vaibhavVishwkarma/Shoes-Store-"
    },
    {
      title: "Real-Time Weather Application",
      description: "Live weather monitoring system using OpenWeatherMap API, displaying temperature, humidity, wind patterns, and dynamic background adjustments based on weather conditions.",
      image: "./images/project3.jpg",
      tags: ["JavaScript", "API Integration", "Weather Data", "React"],
      github: "https://github.com/vaibhavVishwkarma/Real-Time-Weather-App",
      demo: "https://github.com/vaibhavVishwkarma/Real-Time-Weather-App"
    }
  ];

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCount(showAll ? projects.length : 4);
      } else if (width >= 768) {
        setVisibleCount(showAll ? projects.length : 3);
      } else {
        setVisibleCount(showAll ? projects.length : 2);
      }
    };

    handleResize(); // Initial setup
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showAll, projects.length]);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = projects.length > visibleCount;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-tr from-purple/5 via-pink/5 to-blue/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-purple to-pink pb-2">Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple to-pink rounded-full mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Showcase of my latest work across various technologies and domains.</p>
        </div>
        
        <div className="projects-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProjects.map((project, index) => (
            <div key={index} className="project-card rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="h-40 bg-gradient-to-r from-purple/20 to-blue/20 flex items-center justify-center">
                <div className="text-3xl bg-white p-3 rounded-full">
                  <i className="fas fa-laptop-code text-purple"></i>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-poppins font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-sm flex-grow">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs font-medium rounded-full bg-purple/10 text-purple">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-xs text-purple hover:underline"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {(hasMoreProjects || showAll) && (
          <div className="text-center mt-12">
            <button
              onClick={toggleShowAll}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple to-pink text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 glow-btn"
            >
              {showAll ? (
                <>
                  <i className="fas fa-chevron-up mr-2"></i>
                  Show Less
                </>
              ) : (
                <>
                  <i className="fas fa-chevron-down mr-2"></i>
                  Show More
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;