
import { Users, Building, Smartphone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Users,
    title: "For Customers",
    subtitle: "Easy. Quick. Reliable.",
    points: [
      "Find verified local laundries instantly",
      "Compare prices and services in one place",
      "Real-time order tracking",
      "Doorstep pickup and delivery",
      "Secure payment options"
    ],
    color: "teal"
  },
  {
    icon: Building,
    title: "For Laundry Shops",
    subtitle: "Grow Your Business with GoBright",
    points: [
      "Connect with customers in your area",
      "Showcase your services and pricing",
      "End-to-end assistance with clear, timely payments",
      "Consistent flow of pickup and delivery orders to keep your business moving",
      "Focus on your service—we handle the tech and marketing to fuel your growth"
    ],
    color: "blue"
  }
];

const LaundryBenefits = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Built for Everyone</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            GoBright brings value to both customers seeking convenience and laundry businesses looking to grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${
                benefit.color === 'teal' 
                  ? 'from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30' 
                  : 'from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30'
              } p-8 rounded-xl shadow-sm border ${
                benefit.color === 'teal'
                  ? 'border-teal-200 dark:border-teal-700'
                  : 'border-blue-200 dark:border-blue-700'
              } hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-16 h-16 ${
                benefit.color === 'teal' 
                  ? 'bg-teal-100 dark:bg-teal-900' 
                  : 'bg-blue-100 dark:bg-blue-900'
              } rounded-xl flex items-center justify-center mb-6`}>
                <benefit.icon className={`w-8 h-8 ${
                  benefit.color === 'teal' 
                    ? 'text-teal-600 dark:text-teal-400' 
                    : 'text-blue-600 dark:text-blue-400'
                }`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
              <p className={`font-medium mb-6 ${
                benefit.color === 'teal' 
                  ? 'text-teal-700 dark:text-teal-300' 
                  : 'text-blue-700 dark:text-blue-300'
              }`}>
                {benefit.subtitle}
              </p>
              
              <ul className="space-y-3">
                {benefit.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <CheckCircle className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${
                      benefit.color === 'teal' 
                        ? 'text-teal-600 dark:text-teal-400' 
                        : 'text-blue-600 dark:text-blue-400'
                    }`} />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-700 dark:to-blue-700 text-white p-10 rounded-2xl text-center shadow-lg max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Laundry Experience?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of satisfied customers and partner laundries who have made the smart choice with GoBright.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md">
              Download for Customers
            </button>
            <button className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-400 transition-colors shadow-md">
              Partner with Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaundryBenefits;
