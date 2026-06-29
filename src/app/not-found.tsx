import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full bg-white">
      <section className="min-h-[calc(100vh-73px)] w-full px-5 py-20 sm:px-8 lg:px-12 xl:px-16">
        <h1 className="text-4xl font-bold text-slate-950">Page not found</h1>
        <p className="mt-4 leading-7 text-slate-700">
          The page you are looking for is not available.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-emerald-700 px-5 py-3 text-sm font-bold text-white"
        >
          Go to home
        </Link>
      </section>
    </main>
  );
}
