
import { Search, Compare, Calendar, Truck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Open the Go Bright app and instantly see verified local laundries around you with ratings and reviews."
  },
  {
    icon: Compare,
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
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">How Go Bright Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your Gateway to Trusted Local Laundries - Making laundry as easy as ordering food
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-teal-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-teal-50 p-6 rounded-xl max-w-3xl mx-auto"
          >
            <h3 className="text-lg font-semibold mb-2 text-teal-800">Every Problem Has One Solution – Go Bright</h3>
            <p className="text-teal-700">
              Whether you're a busy professional, a student, or a laundry shop owner, Go Bright is built to make your life easier.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
