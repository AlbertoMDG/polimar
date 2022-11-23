"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathName = usePathname();

  return (
    <header className="flex  bg-cyan-100 h-20 py-2 px-32 justify-between">
      <div>
        <Image src="/logo.svg" width={231} height={68} alt="logo" />
      </div>
      <nav className="flex my-auto">
        <ul className="flex justify-center align-middle">
          <li>
            <Link
              className={
                pathName === "/"
                  ? "text-black text-lg font-semibold  ml-10"
                  : "text-white text-lg  ml-10"
              }
              href="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/productos"
              className={
                pathName === "/productos"
                  ? "text-black text-lg font-semibold  ml-10"
                  : "text-white text-lg  ml-10"
              }
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className={
                pathName === "/contacto"
                  ? "text-black text-lg font-semibold  ml-10"
                  : "text-white text-lg  ml-10"
              }
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
