import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DiagnosisForm from "@/components/DiagnosisForm";
import HeroBackground from "@/components/ui/HeroBackground";

import {
  FileText, Eye, TrendingUp, Zap, Users, BarChart3,
  Package, Clock, Target, Shield, Rocket, Crown, ChevronRight
} from "lucide-react";

// --- Datos constantes movidos fuera del componente ---
const problems = [
  { icon: FileText, title: "Procesos manuales", description: "Dependencia de papel y hojas de cálculo que generan errores y pérdidas de tiempo." },
  { icon: Eye, title: "Falta de visibilidad", description: "Dificultad para ver en tiempo real datos clave como ventas, inventario o estado de clientes." },
  { icon: TrendingUp, title: "Crecimiento estancado", description: "Problemas para escalar y mantener la calidad del servicio a medida que tu negocio crece." },
  { icon: Zap, title: "Resistencia al cambio", description: "Percibes la tecnología como costosa o compleja, lo que limita tu competitividad." },
];

const solutions = [
  { icon: FileText, title: "Facturación Electrónica Automática", description: "Automatiza tu facturación y cumple con la normatividad." },
  { icon: Users, title: "CRM Inteligente", description: "Centraliza la información de clientes y optimiza tus relaciones comerciales." },
  { icon: Package, title: "Control de Inventario Inteligente", description: "Controla tu inventario en tiempo real y evita pérdidas." },
  { icon: BarChart3, title: "Reportes y Analítica para Decisiones Clave", description: "Toma decisiones basadas en datos reales de tu negocio." },
];

const valuePropositions = [
    { Icon: Clock, title: "Implementación Rápida", desc: "Resultados visibles en semanas" },
    { Icon: Target, title: "100% Personalizado", desc: "Adaptado a tu negocio específico" },
    { Icon: Shield, title: "Soporte Continuo", desc: "Te acompañamos en la transformación" },
];

const Home = () => {
  const [isDiagnosisModalOpen, setIsDiagnosisModalOpen] = useState(false);
  // El estado para isFounderModalOpen se puede eliminar si no se usa, o mantener si se va a implementar.
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);

  // --- Función de cierre optimizada con useCallback ---
  const closeDiagnosisModal = useCallback(() => {
    setIsDiagnosisModalOpen(false);
  }, []);
  
  // Función para el modal de fundador (si se implementa)
  const closeFounderModal = useCallback(() => {
    setIsFounderModalOpen(false);
  }, []);

  return (
    <>
      <div className="min-h-screen relative">
        <Navigation />
        
        {/* New Hero Section */}
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950 text-white py-24">
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
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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

        {/* Solutions Section */}
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valuePropositions.map(({ Icon, title, desc }, idx) => (
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

        {/* El resto de tus secciones... */}

      </div>
      <Footer />

      {/* Modals */}
      <DiagnosisForm isOpen={isDiagnosisModalOpen} onClose={closeDiagnosisModal} />
      {/* Aquí iría el modal para el fundador: */}
      {/* <FounderModal isOpen={isFounderModalOpen} onClose={closeFounderModal} /> */}
    </>
  );
};

export default Home;