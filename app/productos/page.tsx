import Producto from "../components/Producto";

export default function Productos() {
  return (
    <>
      <Producto
        img="/bolsanegra.png"
        producto="Bolsas de baja densidad tipo empaque y basura."
        bg={true}
      />
      <Producto img="/strech.png" producto="Strech" order={true} />
      <Producto
        img="/camiseta.png"
        producto="Bolsas de alta densidad tipo camiseta"
        bg={true}
      />
      <Producto
        img="/polietileno.png"
        producto="Polietileno  de alta densidad (PEAD)"
        order={true}
      />
      <Producto
        img="/polibaja.png"
        producto="Polietileno de Baja Densidad (PEBD)"
        bg={true}
      />
      <Producto
        img="/empaquesAuto.png"
        producto="Bolsas para empacado automatico"
        order={true}
      />
    </>
  );
}
