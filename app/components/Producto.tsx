import Image from "next/image";

interface IProducto {
  bg?: boolean;
  order?: boolean;
  producto: string;
  img: string;
}

const Producto = ({ bg, order, producto, img }: IProducto) => {
  return (
    <div
      className={`${
        bg && "bg-hero-pattern"
      } flex justify-evenly py-6 px-40 mt-4`}
    >
      <Image
        className={`${order && "order-last ml-10"} mr-10`}
        src={img}
        width={467}
        height={453}
        alt="producto"
      />

      <div className="mt-8 flex flex-col justify-center">
        <h3 className="text-4xl font-bold">{producto}</h3>
      </div>
    </div>
  );
};

export default Producto;
