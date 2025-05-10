
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-[300px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-[300px] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">Kasun Priyadarshana</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              A third-year undergraduate student at Uva Wellassa University of Sri Lanka, passionate about software development and creating innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-gradient hover:opacity-90">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient opacity-75 rounded-full blur-sm"></div>
              <img
                src="public/lovable-uploads/8b6c3498-a1cd-458a-a760-b1e5e18cbfba.png"
                alt="Kasun Priyadarshana"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
