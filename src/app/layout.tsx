import localFont from "next/font/local";
import "./globals.css";

import { languages } from "@/i18n/settings";
import { useTranslation } from "@/i18n";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  // 🌍 translate metadata
  const { i18n } = await useTranslation("translation");
  const description = i18n.t("html.description");
  const title = i18n.t("html.title");

  return (
    <html lang={lng}>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {languages.map((lang) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={`/${lang}`} />
        ))}
        <meta name="google" content="notranslate"></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
