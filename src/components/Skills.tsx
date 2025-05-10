
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";

interface SkillCategory {
  title: string;
  items: string[];
}

const technicalSkills: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "C"]
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Django", "Flask", "Node.js"]
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL"]
  },
  {
    title: "Other",
    items: ["Microservice Architecture", "Data Structures", "Algorithms", "RESTful APIs"]
  }
];

const softSkills: string[] = [
  "Communication Skills",
  "Teamwork",
  "Problem-Solving",
  "Critical Thinking",
  "Leadership",
  "Time Management",
  "Adaptability"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/5 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient mb-4">
            <Code className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-gradient rounded-full mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-8">
              {technicalSkills.map((category, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold mb-4 text-gradient">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <Card className="glass-card">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {softSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
