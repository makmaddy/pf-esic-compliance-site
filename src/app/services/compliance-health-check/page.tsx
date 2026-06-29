import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PF ESIC Compliance Health Check for Employers",
  description:
    "Review PF and ESIC compliance gaps, employee records, registration status, filing process, contractor documents, and inspection readiness.",
  alternates: {
    canonical: "/services/compliance-health-check",
  },
};

export default function ComplianceHealthCheckPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="min-h-[calc(100vh-73px)] w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
          First-step review
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          PF ESIC compliance health check for employers
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          A short practical review to identify visible PF, ESIC, payroll, and
          labour compliance gaps before they become notice, inspection, claim,
          or employee complaint issues.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Review areas</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              <li>Employee count and wage structure</li>
              <li>PF and ESIC registration status</li>
              <li>Monthly filing and payment gaps</li>
              <li>Employee joining, exit, UAN, and KYC records</li>
              <li>Contractor and principal-employer documentation</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-950">You receive</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              <li>Simple compliance gap note</li>
              <li>Priority list of urgent actions</li>
              <li>Recommended monthly support scope</li>
              <li>Document checklist for your team</li>
            </ul>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white"
        >
          Book health check
        </Link>
      </section>
    </main>
  );
}
