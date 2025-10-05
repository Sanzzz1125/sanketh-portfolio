import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Built with <Heart className="text-red-500 fill-red-500" size={16} /> by Sanketh Thatikonda
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
