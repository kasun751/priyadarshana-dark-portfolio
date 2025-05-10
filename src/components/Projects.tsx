
import React from "react";
import { motion } from "framer-motion";
import { Code, ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    title: "Library Management System",
    description: "A comprehensive system for managing library resources, including book tracking, member management, and borrowing functionality.",
    technologies: ["React", "PHP", "MySQL"],
    githubLink: "https://github.com/kasun/library-management",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2800&auto=format&fit=crop"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with product catalog, shopping cart, user authentication, and payment integration.",
    technologies: ["React", "Spring Boot", "PostgreSQL"],
    githubLink: "https://github.com/kasun/ecommerce-platform",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2800&auto=format&fit=crop"
  },
  {
    title: "Task Management Application",
    description: "Web application for managing tasks, projects, and team collaboration with real-time updates.",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/kasun/task-management",
    liveLink: "https://task-app-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2800&auto=format&fit=crop"
  },
  {
    title: "Student Information System",
    description: "Platform for managing student data, course enrollment, grades, and academic progress tracking.",
    technologies: ["Django", "Python", "PostgreSQL"],
    githubLink: "https://github.com/kasun/student-information-system",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2800&auto=format&fit=crop"
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
