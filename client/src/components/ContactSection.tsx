import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '5fa75b1d-6680-45d0-962b-32e1f7714798',
          subject: 'New message from your portfolio website',
          from_name: 'Vaibhav Portfolio Website',
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error sending message",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Network error. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple/10 via-pink/10 to-blue/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-poppins gradient-text from-orange to-purple pb-2">Get In Touch</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange to-purple rounded-full mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="glass-card rounded-xl overflow-hidden shadow-lg p-8 bg-white">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-gray-800">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple to-pink flex items-center justify-center text-white">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">Uttar Pradesh, 246762, Nagina, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink to-blue flex items-center justify-center text-white">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600 hover:text-purple transition">
                    <a href="mailto:contact@example.com">contact@example.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue to-green flex items-center justify-center text-white">
                  <i className="fas fa-globe"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Website</h4>
                  <p className="text-gray-600 hover:text-purple transition">
                    <a href="https://vaibhavvishwkarma.github.io/Vaibhav-Web/" target="_blank" rel="noopener noreferrer">vaibhavvishwkarma.github.io/Vaibhav-Web/</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-green to-orange flex items-center justify-center text-white">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">LinkedIn</h4>
                  <p className="text-gray-600 hover:text-purple transition">
                    <a href="https://www.linkedin.com/in/vaibhav-vishwkarma-b561a12a5/" target="_blank" rel="noopener noreferrer">vaibhav-vishwkarma-b561a12a5</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card rounded-xl overflow-hidden shadow-lg p-8 bg-white">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-gray-800">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-purple transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-purple transition"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-purple transition"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple to-pink text-white font-medium text-lg shadow-lg glow-btn flex justify-center items-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
