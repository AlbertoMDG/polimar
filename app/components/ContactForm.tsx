const ContactForm = () => {
  return (
    <div className="px-20 py-24">
      <form className="flex flex-col justify-center">
        <h3 className="text-center text-darkblue-100 font-bold text-4xl">
          Contactanos
        </h3>
        <div className="flex flex-col p-20">
          <input
            className="bg-gray-15 border-gray-20 placeholder:text-gray-700 p-2"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="bg-gray-15 border-gray-20 placeholder:text-gray-700 p-2 mt-6"
            type="text"
            placeholder="e-mail"
          />
          <textarea
            className="bg-gray-15 border-gray-20 h-32 placeholder:text-gray-700 p-2 mt-6 resize-none"
            name="descripcion"
            placeholder="Mensaje"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-cyan-200 w-52 h-12 text-white font-bold"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
