import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sanketh.thatikonda@gmail.com",
      href: "mailto:sanketh.thatikonda@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/Sanketh",
      href: "https://linkedin.com/in/Sanketh",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Sanketh",
      href: "https://github.com/Sanketh",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9573530101",
      href: "tel:+919573530101",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, or collaborations
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-6 bg-card rounded-2xl hover-lift transition-all"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div
                className="p-4 rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                <contact.icon className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{contact.label}</p>
                <p className="font-medium">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Let's build something amazing together!
          </p>
          <a
            href="mailto:sanketh.thatikonda@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
            style={{
              background: "var(--gradient-primary)",
              color: "white",
              boxShadow: "var(--shadow-elegant)",
            }}
          >
            <Mail size={24} />
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
