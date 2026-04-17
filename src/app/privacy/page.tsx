import { Section } from "@/components/layout/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mazal Mortgages",
  description: "Privacy policy for the Mazal Mortgages broker referral service.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Legal
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl prose prose-navy">
          <h2 className="font-heading text-2xl font-bold text-navy">About Mazal Mortgages</h2>
          <p className="text-muted-foreground leading-relaxed">
            Mazal Mortgages is a referral service that connects individuals with licensed
            Australian mortgage brokers. We do not hold an Australian Credit Licence, do not
            provide credit advice, and do not arrange or assess loan applications.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you submit a referral enquiry, we collect: your first name, last name, email
            address, phone number, suburb, state, the type of loan you are interested in, and
            any message you provide. We do not collect financial information such as income,
            expenses, debts, or employment details.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your information is used solely to introduce you to a licensed mortgage broker from
            our network. We share the details you provide with the broker to facilitate this
            introduction. We may also use your contact details to follow up and ensure you were
            connected successfully.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">Referral Fees</h2>
          <p className="text-muted-foreground leading-relaxed">
            Mazal Mortgages may receive a referral fee from the mortgage broker you are
            introduced to. This does not affect the cost of any services you receive from the
            broker. We always disclose our referral arrangement upfront.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We take reasonable steps to protect the personal information we hold from misuse,
            interference, loss, and unauthorised access or disclosure. Your data is transmitted
            securely and stored with appropriate safeguards.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">Third Parties</h2>
          <p className="text-muted-foreground leading-relaxed">
            We only share your information with the licensed mortgage broker to whom we refer
            you. We do not sell, rent, or otherwise distribute your personal information to any
            other third parties for marketing purposes.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request access to, correction of, or deletion of your personal information
            at any time by contacting us at{" "}
            <a href="mailto:hello@mazalmortgages.com.au" className="text-gold underline">
              hello@mazalmortgages.com.au
            </a>
            .
          </p>

          <h2 className="mt-8 font-heading text-2xl font-bold text-navy">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this privacy policy, please contact us at{" "}
            <a href="mailto:hello@mazalmortgages.com.au" className="text-gold underline">
              hello@mazalmortgages.com.au
            </a>
            .
          </p>

          <p className="mt-8 text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-AU", { month: "long", year: "numeric" })}.
          </p>
        </div>
      </Section>
    </>
  );
}
