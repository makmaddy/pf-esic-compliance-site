import Link from "next/link";
import { services, site, statutoryCoverage, targetSegments } from "@/lib/site";

const resourceLinks = [
  {
    title: "Compliance process",
    href: "/#process",
    description: "Monthly data collection, review, filing support, and reporting rhythm.",
  },
  {
    title: "Risk areas",
    href: "/#risk-areas",
    description: "Common PF, ESIC, payroll, contractor, and notice-readiness gaps.",
  },
  {
    title: "Documents checklist",
    href: "/#documents",
    description: "Records employers should keep ready for claims, audits, and inspections.",
  },
  {
    title: "Service packages",
    href: "/#packages",
    description: "Setup, monthly care, and inspection-readiness package options.",
  },
];

function MegaMenu({
  label,
  children,
  width = "w-[44rem]",
}: {
  label: string;
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-haspopup="true"
        className="flex appearance-none items-center gap-2 border-0 bg-transparent p-0 py-2 text-sm font-semibold text-slate-700 transition hover:text-emerald-700 focus:outline-none"
      >
        {label}
        <span
          aria-hidden="true"
          className="mt-[-2px] h-1.5 w-1.5 rotate-45 border-b border-r border-current"
        />
      </button>
      <div
        className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${width}`}
      >
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex w-full items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-12 xl:px-16">
        <Link href="/" className="shrink-0 text-base font-bold text-slate-950">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          <MegaMenu label="Services" width="w-[54rem]">
            <div className="grid gap-3 md:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-lg p-3 transition hover:bg-slate-50"
                >
                  <p className="font-bold text-slate-950">{service.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </MegaMenu>

          <MegaMenu label="Industries" width="w-[40rem]">
            <div className="grid gap-2 sm:grid-cols-2">
              {targetSegments.map((segment) => (
                <Link
                  key={segment}
                  href="/#industries"
                  className="rounded-lg border border-slate-200 p-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-600 hover:bg-emerald-50"
                >
                  {segment}
                </Link>
              ))}
            </div>
          </MegaMenu>

          <MegaMenu label="Resources" width="w-[42rem]">
            <div className="grid gap-3 md:grid-cols-2">
              {resourceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg p-3 transition hover:bg-slate-50"
                >
                  <p className="font-bold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </MegaMenu>

          <MegaMenu label="Statutory Coverage" width="w-[54rem]">
            <div className="grid gap-3 md:grid-cols-2">
              {statutoryCoverage.slice(0, 8).map((law) => (
                <Link
                  key={law.shortTitle}
                  href="/resources/statutory-coverage"
                  className="rounded-lg p-3 transition hover:bg-slate-50"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    {law.category}
                  </p>
                  <p className="mt-1 font-bold text-slate-950">{law.shortTitle}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{law.area}</p>
                </Link>
              ))}
              <Link
                href="/resources/statutory-coverage"
                className="rounded-lg p-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50 md:col-span-2"
              >
                View full statutory coverage
              </Link>
            </div>
          </MegaMenu>

          <Link href="/pf-esic-consultant-in-your-city" className="py-2 font-semibold hover:text-emerald-700">
            Local consultant
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/services/compliance-health-check"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-slate-900"
          >
            Health check
          </Link>
          <Link href="/contact" className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-bold text-white">
            Enquire now
          </Link>
        </div>

        <nav className="flex items-center gap-3 text-sm font-medium text-slate-700 lg:hidden">
          <Link href="/#services">Services</Link>
          <Link href="/#industries">Industries</Link>
          <Link href="/contact" className="rounded-md bg-emerald-700 px-3 py-2 text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
