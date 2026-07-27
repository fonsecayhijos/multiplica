import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Funnel from "@/components/Funnel";
import MarketCharts from "@/components/MarketCharts";
import StatsRow from "@/components/StatsRow";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero with centered logo */}
        <section className="pt-12 pb-10 md:pt-16 md:pb-14">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-8">
              <Logo size="lg" />
            </div>
            <p className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-3">
              Foro de inversión inmobiliaria
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 tracking-tight mb-4 leading-tight">
              Invierte en{" "}
              <span className="text-gold-500">Miami</span> y la{" "}
              <span className="text-gold-500">Costa del Sol</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Análisis de mercado, oportunidades y asesoramiento para inversores
              que buscan rentabilidad y diversificación.
            </p>
            <a
              href="#consulta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-navy-900 text-white font-semibold hover:bg-navy-800 transition-colors"
            >
              Solicitar análisis gratuito
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-14 px-4">
          <div className="max-w-5xl mx-auto">
            <StatsRow />
            <p className="text-xs text-gray-400 text-center mt-3">
              *Datos ilustrativos orientativos. No constituyen asesoramiento financiero.
            </p>
          </div>
        </section>

        {/* Photos Miami + Costa del Sol */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
                Dos mercados, una estrategia
              </h2>
              <p className="text-gray-600">
                Diversifica entre el dinamismo de Miami y el atractivo de la Costa del Sol.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/miami.jpg"
                  alt="Miami skyline"
                  width={800}
                  height={500}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-sm text-gold-400 font-semibold mb-1">🇺🇸 Estados Unidos</p>
                    <h3 className="text-xl font-bold">Miami</h3>
                    <p className="text-sm text-white/80 mt-1">
                      Mercado internacional, liquidez y demanda de lujo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/costadelsol.jpg"
                  alt="Costa del Sol"
                  width={800}
                  height={500}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-sm text-gold-400 font-semibold mb-1">🇪🇸 España</p>
                    <h3 className="text-xl font-bold">Costa del Sol</h3>
                    <p className="text-sm text-white/80 mt-1">
                      Clima, calidad de vida y fuerte demanda turística.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charts */}
        <section className="pb-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto py-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
                Radiografía de los mercados
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Zonas con mayor interés inversor (datos ilustrativos)
              </p>
            </div>
            <MarketCharts />
          </div>
        </section>

        {/* Second miami photo strip */}
        <section className="pb-16">
          <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
            <Image
              src="/miami2.jpg"
              alt="Vista Miami"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-900/50 flex items-center justify-center">
              <p className="text-white text-xl sm:text-2xl font-bold text-center px-4">
                Oportunidades reales. Decisiones informadas.
              </p>
            </div>
          </div>
        </section>

        {/* Funnel */}
        <section id="consulta" className="pb-20 px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
                Cuéntanos tu perfil de inversor
              </h2>
              <p className="text-gray-600 text-sm">
                En menos de 1 minuto te orientamos sobre el mercado que más te conviene.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/50 p-6 sm:p-8">
              <Funnel />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
