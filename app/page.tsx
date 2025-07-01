import About from "./components/About";
import Hero from "./components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Polimar - Fábrica de empaques y envases plásticos flexibles en Venezuela. Especialistas en polietileno de alta y baja densidad.",
  keywords: ["polimar", "empaques flexibles", "Venezuela", "fábrica", "polietileno"],
  openGraph: {
    title: "Polimar - Fábrica de Empaques Flexibles",
    description: "Especialistas en empaques y envases plásticos flexibles",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
