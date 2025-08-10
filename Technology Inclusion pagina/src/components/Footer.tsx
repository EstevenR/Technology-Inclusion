import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10">
                <img
                  src="/lovable-uploads/456e6cf6-49e2-4ce7-b5fe-fa940ffcbe9a.png"
                  alt="Technology Inclusion Logo"
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold">Technology Inclusion</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transformamos procesos manuales en ventajas competitivas. 
              Automatizamos lo rutinario para que te enfoques en hacer crecer tu negocio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-ti-orange transition-colors hover-scale">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-ti-orange transition-colors hover-scale">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-ti-orange block transition-colors py-1">
                Inicio
              </Link>
              <Link to="/sobre-nosotros" className="text-muted-foreground hover:text-ti-orange block transition-colors py-1">
                Nosotros
              </Link>
              <Link to="/soluciones" className="text-muted-foreground hover:text-ti-orange block transition-colors py-1">
                Soluciones
              </Link>
              <Link to="/proceso" className="text-muted-foreground hover:text-ti-orange block transition-colors py-1">
                Proceso
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-ti-orange" />
                <span className="text-muted-foreground">Tecnologyinclusion@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-ti-orange" />
                <span className="text-muted-foreground">+57 3245770680</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-ti-orange" />
                <span className="text-muted-foreground">Medellín, Antioquia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Technology Inclusion. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;