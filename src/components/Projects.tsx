
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "Library Management System",
    description: "A comprehensive system for managing library resources, including book tracking, member management, and borrowing functionality.",
    technologies: ["React", "PHP", "MySQL"],
    githubLink: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with product catalog, shopping cart, user authentication, and payment integration.",
    technologies: ["React", "Spring Boot", "PostgreSQL"],
    githubLink: "#"
  },
  {
    title: "Task Management Application",
    description: "Web application for managing tasks, projects, and team collaboration with real-time updates.",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    githubLink: "#"
  },
  {
    title: "Student Information System",
    description: "Platform for managing student data, course enrollment, grades, and academic progress tracking.",
    technologies: ["Django", "Python", "PostgreSQL"],
    githubLink: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/5 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient mb-4">
            <Code className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1.5 bg-gradient rounded-full mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden hover:border-white/20 transition-all duration-300">
              <div className="h-2 bg-gradient"></div>
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
