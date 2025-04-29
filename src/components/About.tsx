import { FileText } from "lucide-react";
import Priyank from "../assets/priyank.jpg";
import { Button } from "./ui/button";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={Priyank}
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
              Hi, I'm Priyam Dodiya, a final-year MCA student at Parul University. I’ve built a strong foundation in computer applications and developed a deep passion for technology and coding.
            </p>
            <p className="text-muted-foreground mb-4">
              For the past six months, I've been interning at AccioJob, specializing in full-stack web development. I’ve worked hands-on with HTML, CSS, JavaScript, React.js, Node.js, and MongoDB, building real-world projects.
            </p>
            <p className="text-muted-foreground mb-6">
              I love creating web applications and solving real-world problems through code. I'm excited to apply my skills, keep learning, and grow as a professional developer.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="py-2 px-4 bg-primary/10 rounded-md">
                <span className="block text-lg font-semibold">1.5+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="py-2 px-4 bg-primary/10 rounded-md">
                <span className="block text-lg font-semibold">6+</span>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
              <div className="py-2 px-4 bg-primary/10 rounded-md">
                <span className="block text-lg font-semibold">3+</span>
                <span className="text-sm text-muted-foreground">Happy Clients</span>
              </div>
            </div>
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" /> Download Resume
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}
