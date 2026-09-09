# Phase 2 — Complete the public S4A website

Build out every page on top of the Phase 1 foundation. No changes to the brand system (black / white / red, Barlow type, existing header, footer, buttons, cards, dialogs). No backend, database, payments, or real sending — every form ends in a clear on-screen result only.

## Photos from the new upload

Eight usable workshop photos were found in the uploaded file: workshop bay with several cars, mechanic under a Hyundai, engine bay strip-down, power-steering pump rebuild on the bench, in-car diagnostics on a tablet, team at an industry event, and two hand-painted S4A wall-sign shots. These become the gallery and are also reused for the home page preview and page headers. Two very small, low-resolution images in the file are skipped because they would look blurry.

## Pages

**Home** — Hero with the confirmed name and "Driven by Trust. Powered by Excellence.", BOOK A REPAIR and APPLY FOR IT/SIWES buttons, short intro, services overview, why choose S4A, the 7-step booking process, S4A Consult spotlight (₦5,000/month), maintenance reminders, SIWES callout, gallery preview strip, and a contact call-to-action.

**About** — Mission across repair, maintenance and consulting; how trust is built; the S4A approach; S4A Consult summary; booking button.

**Services** — Full catalogue with a search box and category filters (e.g. engine, brakes, electrical & diagnostics, suspension, servicing, bodywork, AC). Each service card has a plain description and a Book a Repair button that carries the chosen service into the booking flow.

**S4A Consult** — "Smarter Maintenance. Better Decisions.", ₦5,000 per month, what is included (guidance, troubleshooting over the phone, service reminders), Mon–Sat 6am–10pm phone support, and clearly stated exclusions: parts, labour and towing are not covered. Subscribe button opens a confirmation panel explaining that payment is not yet connected.

**IT/SIWES** — Student internship page (what the placement covers, who can apply, what to prepare) plus the full application form: name, email, phone, institution, department, passport photo, school letter, optional message. Validation messages, "file selected" chips, an uploading progress state, and a success panel.

**Gallery** — Responsive photo grid using the workshop photos, with captions and a full-screen preview that opens on click, closes with Escape, and moves between photos with arrow keys.

**Contact** — Confirmed details only: 08140347298, sforaautorepairs@gmail.com, House 5 Michael Ayeni, Off Balogun Avenue, every day 8:00 AM – 7:00 PM. WhatsApp button, tap-to-call, tap-to-email, plus a contact form with validation and a success panel.

**Book a Repair** — 7 guided steps: pick service → vehicle details → date → time slot (mock availability with slots clearly marked as taken or full) → describe the issue with photo/video attach UI → review everything → confirmation with a reference number. Progress indicator, back/next, per-step validation, and a note that the booking is a preview and not yet sent.

**Legal** — Privacy Policy, Refund & Cancellation Policy, Terms of Use, and Consulting & DIY Services Policy written as readable, general-purpose policy text. Each page carries a short note that the wording is a draft for review, since no approved legal copy was supplied.

## Technical notes

- Photos uploaded through Lovable Assets; pointer files in `src/assets/gallery/`, listed with captions in `src/lib/gallery.ts`. Service catalogue and process/step data go in `src/lib/services.ts` / extend `src/lib/site-content.ts`.
- Shared pieces added under `src/components/`: page hero, feature/step grids, gallery lightbox, form field wrapper with error text, file-upload field with selected/uploading/success states, and a stepper. `page-shell.tsx` retires once all routes have real content.
- All forms validated with `zod` + local state; submit handlers simulate a short delay then show success. No network calls.
- Each route keeps its own unique title/description/og tags; the booking service pre-selection uses a typed search param on `/book-repair`.
- Verification: build check plus desktop and mobile passes through every route, the booking flow, the lightbox, and each form's states.
