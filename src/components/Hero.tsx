import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-gradient-shift bg-[length:200%_200%]"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-32 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-10 relative">
            <div className="absolute inset-0 blur-3xl opacity-30 rounded-full" style={{ background: "var(--gradient-primary)" }}></div>
            <img
              src={profilePhoto}
              alt="Sanketh Thatikonda"
              className="w-56 h-56 rounded-full mx-auto object-cover border-8 border-background shadow-2xl hover-lift relative z-10"
              style={{ boxShadow: "var(--shadow-glow)" }}
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
            <span className="gradient-text">Sanketh Thatikonda</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            Computer Science Student | Web Developer | Tech Innovator
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="#projects"
              className="px-10 py-4 rounded-full font-semibold transition-all duration-300 hover-lift text-lg"
              style={{
                background: "var(--gradient-primary)",
                color: "white",
                boxShadow: "var(--shadow-elegant)",
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-10 py-4 rounded-full bg-card text-foreground font-semibold hover:bg-card/80 transition-all duration-300 border-2 border-primary/20 hover-lift text-lg"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
