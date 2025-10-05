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
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt="Sanketh Thatikonda"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-2xl hover-lift"
              style={{ boxShadow: "var(--shadow-glow)" }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Sanketh Thatikonda</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Computer Science Student | Web Developer | Tech Innovator
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full font-medium transition-all duration-300"
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
              className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all duration-300"
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
