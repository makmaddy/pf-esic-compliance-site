import Link from "next/link";

type ServiceCardProps = {
  title: string;
  href: string;
  description: string;
};

export function ServiceCard({ title, href, description }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="flex min-h-56 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-600 hover:shadow-md"
    >
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <p className="mt-auto pt-6 text-sm font-semibold text-emerald-700">View service</p>
    </Link>
  );
}
