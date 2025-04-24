
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const images = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1920", 
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1920"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={image}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
            index === currentImage ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
            Capturing Moments, Creating Memories
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Welcome to my portfolio where creativity meets technical excellence.
            Explore my journey through pixels and code.
          </p>
          <div className="space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentImage
                  ? "bg-primary w-8"
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
