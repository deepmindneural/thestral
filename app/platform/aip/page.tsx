"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Shield, Zap, Search, Cpu, Lock, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AIPPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {/* Partículas de IA */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`
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
              <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Plataforma de Inteligencia Artificial
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Thestral
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                  AIP
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
                Activa IA de espectro completo en días. La plataforma que permite a las empresas
                implementar inteligencia artificial segura y controlada a escala empresarial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Explorar AIP
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#arquitectura"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Arquitectura
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sección de Arquitectura de IA */}
        <section className="py-24 bg-white" id="arquitectura">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Arquitectura de IA Empresarial
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Una plataforma diseñada para integrar IA en operaciones empresariales críticas
                con control total y transparencia.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Shield,
                  title: "Capa de Datos Semántica",
                  description: "Ontología empresarial que conecta datos, lógica y sistemas de acción",
                  features: ["Modelado semántico", "Integración segura", "Validación de datos"]
                },
                {
                  icon: Brain,
                  title: "Capa de Lógica Dinámica",
                  description: "Motor de IA que incorpora reglas de negocio y conocimiento institucional",
                  features: ["Procesamiento LLM", "Reglas de negocio", "Validación humana"]
                },
                {
                  icon: Zap,
                  title: "Capa de Acción Cinética",
                  description: "Ejecuta acciones automatizadas en sistemas empresariales existentes",
                  features: ["Automatización segura", "Auditoría completa", "Control granular"]
                }
              ].map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{layer.title}</h3>
                  <p className="text-gray-600 mb-6">{layer.description}</p>
                  <ul className="space-y-2">
                    {layer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Visualización de Arquitectura */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold text-center mb-8">Flujo de Procesamiento de IA</h3>
              <div className="grid md:grid-cols-5 gap-4 items-center">
                {[
                  { icon: Search, label: "Consulta", color: "from-purple-500 to-purple-600" },
                  { icon: Brain, label: "Procesamiento IA", color: "from-blue-500 to-blue-600" },
                  { icon: Shield, label: "Validación", color: "from-green-500 to-green-600" },
                  { icon: Cpu, label: "Decisión", color: "from-yellow-500 to-yellow-600" },
                  { icon: Zap, label: "Acción", color: "from-red-500 to-red-600" }
                ].map((step, index) => (
                  <div key={step.label} className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-medium">{step.label}</p>
                    {index < 4 && (
                      <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-2 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Beneficios de Seguridad */}
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
                IA Segura y Controlada
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AIP elimina los riesgos tradicionales de la IA empresarial
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Lock,
                  title: "Sin Alucinaciones",
                  description: "Barreras de IA granulares previenen respuestas incorrectas o inventadas."
                },
                {
                  icon: Shield,
                  title: "Datos Seguros",
                  description: "Los datos nunca salen de tu entorno. Control total sobre información sensible."
                },
                {
                  icon: Search,
                  title: "Auditoría Completa",
                  description: "Rastrea cada decisión de IA y acción ejecutada para cumplimiento total."
                },
                {
                  icon: Brain,
                  title: "Validación Humana",
                  description: "Incorpora supervisión humana en puntos críticos del proceso de IA."
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
                  <benefit.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Uso de IA */}
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
                Casos de Uso de IA Empresarial
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Implementa IA en operaciones críticas con confianza total
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Búsqueda Semántica",
                  description: "Encuentra información empresarial compleja usando lenguaje natural",
                  applications: ["Documentos técnicos", "Bases de conocimiento", "Regulaciones"],
                  icon: Search
                },
                {
                  title: "Automatización Inteligente",
                  description: "Automatiza procesos complejos con comprensión contextual",
                  applications: ["Flujos de aprobación", "Clasificación de datos", "Respuestas automáticas"],
                  icon: Zap
                },
                {
                  title: "Análisis Predictivo",
                  description: "Predice tendencias y comportamientos usando datos históricos",
                  applications: ["Demanda de productos", "Riesgo operacional", "Mantenimiento predictivo"],
                  icon: Brain
                },
                {
                  title: "Asistencia Inteligente",
                  description: "Proporciona soporte contextual a empleados y clientes",
                  applications: ["Soporte técnico", "Asistencia legal", "Consultas especializadas"],
                  icon: Sparkles
                },
                {
                  title: "Detección de Anomalías",
                  description: "Identifica patrones inusuales en datos empresariales",
                  applications: ["Detección de fraude", "Monitoreo de calidad", "Seguridad de sistemas"],
                  icon: Shield
                },
                {
                  title: "Optimización Operacional",
                  description: "Mejora eficiencia usando insights basados en IA",
                  applications: ["Cadena de suministro", "Asignación de recursos", "Planificación estratégica"],
                  icon: Cpu
                }
              ].map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <useCase.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Aplicaciones:</h4>
                    <ul className="space-y-1">
                      {useCase.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para Implementar IA Empresarial?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Descubre cómo AIP puede activar el poder de la IA en tu organización
                de manera segura y controlada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Demo de AIP
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