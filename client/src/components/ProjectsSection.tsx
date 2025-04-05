const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Sales Insight Dashboard",
      description: "Developed a Tableau-based sales analytics dashboard analyzing 2.9M INR transaction data. Identified top spenders (25-34 age group), regional performance (Maharashtra as highest-grossing), and payment preferences (61% UPI adoption).",
      gradient: "from-blue to-purple",
      tags: [
        { text: "Tableau", color: "bg-blue-100 text-blue" },
        { text: "Data Analysis", color: "bg-green-100 text-green" },
        { text: "Visualization", color: "bg-purple-100 text-purple" }
      ],
      link: "https://github.com/vaibhavVishwkarma/Customer-Sales-Insight-Analysis"
    },
    {
      title: "Nike Store E-Commerce Website",
      description: "Built an immersive sneaker storefront with manual slider, product customization, and responsive payment form. Features adaptive design and brand-specific aesthetics.",
      gradient: "from-purple to-pink",
      tags: [
        { text: "HTML/CSS", color: "bg-blue-100 text-blue" },
        { text: "JavaScript", color: "bg-yellow-100 text-orange" },
        { text: "Responsive Design", color: "bg-purple-100 text-purple" }
      ],
      link: "https://github.com/vaibhavVishwkarma/Shoes-Store-"
    },
    {
      title: "Real-Time Weather Application",
      description: "Live weather monitoring system using OpenWeatherMap API, displaying temperature, humidity, wind patterns, and dynamic background adjustments.",
      gradient: "from-green to-blue",
      tags: [
        { text: "API Integration", color: "bg-blue-100 text-blue" },
        { text: "JavaScript", color: "bg-yellow-100 text-orange" },
        { text: "Real-time Data", color: "bg-green-100 text-green" }
      ],
      link: "https://github.com/vaibhavVishwkarma/Weather-Web-App"
    },
    {
      title: "Quick QR Code Generator",
      description: "Lightweight web tool for generating QR codes from text or URLs with a minimalist interface.",
      gradient: "from-orange to-yellow",
      tags: [
        { text: "HTML/CSS", color: "bg-blue-100 text-blue" },
        { text: "JavaScript", color: "bg-yellow-100 text-orange" },
        { text: "QR API", color: "bg-gray-100 text-gray-700" }
      ],
      link: "https://github.com/vaibhavVishwkarma/QR-CODE-GENERATOR-"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-pink to-orange pb-2">Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink to-orange rounded-full mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-xl font-poppins font-semibold p-4 text-white">{project.title}</h3>
                </div>
                <i className="fas fa-laptop-code text-white text-6xl opacity-20 z-10"></i>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`px-3 py-1 rounded-full text-xs ${tag.color}`}>{tag.text}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" 
                  className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium glow-btn`}>
                  <i className="fab fa-github mr-2"></i>
                  <span>View Project</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
