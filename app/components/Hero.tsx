import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/herohome.png" 
          fill
          alt="Polimar - Fábrica de empaques flexibles"
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
          Fábrica de empaques flexibles
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Soluciones innovadoras en empaques plásticos para todas tus necesidades
        </p>

        <Link
          href="/productos"
          className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-darkblue-100 font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50"
          aria-label="Ver nuestros productos"
        >
          Ver Productos
          <svg 
            className="ml-2 h-5 w-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg 
            className="h-6 w-6 text-white/70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
