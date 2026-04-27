import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { href: "/services#home-loans", label: "Home Loans" },
    { href: "/services#investment", label: "Investment Loans" },
    { href: "/services#refinancing", label: "Refinancing" },
    { href: "/services#first-home", label: "First Home Buyers" },
    { href: "/services#commercial", label: "Commercial Loans" },
    { href: "/services#construction", label: "Construction Loans" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Resources" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/apply", label: "Request Introduction" },
  ],
  tools: [
    { href: "/calculator", label: "Mortgage Calculator" },
    { href: "/blog", label: "Market Updates" },
    { href: "/faq", label: "Common Questions" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-white">
                Mazal
              </span>
              <span className="font-heading text-2xl font-light text-gold">
                Mortgages
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Mazal Mortgages is a referral service that connects you with
              licensed Australian mortgage brokers. We do not provide credit
              advice or arrange loans.
            </p>
            <div className="space-y-2 pt-2">
              <a
                href="tel:0411969523"
                className="flex items-center gap-2 text-sm transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                0411 969 523
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-gold" />
                Australia Wide
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-gold">
              Tools & Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Mazal Mortgages. All rights reserved.</p>
          <p>
            Mazal Mortgages is a referral service only. We introduce users to licensed mortgage brokers and may receive a referral fee. No credit advice or loan recommendations are provided.
          </p>
        </div>
      </div>
    </footer>
  );
}
