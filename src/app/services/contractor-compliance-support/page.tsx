import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contractor Compliance Support for PF ESIC Records",
  description:
    "PF, ESIC, payroll, employee movement, contractor documentation, and principal-employer coordination support for manpower and facility contractors.",
  alternates: {
    canonical: "/services/contractor-compliance-support",
  },
};

export default function ContractorComplianceSupportPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="min-h-[calc(100vh-73px)] w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
          Contractor compliance
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          Contractor compliance support for PF and ESIC records
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          Support for manpower, security, housekeeping, construction, and
          facility-management contractors who need organized employee movement,
          challan records, statutory files, and principal-employer coordination.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Support areas</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              <li>Worker joining, exit, and site movement records</li>
              <li>PF and ESIC filing support data coordination</li>
              <li>Challan, wage, and employee record organization</li>
              <li>Principal-employer documentation support</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Best for</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              <li>Security and housekeeping agencies</li>
              <li>Facility-management and manpower contractors</li>
              <li>Contractors with frequent employee rotation</li>
            </ul>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white"
        >
          Discuss contractor support
        </Link>
      </section>
    </main>
  );
}
