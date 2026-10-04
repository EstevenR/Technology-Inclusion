import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Car, CheckCircle2, ExternalLink, Gift, Scissors, ShoppingBag, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DiagnosisForm from "@/components/DiagnosisForm";
import ProjectScreens from "@/components/ProjectScreens";
import { projectCases } from "@/data/projects";

const projectIcons = {
  barberia: Scissors,
  parking: Car,
  "always-style": ShoppingBag,
  "gestos-inolvidables": Gift,
};

const Projects = () => {
  const [isDiagnosisModalOpen, setIsDiagnosisModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const projectId = location.hash.slice(1);

    if (!projectId) {
      window.scrollTo({ top: 0 });
      return;
    }

    const scrollToProject = window.setTimeout(() => {
      document.getElementById(projectId)?.scrollIntoView({ block: "start" });
    }, 0);

    return () => window.clearTimeout(scrollToProject);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="relative flex min-h-[58vh] items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-ti-orange/10" />
          <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-ti-orange">
              Experiencia aplicada
            </p>
            <h1 className="mb-6 text-4xl font-bold text-gradient md:text-6xl">
              Proyectos realizados
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Soluciones construidas para negocios reales que necesitaban ordenar
              su operación, reducir tareas manuales y tomar decisiones con mejor
              información.
            </p>
          </div>
        </section>

        <section className="bg-ti-gray-light py-20 lg:py-28" aria-label="Casos de proyectos realizados">
          <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
            {projectCases.map((project, index) => {
              const Icon = projectIcons[project.id];

              return (
                <article
                  id={project.id}
                  key={project.id}
                  className="scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
                >
                  {project.screenshots.length > 0 && (
                    <div className="bg-muted/30 p-6 sm:p-8 lg:p-10">
                      <ProjectScreens
                        screenshots={project.screenshots}
                        liveUrl={project.liveUrl}
                      />
                    </div>
                  )}

                  <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                    <div
                      className={`relative overflow-hidden p-8 sm:p-10 lg:p-12 ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-ti-orange/10 blur-3xl" />
                      <div className="relative">
                        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-ti-orange text-white shadow-glow">
                          <Icon className="h-8 w-8" aria-hidden="true" />
                        </div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ti-orange">
                          {project.eyebrow}
                        </p>
                        <h2 className="mb-5 text-3xl font-bold text-card-foreground sm:text-4xl">
                          {project.title}
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                          {project.summary}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-ti-orange hover:text-ti-orange-dark"
                            >
                              Visitar sitio en vivo
                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            </a>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-ti-orange/40 hover:bg-ti-orange/10"
                            onClick={() => setIsDiagnosisModalOpen(true)}
                          >
                            Quiero algo similar
                          </Button>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                          {project.outcomes.map((outcome) => (
                            <div
                              key={outcome.value}
                              className="rounded-2xl border border-ti-orange/20 bg-ti-orange/5 p-5"
                            >
                              <p className="text-2xl font-bold text-ti-orange">
                                {outcome.value}
                              </p>
                              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                {outcome.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`border-t border-border bg-muted/30 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12 ${
                        index % 2 === 1 ? "lg:order-1 lg:border-l-0 lg:border-r" : ""
                      }`}
                    >
                      <div className="space-y-8">
                        <div>
                          <p className="mb-2 text-sm font-semibold text-ti-orange">
                            El reto
                          </p>
                          <p className="leading-relaxed text-muted-foreground">
                            {project.challenge}
                          </p>
                        </div>

                        <div>
                          <p className="mb-2 text-sm font-semibold text-ti-orange">
                            Lo que construimos
                          </p>
                          <p className="leading-relaxed text-muted-foreground">
                            {project.solution}
                          </p>
                        </div>

                        <div>
                          <p className="mb-4 text-sm font-semibold text-ti-orange">
                            Funciones principales
                          </p>
                          <ul className="grid gap-3 sm:grid-cols-2">
                            {project.capabilities.map((capability) => (
                              <li key={capability} className="flex items-start gap-3 text-sm text-foreground">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-ti-orange" aria-hidden="true" />
                                <span>{capability}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 border-t border-border pt-6">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-gradient-to-r from-ti-orange to-ti-orange-light py-16 text-background lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Zap className="mx-auto mb-5 h-10 w-10" aria-hidden="true" />
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Tu proceso también puede ser más simple
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Revisamos cómo trabajas hoy y te mostramos qué conviene automatizar primero.
            </p>
            <Button
              variant="secondary"
              size="xl"
              className="w-full whitespace-normal text-ti-orange hover:bg-white hover:text-ti-orange-dark sm:w-auto"
              onClick={() => setIsDiagnosisModalOpen(true)}
            >
              Agenda tu diagnóstico gratuito
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <DiagnosisForm
        isOpen={isDiagnosisModalOpen}
        onClose={() => setIsDiagnosisModalOpen(false)}
      />
    </div>
  );
};

export default Projects;
