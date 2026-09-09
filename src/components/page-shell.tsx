import { Link } from "@tanstack/react-router";
import { ArrowRight, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  consult?: boolean;
};

export function PageShell({ eyebrow, title, description, consult = false }: PageShellProps) {
  return (
    <div>
      <section className="bg-brand-ink text-brand-paper">
        <div className="site-container grid min-h-[430px] content-center gap-8 py-20 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-primary">
              <span className="h-px w-9 bg-primary" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-paper/70">{description}</p>
          </div>
          <Wrench className="hidden size-28 justify-self-end text-primary/60 lg:block" strokeWidth={1} aria-hidden="true" />
        </div>
      </section>
      <section className="border-b bg-background">
        <div className="site-container py-14 sm:py-20">
          <div className="max-w-2xl border-l-4 border-primary pl-6">
            <p className="text-sm font-bold uppercase text-primary">Phase 1 foundation</p>
            <p className="mt-3 text-lg leading-8 text-foreground">
              This page is ready for its full content experience in a later phase. The shared navigation,
              layout, accessibility, and brand system are already in place.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/book-repair">Book a Repair <ArrowRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to={consult ? "/contact" : "/consult"}>{consult ? "Contact S4A" : "Explore S4A Consult"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}