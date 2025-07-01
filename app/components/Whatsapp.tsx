import Image from "next/image";

const Whatsapp = () => {
  return (
    <div className="whatsapp group">
      <a 
        href="https://wa.link/5rmo0n" 
        rel="noopener noreferrer"
        target="_blank"
        className="block p-2 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <Image 
          src="/whatsapp.png" 
          width={70} 
          height={70} 
          alt="WhatsApp - Contactar ahora"
          className="w-16 h-16 drop-shadow-md"
          priority
        />
      </a>
      
      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-darkblue-100 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        ¡Escríbenos por WhatsApp!
        <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-darkblue-100 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
      </div>
    </div>
  );
};

export default Whatsapp;
