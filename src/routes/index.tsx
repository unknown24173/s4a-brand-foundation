import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertCircle, ArrowRight, CheckCircle2, Gauge, LoaderCircle, ShieldCheck, Wrench } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "S4A Auto Repair & Maintenance Services" },
    { name: "description", content: "S4A Auto Repair & Maintenance Services — Driven by Trust. Powered by Excellence." },
    { property: "og:title", content: "S4A Auto Repair & Maintenance Services" },
    { property: "og:description", content: "Driven by Trust. Powered by Excellence." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const principles = [
  { icon: ShieldCheck, label: "Trust", text: "Clear choices and dependable service patterns." },
  { icon: Gauge, label: "Precision", text: "A disciplined system built for quick decisions." },
  { icon: Wrench, label: "Readiness", text: "Reusable foundations prepared for future phases." },
];

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-ink text-brand-paper">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] border-l border-brand-paper/10 lg:block" aria-hidden="true">
          <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(135deg,transparent_0,transparent_18px,var(--color-brand-paper)_19px,transparent_20px)]" />
          <div className="absolute bottom-0 left-0 h-2/3 w-1 bg-primary" />
        </div>
        <div className="site-container relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,.65fr)] lg:py-24">
          <div className="max-w-3xl">
            <Badge className="mb-7">Frontend foundation · Phase 1</Badge>
            <h1 className="font-display text-5xl font-bold leading-[.98] sm:text-6xl lg:text-7xl">S4A Auto Repair &amp; Maintenance Services</h1>
            <p className="mt-6 text-xl font-semibold text-brand-paper sm:text-2xl">Driven by Trust. Powered by Excellence.</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-brand-paper/65">A clear, dependable digital foundation built around the same precision expected from professional automotive care.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link to="/book-repair">Book a Repair <ArrowRight aria-hidden="true" /></Link></Button>
              <Button asChild size="lg" variant="inverse"><Link to="/it-siwes">IT/SIWES</Link></Button>
            </div>
          </div>
          <div className="grid gap-px border border-brand-paper/10 bg-brand-paper/10">
            {principles.map(({ icon: Icon, label, text }, index) => (
              <div key={label} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 bg-brand-ink p-5">
                <div className="font-display text-3xl font-bold text-primary">0{index + 1}</div>
                <div><Icon className="mb-3 size-5 text-primary" aria-hidden="true" /><h2 className="font-display text-xl font-bold">{label}</h2><p className="mt-1 text-sm leading-6 text-brand-paper/60">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-background">
        <div className="site-container py-16 sm:py-24">
          <SectionHeading eyebrow="Core components" title="Built for confident decisions." description="A focused set of reusable patterns keeps every future S4A page clear, consistent, and easy to use." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Card className="border-t-4 border-t-primary"><CardHeader><Badge variant="outline" className="w-fit">Primary service</Badge><CardTitle className="font-display text-2xl">Repair &amp; Maintenance</CardTitle><CardDescription>Structured content for service information and clear next steps.</CardDescription></CardHeader><CardContent><Button asChild variant="outline"><Link to="/services">View services <ArrowRight aria-hidden="true" /></Link></Button></CardContent></Card>
            <Card className="border-t-4 border-t-brand-ink"><CardHeader><Badge variant="secondary" className="w-fit">Advisory</Badge><CardTitle className="font-display text-2xl">S4A Consult</CardTitle><CardDescription>Smarter Maintenance. Better Decisions.</CardDescription></CardHeader><CardContent><Button asChild variant="outline"><Link to="/consult">Explore consult <ArrowRight aria-hidden="true" /></Link></Button></CardContent></Card>
            <Card className="border-t-4 border-t-brand-steel"><CardHeader><Badge variant="outline" className="w-fit">Learning</Badge><CardTitle className="font-display text-2xl">IT/SIWES</CardTitle><CardDescription>A dedicated destination ready for its future programme experience.</CardDescription></CardHeader><CardContent><Button asChild variant="outline"><Link to="/it-siwes">Open IT/SIWES <ArrowRight aria-hidden="true" /></Link></Button></CardContent></Card>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="site-container grid gap-12 py-16 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
          <SectionHeading eyebrow="Form system" title="Clear at every step." description="Labels, guidance, validation, and states are designed to be understood before a future form is connected." />
          <Card><CardHeader><CardTitle className="font-display text-2xl">Repair request preview</CardTitle><CardDescription>Demonstration only. This form does not submit in Phase 1.</CardDescription></CardHeader><CardContent className="grid gap-5">
            <div className="grid gap-2"><Label htmlFor="customer-name">Full name</Label><Input id="customer-name" placeholder="Enter your full name" /><p className="text-xs text-muted-foreground">Use the name we should address you by.</p></div>
            <div className="grid gap-2"><Label htmlFor="vehicle">Vehicle type</Label><Select><SelectTrigger id="vehicle"><SelectValue placeholder="Select a vehicle type" /></SelectTrigger><SelectContent><SelectItem value="car">Car</SelectItem><SelectItem value="suv">SUV</SelectItem><SelectItem value="van">Van</SelectItem></SelectContent></Select></div>
            <div className="grid gap-2"><Label htmlFor="email-preview">Email example</Label><Input id="email-preview" type="email" defaultValue="invalid-email" aria-invalid="true" aria-describedby="email-error" /><p id="email-error" className="flex items-center gap-2 text-xs font-semibold text-destructive"><AlertCircle className="size-4" aria-hidden="true" />Enter a valid email address.</p></div>
            <div className="grid gap-2"><Label htmlFor="issue">What needs attention?</Label><Textarea id="issue" placeholder="Briefly describe the issue" /></div>
            <div className="flex items-start gap-3"><Checkbox id="contact-consent" /><Label htmlFor="contact-consent" className="pt-0.5 font-normal leading-5">I agree to be contacted about this request.</Label></div>
            <div className="flex flex-col gap-3 sm:flex-row"><Button type="button">Continue</Button><Button type="button" variant="outline" disabled>Unavailable</Button><Button type="button" variant="secondary"><LoaderCircle className="animate-spin motion-reduce:animate-none" aria-hidden="true" />Loading</Button></div>
          </CardContent></Card>
        </div>
      </section>

      <section className="border-b bg-background">
        <div className="site-container py-16 sm:py-24">
          <SectionHeading eyebrow="System states" title="Feedback that stays unambiguous." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Alert className="border-success"><CheckCircle2 className="size-4 text-success" aria-hidden="true" /><AlertTitle>Ready</AlertTitle><AlertDescription>The requested details are complete.</AlertDescription></Alert>
            <Alert variant="destructive"><AlertCircle className="size-4" aria-hidden="true" /><AlertTitle>Needs attention</AlertTitle><AlertDescription>Check the highlighted information.</AlertDescription></Alert>
            <Card><CardContent className="space-y-3 p-5" aria-label="Loading content"><Skeleton className="h-4 w-24" /><Skeleton className="h-7 w-3/4" /><Skeleton className="h-4 w-full" /></CardContent></Card>
          </div>
          <div className="mt-10 border border-dashed border-input p-8 text-center"><Wrench className="mx-auto size-8 text-muted-foreground" aria-hidden="true" /><h3 className="mt-4 font-display text-2xl font-bold">No records yet</h3><p className="mt-2 text-sm text-muted-foreground">Empty states provide a clear explanation and next action.</p>
            <Dialog><DialogTrigger asChild><Button className="mt-5" variant="outline">Preview dialog</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle className="font-display text-2xl">Confirm your next step</DialogTitle><DialogDescription>This accessible dialog traps focus, supports Escape, and returns focus when closed.</DialogDescription></DialogHeader><DialogFooter className="mt-3 gap-2"><DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose><DialogClose asChild><Button>Confirm</Button></DialogClose></DialogFooter></DialogContent></Dialog>
          </div>
        </div>
      </section>
    </div>
  );
}