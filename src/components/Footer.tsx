
import { Instagram, Linkedin, Github, Mail, Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: MessageSquare, href: "https://wa.me/1234567890", label: "WhatsApp" }
  ];

  const contactLinks = [
    { icon: Mail, href: "mailto:contact@example.com", label: "contact@example.com" },
    { icon: Phone, href: "tel:+1234567890", label: "+123 456 7890" },
  ];
  
  return (
    <footer className="bg-muted/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Stellar Portfolio</h3>
            <p className="text-muted-foreground mb-4">
              Capturing moments, crafting stories, and creating visual experiences that last a lifetime.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center hover:text-primary transition-colors">
                    <link.icon className="h-4 w-4 mr-2" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Stellar Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
