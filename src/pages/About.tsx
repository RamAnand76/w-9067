
import { ArrowLeft, CheckCircle, Mail, Phone } from 'lucide-react';
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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              About GoBright – Your Smart Way to Laundry
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 dark:text-gray-300 mb-12"
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
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    To transform the way the world does laundry — by building a trusted, tech-driven platform that connects people with reliable, eco-conscious local laundries, making cleanliness, convenience, and care just a tap away.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    To simplify lives by delivering a seamless laundry experience — through intelligent scheduling, verified partners, transparent pricing, and real-time updates — ensuring every customer receives fresh clothes with speed, satisfaction, and a smile.
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-16"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Customer-Centric:</span>
                      <span className="text-gray-600 dark:text-gray-300"> We listen to our customers and put their needs first—always aiming to make laundry simple, reliable, and stress-free.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Convenience:</span>
                      <span className="text-gray-600 dark:text-gray-300"> From doorstep pickup to timely delivery, we're built to save your time and energy.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Trust & Transparency:</span>
                      <span className="text-gray-600 dark:text-gray-300"> Your clothes matter to us. We maintain strict quality control and clear communication at every step.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Affordability with Quality:</span>
                      <span className="text-gray-600 dark:text-gray-300"> Premium laundry shouldn't come at a premium price. We balance cost and care to deliver value.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Sustainability:</span>
                      <span className="text-gray-600 dark:text-gray-300"> We believe in responsible cleaning—using eco-friendly detergents and packaging wherever possible.</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Team – The People Behind GoBright</h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm mb-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We're a passionate team of engineers, innovators, and problem-solvers on a mission to simplify everyday life—starting with laundry.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Together, we turn laundry day into just another tap on your phone.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built by everyday users, for everyday users—because we've lived the problem, and we're solving it.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-teal-600/20">
                          <img 
                            src="/lovable-uploads/ade7d3dd-cb04-4d46-a9ca-ee03fa8a3d8f.png" 
                            alt="Rino Joseph" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Rino Joseph</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">CEO</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                            <Mail className="w-4 h-4 mr-2" />
                            <a href="mailto:ceo@gobright.co.in" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                              ceo@gobright.co.in
                            </a>
                          </div>
                          <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                            <Phone className="w-4 h-4 mr-2" />
                            <a href="tel:+917034593260" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                              +91 7034593260
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-teal-600/20">
                          <img 
                            src="/lovable-uploads/a9fc2358-8710-4ef0-a69d-10e0ad634d7d.png" 
                            alt="Anandhu" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Anandhu</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">COO</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                            <Mail className="w-4 h-4 mr-2" />
                            <a href="mailto:anandu@gobright.co.in" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                              anandu@gobright.co.in
                            </a>
                          </div>
                          <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                            <Phone className="w-4 h-4 mr-2" />
                            <a href="tel:+919847437892" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                              +91 98474 37892
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
