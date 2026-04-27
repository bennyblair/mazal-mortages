import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const posts: Record<string, { title: string; category: string; date: string; content: string }> = {
  "first-home-buyer-guide-2026": {
    title: "The Complete First Home Buyer Guide for 2026",
    category: "First Home Buyers",
    date: "March 2026",
    content: `
Buying your first home is one of the most exciting — and daunting — financial decisions you'll ever make. This guide walks you through everything you need to know.

## How Much Deposit Do You Need?

Most lenders require a minimum 5% deposit, though putting down 20% or more means you can avoid Lenders Mortgage Insurance (LMI). For a $600,000 property, that's:

- **5% deposit**: $30,000 (plus LMI of ~$15,000–$20,000)
- **10% deposit**: $60,000 (plus LMI of ~$8,000–$12,000)
- **20% deposit**: $120,000 (no LMI)

## Government Grants & Schemes

Several programs exist to help first home buyers:

- **First Home Owner Grant (FHOG)**: Up to $10,000 for new homes in most states
- **First Home Guarantee**: Purchase with as little as 5% deposit without paying LMI (limited places)
- **Stamp duty concessions**: Reduced or waived stamp duty for first home buyers (varies by state)

## The Process: Step by Step

1. **Get pre-approved** — Know your budget before you start looking
2. **Find your property** — Search, inspect, and make an offer
3. **Formal approval** — Submit the full application with property details
4. **Settlement** — Sign the paperwork and get the keys

## Tips for Success

- Start saving early and demonstrate consistent savings habits
- Minimise other debts (credit cards, personal loans, BNPL)
- Keep your employment stable during the application process
- Get a building and pest inspection before committing

## How a Broker Can Help

A licensed mortgage broker can guide first home buyers through every step — from finding competitive rates to accessing every grant available. Mazal Mortgages can introduce you to a broker who specialises in first home buyer lending.
    `,
  },
  "fixed-vs-variable-rates": {
    title: "Fixed vs Variable: Which Rate Type Is Right for You?",
    category: "Tips",
    date: "February 2026",
    content: `
Choosing between a fixed and variable rate is one of the most important decisions you'll make when selecting a mortgage. Here's what you need to know.

## Variable Rate Loans

With a variable rate, your interest rate moves up and down with market conditions.

**Pros:**
- Often lower starting rates
- Access to offset accounts and redraw facilities
- Make unlimited extra repayments
- More flexibility to refinance

**Cons:**
- Repayments can increase if rates rise
- Harder to budget with changing repayments

## Fixed Rate Loans

A fixed rate locks in your interest rate for a set period (typically 1–5 years).

**Pros:**
- Certainty — your repayments won't change
- Protection if rates increase
- Easier to budget

**Cons:**
- Break costs if you want to exit early
- May miss out if rates drop
- Often limited extra repayments
- Usually no offset account

## Split Loans: The Best of Both

Many borrowers choose to split their loan — for example, 60% variable and 40% fixed. This gives you some rate certainty while maintaining flexibility on the variable portion.

## Our Suggestion

There's no one-size-fits-all answer. The right choice depends on your financial goals, risk tolerance, and life plans. A licensed broker can model different scenarios for your specific situation. Request a free broker introduction through Mazal Mortgages.
    `,
  },
  "refinancing-checklist": {
    title: "Should You Refinance? A Complete Checklist",
    category: "Refinancing",
    date: "January 2026",
    content: `
Refinancing can save you thousands, but it's not always the right move. Use this checklist to evaluate whether switching makes sense for you.

## When Refinancing Makes Sense

✅ Your current rate is more than 0.5% above what's available in the market

✅ Your fixed rate period is ending and reverting to a higher variable rate

✅ Your financial situation has improved (higher income, less debt)

✅ You want to access equity for renovations or investment

✅ You want to consolidate multiple debts into your mortgage

✅ Your current lender isn't offering competitive features

## When Refinancing May NOT Make Sense

❌ Your remaining loan balance is very small (< $100,000)

❌ You're about to change jobs or reduce income

❌ You have high break costs on a fixed loan

❌ You've recently had credit issues

❌ The savings don't outweigh the switching costs

## The True Cost of Switching

When calculating whether to refinance, factor in:

- **Discharge fees** from your current lender ($150–$400)
- **Application fees** with the new lender ($0–$600)
- **Valuation fees** ($0–$300)
- **Break costs** if you're on a fixed rate (can be thousands)
- **Government fees** for mortgage registration

## How a Broker Can Help

A licensed mortgage broker can review your current loan, compare it against the market, and calculate exact savings — including all switching costs. Mazal Mortgages can introduce you to a broker who specialises in refinancing.
    `,
  },
  "investment-property-tax-benefits": {
    title: "Tax Benefits of Investment Property Explained",
    category: "Investment",
    date: "December 2025",
    content: `
Property investment offers several tax advantages that can significantly improve your returns. Here's a plain-language breakdown.

## Negative Gearing

If your investment property costs more to own than it earns in rent, the loss can be deducted from your taxable income. For example:

- Rental income: $25,000/year
- Loan interest + expenses: $35,000/year
- Tax deduction: $10,000

This $10,000 loss reduces your taxable income, lowering your tax bill.

## Depreciation

You can claim depreciation on the building itself and on fixtures (carpet, appliances, blinds). A quantity surveyor's report typically costs $500–$700 and can identify $5,000–$15,000+ in annual deductions.

## Deductible Expenses

Common deductions for investment property owners include:

- Loan interest
- Property management fees
- Council rates and water charges
- Insurance premiums
- Repairs and maintenance
- Advertising for tenants
- Travel to inspect the property (in some cases)

## Capital Gains Tax (CGT) Discount

If you hold the property for more than 12 months, you're eligible for a 50% CGT discount when you sell. For example, if you make a $200,000 capital gain, you only pay tax on $100,000.

## Important Note

Tax laws are complex and change frequently. Always consult a qualified tax professional for advice specific to your situation. This article is general information only.

## How a Broker Can Help

A licensed mortgage broker experienced in investment lending can structure your loans to support your tax strategy while keeping your overall portfolio healthy. Request a broker introduction through Mazal Mortgages to discuss your investment plans.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Mazal Mortgages`,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1 text-sm text-white/60 hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Resources
          </Link>
          <p className="mb-2 text-sm font-medium text-gold">{post.category} · {post.date}</p>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl max-w-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      <Section>
        <article className="prose prose-lg mx-auto max-w-3xl prose-headings:font-heading prose-headings:text-navy prose-a:text-gold">
          {post.content.split("\n").map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith("## "))
              return <h2 key={i}>{trimmed.replace("## ", "")}</h2>;
            if (trimmed.startsWith("- ")) {
              const listText = trimmed.replace("- ", "");
              return (
                <p key={i} className="ml-4 flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span dangerouslySetInnerHTML={{ __html: listText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                </p>
              );
            }
            if (/^\d+\.\s/.test(trimmed)) {
              const stepText = trimmed.replace(/^\d+\.\s/, "");
              return (
                <p key={i} className="ml-4" dangerouslySetInnerHTML={{ __html: stepText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
              );
            }
            if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**"))
              return <p key={i} className="font-semibold text-navy">{trimmed.replace(/\*\*/g, "")}</p>;
            return <p key={i} dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />;
          })}
        </article>

        <div className="mx-auto mt-16 max-w-3xl rounded-xl bg-gold/5 border border-gold/20 p-8 text-center">
          <h3 className="font-heading text-2xl font-bold text-navy">
            Want to Speak With a Broker?
          </h3>
          <p className="mt-2 text-muted-foreground">
            We can introduce you to a licensed broker who can help with your situation.
          </p>
          <Button
            asChild
            className="mt-6 bg-gold text-navy font-semibold hover:bg-gold-light"
          >
            <Link href="/apply">
              Request an Introduction <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
