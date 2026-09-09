import { Link } from "@tanstack/react-router";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import logoAsset from "@/assets/s4a-official-logo.png.asset.json";
import { contact, navItems, policyItems } from "@/lib/site-content";

const contactItems = [
  { label: contact.phoneLabel, href: contact.phoneHref, icon: Phone },
  { label: "WhatsApp 08140347298", href: contact.whatsappHref, icon: MessageCircle, external: true },
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: contact.address, icon: MapPin },
  { label: contact.hours, icon: Clock3 },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink text-brand-paper">
      <div className="h-1 bg-primary" aria-hidden="true" />
      <div className="site-container grid gap-12 py-14 md:grid-cols-2 xl:grid-cols-[1.3fr_.8fr_.9fr_1.35fr]">
        <div>
          <img src={logoAsset.url} alt="S4A Auto Repair & Maintenance Services" className="h-24 w-auto max-w-full object-contain" />
          <p className="mt-5 max-w-sm font-display text-2xl font-bold">Driven by Trust. Powered by Excellence.</p>
        </div>
        <div>
          <h2 className="footer-heading">Explore</h2>
          <ul className="mt-5 grid gap-3 text-sm text-brand-paper/70">
            {navItems.map((item) => <li key={item.to}><Link className="footer-link" to={item.to}>{item.label}</Link></li>)}
            <li><Link className="footer-link" to="/book-repair">Book a Repair</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Policies</h2>
          <ul className="mt-5 grid gap-3 text-sm text-brand-paper/70">
            {policyItems.map((item) => <li key={item.to}><Link className="footer-link" to={item.to}>{item.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Contact</h2>
          <address className="mt-5 not-italic">
            <ul className="grid gap-4 text-sm leading-6 text-brand-paper/70">
              {contactItems.map(({ label, href, icon: Icon, external }) => (
                <li key={label} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-3">
                  <Icon className="mt-0.5 size-4 text-primary" aria-hidden="true" />
                  {href ? <a className="footer-link break-words" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{label}</a> : <span>{label}</span>}
                </li>
              ))}
            </ul>
          </address>
        </div>
      </div>
      <div className="border-t border-brand-paper/10">
        <div className="site-container py-5 text-xs text-brand-paper/55">S4A Auto Repair &amp; Maintenance Services</div>
      </div>
    </footer>
  );
}