"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe, Database, Brain, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
          {/* Video de fondo */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source src="https://videos.pexels.com/video-files/3141070/3141070-hd_1920_1080_30fps.mp4" type="video/mp4" />
              <source src="https://videos.pexels.com/video-files/7710243/7710243-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Partículas animadas */}
          <div className="absolute inset-0">
            <div className="particles-container">
              {[
                { left: 18.7, top: 66.6, delay: 2.4, duration: 4.9 },
                { left: 48.8, top: 19.1, delay: 2.1, duration: 3.3 },
                { left: 3.9, top: 42.5, delay: 0.2, duration: 4.1 },
                { left: 30.1, top: 88.3, delay: 0.6, duration: 4.6 },
                { left: 54.3, top: 52.9, delay: 2.5, duration: 3.0 },
                { left: 80.1, top: 83.2, delay: 2.7, duration: 3.7 },
                { left: 62.8, top: 92.2, delay: 1.0, duration: 4.3 },
                { left: 4.1, top: 67.8, delay: 1.2, duration: 3.2 },
                { left: 49.9, top: 90.3, delay: 2.9, duration: 3.9 },
                { left: 2.4, top: 27.6, delay: 0.8, duration: 3.7 },
                { left: 14.3, top: 0.7, delay: 0.3, duration: 3.1 },
                { left: 96.1, top: 48.3, delay: 2.6, duration: 3.6 },
                { left: 45.0, top: 34.0, delay: 2.5, duration: 3.0 },
                { left: 40.3, top: 12.7, delay: 2.1, duration: 3.0 },
                { left: 19.8, top: 1.9, delay: 0.8, duration: 3.8 },
                { left: 28.7, top: 46.3, delay: 0.6, duration: 4.6 },
                { left: 74.9, top: 99.8, delay: 1.6, duration: 4.3 },
                { left: 37.9, top: 91.8, delay: 1.7, duration: 3.8 },
                { left: 64.7, top: 18.0, delay: 0.8, duration: 4.2 },
                { left: 70.6, top: 92.4, delay: 1.4, duration: 4.2 }
              ].map((particle, i) => (
                <div
                  key={i}
                  className="particle absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animationDelay: `${particle.delay}s`,
                    animationDuration: `${particle.duration}s`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Construye el Futuro
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Con Datos
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
                Transforma tu organización con la plataforma de integración y análisis de datos más avanzada del mundo.
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
                  href="/platform"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Explorar Plataforma
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Sección de estadísticas impactantes */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm md:text-base">Organizaciones</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">10TB+</div>
                <div className="text-gray-300 text-sm md:text-base">Datos Procesados</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm md:text-base">Disponibilidad</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm md:text-base">Soporte</div>
              </motion.div>
            </div>
          </div>
        </section>

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
                Nuestra Plataforma
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Herramientas poderosas diseñadas para resolver tus desafíos de datos más complejos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: "Foundry",
                  description: "Transforma datos sin procesar en insights operacionales con nuestra plataforma integral de integración de datos."
                },
                {
                  icon: Shield,
                  title: "Gotham",
                  description: "Permite la toma de decisiones en tiempo real para operaciones de defensa e inteligencia."
                },
                {
                  icon: Zap,
                  title: "Apollo",
                  description: "Empodera a los analistas con herramientas intuitivas para la exploración y descubrimiento de datos."
                },
                {
                  icon: Brain,
                  title: "AIP",
                  description: "Aprovecha la IA y el aprendizaje automático para automatizar flujos de trabajo analíticos complejos."
                },
                {
                  icon: Globe,
                  title: "Skywise",
                  description: "Plataforma de inteligencia de aviación para eficiencia operacional y seguridad."
                },
                {
                  icon: Lock,
                  title: "HyperAuto",
                  description: "Despliegue y gestión segura y automatizada de tu infraestructura de datos."
                }
              ].map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 rounded-xl p-8 card-hover cursor-pointer relative overflow-hidden"
                >
                  {/* Gradiente de fondo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <product.icon className="w-12 h-12 mb-4 text-black group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-900 transition-colors">{product.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                    <Link
                      href={`/platform/${product.title.toLowerCase()}`}
                      className="inline-flex items-center mt-4 text-black font-medium hover:text-blue-600 transition-colors group/link"
                    >
                      Saber más
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-200 rounded-full opacity-30 animate-pulse" style={{animationDelay: "1s"}}></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-10 animate-pulse" style={{animationDelay: "2s"}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  ¿Por qué Thestral?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Listo para Empresas</h3>
                      <p className="text-gray-600">
                        Construido para escalar con seguridad, cumplimiento y confiabilidad en su núcleo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Análisis en Tiempo Real</h3>
                      <p className="text-gray-600">
                        Procesa y analiza datos en tiempo real para tomar decisiones críticas más rápido.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Impulsado por IA</h3>
                      <p className="text-gray-600">
                        Aprovecha la IA de vanguardia para automatizar flujos de trabajo y descubrir insights.
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
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-2xl relative overflow-hidden">
                  {/* Simulación de interfaz de datos */}
                  <div className="absolute inset-4 flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="text-green-400 text-xs font-mono">SISTEMA ACTIVO</div>
                    </div>

                    {/* Barras de progreso animadas */}
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="text-gray-400 text-xs">Procesamiento de Datos</div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-3/4 gradient-animated"></div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-gray-400 text-xs">Análisis IA</div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full w-5/6 gradient-animated"></div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-gray-400 text-xs">Insights Generados</div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-2/3 gradient-animated"></div>
                        </div>
                      </div>
                    </div>

                    {/* Métricas */}
                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      <div className="glass-dark rounded-lg p-3">
                        <div className="text-cyan-400 text-lg font-bold">99.9%</div>
                        <div className="text-gray-400 text-xs">Precisión</div>
                      </div>
                      <div className="glass-dark rounded-lg p-3">
                        <div className="text-blue-400 text-lg font-bold">24/7</div>
                        <div className="text-gray-400 text-xs">Tiempo Real</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black text-white">
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
                Únete a miles de organizaciones que usan Thestral para construir un futuro mejor.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors group"
              >
                Comenzar Hoy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Plataforma</h3>
              <ul className="space-y-2">
                <li><Link href="/platform/foundry" className="text-gray-600 hover:text-black">Foundry</Link></li>
                <li><Link href="/platform/gotham" className="text-gray-600 hover:text-black">Gotham</Link></li>
                <li><Link href="/platform/apollo" className="text-gray-600 hover:text-black">Apollo</Link></li>
                <li><Link href="/platform/aip" className="text-gray-600 hover:text-black">AIP</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Soluciones</h3>
              <ul className="space-y-2">
                <li><Link href="/solutions/defense" className="text-gray-600 hover:text-black">Defensa</Link></li>
                <li><Link href="/solutions/intelligence" className="text-gray-600 hover:text-black">Inteligencia</Link></li>
                <li><Link href="/solutions/healthcare" className="text-gray-600 hover:text-black">Salud</Link></li>
                <li><Link href="/solutions/energy" className="text-gray-600 hover:text-black">Energía</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><Link href="/company/about" className="text-gray-600 hover:text-black">Acerca de</Link></li>
                <li><Link href="/company/careers" className="text-gray-600 hover:text-black">Carreras</Link></li>
                <li><Link href="/company/news" className="text-gray-600 hover:text-black">Noticias</Link></li>
                <li><Link href="/company/contact" className="text-gray-600 hover:text-black">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/legal/privacy" className="text-gray-600 hover:text-black">Privacidad</Link></li>
                <li><Link href="/legal/terms" className="text-gray-600 hover:text-black">Términos</Link></li>
                <li><Link href="/legal/security" className="text-gray-600 hover:text-black">Seguridad</Link></li>
                <li><Link href="/legal/compliance" className="text-gray-600 hover:text-black">Cumplimiento</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/thestral-icon.svg"
                alt="Thestral Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-tight">THESTRAL</span>
                <span className="text-xs text-gray-500 font-medium tracking-wider leading-none">DATA INTELLIGENCE</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              © 2024 Thestral Technologies. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}