"use client";

import { useState } from "react";

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage("¡Mensaje enviado exitosamente! Te contactaremos pronto.");
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (error) {
      setSubmitMessage("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-darkblue-100 mb-4">
            Envíanos un Mensaje
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            ¿Tienes alguna pregunta sobre nuestros productos? Completa el formulario y te contactaremos pronto.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-darkblue-100 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-200/50 focus:border-cyan-200 focus:bg-white transition-all duration-200 placeholder:text-gray-500"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-darkblue-100 mb-2">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-200/50 focus:border-cyan-200 focus:bg-white transition-all duration-200 placeholder:text-gray-500"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-semibold text-darkblue-100 mb-2">
              Mensaje *
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-200/50 focus:border-cyan-200 focus:bg-white transition-all duration-200 resize-none placeholder:text-gray-500"
              placeholder="Cuéntanos cómo podemos ayudarte con tus necesidades de productos plásticos..."
            />
          </div>

          {submitMessage && (
            <div className={`p-4 rounded-lg text-center font-medium ${
              submitMessage.includes("exitosamente") 
                ? "bg-green-50 text-green-800 border border-green-200" 
                : "bg-red-50 text-red-800 border border-red-200"
            }`}>
              {submitMessage}
            </div>
          )}

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none px-8 py-4 text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando mensaje...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </button>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-500">
              Los campos marcados con * son obligatorios
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;