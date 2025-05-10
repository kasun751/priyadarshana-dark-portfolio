
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-[400px] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-[400px] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-xl text-gray-400 mb-2">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="text-gradient">Kasun Priyadarshana</span>
              </h1>
              <p className="text-2xl text-gray-300">Computer Science & Technology Undergraduate</p>
            </div>
            <p className="text-lg text-gray-400 leading-relaxed">
              A passionate software developer with expertise in full-stack development, 
              ready to transform innovative ideas into elegant solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-gradient hover:opacity-90">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-75"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 overflow-hidden relative">
                <img
                  src="public/lovable-uploads/8b6c3498-a1cd-458a-a760-b1e5e18cbfba.png"
                  alt="Kasun Priyadarshana"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-white/60" />
          </a>
        </div>
      </div>
    </section>
  );
}
