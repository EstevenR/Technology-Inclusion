import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Car,
  CheckCircle2,
  Clock3,
  Gift,
  Handshake,
  MessageSquare,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactChoiceModal } from "@/components/ContactChoiceModal";
import { projectCases } from "@/data/projects";

const results = [
  {
    value: "+300",
    label: "vehículos organizados en una operación de parqueadero",
    icon: Car,
  },
  {
    value: "35 %",
    label: "de reducción documentada en la morosidad",
    icon: BarChart3,
  },
  {
    value: "40 h",
    label: "de trabajo administrativo ahorradas al mes",
    icon: Clock3,
  },
  {
    value: "+1.000",
    label: "dispositivos en experiencia de monitoreo técnico",
    icon: Zap,
  },
];

const principles = [
  {
    title: "Claridad",
    description:
      "Definimos alcances, tiempos y prioridades con un lenguaje fácil de entender.",
    icon: ShieldCheck,
  },
  {
    title: "Cercanía",
    description:
      "Escuchamos a quienes operan el negocio y acompañamos la adopción de cada solución.",
    icon: Handshake,
  },
  {
    title: "Soluciones a medida",
    description:
      "Partimos del proceso real del cliente, no de una herramienta predeterminada.",
    icon: Sparkles,
  },
  {
    title: "Resultados medibles",
    description:
      "Priorizamos mejoras que reduzcan tareas manuales, errores y tiempos de operación.",
    icon: Target,
  },
];

