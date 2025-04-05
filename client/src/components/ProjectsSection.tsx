import { useState, useEffect } from "react";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  
  const projects = [
    {
      title: "Weather Forecast App",
      description: "A responsive web application that shows current weather and 5-day forecast using the OpenWeatherMap API.",
      image: "./images/project1.jpg",
      tags: ["JavaScript", "React", "CSS", "API Integration"],
      github: "https://github.com/vaibhav-vishwkarma/weather-app",
      demo: "https://weather-forecast-vv.netlify.app/"
    },
    {
      title: "Task Manager Dashboard",
      description: "A task management application with drag-and-drop functionality, priority setting, and deadline reminders.",
      image: "./images/project2.jpg",
      tags: ["React", "CSS", "LocalStorage", "React DnD"],
      github: "https://github.com/vaibhav-vishwkarma/task-manager",
      demo: "https://task-manager-vv.netlify.app/"
    },
    {
      title: "Personal Blog Platform",
      description: "A simple blog platform where users can create, edit, and publish articles with a clean, responsive interface.",
      image: "./images/project3.jpg",
      tags: ["JavaScript", "React", "CSS", "Markdown"],
      github: "https://github.com/vaibhav-vishwkarma/blog-platform",
      demo: "https://blog-platform-vv.netlify.app/"
    },
    {
      title: "Recipe Finder",
      description: "An application that allows users to search for recipes based on ingredients they have available.",
      image: "./images/project4.jpg",
      tags: ["JavaScript", "React", "Food API", "CSS"],
      github: "https://github.com/vaibhav-vishwkarma/recipe-finder",
      demo: "https://recipe-finder-vv.netlify.app/"
    },
    {
      title: "Movie Recommendation System",
      description: "A web app that recommends movies based on user preferences and previous viewing history.",
      image: "./images/project5.jpg",
      tags: ["Python", "React", "TMDB API", "CSS Grid"],
      github: "https://github.com/vaibhav-vishwkarma/movie-recommender",
      demo: "https://movie-recommender-vv.netlify.app/"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="h-48 bg-gradient-to-r from-purple/20 to-blue/20 flex items-center justify-center">
                <div className="text-4xl bg-white p-3 rounded-full">
                  <i className="fas fa-laptop-code text-purple"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs font-medium rounded-full bg-purple/10 text-purple">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm text-purple hover:underline"
                  >
                    <i className="fab fa-github mr-2"></i> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm text-blue hover:underline"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i> Live Demo
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