import React, { useState } from 'react'; // Add this line
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FuturisticGrid from "@/components/FuturisticGrid";
import TechCard from "@/components/TechCard";
import ProcessStep from "@/components/ProcessStep";
import CompatibilityGrid from "@/components/CompatibilityGrid";
import { CheckCircle, Star, Rocket, Crown, ArrowRight, HelpCircle, Clock, Shield, Users, Database, Brain, Zap, Bot, BarChart3, FileText, Target, Code, Smartphone, Globe, Monitor } from "lucide-react";

import { DemoRequestModal } from "@/components/DemoRequestModal";
import { FormspreeModal } from "@/components/FormspreeModal";

/**
 * Página de Precios - Technology Inclusion
 * Diseño futurista inspirado en 21st.dev con:
 * - Grid pattern tecnológico de fondo
 * - Cards con efectos hover futuristas
 * - Compatibilidad con múltiples tecnologías
 * - Proceso de implementación visual
 */
const Pricing = () => {
  const [isDemoRequestModalOpen, setIsDemoRequestModalOpen] = useState(false);
  const [demoRequestModalKey, setDemoRequestModalKey] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalKey, setQuoteModalKey] = useState(0);
  const [planOfInterest, setPlanOfInterest] = useState('');

  const handleOpenDemoRequestModal = () => {
    setDemoRequestModalKey(prevKey => prevKey + 1);
    setIsDemoRequestModalOpen(true);
  };

  const handleOpenQuoteModal = (planTitle: string) => {
    setPlanOfInterest(planTitle);
    setQuoteModalKey(prevKey => prevKey + 1);
    setIsQuoteModalOpen(true);
  };

  const packages = [{
    title: "EMPRENDEDOR",
    description: "Tu presencia digital, lista para operar",
    features: ["Dominio propio y sitio o app web desplegada", "Facturación electrónica DIAN automatizada", "CRM básico con seguimiento de clientes", "Alertas de stock bajo", "Copia de seguridad automática en la nube", "Capacitación completa del equipo", "Soporte técnico por tres meses"],
    price: "A cotizar",
    badge: undefined,
    ctaText: "Cotizar paquete Emprendedor",
    variant: "default" as const,
    icon: <Rocket className="w-6 h-6" />
  }, {
    title: "CRECIMIENTO",
    description: "Conectamos y automatizamos lo que ya tienes",
    features: ["Todo lo del paquete Emprendedor", "Integración de tus herramientas actuales (Excel, WhatsApp, contabilidad)", "Automatización de procesos manuales repetitivos", "Monitoreo de cartera y pagos vencidos con alertas automáticas", "Reportes periódicos automáticos por WhatsApp o correo", "Analítica y predicción de tendencias", "Soporte técnico por seis meses"],
    price: "A cotizar",
    badge: "Recomendado",
    ctaText: "Cotizar paquete Crecimiento",
    variant: "featured" as const,
    icon: <BarChart3 className="w-6 h-6" />
  }, {
    title: "EMPRESARIAL",
    description: "Automatización total con IA controlando procesos clave",
    features: ["Todo lo de los paquetes anteriores", "Automatización de varias áreas del negocio a la vez", "Sistema de bots/IA para atención, seguimiento y alertas", "Monitoreo en tiempo real de la operación con alertas inteligentes", "Integración con sistemas heredados", "API empresarial personalizada", "Soporte técnico dedicado"],
    price: "A cotizar",
    badge: undefined,
    ctaText: "Contactar a un especialista",
    variant: "premium" as const,
    icon: <Crown className="w-6 h-6" />
  }];
  const implementationSteps = [{
    step: 1,
    title: "Diagnóstico integral",
    description: "Analizamos tu operación actual y mapeamos oportunidades de automatización con IA",
    icon: <Target className="w-5 h-5" />,
    isActive: false
  }, {
    step: 2,
    title: "Diseño de la solución",
    description: "Creamos la arquitectura técnica perfecta para tu negocio específico",
    icon: <Code className="w-5 h-5" />
  }, {
    step: 3,
    title: "Desarrollo ágil",
    description: "Implementamos por fases para que veas resultados desde la primera semana",
    icon: <Zap className="w-5 h-5" />
  }, {
    step: 4,
    title: "Puesta en producción y optimización",
    description: "Lanzamiento asistido y optimización continua basada en datos reales",
    icon: <Rocket className="w-5 h-5" />
  }];
  const compatibleTech = [{
    name: "React",
    logo: <Code className="w-6 h-6 text-blue-500" />,
    status: "integrated" as const
  }, {
    name: "Python",
    logo: <Bot className="w-6 h-6 text-green-500" />,
    status: "integrated" as const
  }, {
    name: "SQL Server",
    logo: <Database className="w-6 h-6 text-orange-500" />,
    status: "supported" as const
  }, {
    name: "SAP",
    logo: <Globe className="w-6 h-6 text-blue-600" />,
    status: "supported" as const
  }, {
    name: "Siigo",
    logo: <FileText className="w-6 h-6 text-purple-500" />,
    status: "integrated" as const
  }, {
    name: "Alegra",
    logo: <BarChart3 className="w-6 h-6 text-green-600" />,
    status: "integrated" as const
  }, {
    name: "WhatsApp API",
    logo: <Smartphone className="w-6 h-6 text-green-500" />,
    status: "integrated" as const
  }, {
    name: "Power BI",
    logo: <Monitor className="w-6 h-6 text-yellow-500" />,
    status: "coming-soon" as const
  }];
  const faqs = [{
    question: "¿Hay costos de implementación ocultos?",
    answer: "Cero costos ocultos. El precio incluye análisis, desarrollo, implementación, capacitación y soporte inicial. Todo transparente desde el día uno."
  }, {
    question: "¿Requieren contratos de permanencia?",
    answer: "No. Solo un compromiso mínimo de 3 meses para garantizar la adopción exitosa. Después, continúas porque ves valor real, no por obligación."
  }, {
    question: "¿Cómo funciona el soporte técnico?",
    answer: "Soporte multicanal por WhatsApp, correo electrónico y videollamada. El plan Empresarial incluye un ingeniero asignado y soporte técnico dedicado."
  }, {
    question: "¿Se integra con mis sistemas actuales?",
    answer: "Sí. Nos especializamos en integraciones complejas. Conectamos con Siigo, Alegra, SAP, sistemas heredados y cualquier API existente."
  }, {
    question: "¿Qué pasa si mi industria es muy específica?",
    answer: "Perfecto. Cada implementación es 100 % personalizada. Los paquetes son marcos base que adaptamos completamente a tu sector e industria."
  }];
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      {/* Hero Section with Futuristic Grid */}
      <section className="relative bg-gradient-to-br from-ti-gray-dark via-ti-gray-dark to-black text-white py-20 lg:py-32 overflow-hidden">
        <FuturisticGrid opacity={0.15} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-background text-ti-orange-light border-ti-orange/40">
              <Brain className="w-4 h-4 mr-2" />
              Impulsado por IA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-ti-orange-light bg-clip-text text-transparent">
              Precios del futuro
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-8 text-white/90">
              Inversión inteligente en automatización que se paga sola
            </p>
            <p className="text-lg font-light max-w-3xl mx-auto text-white/70">
              Sin letra pequeña. Sin costos ocultos. Solo resultados medibles.
            </p>
          </div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ti-orange rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-ti-orange-light rounded-full animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-ti-orange/60 rounded-full animate-pulse delay-500" />
      </section>

      {/* Pricing Cards with Futuristic Design */}
      <section className="py-16 lg:py-24 relative">
        <FuturisticGrid className="opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Escoge tu nivel de automatización
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada paquete incluye IA, implementación completa y soporte. 
              <strong className="text-ti-orange"> Escala cuando estés listo.</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => <TechCard key={index} title={pkg.title} description={pkg.description} features={pkg.features} price={pkg.price} badge={pkg.badge} ctaText={pkg.ctaText} variant={pkg.variant} icon={pkg.icon} onCtaClick={() => handleOpenQuoteModal(pkg.title)} className="h-full" />)}
          </div>

          {/* Value propositions with tech styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            Icon: Shield,
            title: "Garantía total",
            desc: "Tienes 30 días para evaluar. Si no te convence, te devolvemos todo."
          }, {
            Icon: Clock,
            title: "Compromiso corto",
            desc: "Solo 3 meses iniciales. Después, continúas porque ves valor, no por contrato."
          }, {
            Icon: CheckCircle,
            title: "Todo incluido",
            desc: "IA, desarrollo, implementación y capacitación."
          }].map(({
            Icon,
            title,
            desc
          }, idx) => <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-ti-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-ti-orange/20 transition-colors border border-ti-orange/20">
                  <Icon className="w-8 h-8 text-ti-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 lg:py-24 bg-ti-gray-light relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ti-gray-dark">
              Proceso de <span className="text-ti-orange">implementación</span>
            </h2>
            <p className="text-xl text-ti-orange-dark font-medium">
              Metodología probada para una transformación exitosa
            </p>
          </div>
          
          <div className="space-y-8">
            {implementationSteps.map((step, index) => <ProcessStep key={index} step={step.step} title={step.title} description={step.description} icon={step.icon} isActive={step.isActive} />)}
          </div>
        </div>
      </section>

      {/* Technology Compatibility */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompatibilityGrid title="Compatible con tu entorno tecnológico" subtitle="Nos integramos sin problemas con las herramientas que ya usas" items={compatibleTech} />
        </div>
      </section>

      {/* FAQ Section with Tech Design */}
      <section className="py-16 lg:py-24 bg-ti-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 font-extrabold text-ti-gray-dark">
              Preguntas <span className="text-ti-orange">frecuentes</span>
            </h2>
            <p className="text-ti-orange-dark text-2xl font-medium">
              Resolvemos las dudas más comunes sobre automatización con IA
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => <div key={index} className="group">
                <div className="rounded-xl p-6 border border-border hover:border-ti-orange/50 transition-all duration-300 hover:shadow-lg bg-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-ti-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ti-orange/20 transition-colors">
                      <HelpCircle className="w-5 h-5 text-ti-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>

          <div className="text-center mt-12">
            <p className="mb-4 text-ti-orange-dark font-medium">¿Tienes más preguntas técnicas?</p>
            <Button
              variant="orange-outline"
              size="lg"
              className="hover-scale border-ti-orange-dark text-ti-orange-dark hover:bg-ti-orange-dark"
              asChild
            >
              <a
                href="https://wa.me/573245770680"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Bot className="w-4 h-4 mr-2" aria-hidden="true" />
                Hablar con un ingeniero
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA with Futuristic Design */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-ti-orange to-ti-orange-light text-background relative overflow-hidden">
        <FuturisticGrid className="opacity-10" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para el futuro de tu negocio?
            </h2>
            <p className="text-xl mb-8">
              Agenda una demostración personalizada y descubre cómo la IA puede
              transformar tu operación en las próximas semanas.
            </p>
            <Button variant="blue" size="xl" className="w-full whitespace-normal hover-scale sm:w-auto" onClick={handleOpenDemoRequestModal}>
              <Zap className="w-5 h-5 mr-2" />
              Agenda tu demostración personalizada
            </Button>
            <p className="text-sm mt-4">
              45 min • Demostración personalizada • Cotización inmediata • Sin compromiso
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <DemoRequestModal
        key={demoRequestModalKey}
        isOpen={isDemoRequestModalOpen}
        onClose={() => setIsDemoRequestModalOpen(false)}
        formspreeId="manbkkzr" // Assuming this is the correct Formspree ID for demo requests
      />

      <FormspreeModal
        key={quoteModalKey}
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        formspreeId="xpwljjea"
        title="Solicitar cotización"
        description="Déjanos tus datos y te enviaremos una cotización personalizada."
        initialMessage={`Estoy interesado en una cotización para: ${planOfInterest}`}
      />
    </div>;
};
export default Pricing;
