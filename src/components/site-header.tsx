import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";

import logoAsset from "@/assets/s4a-official-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navItems } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-paper/10 bg-brand-ink text-brand-paper">
      <div className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 xl:h-24">
        <Link to="/" className="inline-flex w-fit min-w-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="S4A Auto Repair & Maintenance Services home">
          <img src={logoAsset.url} alt="S4A Auto Repair & Maintenance Services" className="h-14 w-auto max-w-[200px] object-contain xl:h-16" />
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex h-11 items-center border-b-2 border-transparent px-2 text-xs font-bold uppercase text-brand-paper/75 transition-colors hover:text-brand-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    activeProps={{ className: "border-primary text-brand-paper" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button asChild size="lg">
            <Link to="/book-repair">Book a Repair <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="inverse" size="icon" className="xl:hidden" aria-label="Open navigation menu">
              <Menu aria-hidden="true" />
            </Button>
          </DialogTrigger>
          <DialogContent className="inset-y-0 left-auto right-0 top-0 h-dvh max-w-sm translate-x-0 translate-y-0 content-start overflow-y-auto rounded-none border-y-0 border-r-0 bg-brand-ink p-0 text-brand-paper data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
            <DialogTitle className="sr-only">Navigation menu</DialogTitle>
            <DialogDescription className="sr-only">Choose a section of the S4A website.</DialogDescription>
            <div className="border-b border-brand-paper/10 p-5 pr-16">
              <img src={logoAsset.url} alt="S4A Auto Repair & Maintenance Services" className="h-14 w-auto max-w-[190px] object-contain" />
            </div>
            <nav aria-label="Mobile navigation" className="p-5">
              <ul className="divide-y divide-brand-paper/10">
                {navItems.map((item, index) => (
                  <li key={item.to}>
                    <DialogClose asChild>
                      <Link to={item.to} className="grid min-h-14 grid-cols-[2rem_minmax(0,1fr)] items-center rounded-sm text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <span className="text-xs text-primary">0{index + 1}</span>
                        <span>{item.label}</span>
                      </Link>
                    </DialogClose>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <DialogClose asChild><Button asChild size="lg"><Link to="/book-repair">Book a Repair</Link></Button></DialogClose>
                <DialogClose asChild><Button asChild size="lg" variant="inverse"><Link to="/it-siwes">IT/SIWES</Link></Button></DialogClose>
              </div>
            </nav>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}