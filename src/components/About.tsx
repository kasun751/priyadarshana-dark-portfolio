
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient mb-4">
            <User className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient rounded-full mb-8"></div>
        </div>
        
        <Card className="glass-card max-w-3xl mx-auto">
          <CardContent className="pt-6 text-lg">
            <p className="mb-4">
              I am a third-year undergraduate student in the Computer Science and Technology degree program at 
              Uva Wellassa University of Sri Lanka.
            </p>
            <p className="mb-4">
              I am passionate about software development and continuously expanding my skills in various technologies 
              and frameworks. My journey in tech has equipped me with a strong foundation in both frontend and backend 
              development.
            </p>
            <p>
              Currently seeking software development internship opportunities to apply my technical skills and 
              contribute to innovative projects while continuing to grow as a developer.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
