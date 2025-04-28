import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "English", level: 95 },
        { name: "Hindi", level: 100 },
        { name: "Gujarati", level: 100 }
      ],
    },
    {
      category: "Technical",
      items: [
        { name: "Html", level: 100 },
        { name: "css", level: 100 },
        { name: "javascript", level: 90 },
        { name: "react", level: 95 },
        { name: "redux, redux thunk", level: 95 },
        { name: "Mongodb", level: 95 },
        { name: "Node js", level: 85 },
        { name: "Github", level: 100 },
      ],
    },
  ];

  // Optional: Animate only when in view
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-container" ref={sectionRef}>
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">
        Specialized expertise and technical knowledge I've developed throughout my career
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h3 className="text-xl font-serif font-semibold mb-6">{skill.category}</h3>
            <div className="space-y-6">
              {skill.items.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${item.level}%` : 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
