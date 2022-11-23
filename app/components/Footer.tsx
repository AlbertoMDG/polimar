"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  const year = new Date().getFullYear();

  return (
    <footer className=" flex justify-between bg-darkblue-100 px-40 py-14">
      <Image
        className="img"
        src="/footerlogo.svg"
        width={242}
        height={149}
        alt="logo"
      />
      <div className="flex flex-col">
        <nav>
          <ul className="flex">
            <li className="ml-4">
              <Link
                className={
                  pathName === "/"
                    ? "text-white  text-base font-bold ml-10"
                    : "text-white text-lg  ml-10"
                }
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li className="ml-4">
              <Link
                className={
                  pathName === "/productos"
                    ? "text-white  font-bold ml-10"
                    : "text-white text-base ml-10"
                }
                href="/productos"
              >
                Produtos
              </Link>
            </li>
            <li className="ml-4">
              <Link
                className={
                  pathName === "/contacto"
                    ? "text-white  text-base font-bold ml-10"
                    : "text-white text-base ml-10"
                }
                href="/contacto"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col mt-6 text-white">
          <span className="font-bold text-end">Siguenos:</span>
          <a
            className="flex justify-end mt-2"
            href="https://www.instagram.com/polimar.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="img"
              src="/instagram.svg"
              width={32}
              height={36}
              alt="instagram"
            />
          </a>
        </div>
        <span className="text-end mt-4 text-white">Polimar &copy;{year}</span>
      </div>
    </footer>
  );
};

export default Footer;
