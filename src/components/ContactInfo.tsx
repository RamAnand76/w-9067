
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black dark:from-gray-900 dark:to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Contact Us Today
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about Go Bright laundry services? Reach out to our team and let's discuss how we can help make your laundry experience seamless.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:rinojoseph023@gmail.com" 
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Send us an Email
          </a>
          
          <a 
            href="https://wa.me/917034593260?text=Hello%20from%20Go%20Bright%20website!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
