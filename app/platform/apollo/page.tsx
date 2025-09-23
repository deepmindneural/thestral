"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Search, BarChart, Filter, Layers, Users, Globe, CheckCircle, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ApolloPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {/* Partículas de análisis */}
            {[...Array(18)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-emerald-600/20 text-emerald-300 rounded-full text-sm font-medium mb-6">
                <BarChart className="w-4 h-4 mr-2" />
                Plataforma de Exploración y Análisis
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Thestral
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Apollo
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
                Empodera a analistas con herramientas intuitivas para exploración y descubrimiento de datos.
                Transforma datos complejos en insights accionables.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Explorar Apollo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#capacidades"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Herramientas
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Herramientas de Análisis */}
        <section className="py-24 bg-white" id="capacidades">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Herramientas de Exploración Avanzada
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diseñadas para analistas que necesitan descubrir patrones ocultos en datos complejos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Búsqueda Semántica",
                  description: "Encuentra información usando lenguaje natural, no solo palabras clave",
                  features: ["Comprensión contextual", "Búsqueda multiidioma", "Resultados relevantes"]
                },
                {
                  icon: BarChart,
                  title: "Visualización Dinámica",
                  description: "Crea visualizaciones interactivas que revelan patrones ocultos",
                  features: ["Gráficos interactivos", "Dashboards personalizables", "Visualización en tiempo real"]
                },
                {
                  icon: Filter,
                  title: "Filtrado Inteligente",
                  description: "Refina datos complejos con filtros contextuales avanzados",
                  features: ["Filtros temporales", "Segmentación automática", "Filtros predictivos"]
                },
                {
                  icon: Layers,
                  title: "Análisis Multidimensional",
                  description: "Explora datos desde múltiples perspectivas simultáneamente",
                  features: ["Análisis cruzado", "Correlaciones automáticas", "Análisis temporal"]
                },
                {
                  icon: Users,
                  title: "Colaboración Analítica",
                  description: "Comparte insights y colabora en análisis complejos",
                  features: ["Espacios compartidos", "Anotaciones colaborativas", "Versionado de análisis"]
                },
                {
                  icon: TrendingUp,
                  title: "Detección de Tendencias",
                  description: "Identifica patrones emergentes y anomalías automáticamente",
                  features: ["Alertas inteligentes", "Predicción de tendencias", "Detección de outliers"]
                }
              ].map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <tool.icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600 mb-6">{tool.description}</p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Flujo de Trabajo de Análisis */}
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
                Flujo de Trabajo Intuitivo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Desde la exploración inicial hasta insights accionables en minutos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Conectar",
                  description: "Accede a múltiples fuentes de datos sin complicaciones técnicas",
                  icon: Globe
                },
                {
                  step: "02",
                  title: "Explorar",
                  description: "Navega datos usando búsqueda natural y filtros inteligentes",
                  icon: Search
                },
                {
                  step: "03",
                  title: "Visualizar",
                  description: "Crea visualizaciones dinámicas que revelan patrones ocultos",
                  icon: BarChart
                },
                {
                  step: "04",
                  title: "Compartir",
                  description: "Colabora con equipos y presenta insights de manera efectiva",
                  icon: Users
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-800 font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Uso por Dominio */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Casos de Uso Especializados
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Apollo se adapta a las necesidades específicas de cada dominio analítico
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  domain: "Investigación Financiera",
                  description: "Detecta patrones de fraude y analiza riesgos financieros complejos",
                  applications: [
                    "Detección de lavado de dinero",
                    "Análisis de riesgo crediticio",
                    "Investigación de transacciones sospechosas",
                    "Cumplimiento regulatorio automatizado"
                  ]
                },
                {
                  domain: "Análisis de Mercado",
                  description: "Comprende tendencias de mercado y comportamiento del consumidor",
                  applications: [
                    "Segmentación de clientes avanzada",
                    "Análisis de sentimiento de marca",
                    "Predicción de demanda de productos",
                    "Optimización de precios dinámicos"
                  ]
                },
                {
                  domain: "Investigación Médica",
                  description: "Acelera descubrimientos médicos y mejora resultados de pacientes",
                  applications: [
                    "Análisis de ensayos clínicos",
                    "Identificación de biomarcadores",
                    "Estudios epidemiológicos",
                    "Medicina personalizada"
                  ]
                },
                {
                  domain: "Operaciones Industriales",
                  description: "Optimiza procesos y predice fallas en equipos críticos",
                  applications: [
                    "Mantenimiento predictivo",
                    "Optimización de cadena de suministro",
                    "Control de calidad automatizado",
                    "Eficiencia energética"
                  ]
                }
              ].map((useCase, index) => (
                <motion.div
                  key={useCase.domain}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.domain}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <ul className="space-y-3">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios para Analistas */}
        <section className="py-24 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Potencia tu Capacidad Analítica
              </h2>
              <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
                Reduce el tiempo de análisis de semanas a horas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "10x",
                  description: "Más rápido en exploración de datos"
                },
                {
                  metric: "90%",
                  description: "Menos tiempo en preparación de datos"
                },
                {
                  metric: "5x",
                  description: "Más insights descubiertos"
                },
                {
                  metric: "100%",
                  description: "Transparencia en metodología"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="text-4xl md:text-5xl font-bold text-emerald-300 mb-2">{benefit.metric}</div>
                  <p className="text-emerald-100">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-emerald-800 to-teal-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para Revolucionar tu Análisis?
              </h2>
              <p className="text-xl text-emerald-200 max-w-3xl mx-auto mb-10">
                Descubre cómo Apollo puede transformar la manera en que tu equipo
                explora y analiza datos complejos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Probar Apollo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Otras Plataformas
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