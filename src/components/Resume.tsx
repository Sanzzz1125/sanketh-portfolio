import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Download my complete resume to learn more about my experience and qualifications
        </p>

        <div
          className="bg-card rounded-2xl p-12 hover-lift"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <FileText className="mx-auto text-primary mb-6" size={80} />
          
          <h3 className="text-2xl font-bold mb-4">Resume</h3>
          <p className="text-muted-foreground mb-8">
            View my complete educational background, project details, and technical skills
          </p>

          <a
            href="/Sanketh Thatikonda-Resume.pdf"
            download="Sanketh_Thatikonda_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
            style={{
              background: "var(--gradient-primary)",
              color: "white",
              boxShadow: "var(--shadow-elegant)",
            }}
          >
            <Download size={24} />
            Download Resume
          </a>

          <p className="text-sm text-muted-foreground mt-4">
            PDF Format • Last Updated: 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
