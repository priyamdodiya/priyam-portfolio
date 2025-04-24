
export default function Skills() {
  const skills = [
    {
      category: "Photography",
      items: [
        { name: "Portrait Photography", level: 95 },
        { name: "Landscape Photography", level: 90 },
        { name: "Studio Lighting", level: 85 },
        { name: "Commercial Photography", level: 80 },
      ],
    },
    {
      category: "Editing",
      items: [
        { name: "Adobe Photoshop", level: 90 },
        { name: "Adobe Lightroom", level: 95 },
        { name: "Capture One", level: 75 },
        { name: "DaVinci Resolve", level: 70 },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "English", level: 100 },
        { name: "Spanish", level: 85 },
        { name: "French", level: 65 },
        { name: "Portuguese", level: 45 },
      ],
    },
    {
      category: "Technical",
      items: [
        { name: "Camera Operation", level: 95 },
        { name: "Lighting Setup", level: 90 },
        { name: "Color Theory", level: 85 },
        { name: "Composition", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container">
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
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${item.level}%` }}
                    ></div>
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
