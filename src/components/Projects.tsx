
import React from "react";
import { motion } from "framer-motion";
import { Code, ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import VrmsPic from "../../public/project-pics/vrms.jpg"
import ResearchRepoPic from "../../public/project-pics/researchrepo.jpg"

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Smart Library Management System",
    description: "A comprehensive system for managing library resources, including book tracking, member management, and borrowing functionality.",
    technologies: ["React", "PHP", "MySQL"],
    githubLink: "https://github.com/kasun751/Library_Management_System.git",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2800&auto=format&fit=crop"
  },
  {
    title: "Vehicle Rental Management System",
    description: "Developed a Vehicle Rental Management System using JSP and Servlets to handle vehicle bookings, customer management, and rental tracking. Implemented dynamic web pages and server-side logic for seamless user interactions and data processing.",
    technologies: ["React", "JSP", "Servlet"],
    githubLink: "https://github.com/kasun751/Vehicle_Rental_Management_System.git",
    image: `${VrmsPic}`
  },
  {
    title: "Research Repository Platform using ML model - Current ongoing",
    description: "Designed and developed a research repository system for Uva Wellassa University using React, Spring Boot, and PostgreSQL. Implemented AI/ML-based semantic search using text embeddings to enhance document retrieval accuracy. Integrated a RESTful backend with a responsive React frontend for seamless user interaction.",
    technologies: ["Springboot", "Hugging Face", "Python", "Postgre SQL"],
    githubLink: "#",
    // liveLink: "https://task-app-demo.vercel.app",
    image: `${ResearchRepoPic}`
  },
  {
    title: "PDF Digital Signature System - Currently ongoing",
    description: "Developed a secure PDF digital signing and verification system using Python and Flask. Implemented cryptographic techniques to ensure document integrity and verify signer authenticity, with a React.js frontend for user interaction.",
    technologies: ["Python", "Flask", "PostgreSQL", "Cryptography"],
    githubLink: "#",
    image: "https://media.istockphoto.com/id/2166683688/photo/e-signing-electronic-signature-document-management-paperless-office-concept-businessman-using.webp?a=1&b=1&s=612x612&w=0&k=20&c=KPdyIFG9SK8wjokXj-vZgtbeyt5f1IWURO_kuS7INMA="
  }
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black/40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-full bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1.5 bg-gradient rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-xl">
            A collection of projects that showcase my skills and experience in software development.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item} 
              className="glass-card overflow-hidden rounded-2xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
            >
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-24 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button size="sm" asChild className="flex items-center gap-2">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
