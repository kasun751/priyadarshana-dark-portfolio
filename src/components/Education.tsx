
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient mb-4">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-gradient rounded-full mb-8"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="glass-card overflow-hidden">
            <div className="h-2 bg-gradient"></div>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Uva Wellassa University of Sri Lanka</h3>
                <span className="text-sm text-foreground/70">2021 - Present</span>
              </div>
              <p className="mb-4 text-gradient font-medium">B.Sc. in Computer Science and Technology</p>
              <p className="text-sm text-foreground/80">ID: UWU/CST/21/034</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card overflow-hidden">
            <div className="h-2 bg-gradient"></div>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Advanced Level</h3>
                <span className="text-sm text-foreground/70">2019 - 2020</span>
              </div>
              <ul className="space-y-1 mt-4 text-foreground/80">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
