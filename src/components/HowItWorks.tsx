
import { Search, GitCompare, Calendar, Truck, Phone } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundOverlayCard from "@/components/ui/background-overlay-card";
import { Button } from "./ui/button";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Open the GoBright app and instantly see verified local laundries around you with ratings and reviews.",
    image: "/lovable-uploads/4bb1bdae-d248-4318-9bb8-44efe0896e8f.png"
  },
  {
    icon: GitCompare,
    title: "Pick your service",
    description: "Browse services, compare prices, check availability, and read customer reviews to make the best choice.",
    image: "/lovable-uploads/3b7a0bb6-45ba-481c-bb60-c2395e51f1f2.png"
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
  const whatsappUrl = "https://wa.me/919656536327?text=Hi%20there!%20I%20want%20to%20inquire%20about%20your%20services";

  return (
    <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">How GoBright Works</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your Gateway to Trusted Local Laundries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 justify-items-center">
          {steps.map((step, index) => (
            <BackgroundOverlayCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              backgroundImage={step.image}
              stepNumber={index + 1}
              index={index}
            />
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
            <h3 className="text-lg font-semibold mb-2 text-teal-800 dark:text-teal-300">Every Problem Has One Solution – <span className="font-bold text-teal-600 dark:text-teal-200">GoBright</span></h3>
            
          </motion.div>
        </div>

        <div className="text-center mt-12">
            <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
            >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all">
                    <Phone className="w-5 h-5 mr-2" />
                    Request a Service
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
