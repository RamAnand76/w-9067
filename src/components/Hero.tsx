
import { ArrowRight, Smartphone, MapPin, Clock } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

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
  
  const scooterVariants = {
    hidden: {
      x: '100vw',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.5,
        duration: 1.5
      }
    }
  }

  const smokeVariants = {
    hidden: { opacity: 0, scale: 0.5, x: 0 },
    visible: (i: number) => ({
      opacity: [0, 0.1, 0],
      scale: [0.5, 1, 1.2],
      x: [0, 10, 20],
      transition: {
        delay: i * 0.3 + 1, // Stagger the animation of each puff
        duration: 4,
        repeat: Infinity,
        ease: "easeOut",
      },
    }),
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
  
  const whatsappUrl = "https://wa.me/919656536327?text=Hi%20there!%20I%20want%20to%20inquire%20about%20your%20services";
  
  return <motion.div className="relative w-full mb-8 pt-0 md:pt-0" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-700 dark:to-teal-800 relative overflow-hidden h-[100vh] sm:h-[100vh] md:h-[800px] w-full">
        <div className="absolute inset-0 w-full">
          <img src="/lovable-uploads/dd0df14a-65e7-44ab-8336-14ccc99d1c98.png" alt="Laundry transformation process" className={`w-full h-full object-cover opacity-20 ${isMobile ? 'object-center' : 'object-center'}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-600/90 via-teal-600/80 to-white dark:to-gray-900"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-0 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-10 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center transform -translate-y-8 md:-translate-y-2" variants={itemVariants}>
              <motion.div className="mt-4 mb-6 relative flex justify-center items-center" variants={itemVariants}>
                <img src="/lovable-uploads/go-bright-Header-logo.png" alt="GoBright Logo" className="w-auto h-auto max-h-52 sm:max-h-72 drop-shadow-lg" />
                 <motion.div 
                  className="hidden md:block absolute right-[-3rem] top-[35%] -translate-y-1/2"
                  variants={scooterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="relative">
                    <img src="/lovable-uploads/Bright-Deliver.png" alt="Scooter" className="h-32 w-auto relative z-10" />
                    {/* Smoke Animation */}
                    <div className="absolute top-2/3 right-3 -translate-y-1/2">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          custom={i}
                          variants={smokeVariants}
                          className="w-3 h-3 bg-gray-300 rounded-full absolute"
                          style={{
                            bottom: `${i * 3}px`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.h1 className="text-white text-3xl md:text-4xl font-bold mb-4 capitalize" variants={itemVariants}>revolutionizing the laundry industry with a smart, connected platform</motion.h1>
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
                
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all shadow-lg hover:shadow-xl hover:shadow-green-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                >
                  Request a Service
                  <FaWhatsapp className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </a>

                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Download App
                  <Smartphone className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4" 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 flex items-center justify-center rounded-lg text-teal-600 dark:text-teal-400 mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Find Nearby</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Discover verified local laundries around you with real-time availability.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 flex items-center justify-center rounded-lg text-teal-600 dark:text-teal-400 mb-3">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">One-Click Booking</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Compare services, prices, and book pickup & delivery in just one click.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 flex items-center justify-center rounded-lg text-teal-600 dark:text-teal-400 mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Track & Deliver</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Real-time tracking with guaranteed doorstep delivery at your convenience.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;

    