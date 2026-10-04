import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DiagnosisForm from "@/components/DiagnosisForm";
import HeroBackground from "@/components/ui/HeroBackground";
import { projectCases } from "@/data/projects";

import {
  FileText, Eye, TrendingUp, Zap, Users, BarChart3,
  Package, Clock, Target, Shield, ChevronRight, ArrowUpRight, Car, Scissors, Gift, ShoppingBag
} from "lucide-react";

// --- Datos constantes movidos fuera del componente ---
const problems = [
  { icon: FileText, title: "Procesos manuales", description: "Dependencia de papel y hojas de cálculo que generan errores y pérdidas de tiempo." },
  { icon: Eye, title: "Falta de visibilidad", description: "Dificultad para ver en tiempo real datos clave como ventas, inventario o estado de clientes." },
  { icon: TrendingUp, title: "Crecimiento estancado", description: "Problemas para escalar y mantener la calidad del servicio a medida que tu negocio crece." },
  { icon: Zap, title: "Resistencia al cambio", description: "Percibes la tecnología como costosa o compleja, lo que limita tu competitividad." },
];

const solutions = [
  { icon: FileText, title: "Facturación electrónica automática", description: "Automatiza tu facturación y cumple con la normativa." },
  { icon: Users, title: "CRM inteligente", description: "Centraliza la información de clientes y optimiza tus relaciones comerciales." },
  { icon: Package, title: "Control de inventario inteligente", description: "Controla tu inventario en tiempo real y evita pérdidas." },
  { icon: BarChart3, title: "Reportes y analítica para decisiones clave", description: "Toma decisiones basadas en datos reales de tu negocio." },
];

const valuePropositions = [
    { Icon: Clock, title: "Implementación rápida", desc: "Resultados visibles en semanas" },
    { Icon: Target, title: "100 % personalizado", desc: "Adaptado a tu negocio específico" },
    { Icon: Shield, title: "Soporte continuo", desc: "Te acompañamos en la transformación" },
];

const projectIcons = {
  barberia: Scissors,
  parking: Car,
  "always-style": ShoppingBag,
  "gestos-inolvidables": Gift,
};

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
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background text-foreground py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-ti-orange/5" />
          <div className="absolute inset-0 opacity-10">
            <HeroBackground position={1} />
            <HeroBackground position={-1} />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Inclusión Tecnológica </span><br />
              <span className="text-foreground/70">para pymes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Transformamos procesos manuales en ventajas competitivas.<br />
              Automatizamos lo rutinario para que te enfoques en <span className="text-transparent bg-clip-text bg-gradient-to-r from-ti-orange to-ti-orange-light font-medium">hacer crecer tu negocio</span>.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <Button
                size="xl"
                className="w-full whitespace-normal bg-ti-orange hover:bg-ti-orange/90 text-background shadow-lg hover:shadow-xl transition-all duration-300 sm:w-auto"
                onClick={() => setIsDiagnosisModalOpen(true)}
              >
                <Zap className="w-5 h-5 mr-2" />
                <span className="sm:hidden">Agenda tu diagnóstico</span>
                <span className="hidden sm:inline">Agenda tu Diagnóstico Gratuito</span>
              </Button>
              <Link to="/proceso" className="text-foreground hover:text-ti-orange flex items-center group transition-colors duration-300">
                Ver cómo funciona
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Sin tarjeta • Sin compromiso • Resultados en semanas
            </p>
          </div>
        </section>

        <section className="py-24 relative bg-ti-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ti-gray-dark">
                ¿Te identificas con estos <span className="text-ti-orange">desafíos</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Entendemos los retos únicos de las pymes. Estos son los desafíos más comunes que resolvemos para nuestros clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {problems.map(({ icon: Icon, title, description }, index) => (
                <Card key={index} className="text-center border-none hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-ti-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-ti-orange" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground/70">{description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24" aria-labelledby="projects-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ti-orange">
                  Experiencia aplicada
                </p>
                <h2 id="projects-title" className="mb-5 text-4xl font-bold text-gradient md:text-5xl">
                  Proyectos realizados
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Tecnología construida alrededor de operaciones reales, desde la agenda de una barbería hasta el control de un parqueadero.
                </p>
              </div>
              <Button asChild variant="outline" className="w-fit border-ti-orange/40 hover:bg-ti-orange/10">
                <Link to="/proyectos">
                  Ver todos los proyectos
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {projectCases.slice(0, 2).map((project) => {
                const Icon = projectIcons[project.id];

                return (
                  <article key={project.id} className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-ti-orange/30 hover:shadow-glow sm:p-10">
                    <div className="mb-7 flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ti-orange/10 text-ti-orange transition-colors group-hover:bg-ti-orange group-hover:text-white">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                    <p className="mb-2 text-sm font-medium text-ti-orange">{project.eyebrow}</p>
                    <h3 className="mb-4 text-2xl font-bold text-card-foreground">{project.title}</h3>
                    <p className="mb-8 flex-1 leading-relaxed text-muted-foreground">{project.summary}</p>
                    <div className="mb-8 grid grid-cols-2 gap-4 border-y border-border py-6">
                      {project.outcomes.map((outcome) => (
                        <div key={outcome.value}>
                          <p className="text-lg font-bold text-ti-orange">{outcome.value}</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{outcome.label}</p>
                        </div>
                      ))}
                    </div>
                    <Link to={`/proyectos#${project.id}`} className="inline-flex items-center font-semibold text-ti-orange hover:text-ti-orange-light">
                      Conoce el proyecto
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Tu aliado tecnológico
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
