import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <Image src="/herohome.png" width={1280} height={636} alt="hero" />
      <h2 className="text-white text-4xl textHero absolute font-bold">
        Fabrica de empaques flexibles
      </h2>
      <Link
        className="bg-white font-bold absolute heroButtom p-4 w-52 text-center text-darkblue-100"
        href="/productos"
      >
        Productos
      </Link>
    </div>
  );
};

export default Hero;
