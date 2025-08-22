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

  const handleOpenDemoRequestModal = () => {
    setDemoRequestModalKey(prevKey => prevKey + 1);
    setIsDemoRequestModalOpen(true);
  };

  const packages = [{
    title: "EMPRENDEDOR",
    description: "Tu primer paso hacia la automatización inteligente",
    features: ["Facturación electrónica DIAN automatizada", "CRM básico con seguimiento de clientes", "Control de inventario en tiempo real", "Dashboard de métricas básicas", "Backup automático en la nube", "Capacitación completa del equipo", "Soporte técnico por 3 meses", "Actualizaciones incluidas"],
    price: "Plan Emprendedor",
    badge: "Más Popular",
    ctaText: "Cotizar Paquete Emprendedor",
    variant: "featured" as const,
    icon: <Rocket className="w-6 h-6" />
  }, {
    title: "CRECIMIENTO",
    description: "Inteligencia de negocios para decisiones estratégicas",
    features: ["Todo lo del paquete Emprendedor", "Analytics avanzado con IA", "Alertas inteligentes personalizadas", "Predicción de tendencias de venta", "Segmentación automática de clientes", "Reportes ejecutivos automatizados", "API para integraciones", "Soporte técnico por 6 meses", "Consultoría mensual incluida"],
    price: "Plan Crecimiento",
    badge: "Recomendado",
    ctaText: "Cotizar Paquete Crecimiento",
    variant: "default" as const,
    icon: <BarChart3 className="w-6 h-6" />
  }, {
    title: "EMPRESARIAL",
    description: "Automatización avanzada con IA y RPA de vanguardia",
    features: ["Todo lo de paquetes anteriores", "IA avanzada para predicción de demanda", "RPA para automatización completa", "Integración con sistemas legacy", "Chatbots inteligentes con NLP", "Workflows automáticos complejos", "API empresarial personalizada", "Soporte técnico dedicado", "Roadmap de innovación trimestral"],
    price: "Plan Empresarial",
    badge: "Premium",
    ctaText: "Contactar Especialista",
    variant: "premium" as const,
    icon: <Crown className="w-6 h-6" />
  }];
  const implementationSteps = [{
    step: 1,
    title: "Diagnóstico Integral",
    description: "Analizamos tu operación actual y mapeamos oportunidades de automatización con IA",
    icon: <Target className="w-5 h-5" />,
    isActive: false
  }, {
    step: 2,
    title: "Diseño de Solución",
    description: "Creamos la arquitectura técnica perfecta para tu negocio específico",
    icon: <Code className="w-5 h-5" />
  }, {
    step: 3,
    title: "Desarrollo Ágil",
    description: "Implementamos por fases para que veas resultados desde la primera semana",
    icon: <Zap className="w-5 h-5" />
  }, {
    step: 4,
    title: "Go Live & Optimización",
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
    answer: "Soporte multicanal vía WhatsApp, email y videollamada. Plan Empresarial incluye ingeniero asignado y soporte técnico dedicado."
  }, {
    question: "¿Se integra con mis sistemas actuales?",
    answer: "Sí. Nos especializamos en integraciones complejas. Conectamos con SIIGO, Alegra, SAP, bases de datos legacy y cualquier API existente."
  }, {
    question: "¿Qué pasa si mi industria es muy específica?",
    answer: "Perfecto. Cada implementación es 100% personalizada. Los paquetes son marcos base que adaptamos completamente a tu sector e industria."
  }];
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      {/* Hero Section with Futuristic Grid */}
      <section className="relative bg-gradient-to-br from-ti-gray-dark via-ti-gray-dark to-black text-white py-20 lg:py-32 overflow-hidden">
        <FuturisticGrid opacity={0.15} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-ti-orange/20 text-ti-orange border-ti-orange/30">
              <Brain className="w-4 h-4 mr-2" />
              Powered by AI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-ti-orange-light bg-clip-text text-transparent">
              Precios del Futuro
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
              Escoge tu Nivel de Automatización
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada paquete incluye IA, implementación completa y soporte. 
              <strong className="text-ti-orange"> Escala cuando estés listo.</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => <TechCard key={index} title={pkg.title} description={pkg.description} features={pkg.features} price={pkg.price} badge={pkg.badge} ctaText={pkg.ctaText} variant={pkg.variant} icon={pkg.icon} onCtaClick={() => console.log(`CTA clicked: ${pkg.title}`)} className="h-full" />)}
          </div>

          {/* Value propositions with tech styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            Icon: Shield,
            title: "Garantía Total",
            desc: "30 días para evaluar. No convence, te devolvemos todo."
          }, {
            Icon: Clock,
            title: "Sin Permanencia",
            desc: "Cancela cuando quieras después de 3 meses."
          }, {
            Icon: CheckCircle,
            title: "Todo Incluido",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-950">
              Proceso de Implementación
            </h2>
            <p className="text-xl text-ti-orange">
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
          <CompatibilityGrid title="Compatible con tu Stack Tecnológico" subtitle="Nos integramos sin problemas con las herramientas que ya usas" items={compatibleTech} />
        </div>
      </section>

      {/* FAQ Section with Tech Design */}
      <section className="py-16 lg:py-24 bg-ti-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 font-extrabold text-zinc-900">
              Preguntas Frecuentes
            </h2>
            <p className="text-ti-orange text-2xl">
              Resolvemos las dudas más comunes sobre automatización con IA
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => <div key={index} className="group">
                <div className="rounded-xl p-6 border border-border hover:border-ti-orange/50 transition-all duration-300 hover:shadow-lg bg-slate-950">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-ti-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ti-orange/20 transition-colors">
                      <HelpCircle className="w-5 h-5 text-ti-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-ti-gray-dark text-zinc-50">
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
            <p className="mb-4 text-orange-600">¿Tienes más preguntas técnicas?</p>
            <Button variant="orange-outline" size="lg" className="hover-scale">
              <Bot className="w-4 h-4 mr-2" />
              Hablar con un Ingeniero
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA with Futuristic Design */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-ti-orange to-ti-orange-light text-white relative overflow-hidden">
        <FuturisticGrid className="opacity-10" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para el Futuro de tu Negocio?
            </h2>
            <p className="text-xl mb-8 font-light">
              Agenda una demo personalizada y descubre cómo la IA puede 
              transformar tu operación en las próximas semanas.
            </p>
            <Button variant="secondary" size="xl" className="bg-white text-ti-orange hover:bg-white/90 hover-scale" onClick={handleOpenDemoRequestModal}>
              <Zap className="w-5 h-5 mr-2" />
              Agenda Demo en Vivo
            </Button>
            <p className="text-sm mt-4 opacity-90">
              45 min • Demo personalizada • Cotización inmediata • Sin compromiso
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
    </div>;
};
export default Pricing;