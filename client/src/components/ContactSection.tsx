import React, { useState } from "react";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [isError, setIsError] = useState(false); // State to track errors

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true); // Show success message
        setIsError(false); // Clear any previous error
        form.reset(); // Reset the form fields
      } else {
        setIsError(true); // Show error message
        setIsSubmitted(false); // Clear success state
        console.error("Form submission failed:", await response.text());
      }
    } catch (error) {
      setIsError(true); // Show error message
      setIsSubmitted(false); // Clear success state
      console.error("Error submitting the form:", error);
    }
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

            {/* Show success or error message */}
            {isSubmitted && (
              <div className="text-green-600 text-center mb-4">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {isError && (
              <div className="text-red-600 text-center mb-4">
                Oops! Something went wrong. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Web3Forms access key */}
              <input type="hidden" name="access_key" value="5fa75b1d-6680-45d0-962b-32e1f7714798" />

              {/* Honeypot field to prevent spam */}
              <input type="checkbox" name="botcheck" id="botcheck" className="hidden" style={{ display: "none" }} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple to-pink text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Send Message
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