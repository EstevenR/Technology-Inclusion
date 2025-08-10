import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Users, 
  Package, 
  BarChart3, 
  Clock, 
  DollarSign, 
  AlertTriangle,
  TrendingUp,
  Bot,
  Cpu,
  Database,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Solutions = () => {
  const solution1Features = [
    "Facturación electrónica DIAN",
    "CRM básico para clientes",
    "Notificaciones de stock bajo",
    "Reportes básicos de ventas",
    "Backup automático de datos"
  ];

  const solution2Features = [
    "Dashboard de analítica avanzada",
    "Alertas inteligentes",
    "Análisis de tendencias",
    "Segmentación de clientes",
    "Predicción de demanda básica"
  ];

  const solution3Features = [
    "IA para predicción de demanda",
    "RPA para tareas repetitivas",
    "Integración de sistemas",
    "Chatbots inteligentes",
    "Automatización de workflows"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description: "Hasta 40 horas semanales liberadas de tareas administrativas"
    },
    {
      icon: DollarSign,
      title: "Reducción de Costos",
      description: "Disminuye errores costosos y optimiza recursos"
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Escalable",
      description: "Infraestructura que crece contigo sin complicaciones"
    },
    {
      icon: AlertTriangle,
      title: "Menor Riesgo",
      description: "Cumplimiento normativo automático y respaldos seguros"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-ti-orange/20 rounded-full animate-pulse animation-delay-0"></div>
          <div className="absolute top-3/4 right-1/3 w-16 h-16 bg-ti-orange-light/30 rounded-full animate-fade-in animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/6 w-32 h-32 bg-ti-orange/10 rounded-full animate-scale-in animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-ti-orange-dark/25 rounded-full animate-pulse animation-delay-1500"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Nuestras Soluciones
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-8 text-muted-foreground">
            Soluciones a la Medida de tu Crecimiento
          </p>
          <p className="text-lg font-light max-w-3xl mx-auto text-muted-foreground">
            Desde la automatización de tareas básicas hasta la implementación de inteligencia artificial, 
            tenemos un plan para ti.
          </p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Solution 1 */}
          <div className="mb-20">
            <Card className="glass-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary/5 p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <Badge variant="secondary" className="mb-2">Nivel Básico</Badge>
                    <h3 className="text-2xl font-bold text-card-foreground">Automatización de Procesos Administrativos</h3>
                  </div>
                  <div className="space-y-3">
                    {solution1Features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-card-foreground mb-2">
                      Para emprendedores y microempresas
                    </CardTitle>
                    <CardDescription className="text-lg text-foreground/90">
                      Ideal para empresas que buscan organizar su operación diaria y dar el primer paso hacia la digitalización.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-card-foreground mb-3">¿Qué incluye?</h4>
                      <p className="text-foreground/80 mb-4">
                        Un sistema integral que automatiza facturación electrónica, organiza clientes y controla inventario básico. 
                        Diseñado para ser simple pero poderoso.
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-card-foreground mb-3">Beneficios clave:</h4>
                      <ul className="space-y-2 text-foreground/80">
                        <li>• Ahorra hasta 20 horas semanales de trabajo administrativo</li>
                        <li>• Evita errores en facturas y cumple con la DIAN automáticamente</li>
                        <li>• Nunca pierdas una venta por falta de stock</li>
                        <li>• Mejora la relación con clientes mediante seguimiento organizado</li>
                      </ul>
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground focus-enhanced"
                    >
                      Solicitar Cotización <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>

          {/* Solution 2 */}
          <div className="mb-20">
            <Card className="overflow-hidden shadow-xl border-none">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-ti-orange/20 to-ti-orange-light/20 p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-ti-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <Badge variant="default" className="mb-2 bg-ti-orange">Nivel Intermedio</Badge>
                    <h3 className="text-2xl font-bold text-white">Inteligencia de Negocios</h3>
                  </div>
                  <div className="space-y-3">
                    {solution2Features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-ti-orange" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      Para empresas en crecimiento
                    </CardTitle>
                    <CardDescription className="text-lg text-foreground/90">
                      Ideal para empresas que ya tienen su operación base controlada y necesitan datos para tomar mejores decisiones.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">¿Qué incluye?</h4>
                      <p className="text-foreground/80 mb-4">
                        Dashboard de analítica avanzada con visualización de datos en tiempo real, alertas inteligentes y 
                        herramientas de análisis predictivo básico para anticiparte a las tendencias.
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Beneficios clave:</h4>
                      <ul className="space-y-2 text-foreground/80">
                        <li>• Visibilidad total de tu negocio en un solo lugar</li>
                        <li>• Decisiones basadas en datos reales, no intuición</li>
                        <li>• Anticipación a problemas antes de que ocurran</li>
                        <li>• Identificación de oportunidades de crecimiento</li>
                      </ul>
                    </div>
                    <Button variant="orange" size="lg" className="w-full md:w-auto">
                      Solicitar Cotización <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>

          {/* Solution 3 */}
          <div className="mb-20">
            <Card className="overflow-hidden shadow-xl border-none">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-ti-orange/30 to-ti-orange-light/30 p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-ti-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bot className="w-10 h-10 text-white" />
                    </div>
                    <Badge variant="default" className="mb-2 bg-ti-orange-dark">Nivel Avanzado</Badge>
                    <h3 className="text-2xl font-bold text-white">Automatización Avanzada con IA y RPA</h3>
                  </div>
                  <div className="space-y-3">
                    {solution3Features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-ti-orange" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      Para PyMEs que buscan ventaja competitiva
                    </CardTitle>
                    <CardDescription className="text-lg text-foreground/90">
                      Soluciones de vanguardia para empresas que quieren liderar su sector con tecnología de punta.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">¿Qué incluye?</h4>
                      <p className="text-foreground/80 mb-4">
                        Módulos de inteligencia artificial para predicción de demanda, RPA para automatizar cualquier tarea repetitiva, 
                        integración completa de sistemas y chatbots inteligentes para atención al cliente 24/7.
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Beneficios clave:</h4>
                      <ul className="space-y-2 text-foreground/80">
                        <li>• Optimización máxima de recursos y procesos</li>
                        <li>• Predicción del futuro para mejores inversiones</li>
                        <li>• Experiencia de cliente superior y diferenciada</li>
                        <li>• Automatización de hasta el 80% de tareas rutinarias</li>
                      </ul>
                    </div>
                    <Button variant="hero" size="lg" className="w-full md:w-auto">
                      Contactar Especialista <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 lg:py-24 bg-ti-gray-light overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-16 right-16 w-20 h-20 bg-ti-orange/15 rounded-full animate-pulse animation-delay-500"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-ti-orange-light/20 rounded-full animate-fade-in animation-delay-1200"></div>
          <div className="absolute top-1/2 left-1/2 w-14 h-14 bg-ti-orange/10 rounded-full animate-scale-in animation-delay-800"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ti-orange mb-4">
              Beneficios Transversales
            </h2>
            <p className="text-xl text-ti-gray max-w-3xl mx-auto">
              Sin importar qué solución elijas, estos son los beneficios que experimentarás
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-36 h-36 bg-ti-orange/15 rounded-full animate-pulse animation-delay-300"></div>
          <div className="absolute bottom-16 right-12 w-24 h-24 bg-ti-orange-light/20 rounded-full animate-fade-in animation-delay-900"></div>
          <div className="absolute top-2/3 left-1/3 w-18 h-18 bg-ti-orange/12 rounded-full animate-scale-in animation-delay-1400"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tecnologías que Utilizamos
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
              <h3 className="text-xl font-semibold text-foreground mb-2">Inteligencia Artificial</h3>
              <p className="text-foreground/70">Machine Learning, NLP y análisis predictivo</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-ti-orange" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Bases de Datos</h3>
              <p className="text-foreground/70">SQL Server, PostgreSQL, MongoDB</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-ti-orange" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">APIs e Integraciones</h3>
              <p className="text-foreground/70">REST, GraphQL, Webhooks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-ti-orange to-ti-orange-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿No sabes cuál solución necesitas?
          </h2>
          <p className="text-xl mb-8 font-light">
            Agenda una consultoría gratuita y te ayudamos a identificar 
            la mejor estrategia de automatización para tu negocio.
          </p>
          <Button variant="secondary" size="xl" className="text-ti-orange hover:bg-white">
            Agenda tu Consultoría Gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;