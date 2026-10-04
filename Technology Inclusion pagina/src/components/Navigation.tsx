import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '573245770680';

/**
 * Navigation Component - 21st.dev inspired design
 * Features:
 * - Glass morphism effect
 * - Smooth transitions
 * - Minimal and clean design
 * - Mobile responsive
 */
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/sobre-nosotros' },
    { name: 'Soluciones', href: '/soluciones' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Proceso', href: '/proceso' },
    { name: 'Precios', href: '/precios' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <img
              src="/assets/456e6cf6-49e2-4ce7-b5fe-fa940ffcbe9a.png"
              alt="Technology Inclusion"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-gradient">
              Technology Inclusion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActiveLink(item.href)
                    ? 'bg-ti-orange/20 text-ti-orange border border-ti-orange/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-glow inline-flex items-center justify-center rounded-md bg-ti-orange px-4 h-10 text-sm font-medium text-background transition-all duration-300 hover:bg-ti-orange/90"
            >
              <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
              Consultoría gratuita
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-background hover:bg-primary/90"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation: fuera de la fila h-16 para que no quede comprimida ahí dentro */}
      {isMenuOpen && (
        <div className="md:hidden animate-slide-up absolute top-full inset-x-0 px-4">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card mt-2 rounded-xl border border-border shadow-xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActiveLink(item.href)
                    ? 'bg-ti-orange/20 text-ti-orange border border-ti-orange/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-md bg-ti-orange px-4 h-10 text-sm font-medium text-background transition-all duration-300 hover:bg-ti-orange/90"
              >
                <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                Consultoría gratuita
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
