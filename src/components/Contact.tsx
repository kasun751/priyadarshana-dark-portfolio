
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a backend or email service
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient mb-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1.5 bg-gradient rounded-full mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <a href="mailto:kasunp751@gmail.com" className="hover:text-gradient transition-colors">
                      kasunp751@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Phone</p>
                    <a href="tel:+94765907934" className="hover:text-gradient transition-colors">
                      076-5907934
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/kasun-priyadarshana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-gradient transition-colors"
                    >
                      kasun-priyadarshana
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">GitHub</p>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-gradient transition-colors"
                    >
                      github.com/kasun
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="bg-white/5 border-white/10" />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" className="bg-white/5 border-white/10" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    className="bg-white/5 border-white/10 min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
