import { useState, useEffect } from "react";

const CertificationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const certifications = [
    {
      title: "Front-End Developer Professional Certificate",
      organization: "Meta",
      icon: "fab fa-react",
      gradient: "from-purple to-pink",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/PUOLRPVAML3A"
    },
    {
      title: "Python for Data Science, AI & Development",
      organization: "IBM",
      icon: "fab fa-python",
      gradient: "from-blue to-purple",
      link: "https://www.coursera.org/account/accomplishments/verify/UPSNDHSSAN5A"
    },
    {
      title: "Machine Learning with Python",
      organization: "IBM",
      icon: "fas fa-brain",
      gradient: "from-pink to-orange",
      link: "https://www.coursera.org/account/accomplishments/verify/7W3RP5EOZ7VH"
    },
    {
      title: "AWS Cloud Technical Essentials",
      organization: "Amazon Web Services",
      icon: "fab fa-aws",
      gradient: "from-orange to-yellow",
      link: "https://www.coursera.org/account/accomplishments/verify/T6AORU0M0LNZ"
    },
    {
      title: "Introduction to Data Analytics",
      organization: "IBM",
      icon: "fas fa-chart-bar",
      gradient: "from-green to-blue",
      link: "https://www.coursera.org/account/accomplishments/verify/Y9G5QQG6DR5Z"
    },
    {
      title: "C Programming",
      organization: "Infosys Springboard",
      icon: "fas fa-code",
      gradient: "from-purple to-blue",
      link: "https://drive.google.com/file/d/1b5Y267iczKKzRN8uZ5z2xMfjJf_U-86F/view?usp=sharing"
    }
  ];

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCount(showAll ? certifications.length : 3);
      } else if (width >= 768) {
        setVisibleCount(showAll ? certifications.length : 2);
      } else {
        setVisibleCount(showAll ? certifications.length : 1);
      }
    };

    handleResize(); // Initial setup
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showAll, certifications.length]);

  const visibleCertifications = certifications.slice(0, visibleCount);
  const hasMoreCertifications = certifications.length > visibleCount;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue/5 via-purple/5 to-pink/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-blue to-purple pb-2">Certifications</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue to-purple rounded-full mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCertifications.map((cert, index) => (
            <div key={index} className="card rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
              <div className={`h-24 bg-gradient-to-r ${cert.gradient} flex items-center justify-center`}>
                <i className={`${cert.icon} text-white text-4xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-poppins font-semibold mb-3 text-gray-800">{cert.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{cert.organization}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-purple hover:underline">
                  <span>View Certificate</span>
                  <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {(hasMoreCertifications || showAll) && (
          <div className="text-center mt-12">
            <button
              onClick={toggleShowAll}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue to-purple text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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

export default CertificationsSection;