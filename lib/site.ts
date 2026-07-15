// Central site configuration. Update contact details here once they are final.
export const siteConfig = {
  name: "B's Trash Bin Cleaning",
  tagline: "Pressure Washing Services",
  description:
    "Professional trash bin cleaning and pressure washing in Northeast Ohio.",
  url: "https://bstrashbincleaning.com",
  state: "Northeast Ohio",
  phone: "(330) 201-8614",
  // TODO: replace with the client's real inbox address
  email: "info@bstrashbincleaning.com",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
