import { useState } from "react";
import { motion } from "framer-motion";
import Pro1 from "../assets/pro1.png"
import Pro2 from "../assets/pro2.png"
import Pro3 from "../assets/pro3.png"
import Pro4 from "../assets/pro4.png"
import Pro5 from "../assets/pro5.png"
import Pro6 from "../assets/pro6.png"

function Button({ children, variant, onClick, className = "" }: any) {
  const base =
    "px-4 py-2 rounded transition font-semibold focus:outline-none " +
    (variant === "default"
      ? "bg-blue-600 text-white"
      : "border border-blue-600 text-blue-600 bg-white");
  return (
    <button className={base + " " + className} onClick={onClick}>
      {children}
    </button>
  );
}


type ProjectCategory = "all" | "portrait" | "landscape" | "commercial";

interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  imageUrl: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "i-Blogger Blogging",
    category: "landscape",
    imageUrl: Pro1,
    description: "Your go-to space for fresh ideas.",
    link: "https://i-blogger-eight.vercel.app/"
  },
  {
    id: "2",
    title: "Logify",
    category: "portrait",
    imageUrl: Pro2,
    description: "Corporate headshots with professional lighting.",
    link:"https://logify-kappa.vercel.app/signin"
  },
  {
    id: "3",
    title: "Steel & Iron Works",
    category: "commercial",
    imageUrl: Pro3,
    description: "Reliable iron and steel solutions for every industry.",
    link : "https://narayan-fabrication.vercel.app/"
  },
  {
    id: "4",
    title: "Spotify clone",
    category: "landscape",
    imageUrl: Pro4,
    description: "A Spotify clone for streaming music with playlists and favorites.",
    link : "https://spotify-phi-ten.vercel.app/"
   
  },
  {
    id: "5",
    title: "Google sheet clone",
    category: "portrait",
    imageUrl: Pro5,
    description: "A Google Sheets clone replicating core spreadsheet functionalities with a user-friendly interface.",
    link : "https://googelsheet.vercel.app/"
    
  },
  {
    id: "6",
    title: "Responsive design",
    category: "commercial",
    imageUrl: Pro6,
    description: "Designing flexible layouts that adapt to various screen sizes.",
    link : "https://priyamdodiya.github.io/responsive-web/"
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

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-container px-4 py-10 max-w-7xl mx-auto">
      <h2 className="section-title text-3xl font-bold mb-2">My Projects</h2>
      <p className="section-subtitle mb-6 text-gray-600">
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
        {filteredProjects.map((project) => {
          const ProjectContent = (
            <>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-lg">
                <h3 className="text-white text-xl font-serif font-medium">{project.title}</h3>
                <p className="text-white/80 mt-2">{project.description}</p>
                <span className="mt-2 inline-block px-3 py-1 text-xs text-white bg-white/20 rounded-full">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
            </>
          );

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative image-card group cursor-pointer overflow-hidden rounded-lg shadow"
            >
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                >
                  {ProjectContent}
                </a>
              ) : (
                ProjectContent
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
