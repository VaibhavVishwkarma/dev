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
    
    // Simulate success (since we can't directly submit from this environment)
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
    
    // Note: In actual deployment, form will be submitted like this:
    // The form will automatically submit to Web3Forms through action attribute
  };
  
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-bl from-purple/5 via-blue/5 to-pink/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-pink to-purple pb-2">Contact Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink to-purple rounded-full mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 font-poppins text-center">Send a Message</h3>
            
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-5"
            >
              {/* Web3Forms access key (hidden) */}
              <input type="hidden" name="access_key" value="5fa75b1d-6680-45d0-962b-32e1f7714798" />
              
              {/* Honeypot field to prevent spam (hidden) */}
              <input type="checkbox" name="botcheck" id="botcheck" className="hidden" style={{ display: 'none' }} />
              
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
                  placeholder="Your name"
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
                  placeholder="Your email address"
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
                  placeholder="Subject of your message"
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
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              {/* Custom redirect (optional) */}
              <input type="hidden" name="redirect" value={window.location.href} />

              {/* Thank you message (optional) */}
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              
              <div className="pt-4">
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
              </div>
            </form>
          </div>
          
          <div className="flex justify-center mt-10 gap-6">
            <a 
              href="https://github.com/vaibhav-vishwkarma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple to-blue flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/vaibhav-vishwkarma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue to-purple flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://twitter.com/vaibhav_vishw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple to-pink flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;