import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Blog | Mazal Mortgages",
  description: "Expert guides, market updates, and tips to help you make smarter mortgage decisions.",
};

const posts = [
  {
    slug: "first-home-buyer-guide-2026",
    title: "The Complete First Home Buyer Guide for 2026",
    excerpt: "Everything you need to know about buying your first home in Australia — grants, schemes, deposits, and the step-by-step process.",
    category: "First Home Buyers",
    readTime: "8 min read",
    date: "March 2026",
  },
  {
    slug: "fixed-vs-variable-rates",
    title: "Fixed vs Variable: Which Rate Type Is Right for You?",
    excerpt: "We break down the pros and cons of fixed and variable rates to help you make an informed decision for your mortgage.",
    category: "Tips",
    readTime: "5 min read",
    date: "February 2026",
  },
  {
    slug: "refinancing-checklist",
    title: "Should You Refinance? A Complete Checklist",
    excerpt: "Not sure if refinancing is worth it? Use our checklist to evaluate whether switching lenders could save you money.",
    category: "Refinancing",
    readTime: "6 min read",
    date: "January 2026",
  },
  {
    slug: "investment-property-tax-benefits",
    title: "Tax Benefits of Investment Property Explained",
    excerpt: "A straightforward guide to understanding negative gearing, depreciation, and other tax advantages of property investment.",
    category: "Investment",
    readTime: "7 min read",
    date: "December 2025",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Resources
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Guides & <span className="text-gold">Insights</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Expert knowledge to help you make smarter mortgage decisions.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} animation="fade-up" delay={i * 150}>
            <TiltCard className="rounded-xl h-full">
            <Link href={`/blog/${post.slug}`}>
              <Card className="group h-full border-border/60 transition-all hover:border-gold/40 hover:shadow-lg">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="h-48 rounded-lg bg-navy/5 transition-colors group-hover:bg-gold/5" />
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-navy group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-gold">
                    Read article <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
