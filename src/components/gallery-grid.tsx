import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { GalleryPhoto } from "@/lib/gallery";

type GalleryGridProps = {
  photos: GalleryPhoto[];
};

export function GalleryGrid({ photos }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : photos[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + delta + photos.length) % photos.length;
      });
    },
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, step]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <li key={photo.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={`Open larger view: ${photo.caption}`}
            >
              <span className="block aspect-[4/3] overflow-hidden bg-brand-ink">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </span>
              <span className="mt-3 flex items-center justify-between gap-3 border-l-4 border-primary pl-3">
                <span className="text-sm font-semibold text-foreground">{photo.caption}</span>
                <span className="text-xs uppercase text-muted-foreground">View</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-50 grid place-items-center bg-overlay p-4"
          onClick={close}
        >
          <div className="w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between gap-3 pb-3 text-brand-paper">
              <p className="font-display text-xl font-bold">{active.caption}</p>
              <Button type="button" variant="inverse" size="icon" aria-label="Close photo preview" onClick={close} autoFocus>
                <X aria-hidden="true" />
              </Button>
            </div>
            <img src={active.url} alt={active.alt} className="max-h-[70dvh] w-full bg-brand-ink object-contain" />
            <div className="mt-3 flex items-center justify-between gap-3">
              <Button type="button" variant="inverse" onClick={() => step(-1)}>
                <ChevronLeft aria-hidden="true" /> Previous
              </Button>
              <p className="text-sm text-brand-paper/70">
                {(openIndex ?? 0) + 1} of {photos.length}
              </p>
              <Button type="button" variant="inverse" onClick={() => step(1)}>
                Next <ChevronRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
