import Link from "next/link";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="grid w-full gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] lg:px-12 xl:px-16">
        <div>
          <p className="font-bold">{site.name}</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{site.description}</p>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-3 text-sm text-slate-300">{site.city}, India</p>
          <p className="text-sm text-slate-300">{site.phone}</p>
          <p className="text-sm text-slate-300">{site.email}</p>
          <Link href="/pf-esic-consultant-in-your-city" className="mt-3 inline-block text-sm text-emerald-300">
            Local PF ESIC consultant page
          </Link>
        </div>
      </div>
    </footer>
  );
}
