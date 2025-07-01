"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Contacto", href: "/contacto" },
];

export const NavBar = () => {
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-darkblue-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image 
                src="/logo.svg" 
                width={231} 
                height={68} 
                alt="Polimar Logo"
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-lg font-medium transition-colors duration-200 hover:text-white ${
                  pathName === item.href
                    ? "text-white font-semibold border-b-2 border-cyan-200"
                    : "text-cyan-100 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-cyan-100 hover:text-white focus:outline-none focus:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-darkblue-100 border-t border-cyan-200/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    pathName === item.href
                      ? "text-white bg-cyan-200/20 font-semibold"
                      : "text-cyan-100 hover:text-white hover:bg-cyan-200/10"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
