import type { Metadata, Viewport } from "next";
import { Antonio, Poppins } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-antonio",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

const SITE_URL = "https://colablancaplaza.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "COLABLANCA PLAZA · La casa del venado · Tegucigalpa",
    template: "%s · COLABLANCA PLAZA",
  },
  description:
    "Seis servicios premium. Una sola dirección. Carwash, detailing, lubricentro, barbería, salón y restaurante en el corazón de Tegucigalpa.",
  keywords: [
    "Colablanca Plaza",
    "Tegucigalpa",
    "Honduras",
    "carwash premium",
    "detailing",
    "lubricentro",
    "barbería",
    "salón de belleza",
    "restaurante",
  ],
  authors: [{ name: "COLABLANCA PLAZA" }],
  creator: "COLABLANCA PLAZA",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: SITE_URL,
    siteName: "COLABLANCA PLAZA",
    title: "COLABLANCA PLAZA · La casa del venado",
    description:
      "Seis servicios premium. Una sola dirección. Cero compromisos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "COLABLANCA PLAZA",
    description:
      "Seis servicios premium. Una sola dirección. Cero compromisos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#262626",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-HN"
      className={`${antonio.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-ink text-paper font-body antialiased selection:bg-neon selection:text-ink">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
