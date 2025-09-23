"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Brain, Users, Shield, TrendingUp, Activity, CheckCircle, Stethoscope } from "lucide-react";
import Link from "next/link";

export default function HealthcarePage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-900 via-teal-900 to-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {/* Partículas médicas */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
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
                <Heart className="w-4 h-4 mr-2" />
                Soluciones para Salud
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Transformando
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
                  la Atención Médica
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
                Soluciones de inteligencia de datos que mejoran resultados de pacientes,
                aceleran la investigación médica y optimizan operaciones hospitalarias.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Transformar Atención
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

        {/* Soluciones Médicas */}
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
                Soluciones Integrales para Salud
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Desde la atención al paciente hasta la investigación avanzada
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Stethoscope,
                  title: "Atención Clínica",
                  description: "Optimiza diagnósticos y tratamientos con análisis avanzado de datos médicos",
                  benefits: ["Diagnóstico asistido por IA", "Medicina personalizada", "Predicción de complicaciones"]
                },
                {
                  icon: Brain,
                  title: "Investigación Médica",
                  description: "Acelera descubrimientos médicos con análisis de datos a gran escala",
                  benefits: ["Ensayos clínicos optimizados", "Descubrimiento de biomarcadores", "Análisis genómico"]
                },
                {
                  icon: Users,
                  title: "Salud Poblacional",
                  description: "Mejora resultados de salud pública con análisis epidemiológico",
                  benefits: ["Vigilancia epidemiológica", "Predicción de brotes", "Análisis de disparidades"]
                },
                {
                  icon: Activity,
                  title: "Operaciones Hospitalarias",
                  description: "Optimiza la eficiencia operacional y gestión de recursos",
                  benefits: ["Gestión de camas", "Optimización de turnos", "Reducción de readmisiones"]
                },
                {
                  icon: Shield,
                  title: "Seguridad del Paciente",
                  description: "Previene errores médicos y mejora la calidad de atención",
                  benefits: ["Detección de eventos adversos", "Alertas tempranas", "Monitoreo de calidad"]
                },
                {
                  icon: TrendingUp,
                  title: "Analítica Financiera",
                  description: "Optimiza costos y mejora la sostenibilidad financiera",
                  benefits: ["Análisis de costos", "Predicción de demanda", "Optimización de recursos"]
                }
              ].map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <solution.icon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Uso Clínicos */}
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
                Casos de Uso Clínicos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aplicaciones reales que están transformando la medicina
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  specialty: "Oncología",
                  challenge: "Medicina de Precisión en Cáncer",
                  description: "Análisis integrado de datos genómicos, clínicos y de imagen para tratamientos personalizados",
                  applications: [
                    "Selección de terapias dirigidas basada en perfil molecular",
                    "Predicción de respuesta a inmunoterapia",
                    "Identificación de biomarcadores de resistencia",
                    "Análisis de supervivencia y pronóstico"
                  ],
                  impact: "85% mejora en selección de tratamientos"
                },
                {
                  specialty: "Cardiología",
                  challenge: "Prevención de Eventos Cardiovasculares",
                  description: "Predicción temprana de infartos y arritmias usando datos continuos de pacientes",
                  applications: [
                    "Monitoreo continuo de signos vitales",
                    "Predicción de arritmias malignas",
                    "Estratificación de riesgo cardiovascular",
                    "Optimización de terapias preventivas"
                  ],
                  impact: "40% reducción en mortalidad cardiovascular"
                },
                {
                  specialty: "Medicina Intensiva",
                  challenge: "Cuidados Críticos Inteligentes",
                  description: "Soporte de decisiones en tiempo real para pacientes en estado crítico",
                  applications: [
                    "Predicción de deterioro clínico",
                    "Optimización de ventilación mecánica",
                    "Prevención de sepsis y shock",
                    "Gestión inteligente de sedación"
                  ],
                  impact: "30% reducción en mortalidad en UCI"
                },
                {
                  specialty: "Radiología",
                  challenge: "Diagnóstico por Imagen Asistido",
                  description: "IA avanzada para detección y caracterización de patologías en imágenes médicas",
                  applications: [
                    "Detección temprana de cáncer en mamografías",
                    "Análisis automático de TAC y resonancias",
                    "Cuantificación de lesiones cerebrales",
                    "Priorización automática de casos urgentes"
                  ],
                  impact: "95% precisión en detección temprana"
                }
              ].map((useCase, index) => (
                <motion.div
                  key={useCase.specialty}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-green-600 uppercase tracking-wide">{useCase.specialty}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.challenge}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <ul className="space-y-3 mb-6">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-green-100 rounded-lg p-4">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold text-green-800">Impacto Clínico: {useCase.impact}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investigación y Desarrollo */}
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
                Acelerando la Investigación Médica
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reduciendo el tiempo de descubrimiento de décadas a años
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Plataforma de Investigación Integrada
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Análisis Multiómica</h4>
                      <p className="text-gray-600">
                        Integra datos genómicos, proteómicos, metabolómicos y clínicos
                        para una comprensión completa de enfermedades complejas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Ensayos Clínicos Inteligentes</h4>
                      <p className="text-gray-600">
                        Optimiza el diseño de estudios clínicos, selección de pacientes
                        y monitoreo de seguridad usando IA avanzada.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Medicina Traslacional</h4>
                      <p className="text-gray-600">
                        Acelera la transferencia de descubrimientos del laboratorio
                        a la clínica con análisis predictivo.
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
                <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-2xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-6">Resultados de Investigación</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-300 mb-2">75%</div>
                      <div className="text-green-100 text-sm">Reducción en tiempo de desarrollo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-300 mb-2">3x</div>
                      <div className="text-teal-100 text-sm">Más biomarcadores identificados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-300 mb-2">50%</div>
                      <div className="text-green-100 text-sm">Mejora en éxito de ensayos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-300 mb-2">90%</div>
                      <div className="text-teal-100 text-sm">Precisión en predicciones</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-900 to-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para Transformar la Atención Médica?
              </h2>
              <p className="text-xl text-green-200 max-w-3xl mx-auto mb-10">
                Descubre cómo nuestras soluciones pueden mejorar resultados de pacientes
                y acelerar la investigación médica en tu organización.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Solicitar Demo Médica
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/platform/apollo"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Plataforma Apollo
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