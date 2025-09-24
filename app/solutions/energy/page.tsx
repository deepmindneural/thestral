"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Battery, Sun, Gauge, TrendingUp, CheckCircle, Leaf, BarChart3, Settings } from "lucide-react";
import Link from "next/link";

export default function EnergyPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {/* Efectos de energía */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
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
              <div className="inline-flex items-center px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Soluciones para Energía
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Energía
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300">
                  Inteligente
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
                Optimice operaciones energéticas, acelere la transición a renovables
                y maximice eficiencia con análisis de datos avanzados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#soluciones"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Soluciones
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Soluciones Energéticas */}
        <section className="py-24 bg-white" id="soluciones">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Soluciones para el Sector Energético
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tecnología avanzada para transformar la generación, distribución y consumo de energía
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Sun,
                  title: "Energías Renovables",
                  description: "Optimización de generación solar, eólica e hidroeléctrica con IA predictiva",
                  capabilities: ["Forecasting de generación", "Optimización de rendimiento", "Mantenimiento predictivo"]
                },
                {
                  icon: Battery,
                  title: "Gestión de Almacenamiento",
                  description: "Sistemas inteligentes para optimizar almacenamiento y distribución de energía",
                  capabilities: ["Optimización de baterías", "Grid balancing", "Peak shaving automático"]
                },
                {
                  icon: Gauge,
                  title: "Smart Grid Analytics",
                  description: "Análisis avanzado para redes eléctricas inteligentes y eficientes",
                  capabilities: ["Monitoreo en tiempo real", "Detección de fallas", "Load forecasting"]
                },
                {
                  icon: TrendingUp,
                  title: "Trading Energético",
                  description: "Optimización de estrategias de compra-venta en mercados energéticos",
                  capabilities: ["Price forecasting", "Risk management", "Portfolio optimization"]
                },
                {
                  icon: Settings,
                  title: "Eficiencia Operacional",
                  description: "Optimización de plantas de generación y procesos industriales",
                  capabilities: ["Process optimization", "Asset performance", "Predictive maintenance"]
                },
                {
                  icon: Leaf,
                  title: "Sostenibilidad",
                  description: "Análisis de huella de carbono y estrategias de descarbonización",
                  capabilities: ["Carbon tracking", "ESG reporting", "Sustainability planning"]
                }
              ].map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
                >
                  <solution.icon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Éxito */}
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
                Casos de Éxito en Energía
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Resultados reales obtenidos por nuestros clientes en el sector energético
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  category: "Generación Renovable",
                  scenario: "Parque Solar de 500MW",
                  description: "Optimización de generación solar con predicción meteorológica avanzada",
                  results: [
                    "15% aumento en eficiencia de generación",
                    "30% reducción en costos de mantenimiento",
                    "Predicción de generación con 95% precisión",
                    "ROI del 200% en primer año"
                  ]
                },
                {
                  category: "Smart Grid",
                  scenario: "Red de Distribución Nacional",
                  description: "Implementación de analytics para red eléctrica de 50 millones de usuarios",
                  results: [
                    "40% reducción en tiempo de resolución de fallas",
                    "25% mejora en estabilidad de la red",
                    "50% menos interrupciones no planificadas",
                    "Savings de $100M anuales"
                  ]
                },
                {
                  category: "Trading Energético",
                  scenario: "Comercializadora Mayorista",
                  description: "Optimización de estrategias de trading en mercados spot y futures",
                  results: [
                    "35% mejora en márgenes de trading",
                    "60% reducción en riesgo de portafolio",
                    "Automated trading del 80% de operaciones",
                    "Alpha del 12% vs benchmark"
                  ]
                },
                {
                  category: "Eficiencia Industrial",
                  scenario: "Planta Petroquímica",
                  description: "Optimización de procesos y consumo energético en refinería",
                  results: [
                    "20% reducción en consumo energético",
                    "45% menos emisiones de CO2",
                    "30% mejora en rendimiento de procesos",
                    "Payback de 8 meses"
                  ]
                }
              ].map((useCase, index) => (
                <motion.div
                  key={useCase.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-green-600 uppercase tracking-wide">{useCase.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.scenario}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Resultados Obtenidos:</h4>
                    <ul className="space-y-2">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <BarChart3 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Tecnologías Avanzadas para Energía
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stack tecnológico especializado para los desafíos únicos del sector energético
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "AI/ML",
                  technologies: ["Deep Learning", "Time Series Forecasting", "Reinforcement Learning", "Computer Vision"]
                },
                {
                  category: "IoT & Edge",
                  technologies: ["Smart Sensors", "Edge Computing", "Real-time Processing", "Digital Twins"]
                },
                {
                  category: "Data Platform",
                  technologies: ["Time Series DBs", "Stream Processing", "Data Lakes", "Cloud Native"]
                },
                {
                  category: "Visualization",
                  technologies: ["Real-time Dashboards", "GIS Mapping", "Mobile Apps", "AR/VR Interfaces"]
                }
              ].map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-bold mb-4 text-green-400">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.technologies.map((item, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Métricas de Impacto */}
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
                Impacto Medible
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Resultados cuantificables en eficiencia energética y sostenibilidad
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  metric: "25%",
                  description: "Reducción promedio en costos operativos"
                },
                {
                  metric: "40%",
                  description: "Mejora en eficiencia de generación"
                },
                {
                  metric: "60%",
                  description: "Reducción en emisiones de CO2"
                },
                {
                  metric: "300+",
                  description: "Proyectos energéticos completados"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.metric}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para Transformar su Operación Energética?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Descubra cómo nuestras soluciones pueden optimizar su eficiencia
                energética y acelerar su transición hacia la sostenibilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Demo Energía
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/platform/foundry"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Plataforma Foundry
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