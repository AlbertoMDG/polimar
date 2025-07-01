import Producto from "../components/Producto";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos",
  description: "Conoce nuestra amplia gama de productos: bolsas de polietileno, stretch film, empaques automáticos y más soluciones en plásticos flexibles.",
  keywords: ["productos polimar", "bolsas polietileno", "stretch film", "empaques automáticos", "PEAD", "PEBD"],
  openGraph: {
    title: "Productos - Polimar",
    description: "Amplia gama de productos en empaques plásticos flexibles",
    type: "website",
  },
};

const productos = [
  {
    id: 1,
    img: "/bolsanegra.png",
    producto: "Bolsas de baja densidad tipo empaque y basura",
    bg: true,
  },
  {
    id: 2,
    img: "/strech.png",
    producto: "Stretch Film",
    order: true,
  },
  {
    id: 3,
    img: "/camiseta.png",
    producto: "Bolsas de alta densidad tipo camiseta",
    bg: true,
  },
  {
    id: 4,
    img: "/polietileno.png",
    producto: "Polietileno de alta densidad (PEAD)",
    order: true,
  },
  {
    id: 5,
    img: "/polibaja.png",
    producto: "Polietileno de Baja Densidad (PEBD)",
    bg: true,
  },
  {
    id: 6,
    img: "/empaquesAuto.png",
    producto: "Bolsas para empacado automático",
    order: true,
  },
];

export default function Productos() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-darkblue-100">
          Nuestros Productos
        </h1>
        <div className="space-y-8">
          {productos.map((producto) => (
            <Producto
              key={producto.id}
              img={producto.img}
              producto={producto.producto}
              bg={producto.bg}
              order={producto.order}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
