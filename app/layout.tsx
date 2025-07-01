import { NavBar } from "./components/NavBar";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300", "200", "100"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Polimar - Fábrica de Empaques Flexibles",
    template: "%s | Polimar",
  },
  description: "Nos comprometemos a suministrar empaques y envases plásticos flexibles, así como insumos encaminados en la satisfacción total de las necesidades de nuestros clientes.",
  keywords: ["empaques flexibles", "envases plásticos", "polietileno", "bolsas plásticas", "Venezuela", "Maracaibo"],
  authors: [{ name: "Polimar C.A." }],
  creator: "Polimar C.A.",
  publisher: "Polimar C.A.",
  metadataBase: new URL("https://polimar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "https://polimar.com",
    title: "Polimar - Fábrica de Empaques Flexibles",
    description: "Fábrica de empaques y envases plásticos flexibles en Venezuela",
    siteName: "Polimar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polimar - Fábrica de Empaques Flexibles",
    description: "Fábrica de empaques y envases plásticos flexibles en Venezuela",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Reemplazar con el código real
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} scroll-smooth`}>
      <body className={`${poppins.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Whatsapp />
        </div>
      </body>
    </html>
  );
}
