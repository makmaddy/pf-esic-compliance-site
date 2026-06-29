import type { Metadata } from "next";
import Link from "next/link";
import { statutoryCoverage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Statutory Coverage for PF ESIC Payroll and Labour Compliance",
  description:
    "Statutory coverage across Labour Codes, PF, ESIC, payroll, contractor compliance, Shops and Establishments, Professional Tax, and employee-benefit records.",
  alternates: {
    canonical: "/resources/statutory-coverage",
  },
};

const categories = Array.from(new Set(statutoryCoverage.map((item) => item.category)));

export default function StatutoryCoveragePage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="w-full bg-slate-950 px-5 py-16 text-white sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">
          Statutory coverage
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
          PF, ESIC, payroll, contractor, and labour compliance coverage
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
          A practical view of the compliance areas that affect Indian employers:
          the new Labour Codes, PF, ESIC, wage records, contractor compliance,
          Shops and Establishments, Professional Tax, and employee-benefit
          documentation.
        </p>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-400">
          Compliance thresholds, wage ceilings, state rules, and implementation
          details can change through notifications. Final positions should be
          verified against current law, official portals, and qualified
          professional advice.
        </p>
      </section>

      <section className="w-full bg-slate-100 px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-md border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-700"
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      {categories.map((category) => (
        <section
          key={category}
          id={category.toLowerCase().replaceAll(" ", "-")}
          className="w-full border-b border-slate-200 px-5 py-16 sm:px-8 lg:px-12 xl:px-16"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
            {category}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            {category} compliance areas
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {statutoryCoverage
              .filter((item) => item.category === category)
              .map((item) => (
                <article key={item.shortTitle} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                    {item.shortTitle}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-7 text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-bold text-slate-800">
                    Coverage
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.area}
                  </p>
                  <p className="mt-4 text-sm font-bold text-slate-800">
                    Advisory focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.advisory}
                  </p>
                </article>
              ))}
          </div>
        </section>
      ))}

      <section className="w-full bg-slate-950 px-5 py-16 text-white sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Need to map statutory coverage to your business?
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-slate-300">
              Start with a compliance health check. It reviews employee count,
              wage data, registration status, contractor records, payroll
              process, notices, and inspection documents.
            </p>
          </div>
          <Link
            href="/contact"
            className="justify-self-start rounded-md bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 lg:justify-self-end"
          >
            Send business enquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
