export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "S4A Consult", to: "/consult" },
  { label: "IT/SIWES", to: "/it-siwes" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const policyItems = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Refund & Cancellation Policy", to: "/refund-cancellation" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Consulting & DIY Services Policy", to: "/consulting-diy-policy" },
] as const;

export const contact = {
  phoneLabel: "08140347298",
  phoneHref: "tel:+2348140347298",
  whatsappHref: "https://wa.me/2348140347298",
  email: "sforaautorepairs@gmail.com",
  address: "House 5 Michael Ayeni, Off Balogun Avenue.",
  hours: "Every day, 8:00 AM – 7:00 PM",
};