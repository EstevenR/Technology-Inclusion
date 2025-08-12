import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DiagnosisForm from "@/components/DiagnosisForm";
import { 
  Search, 
  Lightbulb, 
  Cog, 
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target
} from "lucide-react";

const Process = () => {
  const [isDiagnosisModalOpen, setIsDiagnosisModalOpen] = useState(false);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico y Mapeo de Procesos",
      duration: "1-2 semanas",
      description: "Nos reunimos contigo para entender a fondo tu negocio. Mapeamos tus flujos de trabajo actuales para identificar los cuellos de botella y las oportunidades reales de automatización.",
      activities: [
        "Entrevistas con el equipo clave",
        "Análisis de procesos actuales",
        "Identificación de oportunidades",
        "Evaluación de sistemas existentes",
        "Definición de objetivos y KPIs"
      ],
      deliverable: "Diagnóstico completo con recomendaciones priorizadas"
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Diseño de la Solución Personalizada",
      duration: "1-2 semanas",
      description: "Te presentamos un plan de automatización claro y realista. Definimos juntos los objetivos, el alcance y el impacto esperado antes de escribir una sola línea de código.",
      activities: [
        "Diseño de arquitectura de solución",
        "Mockups y prototipos",
        "Plan de implementación por fases",
        "Estimación de recursos y tiempos",
        "Definición de métricas de éxito"
      ],
      deliverable: "Propuesta técnica detallada con cronograma y presupuesto"
    },
    {
      number: "03",
      icon: Cog,
      title: "Implementación Ágil y Acompañamiento",
      duration: "4-12 semanas",
      description: "Desarrollamos e implementamos la solución por fases (empezando con tu MVP) para que veas resultados rápidos. Te capacitamos y nos aseguramos de que tu equipo adopte la nueva tecnología sin fricciones.",
      activities: [
        "Desarrollo en sprints cortos",
        "Pruebas y validación continua",
        "Capacitación del equipo",
        "Migración gradual de datos",
        "Puesta en producción por fases"
      ],
      deliverable: "Sistema funcionando con equipo capacitado"
    },
    {
      number: "04",
      icon: HeadphonesIcon,
      title: "Soporte y Optimización Continua",
      duration: "Permanente",
      description: "Somos tu socio a largo plazo. Monitoreamos los resultados y te proponemos mejoras continuas para que tu negocio nunca deje de ser eficiente.",
      activities: [
        "Monitoreo de performance",
        "Soporte técnico 24/7",
        "Actualizaciones y mejoras",
        "Análisis de nuevas oportunidades",
        "Reportes mensuales de resultados"
      ],
      deliverable: "Mejora continua y evolución del sistema"
    }
  ];

  const differentiators = [
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description: "No vendemos tecnología, vendemos soluciones que generen impacto medible en tu negocio."
    },
    {
      icon: Users,
      title: "Acompañamiento Humano",
      description: "Entendemos que cambiar es difícil. Te acompañamos en cada paso con paciencia y empatía."
    },
    {
      icon: Clock,
      title: "Implementación Ágil",
      description: "Ves resultados rápidos con nuestro enfoque de implementación por fases pequeñas y funcionales."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Nuestro Proceso
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-8 text-muted-foreground">
            Más que un Producto, una Transformación a tu Medida
          </p>
          <p className="text-lg font-light max-w-3xl mx-auto text-muted-foreground">
            Cada proyecto es único, por eso seguimos una metodología probada que se adapta 
            a las necesidades específicas de tu negocio.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                
                <Card className="overflow-hidden shadow-xl border-none">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-ti-orange/10 to-ti-orange-light/10 p-8">
                      <div className="text-center mb-6">
                        <div className="relative">
                          <div className="w-20 h-20 bg-ti-orange rounded-full flex items-center justify-center mx-auto mb-4">
                            <step.icon className="w-10 h-10 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-ti-orange-dark rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {step.number}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-ti-orange/20 text-ti-orange text-sm font-medium">
                          <Clock className="w-4 h-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-white text-sm mb-3">Actividades principales:</h4>
                        {step.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-ti-orange mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-white font-medium">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-8">
                      <CardHeader>
                        <CardDescription className="text-lg leading-relaxed text-ti-gray">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-ti-gray-dark/20 p-4 rounded-lg mb-6">
                          <h4 className="font-semibold text-white mb-2">Entregable de esta fase:</h4>
                          <p className="text-white">{step.deliverable}</p>
                        </div>
                        
                        {index === 0 && (
                          <div className="space-y-4">
                            <h4 className="font-semibold text-ti-orange">¿Por qué empezamos aquí?</h4>
                            <p className="text-ti-gray">
                              Muchas empresas fallan en automatización porque implementan tecnología sin entender 
                              realmente sus procesos. Nosotros invertimos tiempo en conocer a fondo tu negocio 
                              antes de proponer cualquier solución.
                            </p>
                          </div>
                        )}
                        
                        {index === 1 && (
                          <div className="space-y-4">
                            <h4 className="font-semibold text-ti-orange">Transparencia total</h4>
                            <p className="text-ti-gray">
                              Antes de comenzar el desarrollo, tienes claridad completa sobre qué vas a recibir, 
                              cuánto va a costar, cuánto tiempo tomará y qué resultados puedes esperar.
                            </p>
                          </div>
                        )}
                        
                        {index === 2 && (
                          <div className="space-y-4">
                            <h4 className="font-semibold text-ti-orange">Metodología ágil</h4>
                            <p className="text-ti-gray">
                              Trabajamos en ciclos cortos de 2-3 semanas. Cada ciclo entrega funcionalidad usable, 
                              por lo que empiezas a ver beneficios desde las primeras semanas.
                            </p>
                          </div>
                        )}
                        
                        {index === 3 && (
                          <div className="space-y-4">
                            <h4 className="font-semibold text-ti-orange">Crecimiento conjunto</h4>
                            <p className="text-ti-gray">
                              A medida que tu negocio evoluciona, tu tecnología debe evolucionar también. 
                              Nos mantenemos al día con las últimas innovaciones para proponerte mejoras continuas.
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-16 lg:py-24 bg-ti-gray-light overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-ti-orange/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-ti-orange-light/30 rounded-full animate-fade-in animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-ti-orange/10 rounded-full animate-scale-in animation-delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-ti-orange-dark/20 rounded-full animate-pulse animation-delay-1500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ti-orange mb-4">
              ¿Qué nos hace diferentes?
            </h2>
            <p className="text-xl text-ti-gray max-w-3xl mx-auto">
              Nuestro proceso está diseñado específicamente para PyMEs que quieren resultados reales, no solo tecnología bonita.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
                <CardHeader>
                  <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <diff.icon className="w-8 h-8 text-ti-orange" />
                  </div>
                  <CardTitle className="text-xl text-white">{diff.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{diff.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestra Metodología de Trabajo
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Principios que nos guían</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ti-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Primero entender, luego automatizar</h4>
                    <p className="text-white">No automatizamos procesos rotos. Primero los optimizamos, luego los digitalizamos.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ti-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Resultados rápidos y tangibles</h4>
                    <p className="text-white">Cada fase del proyecto debe generar valor inmediato y medible para tu negocio.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ti-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Tecnología simple y robusta</h4>
                    <p className="text-white">Priorizamos soluciones que tu equipo pueda entender y usar sin complicaciones.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ti-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Transferencia de conocimiento</h4>
                    <p className="text-white">Te capacitamos para que puedas gestionar y evolucionar la solución de forma autónoma.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-ti-orange/10 to-ti-orange-light/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Garantía de Satisfacción</h3>
              <p className="text-white mb-6">
                Estamos tan seguros de nuestro proceso que ofrecemos una garantía única: 
                si después de la fase de diagnóstico no ves valor claro en nuestras recomendaciones, 
                no pagas nada.
              </p>
              <div className="bg-white p-4 rounded-lg border-l-4 border-ti-orange">
                <p className="text-sm text-ti-gray">
                  <strong className="text-ti-orange">Nuestro compromiso:</strong> Solo avanzamos a la implementación 
                  cuando estés 100% convencido de que la solución propuesta transformará tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-ti-orange to-ti-orange-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-xl mb-8 font-light">
            El primer paso es una conversación. Agenda tu diagnóstico gratuito 
            y descubre las oportunidades ocultas en tu negocio.
          </p>
          <Button variant="secondary" size="xl" className="text-ti-orange hover:bg-white" onClick={() => setIsDiagnosisModalOpen(true)}>
            Iniciar mi Diagnóstico <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm mt-4 opacity-90">
            Sin compromiso • Sin costo • Sin letra pequeña
          </p>
        </div>
      </section>

      <Footer />

      {isDiagnosisModalOpen && (
        <DiagnosisForm isOpen={isDiagnosisModalOpen} onClose={() => setIsDiagnosisModalOpen(false)} />
      )}
    </div>
  );
};

export default Process;