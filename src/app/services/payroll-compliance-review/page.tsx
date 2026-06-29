import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payroll Compliance Review for PF ESIC and Labour Records",
  description:
    "Review salary structure, employee master data, wage components, statutory deductions, joining and exit records, and monthly payroll compliance gaps.",
  alternates: {
    canonical: "/services/payroll-compliance-review",
  },
};

export default function PayrollComplianceReviewPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="min-h-[calc(100vh-73px)] w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
          Payroll and records review
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          Payroll compliance review for PF, ESIC, and labour records
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          A practical review of salary structure, employee master data,
          statutory deductions, wage records, joining documents, exit records,
          and monthly payroll compliance gaps.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Review scope</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              <li>Employee master and payroll data consistency</li>
              <li>PF, ESIC, PT, and statutory deduction coordination</li>
              <li>Joining, exit, UAN, KYC, and nominee record gaps</li>
              <li>Wage component and payroll input review</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Best for</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              <li>Businesses moving from manual payroll to organized records</li>
              <li>Owners unsure whether filing data matches payroll data</li>
              <li>HR/admin teams preparing monthly compliance reports</li>
            </ul>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white"
        >
          Request payroll review
        </Link>
      </section>
    </main>
  );
}
