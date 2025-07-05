
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About GoBright – Your Smart Way to Laundry
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                We are India's first fully app-based laundry service, designed to bring convenience, speed, and quality to your doorstep. 
                Whether you're a student, working professional, or busy household, GoBright offers a seamless way to schedule pickups, track orders, and enjoy professionally cleaned clothes—without ever leaving home.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                  <p className="text-gray-600">
                    To transform the way the world does laundry — by building a trusted, tech-driven platform that connects people with reliable, eco-conscious local laundries, making cleanliness, convenience, and care just a tap away.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    To simplify lives by delivering a seamless laundry experience — through intelligent scheduling, verified partners, transparent pricing, and real-time updates — ensuring every customer receives fresh clothes with speed, satisfaction, and a smile.
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-16"
              >
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Customer-Centric:</span>
                      <span className="text-gray-600"> We listen to our customers and put their needs first—always aiming to make laundry simple, reliable, and stress-free.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Convenience:</span>
                      <span className="text-gray-600"> From doorstep pickup to timely delivery, we're built to save your time and energy.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Trust & Transparency:</span>
                      <span className="text-gray-600"> Your clothes matter to us. We maintain strict quality control and clear communication at every step.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Affordability with Quality:</span>
                      <span className="text-gray-600"> Premium laundry shouldn't come at a premium price. We balance cost and care to deliver value.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Sustainability:</span>
                      <span className="text-gray-600"> We believe in responsible cleaning—using eco-friendly detergents and packaging wherever possible.</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Team – The People Behind GoBright</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mb-8">
                  <p className="text-gray-600 mb-4">
                    We're a passionate team of engineers, innovators, and problem-solvers on a mission to simplify everyday life—starting with laundry.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Together, we turn laundry day into just another tap on your phone.
                  </p>
                  <p className="text-gray-600">
                    Built by everyday users, for everyday users—because we've lived the problem, and we're solving it.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
