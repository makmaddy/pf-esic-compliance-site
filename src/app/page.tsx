import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import {
  clientOutcomes,
  complianceProcess,
  documentChecklist,
  industryDetails,
  monthlyCalendar,
  riskAreas,
  servicePackages,
  services,
  site,
  targetSegments,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "PF ESIC Consultant for Small Businesses, Contractors and MSMEs",
  description:
    "PF, ESIC, payroll, contractor, and labour compliance support for registration, monthly filing, employee movement, contractor records, and inspection readiness.",
  alternates: {
    canonical: "/",
  },
};

const faq = [
  {
    question: "Who needs PF and ESIC compliance support?",
    answer:
      "Small businesses, contractors, factories, restaurants, clinics, schools, and MSMEs that hire employees often need support with registrations, monthly filings, employee records, exits, and claims.",
  },
  {
    question: "What is included in monthly PF and ESIC support?",
    answer:
      "Monthly support can include employee addition and exit tracking, PF ECR preparation support, ESIC contribution support, challan coordination, compliance reporting, and basic employee query handling.",
  },
  {
    question: "Can you work with our CA or accountant?",
    answer:
      "Yes. The service can work alongside your CA, accountant, HR, or admin team so tax, payroll, PF, ESIC, and employee records are handled with clear responsibilities.",
  },
  {
    question: "Do you support contractors and principal employers?",
    answer:
      "Yes. Contractor-heavy businesses can get support with employee movement, challan records, contractor documentation, principal-employer coordination, and inspection file readiness.",
  },
  {
    question: "Do you handle legal cases or court matters?",
    answer:
      "This service focuses on compliance execution, records, monthly support, health checks, notices, and inspection readiness. Litigation, formal legal opinions, and legal appearance should be handled by a qualified professional.",
  },
  {
    question: "What is the best first step?",
    answer:
      "Start with a compliance health check. It identifies visible registration, filing, employee-record, payroll, contractor, and notice-readiness gaps before committing to a monthly retainer.",
  },
];

const proofPoints = [
  "6 years hands-on PF/ESIC compliance experience",
  "Practical filing, portal, employee, and notice support",
  "Monthly tracker instead of last-minute compliance work",
  "Clear exclusions for penalties, litigation, and government fees",
];

const stats = [
  ["6+", "Years of field experience"],
  ["10-100", "Employee businesses supported best"],
  ["Monthly", "PF, ESIC, payroll and records rhythm"],
  ["India", "Small business and contractor focus"],
];

