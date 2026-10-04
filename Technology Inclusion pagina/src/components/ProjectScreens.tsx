import { useEffect, useMemo, useState } from "react";
import { Lock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { ProjectScreenshot } from "@/data/projects";

interface ProjectScreensProps {
  screenshots: ProjectScreenshot[];
  liveUrl?: string;
  label?: string;
  autoplayMs?: number;
}

const getDisplayUrl = (liveUrl?: string) => {
  if (!liveUrl) return "Vista previa — aún no publicado";
  try {
    return new URL(liveUrl).hostname;
  } catch {
    return liveUrl;
  }
};

const ProjectScreens = ({ screenshots, liveUrl, autoplayMs = 4500 }: ProjectScreensProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Referencia estable: si se recrea en cada render, Embla reinicializa el
  // carrusel constantemente y los puntos/flechas dejan de responder.
  const carouselOpts = useMemo(() => ({ loop: true }), []);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api || isPaused || screenshots.length <= 1) return;

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, autoplayMs);

    return () => window.clearInterval(interval);
  }, [api, isPaused, autoplayMs, screenshots.length]);

  if (screenshots.length === 0) return null;

  const displayUrl = getDisplayUrl(liveUrl);

  return (
    <div
      className="group/screens mx-auto w-full max-w-3xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* "Laptop": marco oscuro que simula la pantalla de un computador */}
      <div className="rounded-t-2xl rounded-b-md bg-gradient-to-b from-zinc-700 to-zinc-900 p-2.5 pb-3 shadow-2xl sm:p-3 sm:pb-4">
        <div className="relative overflow-hidden rounded-lg bg-card">
          {/* Barra de navegador con la URL real de la plataforma */}
          <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex flex-1 items-center justify-center gap-1.5 truncate rounded-full bg-background px-3 py-1 text-xs text-muted-foreground sm:text-sm">
              <Lock className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
              <span className="truncate">{displayUrl}</span>
            </div>
          </div>

          <Carousel setApi={setApi} opts={carouselOpts} className="w-full">
            <CarouselContent className="-ml-0">
              {screenshots.map((shot) => (
                <CarouselItem key={shot.src} className="pl-0">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {screenshots.length > 1 && (
              <>
                <CarouselPrevious className="left-3 opacity-80 transition-opacity md:opacity-0 md:group-hover/screens:opacity-100" />
                <CarouselNext className="right-3 opacity-80 transition-opacity md:opacity-0 md:group-hover/screens:opacity-100" />
              </>
            )}
          </Carousel>
        </div>
      </div>

      {/* Base del "laptop" */}
      <div className="mx-auto h-3 w-[86%] rounded-b-xl bg-gradient-to-b from-zinc-400 to-zinc-500 shadow-md sm:h-4" />
      <div className="mx-auto h-1.5 w-[40%] rounded-b-lg bg-gradient-to-b from-zinc-500 to-zinc-600" />

      {screenshots.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-1">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ver captura ${index + 1} de ${screenshots.length}`}
              className="flex items-center justify-center p-2.5"
            >
              <span
                className={`block h-1.5 rounded-full transition-all ${
                  current === index ? "w-6 bg-ti-orange" : "w-1.5 bg-border"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectScreens;
