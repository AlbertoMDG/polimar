import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Mapa from "../components/Mapa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos para más información sobre nuestros productos y servicios. Estamos ubicados en Maracaibo, Venezuela.",
  keywords: ["contacto polimar", "Maracaibo", "Venezuela", "información", "ubicación"],
  openGraph: {
    title: "Contacto - Polimar",
    description: "Ponte en contacto con nosotros para más información",
    type: "website",
  },
};

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-darkblue-100 to-darkblue-200 text-white py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Contacta con Nosotros
            </h1>
            <p className="text-lg lg:text-xl text-darkblue-50 leading-relaxed">
              Estamos aquí para ayudarte con todas tus necesidades de productos plásticos y polietileno
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16">
        <div className="container">
          {/* Map and Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Mapa />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
