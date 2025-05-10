
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient mb-4">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-gradient rounded-full mb-8"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div 
            className="glass-card overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-2 bg-gradient"></div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Uva Wellassa University of Sri Lanka</h3>
                <span className="text-sm text-gray-400">2021 - Present</span>
              </div>
              <p className="mb-4 text-gradient font-medium">B.Sc. in Computer Science and Technology</p>
              <p className="text-sm text-gray-400">ID: UWU/CST/21/034</p>
              
              <div className="mt-6">
                <h4 className="text-md font-medium mb-2 text-gray-300">Relevant Coursework:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-gray-400">Data Structures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-gray-400">Algorithms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-gray-400">Database Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-gray-400">Web Development</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-2 bg-gradient"></div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Advanced Level</h3>
                <span className="text-sm text-gray-400">2019 - 2020</span>
              </div>
              <p className="mb-4 text-gray-300">Physical Science Stream</p>
              
              <ul className="space-y-2 mt-4 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient"></div>
                  <span>ICT - A</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient"></div>
                  <span>Physics - C</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient"></div>
                  <span>Combined Maths - C</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
