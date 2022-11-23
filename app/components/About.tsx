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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
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
