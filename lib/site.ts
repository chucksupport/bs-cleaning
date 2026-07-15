// Central site configuration. Update contact details here once they are final.
export const siteConfig = {
  name: "B's Trash Bin Cleaning",
  tagline: "Pressure Washing Services",
  description:
    "Professional trash bin cleaning and pressure washing in Ohio.",
  url: "https://bstrashbincleaning.com",
  state: "Ohio",
  // TODO: replace with the client's real phone number
  phone: "(555) 555-5555",
  // TODO: replace with the client's real inbox address
  email: "info@bstrashbincleaning.com",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
