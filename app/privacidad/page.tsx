import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacidad | Multiplica" };

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="pt-12 pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-navy-900 mb-2">Política de privacidad</h1>
            <p className="text-sm text-gray-500 mb-8">Última actualización: julio 2026</p>
            <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
              <div>
                <h2 className="font-bold text-navy-900 mb-1">Responsable</h2>
                <p>Multiplica · info@multiplica.org</p>
              </div>
              <div>
                <h2 className="font-bold text-navy-900 mb-1">Datos que recogemos</h2>
                <p>Nombre, email, teléfono e información sobre su perfil de inversión cuando rellena formularios.</p>
              </div>
              <div>
                <h2 className="font-bold text-navy-900 mb-1">Finalidad</h2>
                <p>Atender consultas y solicitudes de información sobre oportunidades de inversión.</p>
              </div>
              <div>
                <h2 className="font-bold text-navy-900 mb-1">Base legal</h2>
                <p>Consentimiento al enviar el formulario (RGPD art. 6.1.a).</p>
              </div>
              <div>
                <h2 className="font-bold text-navy-900 mb-1">Derechos</h2>
                <p>Acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a info@multiplica.org. También puede reclamar ante la AEPD (www.aepd.es).</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
