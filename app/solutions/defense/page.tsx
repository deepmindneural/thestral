"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Eye, Radar, Lock, Users, Globe, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function DefensePage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-red-900 via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {/* Efectos militares */}
            {[...Array(12)].map((_, i) => (
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
                Soluciones para Defensa
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Protegiendo
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
                  la Seguridad Nacional
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
                Capacidades avanzadas de inteligencia de datos para fuerzas armadas,
                agencias de defensa y organizaciones de seguridad nacional.
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

        {/* Capacidades Operacionales */}
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
                Capacidades Operacionales Críticas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluciones probadas en teatro de operaciones para misiones de alta criticidad
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Eye,
                  title: "Inteligencia Situacional",
                  description: "Fusión de múltiples fuentes ISR para awareness operacional completo",
                  capabilities: ["Fusión multisensor", "Tracking en tiempo real", "Predicción de amenazas"]
                },
                {
                  icon: Radar,
                  title: "Comando y Control",
                  description: "Coordinación de fuerzas distribuidas en operaciones complejas",
                  capabilities: ["C4ISR integrado", "Coordinación multinacional", "Comunicaciones seguras"]
                },
                {
                  icon: Shield,
                  title: "Ciberdefensa",
                  description: "Protección de infraestructura crítica contra amenazas avanzadas",
                  capabilities: ["Detección de APT", "Respuesta automatizada", "Threat hunting"]
                },
                {
                  icon: AlertTriangle,
                  title: "Alerta Temprana",
                  description: "Sistemas de detección y alerta para amenazas emergentes",
                  capabilities: ["Análisis predictivo", "Correlación de eventos", "Alertas automatizadas"]
                },
                {
                  icon: Users,
                  title: "Operaciones Especiales",
                  description: "Soporte de inteligencia para misiones especializadas",
                  capabilities: ["Inteligencia táctica", "Soporte de misión", "Análisis post-acción"]
                },
                {
                  icon: Globe,
                  title: "Inteligencia Geoespacial",
                  description: "Análisis avanzado de imágenes y datos geoespaciales",
                  capabilities: ["Análisis GEOINT", "Change detection", "Análisis de patrones"]
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
                    {capability.capabilities.map((cap, idx) => (
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

        {/* Casos de Uso Militares */}
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
                Aplicaciones en Teatro de Operaciones
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Casos de uso probados en operaciones reales de defensa y seguridad
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  category: "Operaciones Militares",
                  scenario: "Misiones en Territorio Hostil",
                  description: "Soporte de inteligencia para operaciones en ambientes complejos y dinámicos",
                  applications: [
                    "Planificación de misiones basada en inteligencia",
                    "Tracking de objetivos de alto valor",
                    "Coordinación de fuerzas multinacionales",
                    "Análisis de patrones de vida enemigos"
                  ]
                },
                {
                  category: "Contraterrorismo",
                  scenario: "Amenazas Asimétricas",
                  description: "Identificación y neutralización de redes terroristas y amenazas no convencionales",
                  applications: [
                    "Análisis de redes criminales",
                    "Detección de financiamiento terrorista",
                    "Monitoreo de comunicaciones",
                    "Predicción de actividad hostil"
                  ]
                },
                {
                  category: "Seguridad Fronteriza",
                  scenario: "Control de Fronteras",
                  description: "Protección de fronteras nacionales contra amenazas transnacionales",
                  applications: [
                    "Detección de cruces ilegales",
                    "Identificación de contrabando",
                    "Análisis de patrones migratorios",
                    "Coordinación interagencial"
                  ]
                },
                {
                  category: "Ciberseguridad Nacional",
                  scenario: "Guerra Cibernética",
                  description: "Defensa contra ataques cibernéticos estatales y no estatales",
                  applications: [
                    "Detección de APT y malware avanzado",
                    "Attribution de ataques cibernéticos",
                    "Protección de infraestructura crítica",
                    "Respuesta a incidentes coordinada"
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
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-red-600 uppercase tracking-wide">{useCase.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.scenario}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
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

        {/* Certificaciones y Cumplimiento */}
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
                Certificaciones de Máxima Seguridad
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Autorizaciones y certificaciones para las operaciones más sensibles
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  cert: "FedRAMP High",
                  level: "Autorización IL-5",
                  description: "Autorizado para datos gubernamentales de alto impacto y clasificados hasta nivel secreto"
                },
                {
                  cert: "FISMA Compliant",
                  level: "Cumplimiento Total",
                  description: "Cumple estándares federales de gestión de seguridad de información"
                },
                {
                  cert: "ITAR Registered",
                  level: "Registro Activo",
                  description: "Registrado para manejo de artículos y servicios de defensa"
                },
                {
                  cert: "ISO 27001",
                  level: "Certificación Internacional",
                  description: "Sistema de gestión de seguridad de información certificado"
                }
              ].map((cert, index) => (
                <motion.div
                  key={cert.cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.cert}</h3>
                  <div className="text-red-300 text-sm font-medium mb-3">{cert.level}</div>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
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
                ¿Listo para Fortalecer tu Capacidad Operacional?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Solicita una demostración clasificada para tu organización de defensa
                y descubre cómo podemos apoyar tus misiones críticas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Acceso Autorizado
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/platform/gotham"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Plataforma Gotham
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