import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-bl from-purple/5 via-blue/5 to-pink/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-pink to-purple pb-2">Contact Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink to-purple rounded-full mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <div className="glass-card p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 font-poppins">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple to-pink text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-card p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-xl font-semibold mb-6 font-poppins">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple to-blue text-white flex items-center justify-center mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Email</h4>
                    <a href="mailto:vaibhav.vishwkarma@example.com" className="text-purple hover:underline">
                      vaibhav.vishwkarma@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue to-purple text-white flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">
                      Delhi, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink to-purple text-white flex items-center justify-center mr-4">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Social Profiles</h4>
                    <div className="flex gap-4 mt-2">
                      <a 
                        href="https://github.com/vaibhav-vishwkarma" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-purple transition-colors text-xl"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/vaibhav-vishwkarma" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue transition-colors text-xl"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a 
                        href="https://twitter.com/vaibhav_vishw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#1DA1F2] transition-colors text-xl"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a 
                        href="https://www.instagram.com/vaibhav_vishwkarma" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#E1306C] transition-colors text-xl"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-gray-200">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Availability</h4>
                  <p className="text-gray-600">
                    I'm currently available for part-time remote work and freelance projects. Feel free to reach out for collaborations or inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;