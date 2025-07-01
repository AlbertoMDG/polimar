"use client";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-hero-pattern py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/about.png"
                fill
                alt="Instalaciones de Polimar - Fábrica de empaques flexibles"
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-darkblue-100 mb-6">
                En Polimar
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos comprometemos a suministrar empaques y envases plásticos
                flexibles, así como insumos encaminados en la satisfacción total de
                las necesidades de nuestros clientes, así como la búsqueda de la
                mejora continua y la eficiencia del sistema de gestión de calidad y
                sus procesos, contando con personal calificado y comprometido con la
                organización, asegurando así una completa satisfacción de nuestros
                clientes y nuestro reconocimiento como empresa líder.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-cyan-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Calidad garantizada</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-cyan-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Personal calificado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-cyan-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Mejora continua</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-cyan-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Empresa líder</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link 
                href="/contacto"
                className="inline-flex items-center justify-center bg-cyan-200 hover:bg-cyan-100 text-white font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-200/50"
              >
                Contáctanos
                <svg 
                  className="ml-2 h-5 w-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
