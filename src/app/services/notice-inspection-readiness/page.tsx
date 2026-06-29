import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PF ESIC Notice and Inspection Readiness Support",
  description:
    "Prepare PF, ESIC, payroll, employee records, challan history, contractor files, and pending action lists for notices and labour inspections.",
  alternates: {
    canonical: "/services/notice-inspection-readiness",
  },
};

export default function NoticeInspectionReadinessPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="min-h-[calc(100vh-73px)] w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
          Notice and inspection readiness
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          PF ESIC notice and inspection readiness support
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          Prepare your PF, ESIC, payroll, employee, contractor, challan, and
          filing records before a notice, audit, inspection, principal-employer
          review, or employee complaint becomes urgent.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Readiness file</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              <li>Registration and employer profile records</li>
              <li>Monthly filing and challan history</li>
              <li>Employee master, joining, exit, and KYC records</li>
              <li>Contractor and principal-employer documentation</li>
              <li>Pending gap list and response coordination checklist</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Important note</h2>
            <p className="mt-4 leading-7 text-slate-700">
              This support is for compliance file preparation and coordination.
              Penalties, old-period corrections, litigation, legal appearance,
              and formal legal opinions are separate and should be verified with
              a qualified professional when required.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white"
        >
          Prepare inspection file
        </Link>
      </section>
    </main>
  );
}
