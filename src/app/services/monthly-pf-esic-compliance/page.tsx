import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Monthly PF ESIC Compliance Services",
  description:
    "Monthly PF ECR filing support, ESIC contribution support, employee additions and exits, challan coordination, and compliance reporting for Indian employers.",
  alternates: {
    canonical: "/services/monthly-pf-esic-compliance",
  },
};

export default function MonthlyCompliancePage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="min-h-[calc(100vh-73px)] w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
          Monthly retainer service
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          Monthly PF and ESIC compliance services
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          A monthly support process for employers who want PF, ESIC, employee
          movement, challan coordination, and compliance records handled with a
          clear timeline.
        </p>

        <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-950">Monthly workflow</h2>
          <ol className="mt-5 grid gap-4 leading-7 text-slate-700">
            <li>1. Collect attendance, wage, joining, and exit data.</li>
            <li>2. Update employee additions, exits, and basic record gaps.</li>
            <li>3. Prepare PF ECR and ESIC contribution support data.</li>
            <li>4. Coordinate challan payment confirmation.</li>
            <li>5. Share monthly compliance summary and pending action list.</li>
          </ol>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 xl:grid-cols-6">
          {[
            "PF ECR support",
            "ESIC contribution support",
            "Employee additions and exits",
            "UAN and KYC coordination",
            "Monthly compliance report",
            "Basic employee query support",
          ].map((item) => (
            <div key={item} className="rounded-md border border-slate-200 p-4 font-semibold">
              {item}
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white"
        >
          Ask for monthly pricing
        </Link>
      </section>
    </main>
  );
}
