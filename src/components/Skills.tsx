
import React from "react";
import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 -translate-y-1/2 -left-[400px] w-[800px] h-[800px] bg-blue-800/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-[400px] w-[800px] h-[800px] bg-purple-800/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient mb-4">
            <Code className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-gradient rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-xl">
            A comprehensive set of technical and soft skills I've developed throughout my academic and personal projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            {technicalSkills.map((category, index) => (
              <motion.div key={index} variants={item} className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gradient">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm transition-all hover:bg-white/10 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="glass-card p-6 rounded-2xl">
              <motion.ul className="space-y-4">
                {softSkills.map((skill, index) => (
                  <motion.li key={index} variants={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient"></div>
                    <span className="text-gray-200">{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
