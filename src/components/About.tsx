import { GraduationCap, Code, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Passionate about creating innovative solutions through code
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a Computer Science student at <strong>SR University</strong> with a CGPA of 9.55, 
              driven by a passion for building smart, user-friendly products that solve real-world problems.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in tech is fueled by curiosity and a desire to innovate. I love exploring 
              new technologies, experimenting with code, and creating applications that make a difference.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me learning about emerging tech trends, contributing 
              to open-source projects, or brainstorming ideas for the next big innovation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card hover-lift" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <GraduationCap className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-muted-foreground">
                Bachelor of Technology in Computer Science & Engineering at SR University, Warangal
              </p>
              <p className="text-sm text-muted-foreground mt-2">CGPA: 9.55 | Aug 2023 - May 2027</p>
            </div>

            <div className="p-6 rounded-2xl bg-card hover-lift" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <Code className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Development Focus</h3>
              <p className="text-muted-foreground">
                Specializing in full-stack web development with a focus on creating responsive, 
                efficient, and user-centric applications
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card hover-lift" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <Lightbulb className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Innovation Mindset</h3>
              <p className="text-muted-foreground">
                Always exploring smart products and emerging technologies to create solutions 
                that push boundaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
