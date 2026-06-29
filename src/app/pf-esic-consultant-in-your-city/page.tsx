import type { Metadata } from "next";
import Link from "next/link";
import { services, site, targetSegments } from "@/lib/site";

export const metadata: Metadata = {
  title: `PF ESIC Consultant in ${site.city}`,
  description: `PF, ESIC, payroll, and labour compliance consultant in ${site.city} for contractors, factories, restaurants, clinics, schools, and MSMEs.`,
  alternates: {
    canonical: "/pf-esic-consultant-in-your-city",
  },
};

export default function LocalSeoPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="min-h-[calc(100vh-73px)] w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
          Local compliance support
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">
          PF ESIC consultant in {site.city}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          Local PF, ESIC, payroll, and labour compliance support for employers
          in {site.city}. Get help with registration, monthly PF ECR, ESIC
          contribution support, employee additions, exits, records, and
          inspection readiness.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Services in {site.city}</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="font-semibold text-emerald-700">
                    {service.title}
                  </Link>
                  <span> - {service.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Best-fit employers</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-700">
              {targetSegments.map((segment) => (
                <li key={segment}>{segment}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white"
        >
          Contact local consultant
        </Link>
      </section>
    </main>
  );
}
