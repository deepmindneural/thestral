"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Video, BookOpen, Download, Calendar, Users, Globe, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Centro de
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                  Recursos y Conocimiento
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
                Accede a recursos exclusivos, documentación técnica, casos de estudio
                y contenido educativo para maximizar el valor de nuestras plataformas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categorías de Recursos */}
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
                Explora por Categoría
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Encuentra exactamente lo que necesitas para tu proyecto
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Documentación Técnica",
                  description: "Guías completas, APIs y manuales de implementación",
                  count: "50+ documentos",
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  icon: Video,
                  title: "Videos y Tutoriales",
                  description: "Demostraciones en vivo y casos de uso explicados",
                  count: "25+ videos",
                  color: "from-purple-600 to-pink-600"
                },
                {
                  icon: BookOpen,
                  title: "Casos de Estudio",
                  description: "Implementaciones reales y resultados obtenidos",
                  count: "15+ casos",
                  color: "from-green-600 to-emerald-600"
                },
                {
                  icon: Users,
                  title: "Webinars y Eventos",
                  description: "Sesiones en vivo con expertos y la comunidad",
                  count: "Eventos mensuales",
                  color: "from-orange-600 to-red-600"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <p className="text-sm font-medium text-purple-600">{category.count}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recursos Destacados */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Recursos Destacados
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contenido más popular y recursos esenciales para comenzar
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "Guía",
                  title: "Guía de Implementación de Foundry",
                  description: "Manual completo para la implementación exitosa de Foundry en organizaciones empresariales",
                  duration: "45 min lectura",
                  level: "Intermedio",
                  downloads: "2.3k",
                  icon: FileText,
                  featured: true
                },
                {
                  type: "Video",
                  title: "AIP en Acción: Demo Completa",
                  description: "Demostración completa de capacidades de IA empresarial con casos de uso reales",
                  duration: "32 min",
                  level: "Principiante",
                  downloads: "5.1k",
                  icon: Video,
                  featured: true
                },
                {
                  type: "Caso de Estudio",
                  title: "Transformación Digital en Salud",
                  description: "Cómo un sistema hospitalario mejoró resultados de pacientes con Apollo",
                  duration: "20 min lectura",
                  level: "Intermedio",
                  downloads: "1.8k",
                  icon: BookOpen,
                  featured: true
                },
                {
                  type: "Whitepaper",
                  title: "El Futuro de la IA Empresarial",
                  description: "Análisis profundo de tendencias y mejores prácticas en implementación de IA",
                  duration: "60 min lectura",
                  level: "Avanzado",
                  downloads: "3.2k",
                  icon: FileText,
                  featured: false
                },
                {
                  type: "Tutorial",
                  title: "Primeros Pasos con Gotham",
                  description: "Tutorial paso a paso para configurar y usar Gotham en operaciones de seguridad",
                  duration: "25 min",
                  level: "Principiante",
                  downloads: "1.5k",
                  icon: Video,
                  featured: false
                },
                {
                  type: "Informe",
                  title: "ROI en Plataformas de Datos",
                  description: "Metodología para calcular y maximizar el retorno de inversión en proyectos de datos",
                  duration: "35 min lectura",
                  level: "Intermedio",
                  downloads: "2.7k",
                  icon: FileText,
                  featured: false
                }
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${resource.featured ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {resource.featured && (
                    <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full mb-4">
                      Destacado
                    </div>
                  )}

                  <div className="flex items-center mb-4">
                    <resource.icon className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">{resource.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{resource.duration}</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">{resource.level}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">{resource.downloads} descargas</span>
                    </div>
                    <button className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
                      Acceder
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Centro de Aprendizaje */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Centro de Aprendizaje Thestral
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Desarrolla tu expertise en nuestras plataformas con rutas de aprendizaje
                  estructuradas, desde conceptos básicos hasta implementaciones avanzadas.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Rutas de Aprendizaje</h3>
                      <p className="text-gray-600">
                        Programas estructurados para desarrollar competencias específicas
                        en cada plataforma de Thestral.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunidad de Expertos</h3>
                      <p className="text-gray-600">
                        Conecta con otros usuarios, comparte experiencias y aprende
                        de implementaciones exitosas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Eventos Regulares</h3>
                      <p className="text-gray-600">
                        Webinars mensuales, workshops técnicos y conferencias
                        con los mejores expertos de la industria.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/demo"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group"
                  >
                    Comenzar Aprendizaje
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Próximos Eventos</h3>

                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-200 text-sm">15 Oct 2024</span>
                        <span className="bg-purple-600 text-xs px-2 py-1 rounded">Webinar</span>
                      </div>
                      <h4 className="font-semibold mb-1">IA Empresarial: Mejores Prácticas</h4>
                      <p className="text-purple-100 text-sm">Implementación segura de AIP en organizaciones</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-200 text-sm">22 Oct 2024</span>
                        <span className="bg-blue-600 text-xs px-2 py-1 rounded">Workshop</span>
                      </div>
                      <h4 className="font-semibold mb-1">Foundry para Principiantes</h4>
                      <p className="text-blue-100 text-sm">Taller práctico de integración de datos</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-green-200 text-sm">29 Oct 2024</span>
                        <span className="bg-green-600 text-xs px-2 py-1 rounded">Conferencia</span>
                      </div>
                      <h4 className="font-semibold mb-1">Thestral Summit 2024</h4>
                      <p className="text-green-100 text-sm">Conferencia anual de usuarios y expertos</p>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-white/20 text-white py-3 rounded-lg hover:bg-white/30 transition-colors">
                    Ver Todos los Eventos
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-10">
                Nuestro equipo de expertos está disponible para crear contenido
                personalizado según tus necesidades específicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Contenido Personalizado
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
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