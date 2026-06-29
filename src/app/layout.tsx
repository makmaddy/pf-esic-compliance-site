import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "PF ESIC Consultant for Small Businesses in India",
    template: "%s | PF ESIC Compliance Consultant",
  },
  description: site.description,
  keywords: site.primaryKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PF ESIC Consultant for Small Businesses in India",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
