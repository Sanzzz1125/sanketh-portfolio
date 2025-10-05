import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Career Guidance Website for Rural Students",
      description:
        "A comprehensive platform providing career information and guidance to rural students (govt. students). Features stream selection, entrance exam details, and institutional information for 12th graders.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sanzzz1125/Career-Options",
      live: "https://sanzzz1125.github.io/Career-Options/",
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
      github: "https://github.com/Sanzzz1125?tab=repositories",
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
              className="bg-card rounded-2xl p-6 hover-lift"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                  aria-label="View GitHub repository"
                >
                  <Github size={20} />
                  <span className="text-sm font-medium">Code</span>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm font-medium">Live</span>
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
