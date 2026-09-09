# Phase 1 — S4A Frontend Foundation

## Goal
Build a premium, responsive frontend foundation for **S4A Auto Repair & Maintenance Services**. Use the supplied official logo unchanged, establish the black/white/red visual system, and provide reusable patterns for later phases without adding backend functionality or completing future page experiences.

## What will be built

### Brand and layout foundation
- Extract the official logo from the supplied PDF without redesigning or altering it, and serve it as a project asset.
- Define semantic black, white, red, neutral, status, border, focus, and surface tokens with accessible contrast.
- Establish typography, responsive containers, grids, spacing, section rhythm, subtle automotive-inspired details, and reduced-motion behavior.
- Use the confirmed primary tagline: **“Driven by Trust. Powered by Excellence.”**
- Use the confirmed S4A Consult tagline: **“Smarter Maintenance. Better Decisions.”**

### Shared site frame
- Build a semantic global header with the official logo, desktop navigation, clear active states, keyboard focus, and a fully accessible mobile menu.
- Include links for Home, About, Services, S4A Consult, IT/SIWES, Gallery, and Contact.
- Add **Book a Repair** as the primary action and **IT/SIWES** as the secondary action.
- Build a complete footer using only the confirmed business name, phone, WhatsApp, email, address, hours, navigation, and policy links.

### Reusable design system
- Button variants and sizes, including loading and disabled states.
- Accessible text inputs, text areas, selects, checkboxes, labels, help text, validation, success, and error states.
- Reusable content/service cards, section headings, badges, notices, empty/loading/error states, and a keyboard-accessible dialog.
- Shared page-introduction and placeholder patterns for future phases.

### Phase 1 screens and routes
- Make the home route a polished **system showcase** demonstrating the brand, layout, components, form states, and dialog without pretending the full site is complete.
- Add lightweight branded shells for About, Services, S4A Consult, IT/SIWES, Gallery, Contact, Book a Repair, Privacy Policy, Refund & Cancellation Policy, Terms of Use, and Consulting & DIY Services Policy.
- Give every route unique, appropriate page metadata while keeping content intentionally limited to the approved Phase 1 scope.

## Visual direction
A disciplined workshop aesthetic: crisp white working surfaces, deep black structure, high-signal red actions, strong editorial typography, precise linework, and restrained motion. The result should feel trustworthy and automotive-specific rather than like a generic template.

## Accessibility and quality
- Semantic landmarks, one clear page heading, meaningful alt text, logical heading order, labels, focus trapping where needed, Escape support, and visible focus rings.
- Responsive behavior across small phones, tablets, and desktop; no clipped navigation or overlapping text.
- Respect `prefers-reduced-motion` and maintain strong text/action contrast.
- Verify the live result at desktop and mobile widths, confirm navigation/menu/dialog behavior, and check the final build diagnostics.

## Explicitly out of scope
Backend, database, authentication, payments, external APIs, real booking submission, real consultation submission, and complete content experiences for later-phase pages.
