import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-hero-pattern py-11 px-40">
      <div className="flex">
        <Image src="/about.png" width={467} height={453} alt="about" />
        <div className="ml-6">
          <h2 className="text-4xl font-bold mt-6">En Polimar</h2>
          <p className="mt-6 text-base font-normal">
            Nos comprometemos a suministrar empaques y envases plásticos
            flexibles, así como insumos encaminados en la satisfacción total de
            las necesidades de nuestros clientes, así como la búsqueda de la
            mejora continua y la eficiencia del sistema de gestión de calidad y
            sus procesos, contando con personal calificado y comprometido con la
            organización, asegurando así una completa satisfacción de Nuestros
            Clientes y nuestro reconocimiento como Empresa Líder.
          </p>
          <div className="mt-20">
            <Link className="bg-cyan-200 p-4 mt-16 text-white" href="/contacto">
              Contactanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
