
import { Search, GitCompare, Calendar, Truck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Open the Go Bright app and instantly see verified local laundries around you with ratings and reviews."
  },
  {
    icon: GitCompare,
    title: "Compare",
    description: "Browse services, compare prices, check availability, and read customer reviews to make the best choice."
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Book your preferred service, choose pickup and delivery time slots that work for your schedule."
  },
  {
    icon: Truck,
    title: "Relax",
    description: "Track your order in real-time and enjoy fresh, clean clothes delivered right to your doorstep."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">How Go Bright Works</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your Gateway to Trusted Local Laundries - Making laundry as easy as ordering food
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 dark:bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 max-w-4xl mx-auto"
          >
            <img 
              src="/lovable-uploads/c7c26eba-0159-40a7-a3cc-b6abf5129b29.png" 
              alt="Schedule Pickup" 
              className="w-64 h-64 mx-auto mb-6 object-contain"
            />
            <h3 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">Easy Scheduling</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Schedule your pickup and delivery with our flexible time slots. Track your order in real-time and get notified at every step.
            </p>
          </motion.div>
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-xl max-w-3xl mx-auto"
          >
            <h3 className="text-lg font-semibold mb-2 text-teal-800 dark:text-teal-300">Every Problem Has One Solution – Go Bright</h3>
            <p className="text-teal-700 dark:text-teal-400">
              Whether you're a busy professional, a student, or a laundry shop owner, Go Bright is built to make your life easier.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
