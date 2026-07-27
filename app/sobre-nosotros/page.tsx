import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre nosotros | Multiplica",
  description: "Quiénes somos: foro de inversión inmobiliaria en Miami y España.",
};

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="pt-12 pb-8">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-3">Sobre Multiplica</h1>
            <p className="text-gray-600">Foro de inversión inmobiliaria en Miami y España.</p>
          </div>
        </section>
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-10 space-y-6 text-gray-700">
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Nuestra misión</h2>
              <p>
                Ayudar a inversores a identificar oportunidades reales en dos de los
                mercados más dinámicos del panorama internacional: Miami y la Costa del Sol.
                Ofrecemos análisis, criterio y acompañamiento, no promesas vacías.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Qué hacemos</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Análisis de zonas y tipologías de activo</li>
                <li>Orientación según perfil y presupuesto del inversor</li>
                <li>Conexión con oportunidades en Miami y España</li>
                <li>Seguimiento durante el proceso de decisión</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-2">Para quién</h2>
              <p>
                Inversores particulares y familiares que buscan diversificar, obtener
                rentabilidad o combinar inversión con uso personal (segunda residencia,
                alquiler vacacional, etc.).
              </p>
            </div>
            <p>
              <Link href="/#consulta" className="text-navy-900 font-semibold underline">
                Solicita tu análisis gratuito →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
