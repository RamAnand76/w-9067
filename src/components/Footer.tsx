
import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Contact us today section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Whether you're curious about our services, want to partner with us, or just need assistance with your order, our team is ready to support you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10 border-b border-gray-700">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/30bf33c6-dc07-43fa-9afc-3e6d25a3f723.png" 
                alt="GoBright Logo" 
                className="h-12 w-12 mr-3"
              />
              <h2 className="text-2xl font-bold text-white">GoBright</h2>
            </div>
            <p className="text-gray-300 mb-6">
              GoBright - Your Smart Way to Laundry. Making laundry as easy as ordering food.
            </p>
            <div className="text-gray-300 mb-6">
              <p className="font-semibold text-white mb-2">GoBright Solutions Private Limited</p>
              <p>CC 54, 2593-5, Bose Nagar, Kadavanthra,</p>
              <p>Kochi, Kerala - 682020</p>
              <p className="mt-2">gobright.co.in@gmail.com</p>
              <p>+91 9496763260</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-teal-600 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-teal-600 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-teal-600 hover:text-white"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wash & Fold</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dry Cleaning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ironing Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shoe Cleaning</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GoBright. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
