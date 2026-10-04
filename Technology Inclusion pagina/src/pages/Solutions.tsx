import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Clock,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  Bot,
  Code2,
  RefreshCw,
  Cpu,
  Database,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useState } from 'react';
import { FormspreeModal } from '@/components/FormspreeModal';
import { ContactChoiceModal } from '@/components/ContactChoiceModal';
import { ConsultationModal } from '@/components/ConsultationModal';


const Solutions = () => {
  const [isFormspreeModalOpen, setIsFormspreeModalOpen] = useState(false);

  const [solutionOfInterest, setSolutionOfInterest] = useState('');
  const [isContactChoiceModalOpen, setIsContactChoiceModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const pillars = [
    {
      icon: Bot,
      title: "Automatización e IA aplicada",
      description:
        "Conectamos inteligencia artificial y automatización a tus procesos para que tu equipo se enfoque en lo que realmente importa.",
      features: [
        "Chatbots inteligentes y atención automatizada",
        "RPA para tareas repetitivas",
        "Predicción básica de demanda",
        "Flujos de trabajo automáticos",
        "Monitoreo y alertas tempranas",
      ],
      cta: "Explorar automatización e IA",
    },
    {
      icon: Code2,
      title: "Desarrollo de productos digitales",
      description:
        "Diseñamos y construimos las aplicaciones y sitios que tu negocio necesita para operar y vender en línea.",
      features: [
        "Apps web y móviles (PWA)",
        "Sitios y catálogos digitales",
        "Integraciones y APIs (WhatsApp Business, Formspree, DIAN)",
        "Paneles a medida para tu operación",
      ],
      cta: "Explorar desarrollo de productos",
    },
    {
      icon: RefreshCw,
      title: "Digitalización de operaciones",
      description:
        "Sacamos tu negocio del cuaderno y el Excel para que tengas control real de clientes, inventario y finanzas.",
      features: [
        "Facturación electrónica DIAN automatizada",
        "Integración con Siigo, Alegra, SAP",
        "Paneles y reportes de negocio",
        "Control de clientes e inventario en un solo lugar",
      ],
      cta: "Explorar digitalización de operaciones",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de tiempo",
      description: "Hasta 40 horas semanales liberadas de tareas administrativas"
    },
    {
      icon: DollarSign,
      title: "Reducción de costos",
      description: "Disminuye errores costosos y optimiza recursos"
    },
    {
      icon: TrendingUp,
      title: "Crecimiento escalable",
      description: "Infraestructura que crece contigo sin complicaciones"
    },
    {
      icon: AlertTriangle,
      title: "Menor riesgo",
      description: "Cumplimiento normativo automático y respaldos seguros"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20 blur-2xl">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-ti-orange/20 rounded-full animate-pulse animation-delay-0"></div>
          <div className="absolute top-3/4 right-1/3 w-16 h-16 bg-ti-orange-light/30 rounded-full animate-fade-in animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-[16%] w-32 h-32 bg-ti-orange/10 rounded-full animate-scale-in animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-ti-orange-dark/25 rounded-full animate-pulse animation-delay-1500"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Nuestras soluciones
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-8 text-muted-foreground">
            Soluciones a la medida de tu crecimiento
          </p>
          <p className="text-lg font-light max-w-3xl mx-auto text-muted-foreground">
            Tres frentes de trabajo, un mismo objetivo: que tu negocio opere mejor.
          </p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="glass-card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-ti-orange/40"
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-ti-orange/10 text-ti-orange">
                    <pillar.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl text-card-foreground">{pillar.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/80">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="mb-8 flex-1 space-y-3">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-ti-orange" aria-hidden="true" />
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-ti-orange/40 hover:bg-ti-orange/10"
                    onClick={() => {
                      setSolutionOfInterest(pillar.title);
                      setIsFormspreeModalOpen(true);
                    }}
                  >
                    {pillar.cta} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 lg:py-24 bg-ti-gray-light overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 opacity-25 blur-2xl">
          <div className="absolute top-16 right-16 w-20 h-20 bg-ti-orange/15 rounded-full animate-pulse animation-delay-500"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-ti-orange-light/20 rounded-full animate-fade-in animation-delay-1200"></div>
          <div className="absolute top-1/2 left-1/2 w-14 h-14 bg-ti-orange/10 rounded-full animate-scale-in animation-delay-800"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ti-gray-dark mb-4">
              Beneficios <span className="text-ti-orange">transversales</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sin importar qué solución elijas, estos son los beneficios que experimentarás
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow border-none">
                <CardHeader>
                  <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-ti-orange" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/70">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Grid Animation */}
        <div className="absolute inset-0 opacity-10 blur-2xl">
          <div className="absolute top-10 left-10 w-36 h-36 bg-ti-orange/15 rounded-full animate-pulse animation-delay-300"></div>
          <div className="absolute bottom-16 right-12 w-24 h-24 bg-ti-orange-light/20 rounded-full animate-fade-in animation-delay-900"></div>
          <div className="absolute top-2/3 left-1/3 w-18 h-18 bg-ti-orange/12 rounded-full animate-scale-in animation-delay-1400"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tecnologías que utilizamos
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Trabajamos con las herramientas más modernas y confiables del mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-ti-orange" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Inteligencia artificial</h3>
              <p className="text-foreground/70">Aprendizaje automático, procesamiento del lenguaje natural y análisis predictivo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-ti-orange" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Bases de datos</h3>
              <p className="text-foreground/70">SQL Server, PostgreSQL, MongoDB</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-ti-orange" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">API e integraciones</h3>
              <p className="text-foreground/70">REST, GraphQL y webhooks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-ti-orange to-ti-orange-light text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿No sabes cuál solución necesitas?
          </h2>
          <p className="text-xl mb-8">
            Agenda una consultoría gratuita y te ayudamos a identificar
            la mejor estrategia de automatización para tu negocio.
          </p>
          <Button variant="secondary" size="xl" className="w-full whitespace-normal text-ti-orange hover:bg-white hover:text-ti-orange-dark sm:w-auto"
            onClick={() => setIsConsultationModalOpen(true)}
          >
            Agenda tu consultoría gratuita
          </Button>
        </div>
      </section>

      <Footer />

      <FormspreeModal
        isOpen={isFormspreeModalOpen}
        onClose={() => setIsFormspreeModalOpen(false)}
        formspreeId="xpwljjea" // Using the contact formspree ID
        title="Solicitar cotización"
        description="Déjanos tus datos y te enviaremos una cotización personalizada."
        initialMessage={`Estoy interesado en una cotización para: ${solutionOfInterest}`}
      />

      <ContactChoiceModal
        isOpen={isContactChoiceModalOpen}
        onClose={() => setIsContactChoiceModalOpen(false)}
        whatsappNumber="+573245770680" // Confirmed WhatsApp number
        formspreeId="xpwljjea" // Using the contact formspree ID
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      
    </div>
  );
};

export default Solutions;
