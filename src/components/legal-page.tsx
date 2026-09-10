import { Link } from "@tanstack/react-router";
import { Info } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site-content";

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };

type LegalPageProps = {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({ title, description, updated, sections }: LegalPageProps) {
  return (
    <div>
      <PageHero eyebrow="Policy" title={title} description={description} />
      <section className="bg-background">
        <div className="site-container grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="max-w-3xl">
            <Alert className="mb-8">
              <Info className="size-4" aria-hidden="true" />
              <AlertTitle>Draft wording for review</AlertTitle>
              <AlertDescription>
                This policy text is a working draft prepared for S4A to review and approve before publication.
              </AlertDescription>
            </Alert>
            <p className="text-sm text-muted-foreground">Last reviewed: {updated}</p>
            <div className="mt-8 grid gap-9">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-display text-2xl font-bold">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-base leading-8 text-foreground">
                      {paragraph}
                    </p>
                  ))}
                  {section.list ? (
                    <ul className="mt-3 grid list-disc gap-2 pl-5 text-base leading-8">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <aside className="h-fit border-l-4 border-primary bg-muted p-6">
            <h2 className="font-display text-xl font-bold">Questions about this policy?</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Speak to S4A directly and we will explain how it applies to your vehicle or subscription.
            </p>
            <div className="mt-5 grid gap-3">
              <Button asChild>
                <a href={contact.phoneHref}>Call {contact.phoneLabel}</a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact page</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
