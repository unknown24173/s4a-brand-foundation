import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase text-primary">
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className={cn("font-display text-3xl font-bold sm:text-4xl", inverted && "text-brand-paper")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7 text-muted-foreground", inverted && "text-brand-paper/70")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}