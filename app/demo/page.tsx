"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, User, MessageSquare, Calendar, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
    empleados: "",
    industria: "",
    interes: "",
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
    // Aquí se podría integrar con un servicio de email o CRM
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
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                ¡Solicitud Enviada Exitosamente!
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Gracias por tu interés en Thestral. Nuestro equipo se pondrá en contacto contigo
                dentro de las próximas 24 horas para programar tu demo personalizada.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">¿Qué sigue?</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Un especialista revisará tus necesidades específicas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Programaremos una demo personalizada para tu industria
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Te enviaremos recursos adicionales por email
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Solicitar Otra Demo
                </button>

                <Link
                  href="/"
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Volver al Inicio
                </Link>
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
        <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Demo Personalizada
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Descubre el Poder de
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Thestral Data Intelligence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
                Solicita una demostración personalizada y descubre cómo nuestras plataformas
                pueden transformar la manera en que tu organización trabaja con datos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Formulario de Demo */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Información de la Demo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ¿Qué incluye tu demo personalizada?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultoría Especializada</h3>
                      <p className="text-gray-600">
                        Un experto en tu industria te mostrará casos de uso específicos
                        y cómo Thestral puede resolver tus desafíos únicos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Demo en Vivo</h3>
                      <p className="text-gray-600">
                        Verás las plataformas en acción con datos similares a los de tu organización,
                        adaptado a tus necesidades específicas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Sesión de Q&A</h3>
                      <p className="text-gray-600">
                        Tiempo dedicado para responder todas tus preguntas técnicas y de negocio
                        sobre implementación y ROI.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Plan de Implementación</h3>
                      <p className="text-gray-600">
                        Recibirás una propuesta preliminar con timeline, recursos necesarios
                        y pasos siguientes para tu organización.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-100 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 Duración: 45-60 minutos</h4>
                  <p className="text-gray-700">
                    Sesión completamente personalizada para tu industria y casos de uso específicos.
                  </p>
                </div>
              </motion.div>

              {/* Formulario */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Solicitar Demo Personalizada
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
                        Email Corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="tu@empresa.com"
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
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        required
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-2">
                        Cargo *
                      </label>
                      <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        required
                        value={formData.cargo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu cargo en la empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="empleados" className="block text-sm font-medium text-gray-700 mb-2">
                        Tamaño de la Empresa
                      </label>
                      <select
                        id="empleados"
                        name="empleados"
                        value={formData.empleados}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Seleccionar</option>
                        <option value="1-50">1-50 empleados</option>
                        <option value="51-200">51-200 empleados</option>
                        <option value="201-1000">201-1000 empleados</option>
                        <option value="1000+">1000+ empleados</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="industria" className="block text-sm font-medium text-gray-700 mb-2">
                        Industria *
                      </label>
                      <select
                        id="industria"
                        name="industria"
                        required
                        value={formData.industria}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Seleccionar industria</option>
                        <option value="finanzas">Servicios Financieros</option>
                        <option value="salud">Salud y Farmacéutico</option>
                        <option value="manufactura">Manufactura</option>
                        <option value="energia">Energía y Utilities</option>
                        <option value="retail">Retail y E-commerce</option>
                        <option value="tecnologia">Tecnología</option>
                        <option value="gobierno">Gobierno y Sector Público</option>
                        <option value="telecomunicaciones">Telecomunicaciones</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="interes" className="block text-sm font-medium text-gray-700 mb-2">
                        Plataforma de Interés *
                      </label>
                      <select
                        id="interes"
                        name="interes"
                        required
                        value={formData.interes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Seleccionar plataforma</option>
                        <option value="foundry">Foundry - Integración de Datos</option>
                        <option value="aip">AIP - Inteligencia Artificial</option>
                        <option value="apollo">Apollo - Análisis y Exploración</option>
                        <option value="gotham">Gotham - Defensa e Inteligencia</option>
                        <option value="todas">Todas las plataformas</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Cuéntanos sobre tu desafío
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe brevemente tus principales desafíos con datos, objetivos específicos, o cualquier información que nos ayude a personalizar tu demo..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Solicitar Demo Personalizada
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Al enviar este formulario, aceptas que nuestro equipo se ponga en contacto contigo
                    para programar tu demo personalizada.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
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
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Organizaciones líderes confían en Thestral para sus operaciones críticas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Thestral nos permitió integrar 15 años de datos dispersos en una sola plataforma. Ahora tomamos decisiones basadas en información completa y en tiempo real.",
                  author: "María González",
                  role: "CTO, Banco Nacional",
                  company: "Sector Financiero"
                },
                {
                  quote: "La implementación de AIP redujo nuestro tiempo de análisis de semanas a horas. La IA empresarial ahora es una realidad para nosotros.",
                  author: "Carlos Rodríguez",
                  role: "Director de Datos",
                  company: "Manufactura Global"
                },
                {
                  quote: "Apollo transformó la manera en que nuestros analistas trabajan. Descubrimos insights que nunca habríamos encontrado con herramientas tradicionales.",
                  author: "Ana Martínez",
                  role: "Jefe de Investigación",
                  company: "Instituto de Salud"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}