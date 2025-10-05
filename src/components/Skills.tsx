const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
      ],
    },
    {
      category: "Tools & Databases",
      skills: [
        { name: "GitHub", level: 85 },
        { name: "Oracle", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          My expertise across various technologies and tools
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-card rounded-3xl p-8 space-y-6 border border-border/50" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="text-3xl font-extrabold mb-8 gradient-text">
                {category.category}
              </h3>
              {category.skills.map((skill, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{skill.name}</span>
                    <span className="text-sm text-primary font-bold px-3 py-1 bg-primary/10 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-4 bg-secondary/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                      className="h-full rounded-full transition-all duration-1000 hover-lift"
                      style={{
                        width: `${skill.level}%`,
                        background: "var(--gradient-primary)",
                        boxShadow: "0 0 20px hsl(var(--primary) / 0.4)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            Certifications
          </h3>
          <div className="flex justify-center">
            <div
              className="inline-block px-8 py-5 bg-card rounded-2xl border border-primary/20 hover-lift"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <p className="font-semibold text-lg gradient-text">
                C Programming (NPTEL, IIT Kanpur)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
