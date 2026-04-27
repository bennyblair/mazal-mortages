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
  description: "Learn about Mazal Mortgages — a referral service connecting Australians with licensed mortgage brokers.",
};

const values = [
  {
    icon: Target,
    title: "Client-First Approach",
    description: "Every referral we make is driven by what's best for you, connecting you with the right broker.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description: "We clearly disclose our role as a referral service and any fees involved.",
  },
  {
    icon: Handshake,
    title: "Trusted Connections",
    description: "We only refer to licensed, reputable mortgage brokers with proven track records.",
  },
  {
    icon: Award,
    title: "Simplicity",
    description: "We make it easy to get connected with the right professional for your needs.",
  },
];

const team = [
  {
    name: "Daniel Mazal",
    role: "Founder",
    initials: "DM",
    bio: "With years of experience in the finance industry, Daniel founded Mazal Mortgages to help Australians connect with the right mortgage broker — simply and transparently.",
  },
  {
    name: "Rebecca Liu",
    role: "Client Relations Manager",
    initials: "RL",
    bio: "Rebecca ensures every client is matched with a broker who understands their unique situation and goals.",
  },
  {
    name: "Michael Torres",
    role: "Partnerships Manager",
    initials: "MT",
    bio: "Michael manages our network of licensed brokers, ensuring every professional in our network meets our high standards.",
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
            <span className="text-gold">Driven by Connections</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            We&apos;re a referral service dedicated to connecting Australians
            with licensed mortgage brokers who can help with their lending needs.
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
                deserves easy access to a quality mortgage broker, not just those
                who know the right people.
              </p>
              <p>
                After years working in the finance industry, our founder saw how
                difficult it can be for everyday Australians to find a trustworthy
                broker. Mazal Mortgages was created to bridge that gap.
              </p>
              <p>
                Today, we operate as a referral service, connecting borrowers with
                licensed mortgage brokers from our curated network. We don&apos;t
                provide credit advice or arrange loans — we simply make the right
                introduction.
              </p>
            </div>
          </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={200}>
          <div className="rounded-2xl bg-navy/5 p-8 lg:p-12">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <AnimatedCounter end={1000} suffix="+" className="font-heading text-4xl font-bold text-gold" />
                <p className="mt-1 text-sm text-muted-foreground">Referrals Made</p>
              </div>
              <div>
                <AnimatedCounter end={50} suffix="+" className="font-heading text-4xl font-bold text-gold" />
                <p className="mt-1 text-sm text-muted-foreground">Broker Partners</p>
              </div>
              <div>
                <AnimatedCounter end={98} suffix="%" className="font-heading text-4xl font-bold text-gold" />
                <p className="mt-1 text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <AnimatedCounter end={24} suffix="hr" className="font-heading text-4xl font-bold text-gold" />
                <p className="mt-1 text-sm text-muted-foreground">Avg. Introduction Time</p>
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
          <SectionHeader title="Meet the Team" subtitle="The people behind your broker introduction" />
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} animation="fade-up" delay={i * 150}>
            <TiltCard className="rounded-xl h-full">
            <Card className="border-border/60 h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-navy to-navy/80">
                  <span className="font-heading text-5xl font-bold text-gold">{member.initials}</span>
                </div>
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
            Ready to Get Connected?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            Request a free broker introduction — no obligation.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-gold text-navy font-semibold hover:bg-gold-light"
          >
            <Link href="/apply">
              Request an Introduction <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
