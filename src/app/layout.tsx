import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteDescription =
  "SwiftWarm منظومة تجمع الوعي والتصميم والإعلام والمنتجات والتجارب لتحويل الفكرة إلى خطوة.";

export const metadata: Metadata = {
  title: {
    default: "SwiftWarm — رتّب وعيك. رتّب عالمك. اصنع حياتك.",
    template: "%s | SwiftWarm",
  },
  description: siteDescription,
  applicationName: "SwiftWarm",
  keywords: [
    "SwiftWarm",
    "وعي",
    "تصميم داخلي",
    "تشطيبات",
    "صناعة محتوى",
    "شموع",
    "تجارب وورش",
  ],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "SwiftWarm",
    title: "SwiftWarm — رتّب وعيك. رتّب عالمك. اصنع حياتك.",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftWarm",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SwiftWarm",
  slogan: "رتّب وعيك. رتّب عالمك. اصنع حياتك.",
  description: siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
