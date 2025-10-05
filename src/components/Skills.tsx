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

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.category}
              </h3>
              {category.skills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                        background: "var(--gradient-primary)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Certifications
          </h3>
          <div className="flex justify-center">
            <div
              className="inline-block px-6 py-3 bg-card rounded-xl"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <p className="font-medium">
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
