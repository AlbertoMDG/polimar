import Producto from "../components/Producto";

export default function Productos() {
  return (
    <>
      <Producto img="/bolsanegra.png" producto="Bolsa Negra" bg={true} />
      <Producto img="/strech.png" producto="Strech" order={true} />
      <Producto img="/camiseta.png" producto="Bolsa tipo camiseta" bg={true} />
      <Producto
        img="/polietileno.png"
        producto="Polietilono de alta densidad"
        order={true}
      />
    </>
  );
}
