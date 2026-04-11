import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import Link from "next/link";
import {
  Home,
  TrendingUp,
  RefreshCw,
  Key,
  Building2,
  HardHat,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Mazal Mortgages",
  description: "Explore our full range of mortgage services — home loans, investment loans, refinancing, first home buyer assistance, commercial and construction finance.",
};

const services = [
  {
    id: "home-loans",
    icon: Home,
    title: "Home Loans",
    description: "Whether you're upgrading, downsizing, or buying your forever home, we'll find the right loan from our panel of 50+ lenders.",
    features: [
      "Variable and fixed rate options",
      "Offset accounts and redraw facilities",
      "Split loan structures",
      "Pre-approval in 24 hours",
    ],
  },
  {
    id: "investment",
    icon: TrendingUp,
    title: "Investment Loans",
    description: "Build your property portfolio with lending structures designed to maximise your returns and tax benefits.",
    features: [
      "Interest-only repayment options",
      "Portfolio structuring advice",
      "Equity release strategies",
      "SMSF lending",
    ],
  },
  {
    id: "refinancing",
    icon: RefreshCw,
    title: "Refinancing",
    description: "Already have a mortgage? We'll review your current loan and find opportunities to save — often tens of thousands over the life of the loan.",
    features: [
      "Free loan health check",
      "Rate negotiation with your current lender",
      "Debt consolidation options",
      "Cash-out refinancing",
    ],
  },
  {
    id: "first-home",
    icon: Key,
    title: "First Home Buyers",
    description: "Buying your first home is exciting but overwhelming. We simplify the process and help you access every grant and concession available.",
    features: [
      "First Home Owner Grant guidance",
      "Stamp duty concession advice",
      "Low-deposit options (as little as 5%)",
      "Step-by-step support from search to settlement",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Loans",
    description: "Finance your business premises, retail space, or commercial investment with flexible lending solutions.",
    features: [
      "Owner-occupied business finance",
      "Commercial investment lending",
      "Lease-doc and low-doc options",
      "Competitive commercial rates",
    ],
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction Loans",
    description: "Building from the ground up? Our construction loan specialists manage the complexity of progress-draw financing.",
    features: [
      "Progress payment management",
      "Fixed-price and cost-plus contracts",
      "Land and build packages",
      "Owner-builder finance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Our Services
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Mortgage Solutions for{" "}
            <span className="text-gold">Every Need</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            From your first home to a commercial empire — we have the expertise
            and lender access to make it happen.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <Section
          key={service.id}
          id={service.id}
          className={i % 2 === 1 ? "bg-navy/[0.03]" : ""}
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal animation={i % 2 === 0 ? "fade-right" : "fade-left"}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10">
                <service.icon className="h-7 w-7 text-gold" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-navy">
                {service.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Button
                asChild
                className="mt-6 bg-gold text-navy font-semibold hover:bg-gold-light"
              >
                <Link href="/apply">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            </ScrollReveal>
            <ScrollReveal animation={i % 2 === 0 ? "fade-left" : "fade-right"} delay={200}>
            <TiltCard className="rounded-xl">
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <Card className="border-border/60">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-heading text-lg font-semibold text-navy">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            </TiltCard>
            </ScrollReveal>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="bg-navy">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Not Sure Which Loan Is Right?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            Book a free consultation and we&apos;ll help you find the best solution
            for your situation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gold text-navy font-semibold hover:bg-gold-light"
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/calculator">Try Our Calculator</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
