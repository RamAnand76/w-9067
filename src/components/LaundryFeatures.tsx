
import { CheckCircle, Shield, Clock, Star, MapPin, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: MapPin,
    title: "Find Local Laundries",
    description: "Instantly discover verified laundry services near you with detailed profiles, ratings, and real-time availability."
  },
  {
    icon: CreditCard,
    title: "Compare & Save",
    description: "Compare prices, services, and delivery times across multiple laundries to find the best deal for your needs."
  },
  {
    icon: Shield,
    title: "Trusted & Verified",
    description: "All laundry partners are thoroughly verified for quality assurance and customer safety."
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description: "Track your laundry order from pickup to delivery with live status updates and notifications."
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "Premium cleaning services with satisfaction guarantee and customer review system."
  },
  {
    icon: CheckCircle,
    title: "Doorstep Service",
    description: "Convenient pickup and delivery at your doorstep with flexible scheduling options."
  }
];

const LaundryFeatures = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Go Bright?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Say goodbye to laundry struggles and endless searching. Go Bright brings every laundry service near you into one easy-to-use app.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-10 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-600 max-w-4xl mx-auto"
          >
            <img 
              src="/lovable-uploads/7c4a98c7-4e64-4a11-9910-457955260571.png" 
              alt="Nearby Laundries" 
              className="w-72 h-72 mx-auto mb-8 object-contain"
            />
            <h3 className="text-3xl font-bold mb-6 text-teal-600 dark:text-teal-400">Discover Nearby Laundries</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Find trusted local laundries around you with just a tap. Compare services, read reviews, and choose the best option for your needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LaundryFeatures;
