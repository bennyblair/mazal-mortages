import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Mazal Mortgages",
  description: "Read what our clients say about their experience with Mazal Mortgages.",
};

const testimonials = [
  {
    quote: "Mazal Mortgages made the entire process seamless. Their expertise saved us over $40,000 in interest over the life of our loan. Cannot recommend highly enough.",
    name: "Sarah & David Chen",
    type: "Home Loan",
    rating: 5,
  },
  {
    quote: "As a first home buyer, I was completely overwhelmed. The team at Mazal guided me through every single step with patience and professionalism. I couldn't have done it without them.",
    name: "James Morrison",
    type: "First Home Buyer",
    rating: 5,
  },
  {
    quote: "They restructured our investment portfolio loans and unlocked equity we didn't know we had. Absolute game-changer for our property strategy.",
    name: "Priya Patel",
    type: "Investment Loan",
    rating: 5,
  },
  {
    quote: "Refinancing seemed daunting until I spoke with Mazal. They handled everything and got me a rate 1.2% lower than what I was paying. The savings are incredible.",
    name: "Tom Blackwood",
    type: "Refinancing",
    rating: 5,
  },
  {
    quote: "Professional, transparent, and genuinely caring about getting the best outcome. They found us a construction loan that other brokers said wasn't possible.",
    name: "Anita & Raj Kumar",
    type: "Construction Loan",
    rating: 5,
  },
  {
    quote: "I've referred three friends to Mazal after my own experience. Every single one has thanked me. That says it all.",
    name: "Michelle Nguyen",
    type: "Home Loan",
    rating: 5,
  },
  {
    quote: "The commercial loan process was complex but the team managed every detail. My business premises were settled on time and under budget.",
    name: "Robert Fitzgerald",
    type: "Commercial Loan",
    rating: 5,
  },
  {
    quote: "I was shocked at how easy the process was. From first call to settlement, everything was handled professionally. We're already planning investment property number two with Mazal.",
    name: "Lauren & Steve Hill",
    type: "Investment Loan",
    rating: 5,
  },
  {
    quote: "Being self-employed, I thought getting a good home loan would be impossible. Mazal found me options I didn't even know existed. Brilliant service.",
    name: "Chris Papadopoulos",
    type: "Home Loan",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Testimonials
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Trusted by <span className="text-gold">Thousands</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Don&apos;t just take our word for it — hear from clients who&apos;ve
            experienced the Mazal difference.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} animation="fade-up" delay={(i % 3) * 150}>
            <TiltCard className="rounded-xl h-full">
            <Card className="border-border/60 h-full">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {t.type}
                  </Badge>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-foreground/80 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border/60 pt-4">
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                </div>
              </CardContent>
            </Card>
            </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section className="bg-navy">
        <ScrollReveal animation="zoom-in">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Join Our Happy Clients
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            Your perfect loan is waiting. Let us help you find it.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-gold text-navy font-semibold hover:bg-gold-light"
          >
            <Link href="/apply">
              Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
