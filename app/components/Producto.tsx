import Image from "next/image";

interface IProducto {
  bg?: boolean;
  order?: boolean;
  producto: string;
  img: string;
}

const Producto = ({ bg, order, producto, img }: IProducto) => {
  return (
    <div className={`${bg && "bg-hero-pattern"} flex py-6 px-40 mt-4`}>
      <Image
        className={`${order && "order-last ml-10"} mr-10`}
        src={img}
        width={467}
        height={453}
        alt="producto"
      />

      <div className="mt-8">
        <h3 className="text-4xl font-bold">{producto}</h3>
        <p className="text-base mt-4 ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </div>
    </div>
  );
};

export default Producto;
