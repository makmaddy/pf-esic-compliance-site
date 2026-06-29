import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PF ESIC Registration Consultant for Employers",
  description:
    "PF and ESIC registration support for employers, contractors, factories, restaurants, clinics, and MSMEs with document checklist and first-month filing guidance.",
  alternates: {
    canonical: "/services/pf-esic-registration",
  },
};

export default function PfEsicRegistrationPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="min-h-[calc(100vh-73px)] w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
          Employer setup service
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          PF and ESIC registration consultant for growing businesses
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          Get practical support for PF and ESIC applicability discussion,
          employer registration preparation, document collection, employee
          master preparation, and first-month compliance coordination.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">What is included</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              <li>PF and ESIC applicability discussion</li>
              <li>Document checklist for employer registration</li>
              <li>Portal setup guidance and employer profile review</li>
              <li>Employee master data format</li>
              <li>First-month filing and challan coordination support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-950">Best for</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              <li>New employers hiring their first team</li>
              <li>MSMEs reaching PF or ESIC coverage thresholds</li>
              <li>Contractors onboarding with principal employers</li>
              <li>Factories, clinics, restaurants, and schools</li>
            </ul>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white"
        >
          Discuss registration support
        </Link>
      </section>
    </main>
  );
}
