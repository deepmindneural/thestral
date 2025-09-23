"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Eye, Lock, Zap, Users, Globe, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function GothamPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-red-900 via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {/* Efectos de seguridad */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full animate-pulse"
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
              <div className="inline-flex items-center px-4 py-2 bg-red-600/20 text-red-300 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Plataforma de Defensa e Inteligencia
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Thestral
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
                  Gotham
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
                Sistema operativo para operaciones de defensa e inteligencia.
                Toma de decisiones en tiempo real cuando cada segundo cuenta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Acceso Autorizado
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#capacidades"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Capacidades
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Capacidades Críticas */}
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
                Capacidades de Misión Crítica
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Construido y probado en crisis donde el tiempo es crucial
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Eye,
                  title: "Inteligencia en Tiempo Real",
                  description: "Fusiona múltiples fuentes de inteligencia para situational awareness completo",
                  features: ["Análisis multifuente", "Correlación automática", "Alertas inteligentes"]
                },
                {
                  icon: Shield,
                  title: "Operaciones Seguras",
                  description: "Máxima seguridad para operaciones clasificadas y datos sensibles",
                  features: ["Cifrado de grado militar", "Compartimentación", "Acceso granular"]
                },
                {
                  icon: Zap,
                  title: "Respuesta Rápida",
                  description: "Acelera la toma de decisiones en situaciones de tiempo crítico",
                  features: ["Workflows automatizados", "Decisiones asistidas", "Coordinación en tiempo real"]
                },
                {
                  icon: Users,
                  title: "Colaboración Segura",
                  description: "Permite trabajo conjunto entre agencias y aliados internacionales",
                  features: ["Intercambio controlado", "Canales seguros", "Auditoría completa"]
                },
                {
                  icon: Globe,
                  title: "Alcance Global",
                  description: "Opera a través de múltiples teatros y zonas horarias",
                  features: ["Cobertura 24/7", "Múltiples idiomas", "Coordinación global"]
                },
                {
                  icon: Lock,
                  title: "Cumplimiento Normativo",
                  description: "Cumple con los más altos estándares de seguridad gubernamental",
                  features: ["Certificaciones de seguridad", "Auditorías regulares", "Cumplimiento continuo"]
                }
              ].map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
                >
                  <capability.icon className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 mb-6">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
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

        {/* Casos de Uso de Defensa */}
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
                Operaciones de Defensa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aplicaciones probadas en el campo para misiones críticas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  category: "Inteligencia y Reconocimiento",
                  applications: [
                    "Análisis de amenazas en tiempo real",
                    "Fusión de inteligencia multifuente",
                    "Reconocimiento de patrones adversarios",
                    "Evaluación de riesgos geopolíticos"
                  ]
                },
                {
                  category: "Operaciones Militares",
                  applications: [
                    "Planificación de misiones complejas",
                    "Coordinación de fuerzas multinacionales",
                    "Logística y cadena de suministro",
                    "Comando y control distribuido"
                  ]
                },
                {
                  category: "Seguridad Nacional",
                  applications: [
                    "Contraterrorismo y contrainsurgencia",
                    "Protección de infraestructura crítica",
                    "Seguridad fronteriza y migratoria",
                    "Ciberseguridad nacional"
                  ]
                },
                {
                  category: "Respuesta a Crisis",
                  applications: [
                    "Gestión de emergencias nacionales",
                    "Coordinación de respuesta interagencial",
                    "Evacuaciones y operaciones humanitarias",
                    "Recuperación post-desastre"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{useCase.category}</h3>
                  <ul className="space-y-3">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seguridad y Cumplimiento */}
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
                Máxima Seguridad y Cumplimiento
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Certificado para las operaciones más sensibles del gobierno
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "FedRAMP High",
                  description: "Autorizado para datos gubernamentales de alto impacto"
                },
                {
                  title: "IL-5 Certified",
                  description: "Certificado para información clasificada hasta nivel secreto"
                },
                {
                  title: "FISMA Compliant",
                  description: "Cumple estándares federales de gestión de seguridad"
                },
                {
                  title: "ITAR Registered",
                  description: "Registrado para manejo de artículos de defensa"
                }
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                  <p className="text-gray-300">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-red-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para Operaciones Críticas?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Solicita acceso autorizado a Gotham para tu organización gubernamental o de defensa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Acceso
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