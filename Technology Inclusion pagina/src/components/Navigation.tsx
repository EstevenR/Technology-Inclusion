import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

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
    { name: 'Proceso', href: '/proceso' },
    { name: 'Precios', href: '/precios' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <div className="w-8 h-8 bg-ti-orange rounded-lg flex items-center justify-center">
                                          <Zap className="w-5 h-5 text-white" />
            </div>
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
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-ti-orange hover:bg-ti-orange-dark text-white btn-modern hover-glow"
            >
              <Zap className="w-4 h-4 mr-2" />
              Consultoría Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden animate-slide-up">
              <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2 rounded-xl border border-white/10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActiveLink(item.href)
                        ? 'bg-ti-orange/20 text-ti-orange border border-ti-orange/30'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Button
                    className="w-full bg-ti-orange hover:bg-ti-orange-dark text-white btn-modern"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Consultoría Gratuita
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;