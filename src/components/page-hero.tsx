import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: { url: string; alt: string };
  actions?: ReactNode;
  className?: string;
};

export function PageHero({ eyebrow, title, description, image, actions, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-brand-ink text-brand-paper", className)}>
      {image ? (
        <img
          src={image.url}
          alt={image.alt}
          className="absolute inset-0 size-full object-cover opacity-25"
          loading="lazy"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/90 to-brand-ink/50" aria-hidden="true" />
      <div className="site-container relative grid min-h-[360px] content-center gap-7 py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-primary">
            <span className="h-px w-9 bg-primary" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-brand-paper/75 sm:text-lg">{description}</p>
        </div>
        {actions ? <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div> : null}
      </div>
    </section>
  );
}
