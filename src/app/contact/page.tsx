import type { Metadata } from "next";
import { enquiryServiceOptions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact PF ESIC Compliance Consultant",
  description:
    "Contact for PF, ESIC, payroll, contractor, and labour compliance support, registration, monthly filing, and compliance health check.",
  alternates: {
    canonical: "/contact",
  },
};

const intakeQuestions = [
  "Business name, city, and industry",
  "Current employee count and contractor worker count",
  "PF and ESIC registration status",
  "Who currently handles monthly filing",
  "Average new joiners and exits per month",
  "Current payroll process and salary input format",
  "Any pending UAN, KYC, ESIC IP, claim, or exit issue",
  "Any notice, inspection, complaint, or principal-employer audit",
];

const callFlow = [
  {
    title: "Quick diagnosis",
    detail:
      "Understand registration status, employee count, filing process, contractor exposure, and urgent risks.",
  },
  {
    title: "Gap note",
    detail:
      "List visible gaps in filing, employee records, payroll inputs, contractor documents, and inspection files.",
  },
  {
    title: "Scope suggestion",
    detail:
      "Recommend setup, monthly care, payroll review, contractor support, or notice readiness with clear exclusions.",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section className="grid min-h-[calc(100vh-73px)] w-full lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex items-center bg-white px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
              Book a PF ESIC compliance health check
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Share your employee count, current PF/ESIC status, monthly filing
              process, contractor details, and any urgent notice, claim,
              inspection, or employee record issue.
            </p>

            <div className="mt-8 grid gap-4 bg-slate-950 p-6 text-white">
              <p className="text-xl font-bold">Direct contact</p>
              <p className="text-slate-300">Phone: {site.phone}</p>
              <p className="text-slate-300">Email: {site.email}</p>
              <p className="text-slate-300">Location: {site.city}, India</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
          <form
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                Business enquiry form
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Tell us what support you need
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                This form is ready for the frontend. A backend, email service,
                CRM, or Google Sheet integration can be connected later.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Full name
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none focus:border-emerald-700"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Mobile number
                <input
                  name="mobile"
                  type="tel"
                  required
                  placeholder="+91"
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none focus:border-emerald-700"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none focus:border-emerald-700"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Business name
                <input
                  name="businessName"
                  type="text"
                  required
                  placeholder="Company / establishment name"
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none focus:border-emerald-700"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                City
                <input
                  name="city"
                  type="text"
                  required
                  placeholder="City"
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none focus:border-emerald-700"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Industry
                <select
                  name="industry"
                  required
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none focus:border-emerald-700"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select industry
                  </option>
                  <option>Security / housekeeping</option>
                  <option>Factory / workshop</option>
                  <option>Restaurant / cloud kitchen</option>
                  <option>Clinic / hospital / diagnostics</option>
                  <option>School / coaching institute</option>
                  <option>MSME / startup</option>
                  <option>Manpower / staffing agency</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Employee count
                <select
                  name="employeeCount"
                  required
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none focus:border-emerald-700"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  <option>1-9</option>
                  <option>10-20</option>
                  <option>21-50</option>
                  <option>51-100</option>
                  <option>101-250</option>
                  <option>250+</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Service needed
                <select
                  name="serviceNeeded"
                  required
                  className="rounded-md border border-slate-300 px-3 py-3 font-normal outline-none focus:border-emerald-700"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select service
                  </option>
                  {enquiryServiceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800 md:col-span-2">
                Current issue or requirement
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Example: PF/ESIC registration pending, monthly filing support needed, employee exit issue, contractor records, notice received..."
                  className="resize-none rounded-md border border-slate-300 px-3 py-3 font-normal outline-none focus:border-emerald-700"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white"
            >
              Submit enquiry
            </button>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              This static version opens the visitor's email app with the form
              details. A backend, Google Sheet, CRM, or email API can replace it
              later.
            </p>
          </form>
        </div>
      </section>

      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-950">Useful details before the call</h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-700">
            These questions make the first call useful and help identify whether
            you need registration, monthly retainer support, payroll review,
            contractor documentation, or notice readiness.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {intakeQuestions.map((question) => (
              <div
                key={question}
                className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800"
              >
                {question}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {callFlow.map((item, index) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                Step {index + 1}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
