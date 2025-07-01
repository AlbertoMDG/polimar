"use client";

import Image from "next/image";

const contactData = [
  {
    icon: "/tlf.svg",
    text: "+58 412-6837411",
    label: "Teléfono",
    href: "tel:+584126837411",
  },
  {
    icon: "/loc.svg",
    text: "Avenida 68, Maracaibo 4004, Zulia, Venezuela",
    label: "Dirección",
    href: "https://maps.google.com/?q=Avenida+68,+Maracaibo+4004,+Zulia,+Venezuela",
  },
  {
    icon: "/instagram2.svg",
    text: "@polimar.ca",
    label: "Instagram",
    href: "https://www.instagram.com/polimar.ca/",
  },
];

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col justify-center">
      <div>
        <h3 className="text-3xl font-bold text-darkblue-100 mb-8 text-center lg:text-left">
          Información de Contacto
        </h3>
        
        <div className="space-y-6">
          {contactData.map((contact, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg shadow-sm">
                  <Image 
                    src={contact.icon} 
                    width={24} 
                    height={24} 
                    alt={contact.label}
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-darkblue-100 mb-1">{contact.label}</p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? "_blank" : "_self"}
                      rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-gray-700 hover:text-cyan-200 transition-colors duration-200 font-medium break-words leading-relaxed"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-700 font-medium break-words leading-relaxed">{contact.text}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-xl font-semibold text-darkblue-100 mb-4">Horarios de Atención</h4>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
              <span className="font-medium">Lunes - Viernes:</span>
              <span className="text-darkblue-100 font-semibold">8:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
              <span className="font-medium">Sábados:</span>
              <span className="text-darkblue-100 font-semibold">8:00 AM - 12:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
              <span className="font-medium">Domingos:</span>
              <span className="text-red-600 font-semibold">Cerrado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
