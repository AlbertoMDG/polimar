"use client";

import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="w-1/2 bg-gray-10 py-7 px-14 ">
      <h3 className="text-black text-4xl z-10 font-semibold">Contactos</h3>
      <ul className="z-10">
        <li className="flex mt-8">
          <Image src="/tlf.svg" width={24} height={24} alt="telefonos" />
          <span className="ml-4">+58 412-6837411</span>
        </li>
        <li className="flex mt-8">
          <Image src="/loc.svg" width={24} height={24} alt="telefonos" />
          <span className="ml-4">
            Avenida 68, Maracaibo 4004, Zulia, Venezuela
          </span>
        </li>
        <li className="mt-8">
          <a
            className="flex justify-start"
            href="https://www.instagram.com/polimar.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram2.svg"
              width={24}
              height={24}
              alt="telefonos"
            />
            <span className="ml-4">Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
