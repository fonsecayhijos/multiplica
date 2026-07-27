import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketCharts from "@/components/MarketCharts";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercados | Multiplica",
  description: "Análisis de los mercados inmobiliarios de Miami y Costa del Sol.",
};

export default function MercadosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="pt-12 pb-8">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-3">Mercados</h1>
            <p className="text-gray-600">
              Miami y Costa del Sol: dos polos de inversión con perfiles complementarios.
            </p>
          </div>
        </section>

        <section className="pb-12 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <Image src="/miami.jpg" alt="Miami" width={600} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-navy-900 mb-2">🇺🇸 Miami</h2>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Mercado internacional con alta liquidez</li>
                  <li>• Demanda de residencias de lujo y alquiler vacacional</li>
                  <li>• Atractivo para capital latinoamericano y europeo</li>
                  <li>• Zonas clave: Brickell, Miami Beach, Coral Gables</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <Image src="/costadelsol.jpg" alt="Costa del Sol" width={600} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-navy-900 mb-2">🇪🇸 Costa del Sol</h2>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Clima y calidad de vida como motor de demanda</li>
                  <li>• Fuerte componente turístico y de segunda residencia</li>
                  <li>• Oportunidades en obra nueva y rehabilitación</li>
                  <li>• Zonas clave: Marbella, Málaga, Estepona, Benahavís</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 px-4 bg-gray-50 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-900 text-center mb-8">Comparativa de interés</h2>
            <MarketCharts />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
