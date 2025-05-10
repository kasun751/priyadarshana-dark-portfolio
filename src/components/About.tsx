
import React from "react";
import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient mb-4">
            <User className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient rounded-full mb-8"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-lg">
              <p>
                I am a third-year undergraduate student in the <span className="text-blue-400">Computer Science and Technology</span> degree 
                program at Uva Wellassa University of Sri Lanka.
              </p>
              
              <p>
                My journey in technology has equipped me with a diverse skill set spanning both frontend and 
                backend development. I'm passionate about creating clean, efficient, and user-centered applications 
                that solve real-world problems.
              </p>
              
              <p>
                I excel in collaborative environments and am constantly expanding my knowledge in emerging 
                technologies. My goal is to leverage my technical expertise to contribute to innovative 
                projects that make a meaningful impact.
              </p>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button asChild variant="outline">
                <a href="#skills" className="flex items-center gap-2">
                  View My Skills <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
