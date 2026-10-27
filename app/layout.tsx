import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./inner-pages.css";
import { SastikScripts } from "@/components/SastikScripts";
import { siteUrl } from "@/data/site";

const title = "Always Compliant - GST, ROC & Tax Compliance Experts";
const description =
  "Expert-led GST, ROC, tax, registration and statutory compliance support for startups, MSMEs and growing businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Always Compliant" },
  description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Always Compliant",
    title,
    description,
    url: "/",
    images: [{ url: "/assets/img/always-compliant/always-compliant-hero-final.svg", width: 1200, height: 630, alt: "Always Compliant compliance advisory preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/img/always-compliant/always-compliant-hero-final.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1b45",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/custom-fonts.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className="automation-saas">
        {children}
        <SastikScripts />
      </body>
    </html>
  );
}
