import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./inner-pages.css";
import { SastikScripts } from "@/components/SastikScripts";
import { siteUrl } from "@/data/site";

const title = "Always Compliant — GST, ROC & Tax Compliance Experts";
const description =
  "Expert-led GST, ROC, tax, registration and statutory compliance support for startups, MSMEs and growing businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Always Compliant" },
  description,
  icons: { icon: "/assets/img/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "Always Compliant",
    title,
    description,
    url: "/",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09070c",
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
