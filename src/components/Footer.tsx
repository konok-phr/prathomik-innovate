import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12 sm:py-16">
      <div className="container px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gradient-cyan mb-4">Prathomik</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building innovative software solutions that transform businesses and empower communities through technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#services" className="block hover:text-primary transition-colors">Services</a>
              <a href="#products" className="block hover:text-primary transition-colors">Products</a>
              <a href="#open-source" className="block hover:text-primary transition-colors">Open Source</a>
              <a href="/careers" className="block hover:text-primary transition-colors">Careers</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@prathomik.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Prathomik. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