const projectIcons = {
  barberia: Scissors,
  parking: Car,
  "always-style": ShoppingBag,
  "gestos-inolvidables": Gift,
};

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalKey, setModalKey] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-ti-orange/10" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ti-orange/10 blur-[110px]" />
          <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-ti-orange">
              Sobre nosotros
            </p>
            <h1 className="mb-7 text-4xl font-bold leading-tight text-gradient md:text-6xl lg:text-7xl">
              Tecnología que se adapta a tu negocio, no al revés
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Ayudamos a pequeñas empresas a convertir procesos manuales en operaciones
              más simples, visibles y preparadas para crecer.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-ti-orange text-background hover:bg-ti-orange-light">
                <Link to="/proyectos">
                  Conoce nuestros proyectos
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-ti-orange/40 hover:border-ti-orange hover:bg-ti-orange/10"
                onClick={() => setIsContactModalOpen(true)}
              >
                Agenda un diagnóstico
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-ti-orange">
                Nuestra historia
              </p>
              <h2 className="mb-7 text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Nacimos al ver cuánto tiempo pierden los negocios en tareas que pueden simplificarse
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Technology Inclusion surgió al trabajar de cerca con operaciones que dependían
                  de cuadernos, conversaciones dispersas y hojas de cálculo para atender clientes,
                  controlar pagos y tomar decisiones.
                </p>
                <p>
                  Entendimos que el problema no era la falta de herramientas, sino encontrar una
                  solución que respetara la realidad de cada negocio y que su equipo pudiera usar
                  todos los días.
                </p>
                <p className="font-medium text-foreground">
                  Por eso empezamos escuchando el proceso, priorizamos el impacto y construimos
                  únicamente lo que aporta valor real.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl sm:p-10">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-ti-orange text-white shadow-glow">
                <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-card-foreground">Qué hacemos diferente</h3>
              <ul className="space-y-5">
                {[
                  "Entendemos primero cómo funciona tu operación.",
                  "Priorizamos el proceso con mayor impacto.",
                  "Construimos alrededor de tu negocio y tu equipo.",
                  "Medimos resultados y acompañamos la adopción.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-ti-orange" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-ti-gray-light py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-ti-orange-dark">
                Experiencia aplicada
              </p>
              <h2 className="mb-5 text-3xl font-bold text-ti-gray-dark md:text-4xl">
                Resultados que cuentan mejor nuestra <span className="text-ti-orange">historia</span>
              </h2>
              <p className="text-lg text-gray-600">
                La tecnología tiene sentido cuando mejora una operación real.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {results.map((result) => (
                <div key={result.value} className="rounded-2xl border border-border bg-card p-6">
                  <result.icon className="mb-6 h-7 w-7 text-ti-orange" aria-hidden="true" />
                  <p className="text-3xl font-bold text-ti-orange">{result.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-ti-orange">
                Quién está detrás
              </p>
              <h2 className="text-3xl font-bold text-foreground md:text-5xl">
                Experiencia técnica con visión de negocio
              </h2>
            </div>

            <article className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl lg:grid-cols-[0.72fr_1.28fr]">
              <div className="relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-ti-orange to-ti-orange-light p-10 text-center text-background">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-background/30 bg-background/10 text-4xl font-bold backdrop-blur-sm">
                  BSMR
                </div>
                <p className="relative mt-7 text-sm font-semibold uppercase tracking-[0.2em]">
                  Fundador
                </p>
                <p className="relative mt-2 text-xl font-bold">Technology Inclusion</p>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <h3 className="text-3xl font-bold text-card-foreground">Brayan Steven Murillo Rivas</h3>
                <p className="mt-2 font-semibold text-ti-orange">Fundador y consultor principal</p>

                <div className="mt-7 space-y-5 leading-relaxed text-muted-foreground">
                  <p>
                    Combina experiencia en operación de proveedores de internet, automatización,
                    monitoreo e integración de sistemas para resolver problemas cotidianos de
                    pequeñas empresas.
                  </p>
                  <p>
                    Creó Technology Inclusion después de vivir de cerca las barreras que aparecen
                    cuando la tecnología es compleja, costosa o no se adapta a quienes realmente
                    deben utilizarla.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Automatización", "Bots, flujos e integraciones"],
                    ["Operación", "Monitoreo y telemetría"],
                    ["Negocio", "Procesos y resultados"],
                  ].map(([title, description]) => (
                    <div key={title} className="rounded-xl border border-border bg-muted/50 p-4">
                      <p className="font-semibold text-foreground">{title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-muted/20 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-ti-orange">
                Cómo trabajamos
              </p>
              <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">Principios visibles en cada proyecto</h2>
              <p className="text-lg text-muted-foreground">
                No son frases decorativas: son compromisos que orientan cada decisión.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-2xl border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-ti-orange/10 text-ti-orange">
                    <principle.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-ti-orange">
                  Nuestro trabajo
                </p>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Nuestra experiencia se demuestra en soluciones funcionando
                </h2>
              </div>
              <Button asChild variant="outline" className="border-ti-orange/40 hover:bg-ti-orange/10">
                <Link to="/proyectos">
                  Ver todos los proyectos
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projectCases.map((project) => {
                const Icon = projectIcons[project.id];
                return (
                  <Link
                    key={project.id}
                    to={`/proyectos#${project.id}`}
                    className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ti-orange/40"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ti-orange/10 text-ti-orange group-hover:bg-ti-orange group-hover:text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ti-orange">{project.eyebrow}</p>
                        <h3 className="mt-2 text-2xl font-bold text-card-foreground">{project.title}</h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">{project.summary}</p>
                        <span className="mt-5 inline-flex items-center font-semibold text-ti-orange">
                          Conoce el proyecto
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-ti-orange to-ti-orange-light py-16 text-background lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Users className="mx-auto mb-5 h-10 w-10" aria-hidden="true" />
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Cuéntanos qué proceso está frenando tu negocio
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Revisamos tu operación y te mostramos dónde la tecnología puede generar el primer resultado visible.
            </p>
            <Button
              variant="secondary"
              size="xl"
              className="w-full whitespace-normal text-ti-orange hover:bg-white hover:text-ti-orange-dark sm:w-auto"
              onClick={() => setIsContactModalOpen(true)}
            >
              <MessageSquare className="mr-2 h-5 w-5" aria-hidden="true" />
              Agenda un diagnóstico gratuito
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <ContactChoiceModal
        key={modalKey}
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setModalKey((previousKey) => previousKey + 1);
        }}
        whatsappNumber="+573245770680"
        formspreeId="xpwljjea"
      />
    </div>
  );
};

export default About;
