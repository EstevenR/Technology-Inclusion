
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Lightbulb, 
  Handshake, 
  Award, 
  Target,
  Users,
  Globe,
  Zap,
  BookOpen,
  MessageSquare
} from "lucide-react";
import { useState } from 'react';
import { ContactChoiceModal } from '@/components/ContactChoiceModal';

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalKey, setModalKey] = useState(0); // Key to force modal re-mount
  const values = [
    {
      icon: Heart,
      title: "Honestidad",
      description: "Transparencia total en cada proyecto. Hablamos claro sobre alcances, tiempos y resultados esperados."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Soluciones novedosas y eficientes que van más allá de lo convencional. Siempre buscamos la mejor forma de resolver cada desafío."
    },
    {
      icon: Handshake,
      title: "Cercanía",
      description: "Acompañamiento humano y empático. Entendemos que cada negocio es único y merece atención personalizada."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Compromiso con la calidad en cada detalle. No nos conformamos con 'suficiente', buscamos lo excepcional."
    },
    {
      icon: Target,
      title: "Orientación a Resultados",
      description: "Foco en el impacto medible. Cada implementación debe generar valor real y tangible para tu negocio."
    },
    {
      icon: BookOpen,
      title: "Aprendizaje Continuo",
      description: "Nos mantenemos actualizados en tecnologías y tendencias para ofrecer siempre soluciones de vanguardia a nuestras PyMEs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/8d6bf03c-ce21-44b9-b884-69677f5ee197.png" 
              alt="Technology Inclusion Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto text-muted-foreground">
            Conoce la historia, valores y visión detrás de Technology Inclusion
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nacimos para cerrar la brecha digital en Colombia
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-ti-gray leading-relaxed mb-8">
                <strong className="text-ti-orange">Aspiramos a un ecosistema empresarial</strong> donde la tecnología sea el principal aliado del crecimiento para cualquier emprendedor, sin importar el tamaño de su empresa o su nivel de conocimiento técnico.
              </p>
              <p className="text-xl text-ti-gray leading-relaxed">
                <strong className="text-ti-orange">Para lograrlo,</strong> transformamos los procesos rutinarios de las PyMEs en ventajas competitivas a través de soluciones de automatización e inteligencia artificial accesibles, personalizadas y orientadas a resultados medibles.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-ti-orange" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">99%</h3>
              <p className="text-white/80">de empresas en Colombia son PyMEs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-ti-orange" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">67%</h3>
              <p className="text-white/80">del empleo nacional depende de PyMEs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-ti-orange" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">23%</h3>
              <p className="text-white/80">tiene procesos digitalizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada proyecto que emprendemos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ti-orange group-hover:text-white transition-colors">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base text-white/80">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Conoce a las personas apasionadas que hacen posible la transformación digital de las PyMEs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-ti-orange to-ti-orange-light p-8 text-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-16 h-16" />
                    </div>
                    <h3 className="text-2xl font-bold">Fundador & CEO</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">
                      Brayan Steven Murillo Rivas
                    </CardTitle>
                    <CardDescription className="text-lg text-primary/90">
                      Fundador, CEO y Consultor Principal
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 leading-relaxed mb-4">
                      Soy ingeniero de sistemas (en proceso de graduación) con experiencia práctica en el sector ISP, 
                      donde he liderado proyectos de automatización, monitoreo de redes y adopción de IA para pequeñas empresas. 
                      Tras ver de cerca las barreras tecnológicas que frenan a los emprendedores colombianos, decidí crear 
                      Technology Inclusion: una empresa que convierte procesos manuales en ventajas competitivas mediante 
                      soluciones accesibles de automatización e inteligencia artificial.
                    </p>
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-3">Trayectoria destacada:</h4>
                      <div className="space-y-3">
                        <p className="text-white/90 leading-relaxed">
                          <strong className="text-white">Automatización & No-Code:</strong> Implementé bots, integraciones Zabbix–HubSpot 
                          y flujos no-code que redujeron en más del 40% el tiempo de soporte en un ISP local.
                        </p>
                        <p className="text-white/90 leading-relaxed">
                          <strong className="text-white">Monitoreo y telemetría:</strong> Integré dashboards de telemetría y sistemas 
                          de alertas proactivas que mantienen operativos +1,000 dispositivos MikroTik, routers y antenas Cambium.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Mi misión personal</h4>
                      <p className="text-white/90 leading-relaxed">
                        Que ningún emprendedor se sienta excluido del mundo digital por falta de recursos técnicos. 
                        Creo firmemente que la IA y la automatización pueden nivelar el terreno de juego para las PyMEs latinoamericanas.
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-ti-orange to-ti-orange-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Compartimos la misma visión?
          </h2>
          <p className="text-xl mb-8 font-light">
            Si crees que tu PyME merece crecer con tecnología de clase mundial, 
            conversemos sobre cómo podemos ayudarte.
          </p>
          <Button 
            onClick={() => setIsContactModalOpen(true)}
            style={{ backgroundColor: "rgba(6, 5, 22, 1)", color: "#fff" }}
            className="hover:brightness-90"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Iniciemos una Conversación
          </Button>
        </div>
      </section>

      <Footer />

      <ContactChoiceModal
        key={modalKey}
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setModalKey(prevKey => prevKey + 1);
        }}
        whatsappNumber="+573245770680"
        formspreeId="xpwljjea"
      />
    </div>
  );
};

export default About;
