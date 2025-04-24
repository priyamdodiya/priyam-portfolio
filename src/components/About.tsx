
import { FileText } from "lucide-react";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section id="about" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
                alt="Photographer portrait"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-8 border-background rounded-lg overflow-hidden hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=200"
                alt="Studio equipment"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">About Me</h2>
            
            <p className="text-muted-foreground mb-4">
              Hello! I'm Alex, a professional photographer with over 8 years of experience
              capturing life's most precious moments and creating stunning visual stories.
            </p>
            
            <p className="text-muted-foreground mb-4">
              My journey began with a simple love for capturing the beauty around me, but
              quickly evolved into a passion for professional photography that combines technical
              expertise with artistic vision.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Whether I'm shooting landscapes, portraits, or commercial projects, I bring the same
              level of dedication and creativity to each assignment. My goal is to exceed
              expectations and deliver images that tell your unique story.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="py-2 px-4 bg-primary/10 rounded-md">
                <span className="block text-lg font-semibold">8+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="py-2 px-4 bg-primary/10 rounded-md">
                <span className="block text-lg font-semibold">200+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
              <div className="py-2 px-4 bg-primary/10 rounded-md">
                <span className="block text-lg font-semibold">50+</span>
                <span className="text-sm text-muted-foreground">Happy Clients</span>
              </div>
            </div>
            
            <Button className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
