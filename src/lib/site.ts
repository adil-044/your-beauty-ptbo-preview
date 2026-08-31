export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path) return base || "/";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const BOOK =
  "https://www.fresha.com/book-now/your-beauty-studio-c4y9gb9q/all-offer?share=true&pId=2849651";
export const BRAND = "YOUR Beauty Studio";
export const PHONE = "705-977-0927";
export const PHONE_HREF = "tel:7059770927";
export const ADDRESS = "843 Chemong Rd, Peterborough ON";
export const ADDRESS_NOTE = "Inside Ride or Dye Salon · Brookdale Plaza";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=843+Chemong+Rd+Peterborough+ON";
export const IG = "https://www.instagram.com/yourbeautyptbo.co/";
export const UPTISEMENT = "https://calendly.com/uptisement/30min";
export const PREVIEW_PRICE = "$400";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book" },
] as const;
