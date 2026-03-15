import { Mail, MapPin, Phone } from "lucide-react";
import prathomikLogo from "@/assets/prathomik-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-8 sm:py-12 lg:py-16">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          <div className="col-span-2 lg:col-span-1">
            <img src={prathomikLogo} alt="Prathomik" className="h-8 sm:h-10 w-auto mb-3 sm:mb-4" />
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Building innovative software solutions that transform businesses and empower communities through technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <a href="/#services" className="block hover:text-primary transition-colors">Services</a>
              <a href="/#products" className="block hover:text-primary transition-colors">Products</a>
              <a href="/#open-source" className="block hover:text-primary transition-colors">Open Source</a>
              <a href="/careers" className="block hover:text-primary transition-colors">Careers</a>
              <a href="https://tools.system.bd" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">Dev Tools</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <a href="mailto:hello@prathomik.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span className="truncate">hello@prathomik.com</span>
              </a>
              <a href="tel:+8801XXXXXXXXX" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span>+880 1XXX-XXXXXX</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-foreground text-sm sm:text-base mb-3 sm:mb-4">WhatsApp</h4>
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gradient-cyan-soft border border-primary/20 hover:border-primary/40 transition-all text-xs sm:text-sm font-medium text-foreground hover:text-primary"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2">+880 1XXX-XXXXXX</p>
          </div>
        </div>
        <div className="border-t border-border/50 pt-6 sm:pt-8 text-center text-[10px] sm:text-xs text-muted-foreground">
          © {new Date().getFullYear()} Prathomik. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
