import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Career Guidance Website for Rural Students",
      description:
        "A comprehensive platform providing career information and guidance to rural students (govt. students). Features stream selection, entrance exam details, and institutional information for 12th graders.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Shoe Mart Billing System",
      description:
        "Menu-driven C program managing product selection, inventory, and billing with efficient data structures for data storage and retrieval, featuring clear UI and automated calculations.",
      tech: ["C", "Data Structures"],
      github: "#",
      live: null,
    },
    {
      title: "Front-End Development Practice Projects",
      description:
        "Collection of small-scale applications including Tic-Tac-Toe game, food delivery landing page, survey form, and college portal shortcut. Enhanced UI/UX and responsive design skills.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Building practical solutions and exploring new technologies
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 hover-lift border border-border/50 backdrop-blur-sm relative overflow-hidden group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" style={{ background: "var(--gradient-primary)" }}></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-base relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-semibold border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 relative z-10">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-all duration-300 font-semibold"
                  aria-label="View GitHub repository"
                >
                  <Github size={22} />
                  <span>Code</span>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-all duration-300 font-semibold"
                    aria-label="View live project"
                  >
                    <ExternalLink size={22} />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
