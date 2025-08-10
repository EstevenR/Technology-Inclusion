
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DiagnosisForm from "@/components/DiagnosisForm";

import HeroBackground from "@/components/ui/HeroBackground";


import {
  FileText,
  Eye,
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  Package,
  Clock,
  Target,
  Shield,
  Rocket,
  Crown,
} from "lucide-react";

const Home = () => {
  const [isDiagnosisModalOpen, setIsDiagnosisModalOpen] = useState(false);
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);

  const problems = [
    {
      icon: FileText,
      title: "Procesos manuales",
      description:
        "Dependencia de papel y hojas de cálculo que generan errores y pérdidas de tiempo.",
    },
    {
      icon: Eye,
      title: "Falta de visibilidad",
      description:
        "Dificultad para ver en tiempo real datos clave como ventas, inventario o estado de clientes.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento estancado",
      description:
        "Problemas para escalar y mantener la calidad del servicio a medida que tu negocio crece.",
    },
    {
      icon: Zap,
      title: "Resistencia al cambio",
      description:
        "Percibes la tecnología como costosa o compleja, lo que limita tu competitividad.",
    },
  ];

  const solutions = [
    {
      icon: FileText,
      title: "Facturación Electrónica Automática",
      description: "Automatiza tu facturación y cumple con la normatividad.",
    },
    {
      icon: Users,
      title: "CRM Inteligente",
      description: "Centraliza la información de clientes y optimiza tus relaciones comerciales.",
    },
    {
      icon: Package,
      title: "Control de Inventario Inteligente",
      description: "Controla tu inventario en tiempo real y evita pérdidas.",
    },
    {
      icon: BarChart3,
      title: "Reportes y Analítica para Decisiones Clave",
      description: "Toma decisiones basadas en datos reales de tu negocio.",
    },
  ];

  return (
    <>
      <div className="min-h-screen relative">
        <Navigation />
        
        

        {/* New Hero Section */}
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950 text-white py-24">
          {/* Decorative Pattern - Placeholder for now */}
          <div className="absolute inset-0 opacity-20">
            <HeroBackground position={1} />
            <HeroBackground position={-1} />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Inclusión Tecnológica </span><br />
              <span className="text-gray-300">para PyMEs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transformamos procesos manuales en ventajas competitivas.<br />
              Automatizamos lo rutinario para que te enfoques en <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-medium">hacer crecer tu negocio</span>.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <Button
                className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsDiagnosisModalOpen(true)}
              >
                <Zap className="w-5 h-5 mr-2" />
                Agenda tu Diagnóstico Gratuito
              </Button>
              <a href="#how-it-works" className="text-white hover:text-gray-300 flex items-center group transition-colors duration-300">
                Ver cómo funciona
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Sin tarjeta • Sin compromiso • Resultados en semanas
            </p>
          </div>
        </section>
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                ¿Te identificas con estos desafíos?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Entendemos los retos únicos de las PyMEs. Estos son los desafíos más comunes que resolvemos para nuestros clientes.
              </p>
            </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {problems.map(({ icon: Icon, title, description }, index) => (
                <div key={index} className="group h-full">
                  <div className="glass-card p-8 text-center hover-glow transition-all duration-300 rounded-2xl h-full">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-card-foreground">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section - Minimalist */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Tu Aliado Tecnológico
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Más que software, somos tu socio estratégico. Diseñamos soluciones de IA personalizadas que 
                <span className="text-gradient-orange font-medium"> transforman tu operación.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {solutions.map(({ icon: Icon, title, description }, index) => (
                <div key={index} className="group h-full">
                  <div className="glass-card p-8 hover-glow transition-all duration-300 rounded-2xl h-full">
                    <div className="flex items-start space-x-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-card-foreground">{title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Value propositions - Simplified */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { Icon: Clock, title: "Implementación Rápida", desc: "Resultados visibles en semanas" },
                { Icon: Target, title: "100% Personalizado", desc: "Adaptado a tu negocio específico" },
                { Icon: Shield, title: "Soporte Continuo", desc: "Te acompañamos en la transformación" },
              ].map(({ Icon, title, desc }, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section - Minimal */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Sé Pionero en tu Industria
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Únete a las empresas que están transformando Colombia con tecnología inteligente.
            </p>
            
            <div className="glass-card p-12 rounded-3xl hover-glow">
              <Rocket className="w-16 h-16 text-ti-orange mx-auto mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-6">
                Cliente Fundador
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Los primeros 50 clientes reciben condiciones especiales, implementación prioritaria 
                y acceso temprano a nuevas funcionalidades.
              </p>
              <Button
                className="bg-ti-orange hover:bg-ti-orange-dark text-white btn-modern hover-glow"
                onClick={() => setIsFounderModalOpen(true)}
              >
                <Crown className="w-5 h-5 mr-2" />
                Reservar mi Lugar
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA - Clean */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Agenda un diagnóstico sin costo y descubre el potencial de automatización en tu empresa.
            </p>
            
            <Button
              className="bg-ti-orange hover:bg-ti-orange-dark text-white btn-modern hover-glow"
              onClick={() => setIsDiagnosisModalOpen(true)}
            >
              <Zap className="w-5 h-5 mr-2" />
              Diagnóstico Gratuito
            </Button>
            <p className="mt-6 text-sm text-muted-foreground">
              45 minutos • Sin compromiso • Cotización personalizada
            </p>
          </div>
        </section>
      </div>
      <Footer />

      {/* Modals */}
      <DiagnosisForm isOpen={isDiagnosisModalOpen} onClose={() => setIsDiagnosisModalOpen(false)} />
      
    </>
  );
};

export default Home;
