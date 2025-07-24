
import { ArrowRight, Smartphone, MapPin, Clock, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative mt-16 md:mt-0 w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-700 dark:to-teal-800 relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[750px] w-full">
        <div className="absolute inset-0 w-full">
          <img src="/lovable-uploads/dd0df14a-65e7-44ab-8336-14ccc99d1c98.png" alt="Laundry transformation process" className={`w-full h-full object-cover opacity-20 ${isMobile ? 'object-center' : 'object-center'}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-600/90 via-teal-600/80 to-white dark:to-gray-900"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-16 sm:pt-20 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.div className="mb-6" variants={itemVariants}>
                <img src="/lovable-uploads/30bf33c6-dc07-43fa-9afc-3e6d25a3f723.png" alt="GoBright Logo" className="h-20 w-20 sm:h-24 sm:w-24 mx-auto mb-4" />
              </motion.div>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>Brighten Your Day with Clean Clothes — Delivered to Your Doorstep</motion.h1>
              <motion.p className="banner-subtitle text-white/90 mt-4 sm:mt-6" variants={itemVariants}>
                GoBright - Your Smart Way to Laundry
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-white text-teal-700 rounded-md hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:shadow-white/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={e => {
                    e.preventDefault();
                    const howItWorksSection = document.getElementById('how-it-works');
                    if (howItWorksSection) {
                      howItWorksSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  How It Works
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-teal-800 text-white rounded-md hover:bg-teal-900 transition-all shadow-lg hover:shadow-xl hover:shadow-teal-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Download for Android
                  <Smartphone className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>

                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Download for iOS
                  <Smartphone className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 dark:bg-teal-900 flex items-center justify-center rounded-lg text-teal-600 dark:text-teal-400 mb-2 md:mb-3">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800 dark:text-gray-200">Find Nearby</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Discover verified local laundries around you with real-time availability.</p>
          </motion.div>
          
          <motion.div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 dark:bg-teal-900 flex items-center justify-center rounded-lg text-teal-600 dark:text-teal-400 mb-2 md:mb-3">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800 dark:text-gray-200">One-Click Booking</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Compare services, prices, and book pickup & delivery in just one click.</p>
          </motion.div>
          
          <motion.div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 dark:bg-teal-900 flex items-center justify-center rounded-lg text-teal-600 dark:text-teal-400 mb-2 md:mb-3">
              <Clock className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800 dark:text-gray-200">Track & Deliver</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Real-time tracking with guaranteed doorstep delivery at your convenience.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
