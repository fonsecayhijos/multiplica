import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Aviso legal | Multiplica" };

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="pt-12 pb-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-navy-900 mb-2">Aviso legal</h1>
            <p className="text-sm text-gray-500 mb-8">Última actualización: julio 2026</p>
            <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
              <div>
                <h2 className="font-bold text-navy-900 mb-1">1. Datos identificativos</h2>
                <p>Titular: Multiplica · Email: info@multiplica.org · Actividad: foro de inversión inmobiliaria (información y orientación).</p>
              </div>
              <div>
                <h2 className="font-bold text-navy-900 mb-1">2. Objeto</h2>
                <p>Este sitio ofrece información orientativa sobre mercados inmobiliarios. No constituye asesoramiento financiero, fiscal ni jurídico personalizado.</p>
              </div>
              <div>
                <h2 className="font-bold text-navy-900 mb-1">3. Propiedad intelectual</h2>
                <p>Los contenidos del sitio son propiedad de Multiplica o de terceros autorizados. Queda prohibida su reproducción sin autorización.</p>
              </div>
              <div>
                <h2 className="font-bold text-navy-900 mb-1">4. Responsabilidad</h2>
                <p>Las cifras y gráficas son ilustrativas. Multiplica no se responsabiliza de decisiones de inversión tomadas únicamente con base en la información del sitio.</p>
              </div>
              <div>
                <h2 className="font-bold text-navy-900 mb-1">5. Datos personales</h2>
                <p>Ver <Link href="/privacidad" className="underline text-navy-900">Política de privacidad</Link>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
