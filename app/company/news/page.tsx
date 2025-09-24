"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, ExternalLink, Award, Briefcase, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Noticias y
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Actualizaciones
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Mantente al día con las últimas innovaciones, logros y desarrollos de Thestral
              </p>
            </motion.div>
          </div>
        </section>

        {/* Noticia Destacada */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white mb-16"
            >
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 mr-2" />
                <span className="text-blue-100 text-sm font-medium">NOTICIA DESTACADA</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Thestral Recibe $50M en Serie B para Acelerar Innovación en IA
              </h2>

              <p className="text-xl text-blue-100 mb-6">
                La ronda fue liderada por Andreessen Horowitz con participación de existing investors,
                valorando la compañía en $500M y posicionándola como líder en plataformas de datos empresariales.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center text-blue-100">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>15 de Septiembre, 2024</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <User className="w-4 h-4 mr-2" />
                  <span>Equipo de Comunicaciones</span>
                </div>
              </div>

              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
              >
                Leer Artículo Completo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Grid de Noticias */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Producto",
                  icon: TrendingUp,
                  title: "Lanzamiento de Thestral AIP 2.0 con Capacidades de LLM Avanzadas",
                  excerpt: "Nueva versión incluye integración nativa con GPT-4, Claude y modelos propietarios para análisis de texto a escala empresarial.",
                  date: "12 de Septiembre, 2024",
                  author: "Equipo de Producto",
                  readTime: "5 min",
                  tag: "Lanzamiento"
                },
                {
                  category: "Empresa",
                  icon: Globe,
                  title: "Expansión Internacional: Thestral Abre Oficinas en Londres y Singapur",
                  excerpt: "Como parte de nuestra estrategia global, establecemos presencia en Europa y Asia-Pacífico para servir mejor a nuestros clientes internacionales.",
                  date: "8 de Septiembre, 2024",
                  author: "Maria González",
                  readTime: "3 min",
                  tag: "Expansión"
                },
                {
                  category: "Reconocimientos",
                  icon: Award,
                  title: "Thestral Nombrada Líder en Cuadrante Mágico de Gartner para Plataformas de Datos",
                  excerpt: "Por segundo año consecutivo, somos reconocidos como líderes en capacidad de ejecución y completitud de visión.",
                  date: "5 de Septiembre, 2024",
                  author: "Departamento de Marketing",
                  readTime: "4 min",
                  tag: "Premio"
                },
                {
                  category: "Tecnología",
                  icon: TrendingUp,
                  title: "Breakthrough en Edge Computing: Procesamiento de 1PB/s en Tiempo Real",
                  excerpt: "Nuestro nuevo motor de edge computing establece récord mundial en procesamiento distribuido de datos en tiempo real.",
                  date: "28 de Agosto, 2024",
                  author: "Dr. Carlos Ruiz",
                  readTime: "7 min",
                  tag: "Innovación"
                },
                {
                  category: "Partnerships",
                  icon: Briefcase,
                  title: "Alianza Estratégica con Microsoft para Azure Cognitive Services",
                  excerpt: "Partnership que permitirá integración nativa de servicios cognitivos de Azure en todas las plataformas Thestral.",
                  date: "25 de Agosto, 2024",
                  author: "Equipo de Partnerships",
                  readTime: "6 min",
                  tag: "Partnership"
                },
                {
                  category: "Investigación",
                  icon: Award,
                  title: "Paper de Thestral Aceptado en NeurIPS 2024",
                  excerpt: "Nuestro trabajo en 'Federated Learning at Scale' será presentado en la conferencia más prestigiosa de machine learning.",
                  date: "20 de Agosto, 2024",
                  author: "Equipo de Research",
                  readTime: "8 min",
                  tag: "Investigación"
                }
              ].map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <article.icon className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-600">{article.category}</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {article.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <span>{article.readTime} lectura</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Leer más
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recursos Adicionales */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Recursos y Media
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Accede a nuestros recursos para medios, kits de prensa y materiales corporativos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Kit de Prensa",
                  description: "Logos, imágenes corporativas y materiales oficiales para medios de comunicación",
                  icon: ExternalLink,
                  items: ["Logos en alta resolución", "Fotos del equipo ejecutivo", "Fact sheets", "Casos de éxito"]
                },
                {
                  title: "Centro de Recursos",
                  description: "Whitepapers, estudios de caso y documentación técnica para profesionales",
                  icon: TrendingUp,
                  items: ["Whitepapers técnicos", "ROI calculators", "Implementation guides", "Best practices"]
                },
                {
                  title: "Contacto de Prensa",
                  description: "Información de contacto para consultas de medios y entrevistas",
                  icon: User,
                  items: ["Media inquiries", "Interview requests", "Speaker opportunities", "Partnership discussions"]
                }
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <resource.icon className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>

                  <ul className="space-y-2 mb-6">
                    {resource.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/company/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium w-full justify-center"
                  >
                    Acceder
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Mantente Informado
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Suscríbete a nuestro newsletter para recibir las últimas noticias,
                insights de la industria y actualizaciones de productos.
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Tu email corporativo"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  />
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
                    Suscribirse
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ¿Quieres Ser Parte de la Historia?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                Únete a nosotros en nuestro camino para transformar cómo las organizaciones
                utilizan los datos para crear un futuro mejor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/company/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Ver Oportunidades
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-900 border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Solicitar Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}