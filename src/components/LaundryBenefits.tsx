
import { Users, TrendingUp, Shield, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Users,
    title: "For Customers",
    subtitle: "Hassle-Free Laundry Experience",
    features: [
      "Find reliable laundries nearby instantly",
      "Compare prices and service quality",
      "Doorstep pickup and delivery",
      "Real-time order tracking",
      "Flexible scheduling options"
    ]
  },
  {
    icon: TrendingUp,
    title: "For Laundry Shops",
    subtitle: "Grow Your Business Digitally",
    features: [
      "Get discovered by new customers",
      "Manage bookings and delivery efficiently",
      "Digital payment solutions",
      "Business analytics and insights",
      "Marketing and promotion tools"
    ]
  }
];

const LaundryBenefits = () => {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Empowering Everyone in the Laundry Ecosystem</h2>
          <p className="text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            Go Bright is on a mission to empower local laundry shops across India while making laundry effortless for customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 dark:bg-gray-900 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 dark:bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-teal-300 dark:text-teal-400">{benefit.subtitle}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 dark:bg-teal-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-teal-300 dark:text-teal-400">Join the Go Bright Revolution</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Be part of India's digital laundry transformation. Download the app or partner with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-teal-600 dark:bg-teal-500 text-white rounded-md hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors flex items-center justify-center">
                <Smartphone className="mr-2 w-5 h-5" />
                Download App
              </button>
              <button className="px-8 py-3 bg-transparent border border-teal-600 dark:border-teal-500 text-teal-300 dark:text-teal-400 rounded-md hover:bg-teal-600 dark:hover:bg-teal-500 hover:text-white transition-colors">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LaundryBenefits;
