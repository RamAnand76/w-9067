
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
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Go Bright?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Say goodbye to laundry struggles and endless searching. Go Bright brings every laundry service near you into one easy-to-use app.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 max-w-4xl mx-auto"
          >
            <img 
              src="/lovable-uploads/4bb1bdae-d248-4318-9bb8-44efe0896e8f.png" 
              alt="Nearby Laundries" 
              className="w-64 h-64 mx-auto mb-6 object-contain"
            />
            <h3 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">Discover Nearby Laundries</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Find trusted local laundries around you with just a tap. Compare services, read reviews, and choose the best option for your needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LaundryFeatures;
