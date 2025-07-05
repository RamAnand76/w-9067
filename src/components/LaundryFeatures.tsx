
import { motion } from "framer-motion";
import { MapPin, Clock, Shield, Star, Users, Smartphone } from "lucide-react";

const LaundryFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: MapPin,
      title: "Nearby Laundries",
      description: "Find trusted local laundries near you with real-time availability and ratings",
      image: "/lovable-uploads/6044e04e-8013-4bb9-82b8-b5b1739bb7a5.png",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Express services available with same-day pickup and next-day delivery options",
      image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Professional cleaning with quality assurance and damage protection coverage",
      image: "/lovable-uploads/4bb1bdae-d248-4318-9bb8-44efe0896e8f.png",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      icon: Star,
      title: "Premium Services",
      description: "Specialized cleaning for delicate fabrics, dry cleaning, and premium care options",
      image: "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
    },
    {
      icon: Users,
      title: "Verified Partners",
      description: "All laundry partners are verified, insured, and regularly quality-checked for your peace of mind",
      image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png",
      color: "text-teal-600",
      bgColor: "bg-teal-100 dark:bg-teal-900/30"
    },
    {
      icon: Smartphone,
      title: "Smart Scheduling",
      description: "Flexible pickup and delivery slots that fit your busy schedule with smart reminders",
      image: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900/30"
    }
  ];

  const services = [
    "Wash & Fold",
    "Dry Cleaning", 
    "Ironing Service",
    "Shoe Cleaning",
    "Carpet Cleaning",
    "Bag Cleaning",
    "Steam Press",
    "Starching"
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Go Bright?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of laundry with our comprehensive platform that connects you to trusted local services
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Our Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-gray-900 dark:text-white font-medium text-sm md:text-base">
                  {service}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaundryFeatures;
