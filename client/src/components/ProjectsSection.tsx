import { useState, useEffect } from "react";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  
  const projects = [
    {
      title: "AI-Powered Portfolio Generator",
      description: "A Next.js application that leverages AI to generate personalized portfolio websites based on user inputs.",
      image: "/project1.jpg",
      tags: ["TypeScript", "Next.js", "GPT-4 API", "Tailwind CSS"],
      github: "https://github.com/vaibhav-vishwakrma/ai-portfolio",
      demo: "https://ai-portfolio-demo.vercel.app/"
    },
    {
      title: "Machine Learning Stock Predictor",
      description: "A Python application using machine learning algorithms to predict stock market trends and provide investment insights.",
      image: "/project2.jpg",
      tags: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
      github: "https://github.com/vaibhav-vishwakrma/ml-stocks",
      demo: "https://ml-stocks-demo.herokuapp.com/"
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "A React-based dashboard for monitoring and controlling smart home devices with real-time data visualization.",
      image: "/project3.jpg",
      tags: ["React", "Node.js", "Socket.io", "Chart.js"],
      github: "https://github.com/vaibhav-vishwakrma/smart-home-dashboard",
      demo: "https://smart-home-dashboard.netlify.app/"
    },
    {
      title: "E-Learning Platform",
      description: "A full-stack application for online education with features like video lectures, quizzes, and progress tracking.",
      image: "/project4.jpg",
      tags: ["MERN Stack", "Redux", "AWS S3", "Firebase"],
      github: "https://github.com/vaibhav-vishwakrma/e-learning-platform",
      demo: "https://learn-online-platform.vercel.app/"
    },
    {
      title: "Blockchain Voting System",
      description: "A decentralized application for secure and transparent voting using Ethereum blockchain technology.",
      image: "/project5.jpg",
      tags: ["Solidity", "Ethereum", "Web3.js", "React"],
      github: "https://github.com/vaibhav-vishwakrma/blockchain-voting",
      demo: "https://blockchain-voting.netlify.app/"
    },
    {
      title: "AR Shopping Experience",
      description: "A mobile application that uses augmented reality to enhance the online shopping experience.",
      image: "/project6.jpg",
      tags: ["React Native", "ARKit", "ARCore", "Firebase"],
      github: "https://github.com/vaibhav-vishwakrma/ar-shopping",
      demo: "https://ar-shopping-demo.vercel.app/"
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