"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Contacto", href: "/contacto" },
];

const Footer = () => {
  const pathName = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-darkblue-100 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/footerlogo.svg"
                width={242}
                height={149}
                alt="Polimar Logo"
                className="h-auto w-auto max-w-[200px]"
              />
            </div>
            <p className="text-cyan-100 text-sm leading-relaxed">
              Especialistas en empaques y envases plásticos flexibles. 
              Comprometidos con la calidad y satisfacción de nuestros clientes.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Navegación</h4>
            <nav>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-sm transition-colors duration-200 hover:text-white ${
                        pathName === item.href
                          ? "text-white font-semibold"
                          : "text-cyan-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact and Social */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Síguenos</h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/polimar.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-cyan-100 hover:text-white transition-colors duration-200 group"
              >
                <div className="p-2 bg-cyan-200/20 rounded-lg group-hover:bg-cyan-200/30 transition-colors duration-200">
                  <Image
                    src="/instagram.svg"
                    width={24}
                    height={24}
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-sm font-medium">@polimar.ca</span>
              </a>
              
              <div className="flex items-center space-x-3 text-cyan-100">
                <div className="p-2 bg-cyan-200/20 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                  </svg>
                </div>
                <span className="text-sm">info@polimar.com</span>
              </div>
              
              <div className="flex items-center space-x-3 text-cyan-100">
                <div className="p-2 bg-cyan-200/20 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span className="text-sm">+58 412-6837411</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-200/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-cyan-100">
              &copy; {year} Polimar C.A. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-cyan-100">
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
