import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Mapa from "../components/Mapa";

export default function Contacto(): JSX.Element | undefined {
  return (
    <>
      <div className="flex">
        <Mapa />
        <ContactInfo />
      </div>
      <ContactForm />
    </>
  );
}
