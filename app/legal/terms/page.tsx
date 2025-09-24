"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { FileText, Scale, Shield, AlertTriangle, Users, Lock, Calendar } from "lucide-react";

export default function TermsPage() {
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
                <FileText className="w-4 h-4 mr-2" />
                Términos y Condiciones
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Términos y Condiciones
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                Estos términos y condiciones rigen el uso de nuestros servicios.
                Al utilizar Thestral, usted acepta estar sujeto a estos términos.
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

              {/* Acceptance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                  <Scale className="w-6 h-6 mr-3 text-blue-600" />
                  Aceptación de los Términos
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Al acceder y utilizar los servicios de Thestral Data Intelligence S.L. (&ldquo;Thestral&rdquo;,
                  &ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo;), usted acepta cumplir con estos Términos y
                  Condiciones (&ldquo;Términos&rdquo;) y todas las leyes y regulaciones aplicables.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
                  Estos términos constituyen un acuerdo legal vinculante entre usted y Thestral.
                </p>
              </motion.div>

              {/* Services Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Descripción de los Servicios
                </h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Thestral proporciona plataformas de análisis de datos, inteligencia artificial y
                  servicios relacionados (&ldquo;Servicios&rdquo;) que incluyen, pero no se limitan a:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Plataformas</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Thestral Foundry</li>
                      <li>Thestral Gotham</li>
                      <li>Thestral Apollo</li>
                      <li>Thestral AIP</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Servicios</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Consultoría especializada</li>
                      <li>Implementación y soporte</li>
                      <li>Training y capacitación</li>
                      <li>Servicios de integración</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Nota importante:</strong> Nos reservamos el derecho de modificar, suspender
                    o discontinuar cualquier aspecto de nuestros servicios en cualquier momento,
                    previa notificación razonable cuando sea posible.
                  </p>
                </div>
              </motion.div>

              {/* User Obligations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  Obligaciones del Usuario
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Uso Permitido</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Usted se compromete a utilizar nuestros servicios únicamente para fines legales
                  y comerciales legítimos, de acuerdo con:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Todas las leyes y regulaciones aplicables</li>
                  <li>Los términos de cualquier contrato específico de servicio</li>
                  <li>Las políticas de uso aceptable de Thestral</li>
                  <li>Los derechos de propiedad intelectual de terceros</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Uso Prohibido</h3>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                  <p className="text-gray-700 mb-3"><strong>Está prohibido utilizar nuestros servicios para:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Actividades ilegales o no autorizadas</li>
                    <li>Violar derechos de propiedad intelectual</li>
                    <li>Introducir malware, virus o código malicioso</li>
                    <li>Intentar acceso no autorizado a sistemas</li>
                    <li>Interferir con la operación de los servicios</li>
                    <li>Uso que viole regulaciones de privacidad</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cuentas de Usuario</h3>
                <p className="text-gray-600 leading-relaxed">
                  Usted es responsable de mantener la confidencialidad de sus credenciales de cuenta
                  y de todas las actividades que ocurran bajo su cuenta. Debe notificarnos inmediatamente
                  sobre cualquier uso no autorizado de su cuenta.
                </p>
              </motion.div>

              {/* Data and Privacy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Datos y Privacidad
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sus Datos</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Usted retiene todos los derechos, títulos e intereses sobre los datos que
                  carga o procesa mediante nuestros servicios (&ldquo;Datos del Cliente&rdquo;).
                  Thestral actúa como procesador de datos según sus instrucciones.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Responsabilidades del Cliente</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Cumplir con leyes de protección de datos</li>
                      <li>Obtener consentimientos necesarios</li>
                      <li>Asegurar la calidad y legalidad de los datos</li>
                      <li>Implementar controles de acceso apropiados</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Compromisos de Thestral</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Procesar datos según instrucciones</li>
                      <li>Implementar medidas de seguridad técnicas</li>
                      <li>Asistir con obligaciones de cumplimiento</li>
                      <li>Notificar sobre incidentes de seguridad</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Intellectual Property */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Propiedad Intelectual</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Derechos de Thestral</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Thestral retiene todos los derechos, títulos e intereses sobre:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Las plataformas y software de Thestral</li>
                  <li>Algoritmos, metodologías y know-how propietario</li>
                  <li>Marcas comerciales, logos y materiales de marketing</li>
                  <li>Documentación, manuales y materiales de training</li>
                  <li>Mejoras y desarrollos derivados de nuestros servicios</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Licencia de Uso</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sujeto a estos términos, Thestral le otorga una licencia limitada, no exclusiva,
                  no transferible y revocable para usar nuestros servicios durante el período
                  de vigencia de su contrato.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <p className="text-gray-700">
                    <strong>Restricción importante:</strong> Esta licencia no incluye el derecho
                    a revender, redistribuir, crear trabajos derivados, o realizar ingeniería
                    inversa de nuestros servicios sin autorización expresa por escrito.
                  </p>
                </div>
              </motion.div>

              {/* Service Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Disponibilidad del Servicio</h2>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">99.9%</div>
                    <p className="text-sm text-gray-600">Uptime objetivo</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
                    <p className="text-sm text-gray-600">Monitoreo</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">&lt;4h</div>
                    <p className="text-sm text-gray-600">Tiempo de respuesta</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Nos esforzamos por mantener nuestros servicios disponibles 24/7, pero no podemos
                  garantizar un servicio ininterrumpido. Las interrupciones pueden ocurrir debido a:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Mantenimiento programado (notificado con antelación)</li>
                  <li>Emergencias de seguridad</li>
                  <li>Factores fuera de nuestro control (fallas de infraestructura, desastres naturales)</li>
                  <li>Actualizaciones críticas del sistema</li>
                </ul>
              </motion.div>

              {/* Limitation of Liability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                  <AlertTriangle className="w-6 h-6 mr-3 text-yellow-600" />
                  Limitación de Responsabilidad
                </h2>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    <strong>LIMITACIÓN IMPORTANTE:</strong> En la máxima medida permitida por la ley,
                    Thestral no será responsable por:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Daños indirectos, incidentales, especiales o consecuenciales</li>
                    <li>Pérdida de beneficios, datos, uso, goodwill u otras pérdidas intangibles</li>
                    <li>Daños resultantes del uso o imposibilidad de usar los servicios</li>
                    <li>Interrupciones del servicio o errores en los datos</li>
                  </ul>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Nuestra responsabilidad total hacia usted por cualquier reclamo relacionado con
                  estos términos o nuestros servicios no excederá el monto pagado por usted a
                  Thestral en los 12 meses anteriores al evento que dio lugar al reclamo.
                </p>
              </motion.div>

              {/* Termination */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Terminación</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Terminación por el Cliente</h3>
                    <p className="text-gray-600 mb-3">
                      Usted puede terminar su cuenta en cualquier momento mediante:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Notificación por escrito con 30 días de antelación</li>
                      <li>Cancelación a través de la interfaz de usuario</li>
                      <li>Contacto con nuestro equipo de soporte</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Terminación por Thestral</h3>
                    <p className="text-gray-600 mb-3">
                      Podemos suspender o terminar su acceso si:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>Viola estos términos o políticas</li>
                      <li>No paga las tarifas aplicables</li>
                      <li>Su uso pone en riesgo nuestros servicios</li>
                      <li>Requerido por ley o regulación</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mt-6">
                  <p className="text-gray-700">
                    <strong>Efectos de la terminación:</strong> Al terminar su cuenta, su acceso
                    a los servicios cesará inmediatamente. Los datos del cliente pueden ser
                    eliminados después de un período de gracia de 30 días, salvo que se requiera
                    su retención por ley.
                  </p>
                </div>
              </motion.div>

              {/* Governing Law */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ley Aplicable y Jurisdicción</h2>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Estos términos se regirán e interpretarán de acuerdo con las leyes de España,
                  sin tener en cuenta sus principios de conflicto de leyes.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Cualquier disputa que surja de o esté relacionada con estos términos será
                  sometida a la jurisdicción exclusiva de los tribunales de Madrid, España.
                </p>

                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Resolución alternativa de disputas:</strong> Antes de recurrir a
                    procedimientos legales, las partes se comprometen a intentar resolver las
                    disputas mediante negociación de buena fe y, si es necesario, mediación.
                  </p>
                </div>
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

                <p className="text-gray-600 leading-relaxed mb-6">
                  Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Información Legal</h3>
                    <p className="text-gray-600 mb-2">Thestral Data Intelligence S.L.</p>
                    <p className="text-gray-600 mb-2">CIF: B-87654321</p>
                    <p className="text-gray-600 mb-2">Calle de la Innovación, 123</p>
                    <p className="text-gray-600 mb-4">28001 Madrid, España</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Contacto</h3>
                    <p className="text-gray-600 mb-2">
                      Email:{" "}
                      <a href="mailto:legal@thestral.com" className="text-blue-600 hover:text-blue-700">
                        legal@thestral.com
                      </a>
                    </p>
                    <p className="text-gray-600 mb-2">Teléfono: +34 91 XXX XXXX</p>
                    <p className="text-gray-600">
                      Soporte:{" "}
                      <a href="mailto:support@thestral.com" className="text-blue-600 hover:text-blue-700">
                        support@thestral.com
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