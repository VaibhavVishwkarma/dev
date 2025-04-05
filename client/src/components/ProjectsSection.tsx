import { useState, useEffect } from "react";

interface ProjectItem {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  github: string;
}

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const projects: ProjectItem[] = [
    {
      title: "Customer Sales Insight Dashboard",
      description: "Developed a Tableau-based sales analytics dashboard analyzing 2.9M INR transaction data. Identified top spenders (25-34 age group), regional performance (Maharashtra as highest-grossing), and payment preferences (61% UPI adoption).",
      icon: "chart-pie",
      tags: ["Tableau", "Data Analysis", "Dashboard", "Sales Analytics"],
      github: "https://github.com/vaibhavVishwkarma/Customer-Sales-Insight-Analysis"
    },
    {
      title: "Nike Store E-Commerce Website",
      description: "Built an immersive sneaker storefront with manual slider, product customization, and responsive payment form. Features adaptive design and brand-specific aesthetics.",
      icon: "shopping-cart",
      tags: ["React", "CSS", "E-Commerce", "UI/UX"],
      github: "https://github.com/vaibhavVishwkarma/Shoes-Store-"
    },
    {
      title: "Real-Time Weather Application",
      description: "Live weather monitoring system using OpenWeatherMap API, displaying temperature, humidity, wind patterns, and dynamic background adjustments based on weather conditions.",
      icon: "cloud-sun",
      tags: ["JavaScript", "API Integration", "Weather Data", "React"],
      github: "https://github.com/vaibhavVishwkarma/Real-Time-Weather-App"
    }
  ];

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCount(showAll ? projects.length : 3);
      } else if (width >= 768) {
        setVisibleCount(showAll ? projects.length : 2);
      } else {
        setVisibleCount(showAll ? projects.length : 1);
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

  // Icon map for project types
  const getIconClass = (icon: string): string => {
    return `fas fa-${icon}`;
  };

  // Background gradient map for project types
  const getGradient = (index: number): string => {
    const gradients = [
      "from-purple/20 to-pink/20",
      "from-blue/20 to-purple/20",
      "from-pink/20 to-blue/20"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-tr from-purple/5 via-pink/5 to-blue/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-purple to-pink pb-2">Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple to-pink rounded-full mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Showcase of my latest work across various technologies and domains.</p>
        </div>
        
        <div className="projects-grid grid gap-8">
          {visibleProjects.map((project, index) => (
            <div key={index} className="project-card rounded-xl overflow-hidden shadow-lg bg-white transform transition-all duration-300">
              <div className={`h-48 bg-gradient-to-r ${getGradient(index)} flex items-center justify-center`}>
                <div className="card-icon text-3xl bg-white p-4 rounded-full shadow-md">
                  <i className={`${getIconClass(project.icon)} text-purple`}></i>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-poppins font-semibold mb-3 gradient-text from-purple to-pink">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 text-xs font-medium rounded-full bg-purple/10 text-purple">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto pt-3 border-t border-gray-100">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm text-purple hover:text-pink transition-colors"
                  >
                    <i className="fab fa-github mr-2"></i> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {(hasMoreProjects || showAll) && (
          <div className="text-center mt-10">
            <button
              onClick={toggleShowAll}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple to-pink text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 glow-btn"
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