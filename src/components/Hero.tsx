import { Code2, Zap, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-8">
            <div>
              <div className="flex items-start gap-3 mb-2">
                <div className="w-1 h-16 bg-primary rounded-full"></div>
                <h1 className="text-6xl md:text-7xl font-bold text-foreground">
                  Sanketh
                </h1>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-primary ml-4">
                Thatikonda
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Computer Science Student | Web Developer | Problem Solver
            </p>

            <p className="text-base text-muted-foreground/80 max-w-xl leading-relaxed">
              Passionate about crafting innovative digital experiences through code. 
              Specializing in web development, algorithms, and building solutions that make a difference.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover-lift"
              >
                View My Work
              </a>
              
              <a
                href="https://github.com/Sanzzz1125?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              
              <a
                href="https://www.linkedin.com/in/sanketh-thatikonda-428197286/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              <a
                href="mailto:sanketh.thatikonda@gmail.com"
                className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Photo with decorative elements */}
          <div className="relative flex justify-center items-center animate-fade-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 text-primary/20">
                <Code2 size={40} />
              </div>
              <div className="absolute -bottom-8 -left-4 text-primary">
                <Zap size={32} />
              </div>
              <div className="absolute -top-4 -right-8 text-accent">
                <Sparkles size={36} />
              </div>

              {/* Photo */}
              <div className="relative">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Sanketh Thatikonda"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
