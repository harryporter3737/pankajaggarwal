import { Link } from "react-router-dom";
import { MessageCircle, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-sora font-bold text-lg mb-3">NetFlux Studios</h3>
            <p className="text-muted text-sm">
              Code. Convert. Scale.
            </p>
            <p className="text-muted text-sm mt-1">
              Modern digital studio for scalable web solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Get in touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:pankajaggarwalbusiness@gmail.com"
                className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                pankajaggarwalbusiness@gmail.com
              </a>
              <a
                href="https://wa.me/917206543706?text=Hi%20NetFlux%20Studios,%20I'd%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} NetFlux Studios — All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
