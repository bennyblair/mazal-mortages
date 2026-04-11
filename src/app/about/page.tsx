import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import Link from "next/link";
import { Target, Heart, Handshake, Award, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mazal Mortgages",
  description: "Learn about Mazal Mortgages — our story, mission, and the experienced team behind your mortgage success.",
};

const values = [
  {
    icon: Target,
    title: "Client-First Approach",
    description: "Every recommendation we make is driven by what's best for you, not commission structures.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description: "No hidden fees, no surprises. We explain every detail in plain language.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    description: "We don't just close loans — we build partnerships that last beyond settlement.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We continuously refine our expertise to deliver the highest standard of service.",
  },
];

const team = [
  {
    name: "Daniel Mazal",
    role: "Founder & Senior Broker",
    bio: "With over 15 years in the finance industry, Daniel founded Mazal Mortgages to deliver a more personalised approach to lending.",
  },
  {
    name: "Rebecca Liu",
    role: "Senior Mortgage Broker",
    bio: "Rebecca specialises in investment lending and portfolio structuring, helping clients build wealth through property.",
  },
  {
    name: "Michael Torres",
    role: "First Home Buyer Specialist",
    bio: "Michael is passionate about helping first-time buyers navigate grants, schemes, and the path to homeownership.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            About Us
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Built on Trust,{" "}
            <span className="text-gold">Driven by Results</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            We&apos;re a team of experienced mortgage professionals dedicated to
            finding the right loan for every client — not just any loan.
          </p>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal animation="fade-right">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mazal Mortgages was founded with a simple belief: every Australian
                deserves access to expert mortgage advice, not just those who know
                the right people.
              </p>
              <p>
                After years working within the major banks, our founder saw
                first-hand how clients were being steered towards products that
                benefited the institution, not the borrower. Mazal Mortgages was
                created to change that.
              </p>
              <p>
                Today, we work with over 50 lenders to find the best possible deal
                for each client. Our independence means our only loyalty is to you.
              </p>
            </div>
          </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={200}>
          <div className="rounded-2xl bg-navy/5 p-8 lg:p-12">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <AnimatedCounter end={15} suffix="+" className="font-heading text-4xl font-bold text-gold" />
                <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <AnimatedCounter end={50} suffix="+" className="font-heading text-4xl font-bold text-gold" />
                <p className="mt-1 text-sm text-muted-foreground">Lender Partners</p>
              </div>
              <div>
                <AnimatedCounter end={500} prefix="$" suffix="M+" className="font-heading text-4xl font-bold text-gold" />
                <p className="mt-1 text-sm text-muted-foreground">Loans Settled</p>
              </div>
              <div>
                <AnimatedCounter end={2000} suffix="+" className="font-heading text-4xl font-bold text-gold" />
                <p className="mt-1 text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-navy/[0.03]">
        <ScrollReveal animation="fade-up">
          <SectionHeader title="Our Values" subtitle="The principles that guide everything we do" />
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} animation="fade-up" delay={i * 100}>
            <TiltCard className="rounded-xl h-full">
            <Card className="border-border/60 text-center h-full">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <v.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </CardContent>
            </Card>
            </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <ScrollReveal animation="fade-up">
          <SectionHeader title="Meet the Team" subtitle="Experienced professionals ready to help you achieve your goals" />
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} animation="fade-up" delay={i * 150}>
            <TiltCard className="rounded-xl h-full">
            <Card className="border-border/60 h-full">
              <CardContent className="p-6">
                <div className="mb-4 h-48 rounded-lg bg-navy/10" />
                <h3 className="font-heading text-lg font-semibold text-navy">{member.name}</h3>
                <p className="text-sm font-medium text-gold">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
            </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-navy">
        <ScrollReveal animation="zoom-in">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Work With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            Get in touch for a free, no-obligation consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-gold text-navy font-semibold hover:bg-gold-light"
          >
            <Link href="/contact">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
