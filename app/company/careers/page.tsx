"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Users, MapPin, Clock, DollarSign, Briefcase, Code, Brain, Globe, Heart, Trophy, Coffee, Zap } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {/* Efectos de carrera */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
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
                <Users className="w-4 h-4 mr-2" />
                Únete a Nuestro Equipo
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Construye el
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Futuro con Datos
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
                Únete a un equipo de profesionales excepcionales que están transformando
                el mundo a través del poder de los datos y la inteligencia artificial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#posiciones"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Ver Posiciones Abiertas
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#cultura"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Conoce Nuestra Cultura
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Por qué trabajar con nosotros */}
        <section className="py-24 bg-white" id="cultura">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ¿Por qué Thestral?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Más que un trabajo, es una oportunidad de impactar el mundo con tecnología de vanguardia
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Innovación Constante",
                  description: "Trabaja con las tecnologías más avanzadas en IA, ML y análisis de datos",
                  benefits: ["Acceso a últimas tecnologías", "Proyectos de investigación", "Conferencias internacionales"]
                },
                {
                  icon: Trophy,
                  title: "Impacto Global",
                  description: "Tus contribuciones afectan positivamente organizaciones y sociedades enteras",
                  benefits: ["Proyectos de gran escala", "Clientes Fortune 500", "Impacto social medible"]
                },
                {
                  icon: Users,
                  title: "Talento Excepcional",
                  description: "Colabora con los mejores profesionales de la industria tecnológica",
                  benefits: ["Equipos multidisciplinarios", "Mentorías especializadas", "Networking global"]
                },
                {
                  icon: Zap,
                  title: "Crecimiento Acelerado",
                  description: "Desarrollo profesional rápido en un ambiente que prioriza el aprendizaje",
                  benefits: ["Plan de carrera personalizado", "Training continuo", "Certificaciones pagadas"]
                },
                {
                  icon: Heart,
                  title: "Work-Life Balance",
                  description: "Flexibilidad que te permite dar lo mejor tanto profesional como personalmente",
                  benefits: ["Trabajo remoto/híbrido", "Horarios flexibles", "Tiempo sabático"]
                },
                {
                  icon: Globe,
                  title: "Diversidad e Inclusión",
                  description: "Un ambiente donde todas las perspectivas son valoradas y respetadas",
                  benefits: ["Equipos diversos", "Programas de inclusión", "Cultura de respeto"]
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
                >
                  <value.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 mb-6">{value.description}</p>
                  <ul className="space-y-2">
                    {value.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Posiciones Abiertas */}
        <section className="py-24 bg-gray-50" id="posiciones">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Posiciones Abiertas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Encuentra la oportunidad perfecta para desarrollar tu carrera en tecnología
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  department: "Ingeniería",
                  icon: Code,
                  positions: [
                    {
                      title: "Senior Data Engineer",
                      location: "Madrid / Remoto",
                      type: "Tiempo completo",
                      salary: "€80k - €120k",
                      description: "Diseña y construye pipelines de datos escalables para procesar petabytes de información",
                      skills: ["Python", "Spark", "Kubernetes", "AWS", "ML Ops"]
                    },
                    {
                      title: "AI Research Scientist",
                      location: "Barcelona / Híbrido",
                      type: "Tiempo completo",
                      salary: "€90k - €140k",
                      description: "Desarrolla algoritmos de vanguardia en machine learning y deep learning",
                      skills: ["PhD en IA/ML", "PyTorch", "TensorFlow", "Research Papers", "NLP"]
                    },
                    {
                      title: "Frontend Engineer (React)",
                      location: "Valencia / Remoto",
                      type: "Tiempo completo",
                      salary: "€60k - €90k",
                      description: "Crea interfaces intuitivas para plataformas de análisis de datos complejos",
                      skills: ["React", "TypeScript", "D3.js", "WebGL", "UX/UI"]
                    }
                  ]
                },
                {
                  department: "Productos",
                  icon: Briefcase,
                  positions: [
                    {
                      title: "Product Manager - AI Platform",
                      location: "Madrid / Híbrido",
                      type: "Tiempo completo",
                      salary: "€70k - €110k",
                      description: "Lidera el desarrollo de productos de IA que impactan millones de usuarios",
                      skills: ["Product Strategy", "AI/ML Knowledge", "Agile", "Stakeholder Management", "Analytics"]
                    },
                    {
                      title: "UX Designer - Data Visualization",
                      location: "Sevilla / Remoto",
                      type: "Tiempo completo",
                      salary: "€50k - €75k",
                      description: "Diseña experiencias intuitivas para visualización de datos complejos",
                      skills: ["Figma", "Sketch", "Data Viz", "User Research", "Prototyping"]
                    }
                  ]
                },
                {
                  department: "Consultoría",
                  icon: Users,
                  positions: [
                    {
                      title: "Principal Data Consultant",
                      location: "Madrid / Cliente",
                      type: "Tiempo completo",
                      salary: "€85k - €125k",
                      description: "Lidera proyectos de transformación digital en empresas Fortune 500",
                      skills: ["Data Strategy", "Change Management", "Business Intelligence", "Client Relations", "Leadership"]
                    },
                    {
                      title: "ML Engineer Consultant",
                      location: "Múltiples / Viajes",
                      type: "Tiempo completo",
                      salary: "€75k - €105k",
                      description: "Implementa soluciones de ML en clientes de diferentes industrias",
                      skills: ["MLOps", "Cloud Platforms", "Model Deployment", "DevOps", "Client-facing"]
                    }
                  ]
                }
              ].map((dept, deptIndex) => (
                <motion.div
                  key={dept.department}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: deptIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <dept.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{dept.department}</h3>
                  </div>

                  <div className="space-y-6">
                    {dept.positions.map((position, posIndex) => (
                      <motion.div
                        key={position.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (deptIndex * 0.1) + (posIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-300"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h4>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {position.location}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {position.type}
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-1" />
                                {position.salary}
                              </div>
                            </div>
                          </div>
                          <button className="mt-4 lg:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Aplicar
                          </button>
                        </div>

                        <p className="text-gray-600 mb-4">{position.description}</p>

                        <div>
                          <span className="text-sm font-medium text-gray-900">Skills requeridos: </span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {position.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
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
                Beneficios y Compensación
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cuidamos de nuestro equipo con un paquete integral de beneficios
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Compensación",
                  benefits: ["Salario competitivo", "Equity/Stock options", "Bonus por performance", "Review salarial anual"]
                },
                {
                  category: "Salud & Bienestar",
                  benefits: ["Seguro médico premium", "Seguro dental", "Gym membership", "Mental health support"]
                },
                {
                  category: "Tiempo & Flexibilidad",
                  benefits: ["25 días de vacaciones", "Trabajo remoto", "Horarios flexibles", "Tiempo sabático"]
                },
                {
                  category: "Desarrollo",
                  benefits: ["Training budget €3k", "Conferencias pagadas", "Cursos online", "Mentorship program"]
                }
              ].map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <Coffee className="w-3 h-3 mr-2 text-blue-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso de Selección */}
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
                Proceso de Selección
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un proceso transparente y eficiente diseñado para conocerte mejor
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Aplicación",
                  description: "Envía tu CV y carta de presentación a través de nuestra plataforma",
                  duration: "5 min"
                },
                {
                  step: "02",
                  title: "Screening",
                  description: "Revisión inicial de tu perfil y llamada breve con el equipo de talent",
                  duration: "30 min"
                },
                {
                  step: "03",
                  title: "Entrevistas",
                  description: "2-3 entrevistas técnicas y culturales con el equipo relevante",
                  duration: "2-3 horas"
                },
                {
                  step: "04",
                  title: "Decisión",
                  description: "Feedback detallado y decisión final en máximo 1 semana",
                  duration: "1 semana"
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-gray-600 mb-2">{phase.description}</p>
                  <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para Unirte a Nosotros?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Si no ves una posición que se ajuste exactamente a tu perfil,
                envíanos tu información. Siempre estamos buscando talento excepcional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Aplicación Espontánea
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/company/about"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Conoce Más Sobre Nosotros
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