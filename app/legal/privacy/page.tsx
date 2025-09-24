"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, User, Globe, Calendar } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Política de Privacidad
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Política de Privacidad
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                En Thestral, la protección de tu privacidad es fundamental para nosotros.
                Esta política explica cómo recopilamos, usamos y protegemos tu información.
              </p>

              <div className="flex items-center justify-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Última actualización: 15 de Septiembre, 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  Introducción
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Thestral Data Intelligence S.L. (&ldquo;Thestral&rdquo;, &ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo;)
                  se compromete a proteger y respetar su privacidad. Esta Política de Privacidad explica cómo
                  recopilamos, utilizamos, divulgamos y protegemos la información personal que usted nos proporciona
                  o que recopilamos cuando utiliza nuestros servicios.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Esta política se aplica a todos los usuarios de nuestras plataformas, sitios web, aplicaciones
                  y servicios (colectivamente, los &ldquo;Servicios&rdquo;).
                </p>
              </motion.div>

              {/* Information We Collect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  Información que Recopilamos
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Personal</h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Información de contacto (nombre, email, teléfono, dirección)</li>
                  <li>Información profesional (empresa, cargo, industria)</li>
                  <li>Información de cuenta (credenciales de acceso, preferencias)</li>
                  <li>Información de facturación y pago</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Información Técnica</h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Direcciones IP y ubicación geográfica aproximada</li>
                  <li>Información del dispositivo y navegador</li>
                  <li>Logs de actividad y uso de la plataforma</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Datos del Cliente</h3>
                <p className="text-gray-600 leading-relaxed">
                  Los datos que nuestros clientes cargan, procesan o analizan en nuestras plataformas
                  permanecen bajo su control y propiedad. Actuamos como procesadores de datos siguiendo
                  sus instrucciones y las regulaciones aplicables.
                </p>
              </motion.div>

              {/* How We Use Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                  <User className="w-6 h-6 mr-3 text-blue-600" />
                  Cómo Utilizamos la Información
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Servicios y Soporte</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Proporcionar nuestros servicios</li>
                      <li>Soporte técnico y al cliente</li>
                      <li>Procesamiento de pagos</li>
                      <li>Comunicaciones del servicio</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Mejoras y Marketing</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Mejorar nuestros productos</li>
                      <li>Análisis y métricas</li>
                      <li>Marketing personalizado</li>
                      <li>Investigación y desarrollo</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Data Sharing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                  <Globe className="w-6 h-6 mr-3 text-blue-600" />
                  Compartir Información
                </h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  No vendemos, alquilamos o comercializamos su información personal. Compartimos información
                  solo en las siguientes circunstancias:
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Terceros Autorizados</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Proveedores de servicios:</strong> Partners que nos ayudan a operar nuestros servicios</li>
                    <li><strong>Procesadores de pago:</strong> Para procesar transacciones de forma segura</li>
                    <li><strong>Proveedores de infraestructura:</strong> AWS, Google Cloud, Azure para hosting seguro</li>
                    <li><strong>Herramientas de análisis:</strong> Para mejorar la experiencia del usuario</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Requerimientos Legales</h3>
                  <p className="text-gray-600">
                    Podemos divulgar información si es requerido por ley, orden judicial, o para proteger
                    nuestros derechos legales y la seguridad de nuestros usuarios.
                  </p>
                </div>
              </motion.div>

              {/* Data Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Seguridad de los Datos
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger
                  su información personal contra acceso no autorizado, pérdida, alteración o divulgación.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Encriptación</h4>
                    <p className="text-sm text-gray-600">TLS 1.3 en tránsito, AES-256 en reposo</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Lock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Acceso Controlado</h4>
                    <p className="text-sm text-gray-600">Autenticación multifactor y principio de menor privilegio</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Eye className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Monitoreo</h4>
                    <p className="text-sm text-gray-600">Supervisión 24/7 y detección de anomalías</p>
                  </div>
                </div>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sus Derechos</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Dependiendo de su ubicación, usted puede tener los siguientes derechos sobre su información personal:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Acceso:</strong> Solicitar una copia de su información personal</li>
                    <li><strong>Rectificación:</strong> Corregir información inexacta</li>
                    <li><strong>Eliminación:</strong> Solicitar la eliminación de su información</li>
                    <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Restricción:</strong> Limitar el procesamiento de sus datos</li>
                    <li><strong>Oposición:</strong> Oponerse al procesamiento para marketing</li>
                    <li><strong>Retirada de consentimiento:</strong> Cuando aplique</li>
                    <li><strong>Queja:</strong> Presentar quejas ante autoridades competentes</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mt-6">
                  <p className="text-gray-700">
                    <strong>Para ejercer sus derechos:</strong> Contacte con nosotros en{" "}
                    <a href="mailto:privacy@thestral.com" className="text-blue-600 hover:text-blue-700">
                      privacy@thestral.com
                    </a>{" "}
                    o a través de nuestro formulario de contacto.
                  </p>
                </div>
              </motion.div>

              {/* International Transfers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Transferencias Internacionales</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Sus datos pueden ser procesados en países fuera del Espacio Económico Europeo (EEE).
                  Cuando esto ocurra, implementamos las siguientes salvaguardas:
                </p>

                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Decisiones de adecuación de la Comisión Europea</li>
                  <li>Cláusulas contractuales estándar (SCC)</li>
                  <li>Certificaciones bajo marcos como Privacy Shield (cuando aplicable)</li>
                  <li>Medidas técnicas y organizativas apropiadas</li>
                </ul>
              </motion.div>

              {/* Updates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Actualizaciones de esta Política</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre
                  cambios significativos a través de email o mediante aviso en nuestro sitio web.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Le recomendamos revisar esta política periódicamente para mantenerse informado sobre
                  cómo protegemos su información.
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contacto</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Controlador de Datos</h3>
                    <p className="text-gray-600 mb-2">Thestral Data Intelligence S.L.</p>
                    <p className="text-gray-600 mb-2">Calle de la Innovación, 123</p>
                    <p className="text-gray-600 mb-4">28001 Madrid, España</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Contacto de Privacidad</h3>
                    <p className="text-gray-600 mb-2">
                      Email:{" "}
                      <a href="mailto:privacy@thestral.com" className="text-blue-600 hover:text-blue-700">
                        privacy@thestral.com
                      </a>
                    </p>
                    <p className="text-gray-600 mb-2">Teléfono: +34 91 XXX XXXX</p>
                    <p className="text-gray-600">
                      Delegado de Protección de Datos:{" "}
                      <a href="mailto:dpo@thestral.com" className="text-blue-600 hover:text-blue-700">
                        dpo@thestral.com
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}