"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Building, Globe } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    asunto: "",
    mensaje: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <main className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto px-4 text-center"
          >
            <div className="bg-white rounded-2xl p-12 shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                ¡Mensaje Enviado Exitosamente!
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo
                dentro de las próximas 24 horas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Enviar Otro Mensaje
                </button>

                <a
                  href="/"
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Volver al Inicio
                </a>
              </div>
            </div>
          </motion.div>
        </main>
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Conversemos sobre
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  tu Transformación de Datos
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
                Nuestro equipo de expertos está listo para ayudarte a resolver
                tus desafíos más complejos con soluciones de vanguardia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Información de Contacto */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Información de contacto */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Múltiples Formas de Conectar
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Teléfono</h3>
                      <p className="text-gray-600 mb-2">
                        Habla directamente con nuestros especialistas
                      </p>
                      <p className="text-blue-600 font-medium">+57 322 685 5879</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600 mb-2">
                        Para consultas generales y soporte
                      </p>
                      <p className="text-blue-600 font-medium">contacto@thestral.co</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                      <p className="text-gray-600 mb-2">
                        Respuesta rápida para consultas urgentes
                      </p>
                      <p className="text-green-600 font-medium">+57 322 685 5879</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Oficina Principal</h3>
                      <p className="text-gray-600 mb-2">
                        Medellín, Colombia
                      </p>
                      <p className="text-purple-600 font-medium">Zona Metropolitana</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Horario de Atención</h3>
                      <p className="text-gray-600">
                        Lunes a Viernes: 8:00 AM - 6:00 PM (COT)<br />
                        Soporte crítico 24/7 disponible
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Formulario de contacto */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Envíanos un Mensaje
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          required
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Tu nombre completo"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+57 300 123 4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <select
                        id="asunto"
                        name="asunto"
                        required
                        value={formData.asunto}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Seleccionar asunto</option>
                        <option value="demo">Solicitar Demo</option>
                        <option value="soporte">Soporte Técnico</option>
                        <option value="ventas">Consulta de Ventas</option>
                        <option value="partnership">Oportunidades de Partnership</option>
                        <option value="prensa">Consultas de Prensa</option>
                        <option value="carrera">Oportunidades de Carrera</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={5}
                        required
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Enviar Mensaje
                      <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      Responderemos a tu mensaje dentro de 24 horas durante días laborales.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Oficinas Globales */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Presencia Global
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servimos a clientes en todo el mundo con soporte local y expertise global
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  region: "América Latina",
                  office: "Medellín, Colombia",
                  description: "Oficina principal para mercados latinoamericanos",
                  contact: "+57 322 685 5879",
                  email: "latam@thestral.co",
                  icon: Globe
                },
                {
                  region: "América del Norte",
                  office: "Próximamente",
                  description: "Expansión planificada para servir mercados de EEUU y Canadá",
                  contact: "Próximamente",
                  email: "americas@thestral.co",
                  icon: Building
                },
                {
                  region: "Europa",
                  office: "En desarrollo",
                  description: "Evaluando ubicaciones estratégicas para presencia europea",
                  contact: "En desarrollo",
                  email: "europe@thestral.co",
                  icon: Users
                }
              ].map((office, index) => (
                <motion.div
                  key={office.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8 text-center"
                >
                  <office.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.region}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{office.office}</p>
                  <p className="text-gray-600 mb-6">{office.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">
                      <span className="font-medium">Tel:</span> {office.contact}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Email:</span> {office.email}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Necesitas Atención Inmediata?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Para consultas urgentes o soporte crítico, nuestro equipo está disponible 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+573226855879"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Llamar Ahora
                </a>
                <a
                  href="https://wa.me/573226855879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}