function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      {eyebrow ? (
        <p className={`text-sm font-bold uppercase tracking-wide ${dark ? "text-emerald-300" : "text-emerald-700"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 text-3xl font-bold leading-tight md:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${dark ? "text-slate-300" : "text-slate-700"}`}>
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    areaServed: "India",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "IN",
    },
    serviceType: [
      "PF compliance",
      "ESIC compliance",
      "Payroll compliance",
      "Labour compliance",
      "Contractor compliance",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="w-full bg-white">
        <div className="grid min-h-[calc(100vh-73px)] w-full lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex items-center px-5 py-12 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                PF, ESIC, payroll and labour compliance
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-6xl xl:text-7xl">
                PF ESIC compliance support for growing Indian businesses
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
                Build a clean monthly compliance system for PF, ESIC, payroll,
                employee movement, contractor records, challan coordination, and
                inspection readiness without hiring a full in-house compliance
                team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-sm"
                >
                  Book free health check
                </Link>
                <Link
                  href="/services/monthly-pf-esic-compliance"
                  className="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900"
                >
                  View monthly support
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {proofPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex min-h-[520px] items-center bg-slate-100 px-5 py-10 sm:px-8 lg:min-h-full lg:px-10 xl:px-14">
            <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-2xl">
              <Image
                src="/images/compliance-consulting-hero.png"
                alt="PF ESIC compliance consultant reviewing payroll and employee compliance documents"
                width={1200}
                height={675}
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="aspect-[16/10] h-auto w-full rounded-lg object-cover"
              />
              <div className="grid gap-3 p-3 sm:grid-cols-3">
                {[
                  ["Setup", "PF/ESIC registration"],
                  ["Monthly", "Filing and records"],
                  ["Ready", "Notice and inspection files"],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-md bg-slate-50 p-4">
                    <p className="text-lg font-bold text-emerald-700">{label}</p>
                    <p className="mt-1 text-sm text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-slate-200 bg-slate-950 text-white">
        <div className="grid w-full gap-px bg-slate-800 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-slate-950 px-5 py-8 sm:px-8 lg:px-12">
              <p className="text-3xl font-bold text-emerald-400">{value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="w-full bg-slate-50 px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <SectionHeader
          eyebrow="Services"
          title="Everything a small employer needs after hiring people"
          description="The service offer is organized around real employer problems: registration, monthly filing, payroll data, employee movement, contractor documentation, and readiness for notices or inspections."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </section>

      <section id="risk-areas" className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Risk areas"
            title="Compliance gaps usually start small"
            description="A missing exit date, delayed KYC, untracked contractor worker, or scattered challan record may look minor until an employee claim, principal-employer audit, notice, or inspection requires proof."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {riskAreas.map((risk) => (
              <article key={risk.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-950">{risk.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{risk.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="w-full bg-emerald-950 px-5 py-16 text-white sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">
              Packages
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Clear service packages for first-time buyers
            </h2>
            <p className="mt-4 text-lg leading-8 text-emerald-50">
              Clients should understand what they are buying in one view. Keep
              setup, monthly care, and inspection readiness separate so pricing
              and responsibilities stay clear.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {servicePackages.map((item) => (
              <article key={item.name} className="rounded-lg bg-white p-6 text-slate-950 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                  {item.bestFor}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{item.name}</h3>
                <p className="mt-2 text-lg font-bold text-slate-800">{item.price}</p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="w-full bg-slate-100 px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Monthly process"
            title="A repeatable compliance rhythm, not last-minute firefighting"
            description="The monthly flow keeps HR, admin, owner, accountant, and compliance work aligned. It is simple enough for small businesses and structured enough for contractor-heavy operations."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {complianceProcess.map((step, index) => (
              <div
                key={step}
                className="grid min-h-36 gap-4 rounded-lg border border-slate-200 bg-white p-5 sm:grid-cols-[3rem_1fr]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-700 text-lg font-bold text-white">
                  {index + 1}
                </div>
                <p className="self-center leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {monthlyCalendar.map((item) => (
            <article key={item.phase} className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                Day {item.phase}
              </p>
              <h3 className="mt-3 text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="documents" className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 xl:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Documents"
              title="Records that should not be scattered"
              description="A practical compliance service is not only about submitting monthly data. It also creates a file structure that can be used during employee queries, claims, audits, and inspections."
            />
            <div className="mt-8 grid gap-3">
              {documentChecklist.map((item) => (
                <div key={item} className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Client outcomes"
              title="What the client should feel after 60 days"
              description="The first two months should give the owner a clearer view of what is filed, what is paid, what is missing, and who is responsible for the next action."
            />
            <div className="mt-8 grid gap-3">
              {clientOutcomes.map((item) => (
                <div key={item} className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="w-full bg-slate-950 px-5 py-16 text-white sm:px-8 lg:px-12 xl:px-16">
        <SectionHeader
          eyebrow="Industries"
          title="Built for businesses with recurring employee movement"
          description="The strongest early clients are businesses where PF/ESIC work repeats every month and where missing records create visible operational risk."
          dark
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {industryDetails.map((item) => (
            <article key={item.segment} className="rounded-lg bg-white p-6 text-slate-950">
              <h3 className="text-xl font-bold">{item.segment}</h3>
              <p className="mt-4 text-sm font-bold text-rose-700">Pain point</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.pain}</p>
              <p className="mt-4 text-sm font-bold text-emerald-700">Support</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.support}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {targetSegments.map((segment) => (
            <div key={segment} className="rounded-md border border-slate-700 bg-slate-900 p-4 text-sm font-semibold">
              {segment}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-8 rounded-none bg-slate-950 p-8 text-white md:p-12 xl:grid-cols-[1fr_0.7fr] xl:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-300">
              First step
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Start with a compliance health check
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
              Share your employee count, registration status, filing process,
              contractor details, and any current notice or employee issue. You
              will get a simple gap note and recommended monthly support scope.
            </p>
          </div>
          <div className="grid gap-3 justify-self-start xl:justify-self-end">
            <Link
              href="/contact"
              className="rounded-md bg-emerald-500 px-5 py-3 text-center text-sm font-bold text-slate-950"
            >
              Book free health check
            </Link>
            <Link
              href="/pf-esic-consultant-in-your-city"
              className="rounded-md border border-slate-600 px-5 py-3 text-center text-sm font-bold text-white"
            >
              View local consultant page
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions employers ask before starting"
          description="These answers help qualify serious leads and make the scope clearer before the first call."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {faq.map((item) => (
            <div key={item.question} className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-slate-950">{item.question}</h3>
              <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
