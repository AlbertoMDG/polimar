const Mapa = () => {
  return (
    <div className="w-full h-[400px] lg:h-[500px] relative rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.9424910532866!2d-71.67714588413074!3d10.583669465613363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8990c944955af7%3A0x9265cc4b1b094a3c!2sPolietilenos%20Maracaibo%2Cc.a.!5e0!3m2!1ses!2sco!4v1669197855902!5m2!1ses!2sco"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Polimar - Polietilenos Maracaibo C.A."
        className="absolute inset-0 w-full h-full"
        allowFullScreen
      />
      
      {/* Overlay para mejorar la accesibilidad */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <p className="text-sm font-bold text-darkblue-100">Polietilenos Maracaibo C.A.</p>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          Avenida 68, Maracaibo 4004, Zulia, Venezuela
        </p>
        <div className="mt-2 pt-2 border-t border-gray-200">
          <p className="text-xs text-cyan-200 font-medium">
            📍 Ver en Google Maps
          </p>
        </div>
      </div>

      {/* Botón para abrir en Google Maps */}
      <a
        href="https://maps.google.com/?q=Polietilenos+Maracaibo+C.A.+Avenida+68,+Maracaibo+4004,+Zulia,+Venezuela"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-darkblue-100 hover:bg-darkblue-200 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 text-sm font-medium"
      >
        Abrir en Maps
      </a>
    </div>
  );
};

export default Mapa;
