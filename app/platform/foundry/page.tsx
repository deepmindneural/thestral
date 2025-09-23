"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Database, Layers, Zap, Shield, Users, Brain, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FoundryPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {/* Partículas animadas */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="particle absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
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
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-6">
                <Database className="w-4 h-4 mr-2" />
                Plataforma de Integración de Datos
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Thestral
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Foundry
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
                El sistema operativo impulsado por ontología para la empresa moderna.
                Integra, transforma y activa todos tus datos en una plataforma unificada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#capacidades"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Explorar Capacidades
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sección de Ontología */}
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
                El Corazón de Foundry: La Ontología
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestra ontología única integra elementos semánticos, cinéticos y dinámicos
                de tu negocio para harmonizar y automatizar la toma de decisiones.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Capa Semántica de Datos</h3>
                      <p className="text-gray-600">
                        Modela y conecta todos tus datos empresariales en un modelo unificado
                        que refleja la realidad de tu organización.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Lógica Dinámica</h3>
                      <p className="text-gray-600">
                        Incorpora reglas de negocio, políticas y conocimiento institucional
                        directamente en la plataforma para decisiones inteligentes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Acción Cinética</h3>
                      <p className="text-gray-600">
                        Ejecuta automáticamente acciones en sistemas downstream basadas
                        en insights y decisiones de la plataforma.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl relative overflow-hidden p-8">
                  {/* Visualización de ontología */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Nodo central */}
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Database className="w-8 h-8 text-white" />
                      </div>

                      {/* Nodos conectados */}
                      {[
                        { angle: 0, color: "bg-blue-400", icon: Users },
                        { angle: 60, color: "bg-cyan-400", icon: Brain },
                        { angle: 120, color: "bg-blue-500", icon: Shield },
                        { angle: 180, color: "bg-cyan-500", icon: Zap },
                        { angle: 240, color: "bg-blue-400", icon: Layers },
                        { angle: 300, color: "bg-cyan-400", icon: Database }
                      ].map((node, index) => {
                        const x = Math.cos((node.angle * Math.PI) / 180) * 80;
                        const y = Math.sin((node.angle * Math.PI) / 180) * 80;
                        return (
                          <div
                            key={index}
                            className={`absolute w-12 h-12 ${node.color} rounded-full flex items-center justify-center animate-pulse`}
                            style={{
                              left: `calc(50% + ${x}px - 24px)`,
                              top: `calc(50% + ${y}px - 24px)`,
                              animationDelay: `${index * 0.3}s`
                            }}
                          >
                            <node.icon className="w-5 h-5 text-white" />
                          </div>
                        );
                      })}

                      {/* Líneas de conexión */}
                      <svg className="absolute inset-0 w-full h-full" style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}>
                        {[0, 60, 120, 180, 240, 300].map((angle, index) => {
                          const x1 = Math.cos((angle * Math.PI) / 180) * 40;
                          const y1 = Math.sin((angle * Math.PI) / 180) * 40;
                          const x2 = Math.cos((angle * Math.PI) / 180) * 80;
                          const y2 = Math.sin((angle * Math.PI) / 180) * 80;
                          return (
                            <line
                              key={index}
                              x1={x1 + 100}
                              y1={y1 + 100}
                              x2={x2 + 100}
                              y2={y2 + 100}
                              stroke="rgba(59, 130, 246, 0.5)"
                              strokeWidth="2"
                              className="animate-pulse"
                            />
                          );
                        })}
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Beneficios */}
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
                Beneficios Clave
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Foundry transforma la manera en que tu organización trabaja con datos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Database,
                  title: "Integración Sin Duplicación",
                  description: "Conecta todos tus sistemas sin mover o duplicar datos existentes."
                },
                {
                  icon: Brain,
                  title: "IA Empresarial",
                  description: "Construye flujos de trabajo impulsados por IA de manera segura y controlada."
                },
                {
                  icon: Users,
                  title: "Colaboración en Tiempo Real",
                  description: "Permite que equipos distribuidos trabajen juntos en tiempo real."
                },
                {
                  icon: Shield,
                  title: "Seguridad y Cumplimiento",
                  description: "Mantén el control total sobre datos sensibles y cumplimiento regulatorio."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Uso por Industria */}
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
                Casos de Uso por Industria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Foundry se adapta a las necesidades específicas de cada sector
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Manufactura",
                  description: "Optimiza cadenas de suministro y operaciones de producción",
                  features: ["Gestión de inventario", "Calidad predictiva", "Mantenimiento inteligente"]
                },
                {
                  industry: "Energía",
                  description: "Gestiona recursos energéticos y infraestructura crítica",
                  features: ["Monitoreo de redes", "Predicción de demanda", "Optimización de activos"]
                },
                {
                  industry: "Salud",
                  description: "Mejora resultados de pacientes y eficiencia operativa",
                  features: ["Analítica clínica", "Gestión de recursos", "Investigación médica"]
                },
                {
                  industry: "Finanzas",
                  description: "Detecta fraudes y optimiza decisiones de inversión",
                  features: ["Detección de fraude", "Gestión de riesgo", "Cumplimiento regulatorio"]
                },
                {
                  industry: "Gobierno",
                  description: "Mejora servicios públicos y seguridad nacional",
                  features: ["Inteligencia de datos", "Seguridad pública", "Gestión de recursos"]
                },
                {
                  industry: "Retail",
                  description: "Optimiza experiencia del cliente y operaciones",
                  features: ["Personalización", "Gestión de inventario", "Analítica de clientes"]
                }
              ].map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.industry}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
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

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para Transformar tus Datos?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Descubre cómo Foundry puede unificar y activar todos los datos de tu organización.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Demo de Foundry
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