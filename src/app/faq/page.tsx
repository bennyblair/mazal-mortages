import { Section, SectionHeader } from "@/components/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Mazal Mortgages",
  description: "Answers to common questions about home loans, the mortgage process, and working with a mortgage broker.",
};

const faqs = [
  {
    q: "What does a mortgage broker do?",
    a: "A mortgage broker acts as an intermediary between you and lenders. We compare products from our panel of 50+ lenders to find the best loan for your situation — saving you time, money, and the stress of negotiating directly with banks.",
  },
  {
    q: "How much does it cost to use a mortgage broker?",
    a: "Our service is free for most borrowers. We're paid a commission by the lender when your loan settles. This means you get expert advice at no direct cost to you. We'll always disclose any fees upfront before you commit.",
  },
  {
    q: "How long does the mortgage approval process take?",
    a: "Pre-approval can often be obtained within 24–48 hours. Full approval (unconditional) typically takes 5–10 business days once all documentation is submitted, though this varies by lender and complexity.",
  },
  {
    q: "What documents do I need to apply for a home loan?",
    a: "Generally you'll need: proof of identity (passport or driver's licence), recent payslips or tax returns, bank statements (last 3 months), details of existing debts, and information about the property you're purchasing. We'll provide a complete checklist tailored to your situation.",
  },
  {
    q: "How much deposit do I need?",
    a: "Most lenders require a minimum 5% deposit, though 20% or more avoids Lenders Mortgage Insurance (LMI). For first home buyers, government schemes may allow purchases with as little as 2–5% deposit. We'll help you understand your options.",
  },
  {
    q: "What is Lenders Mortgage Insurance (LMI)?",
    a: "LMI is a one-off premium charged when your deposit is less than 20% of the property value. It protects the lender (not you) if you default. We can help you calculate whether paying LMI or saving a larger deposit makes more financial sense.",
  },
  {
    q: "Can I get a loan if I'm self-employed?",
    a: "Yes. Self-employed borrowers have several options including low-doc loans and alt-doc loans. You'll typically need at least 1–2 years of tax returns or BAS statements. We specialise in helping self-employed clients find suitable lending solutions.",
  },
  {
    q: "Should I choose a fixed or variable rate?",
    a: "It depends on your circumstances. Fixed rates offer certainty — your repayments won't change during the fixed period. Variable rates may be lower and offer more flexibility (offset accounts, extra repayments). Many clients choose a split loan — part fixed, part variable. We'll help you decide.",
  },
  {
    q: "What is an offset account?",
    a: "An offset account is a transaction account linked to your mortgage. The balance in the account offsets your loan balance, reducing the interest you pay. For example, if you owe $500,000 and have $50,000 in your offset account, you only pay interest on $450,000.",
  },
  {
    q: "How do I know if I should refinance?",
    a: "Consider refinancing if: your current rate is higher than what's available, your fixed rate period is ending, your financial situation has changed, or you want to access equity. We offer a free loan health check to assess whether refinancing makes sense for you.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            FAQ
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked{" "}
            <span className="text-gold">Questions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Everything you need to know about mortgages and working with a broker.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Accordion multiple={false} className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                className="rounded-lg border border-border/60 px-6"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-navy hover:text-gold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section className="bg-navy">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            We&apos;re happy to help. Get in touch and we&apos;ll answer any
            questions you have.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-gold text-navy font-semibold hover:bg-gold-light"
          >
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
