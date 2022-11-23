import Image from "next/image";

const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <a href="https://wa.link/5rmo0n" rel="noopener noreferrer">
        <Image src="/whatsapp.png" width={70} height={70} alt="whatsapp" />
      </a>
    </div>
  );
};

export default Whatsapp;
