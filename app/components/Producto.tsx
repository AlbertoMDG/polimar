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
        bg ? "bg-hero-pattern" : "bg-white"
      } py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          order ? "lg:grid-flow-col-dense" : ""
        }`}>
          {/* Image */}
          <div className={`relative ${order ? "lg:col-start-2" : ""}`}>
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <Image
                src={img}
                fill
                alt={producto}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${order ? "lg:col-start-1" : ""} flex flex-col justify-center space-y-6`}>
            <h3 className="text-3xl lg:text-4xl font-bold text-darkblue-100 leading-tight">
              {producto}
            </h3>
            
            <div className="flex items-center space-x-3 text-cyan-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Producto de alta calidad</span>
            </div>
            
            <div className="flex items-center space-x-3 text-cyan-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Fabricación especializada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
