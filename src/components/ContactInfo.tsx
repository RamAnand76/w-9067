
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rino Joseph's Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/ade7d3dd-cb04-4d46-a9ca-ee03fa8a3d8f.png"
                alt="Rino Joseph"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Rino Joseph</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Co-Founder</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:rinojoseph023@gmail.com" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">
                  <Mail className="w-5 h-5 mr-2" />
                  rinojoseph023@gmail.com
                </a>
                <a href="tel:+917034593260" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 7034593260
                </a>
              </div>
            </div>
          </div>

          {/* Anandhu's Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/a9fc2358-8710-4ef0-a69d-10e0ad634d7d.png"
                alt="Anandhu"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Anandhu</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Co-Founder</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:ananduma1999m@gmail.com" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">
                  <Mail className="w-5 h-5 mr-2" />
                  ananduma1999m@gmail.com
                </a>
                <a href="tel:+919847437892" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 98474 37892
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
