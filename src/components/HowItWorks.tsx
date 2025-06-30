
import { Search, GitCompare, Calendar, Truck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Open the Go Bright app and instantly see verified local laundries around you with ratings and reviews.",
    image: "/lovable-uploads/4bb1bdae-d248-4318-9bb8-44efe0896e8f.png"
  },
  {
    icon: GitCompare,
    title: "Compare",
    description: "Browse services, compare prices, check availability, and read customer reviews to make the best choice.",
    image: "/lovable-uploads/79ed7d65-f407-494f-9ae4-27e5b98d6b62.png"
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Book your preferred service, choose pickup and delivery time slots that work for your schedule.",
    image: "/lovable-uploads/c7c26eba-0159-40a7-a3cc-b6abf5129b29.png"
  },
  {
    icon: Truck,
    title: "Relax",
    description: "Track your order in real-time and enjoy fresh, clean clothes delivered right to your doorstep.",
    image: "/lovable-uploads/49850195-bd49-4fba-bdc4-65a3cb67bb44.png"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">How Go Bright Works</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your Gateway to Trusted Local Laundries - Making laundry as easy as ordering food
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-600 dark:bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>
              
              <img 
                src={step.image} 
                alt={step.title} 
                className="w-32 h-32 mx-auto mb-4 object-contain rounded-lg"
              />
              
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
            </motion.div>
          ))}
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
