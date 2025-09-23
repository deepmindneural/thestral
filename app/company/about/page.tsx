"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Globe, Shield, Brain, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Construyendo el Futuro
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  de la Inteligencia de Datos
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
                Thestral es más que una empresa de tecnología. Somos pioneros en la democratización
                del poder de los datos para organizaciones que buscan transformar el mundo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Capacitamos a las organizaciones más importantes del mundo para tomar decisiones
                  críticas que salvan vidas, protegen libertades y impulsan el progreso humano.
                </p>
                <p className="text-gray-600">
                  Creemos que los datos tienen el poder de resolver los problemas más complejos
                  de la humanidad, desde la prevención de pandemias hasta la lucha contra el
                  cambio climático y la protección de la seguridad nacional.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Visión</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Un mundo donde cada organización tiene acceso a la inteligencia de datos
                  necesaria para tomar decisiones informadas y crear un impacto positivo duradero.
                </p>
                <p className="text-gray-600">
                  Imaginamos un futuro donde la tecnología amplifica la capacidad humana para
                  resolver problemas complejos, proteger comunidades y construir un mundo más
                  seguro y próspero para todos.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Desde nuestros inicios, hemos estado comprometidos con resolver los desafíos
                más importantes del mundo a través del poder de los datos.
              </p>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  title: "Fundación de Thestral",
                  description: "Nace Thestral con la visión de democratizar el poder de la inteligencia artificial y análisis de datos para organizaciones de todos los tamaños."
                },
                {
                  year: "2024",
                  title: "Lanzamiento de Foundry",
                  description: "Presentamos nuestra plataforma de integración de datos que permite a las empresas unificar información dispersa en múltiples sistemas."
                },
                {
                  year: "2024",
                  title: "Desarrollo de AIP",
                  description: "Creamos la primera plataforma de IA empresarial que permite implementación segura de inteligencia artificial a escala."
                },
                {
                  year: "2024",
                  title: "Expansión Global",
                  description: "Expandimos nuestras operaciones para servir a organizaciones en América Latina, con planes de crecimiento internacional."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principios que guían cada decisión y definen nuestra cultura organizacional
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Integridad",
                  description: "Construimos confianza a través de la transparencia, honestidad y responsabilidad en todo lo que hacemos."
                },
                {
                  icon: Brain,
                  title: "Innovación",
                  description: "Impulsamos el límite de lo posible, creando soluciones que transforman industrias enteras."
                },
                {
                  icon: Users,
                  title: "Colaboración",
                  description: "Creemos que los mejores resultados surgen cuando diversos equipos trabajan juntos hacia objetivos comunes."
                },
                {
                  icon: Target,
                  title: "Impacto",
                  description: "Medimos nuestro éxito por el impacto positivo que creamos en nuestros clientes y la sociedad."
                },
                {
                  icon: Zap,
                  title: "Excelencia",
                  description: "Establecemos estándares altos y nos esforzamos por superarlos constantemente en todo lo que entregamos."
                },
                {
                  icon: Globe,
                  title: "Responsabilidad",
                  description: "Reconocemos el poder de la tecnología y la usamos de manera ética y responsable para el bien común."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compromiso */}
        <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Nuestro Compromiso</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Con cada línea de código que escribimos y cada cliente que servimos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Con nuestros clientes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Entregar soluciones que superen las expectativas y generen valor real</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Mantener la máxima seguridad y privacidad de los datos confiados a nosotros</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Proporcionar soporte y servicio excepcional en cada interacción</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Con la sociedad</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Usar la tecnología para abordar los desafíos más importantes de la humanidad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Promover el uso ético y responsable de la inteligencia artificial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Contribuir al desarrollo de comunidades y el avance del conocimiento</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Quieres ser parte del cambio?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Únete a nosotros para construir el futuro de la inteligencia de datos
                y crear un impacto positivo duradero en el mundo.
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