
import { ArrowRight, Linkedin, Instagram, Twitter, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import optimizedLogo from '@/assets/gobright-logo-optimized.png';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "GoBright Subscriber",
        from_email: email,
        message: `New subscription request from GoBright website.`,
        to_name: 'GoBright Team',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to GoBright updates.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={optimizedLogo} 
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
            <ul className="space-y-3 mb-6">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wash & Fold</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dry Cleaning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ironing Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shoe Cleaning</a></li>
            </ul>
            
            <h4 className="text-sm font-bold mb-2 text-white">Stay Updated</h4>
            <form className="space-y-2" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 text-white placeholder-gray-400 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-3 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </>
                )}
              </button>
            </form>
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
