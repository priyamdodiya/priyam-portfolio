
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ProjectCategory = "all" | "portrait" | "landscape" | "commercial";

interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  imageUrl: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Urban Exploration",
    category: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    description: "Cityscape photography capturing urban architecture and life."
  },
  {
    id: "2",
    title: "Professional Portrait",
    category: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
    description: "Corporate headshots with professional lighting."
  },
  {
    id: "3",
    title: "Product Showcase",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=800",
    description: "High-end product photography for marketing."
  },
  {
    id: "4",
    title: "Natural Wonders",
    category: "landscape",
    imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80&w=800",
    description: "Breathtaking landscapes from around the world."
  },
  {
    id: "5",
    title: "Lifestyle Portrait",
    category: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800",
    description: "Natural, candid portraits in everyday settings."
  },
  {
    id: "6",
    title: "Brand Campaign",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=800", 
    description: "Commercial photography for major brand campaigns."
  }
];

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "portrait", label: "Portrait" },
  { value: "landscape", label: "Landscape" },
  { value: "commercial", label: "Commercial" }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        Explore my latest work across various photography styles and projects
      </p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={activeCategory === category.value ? "default" : "outline"}
            onClick={() => setActiveCategory(category.value)}
            className="mb-2"
          >
            {category.label}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="image-card group cursor-pointer"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-serif font-medium">{project.title}</h3>
              <p className="text-white/80 mt-2">{project.description}</p>
              <span className="mt-2 inline-block px-3 py-1 text-xs text-white bg-white/20 rounded-full">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
