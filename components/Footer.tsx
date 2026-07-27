import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-navy-900 text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="bg-white rounded-lg px-4 py-2 inline-block mb-3">
              <Logo size="sm" />
            </div>
            <p className="text-sm text-navy-200 max-w-xs">
              Foro de inversión inmobiliaria en Miami y España.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-sm">
            <div>
              <p className="font-semibold text-gold-400 mb-2">Navegación</p>
              <ul className="space-y-1.5 text-navy-200">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li><Link href="/mercados" className="hover:text-white">Mercados</Link></li>
                <li><Link href="/sobre-nosotros" className="hover:text-white">Sobre nosotros</Link></li>
                <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gold-400 mb-2">Legal</p>
              <ul className="space-y-1.5 text-navy-200">
                <li><Link href="/aviso-legal" className="hover:text-white">Aviso legal</Link></li>
                <li><Link href="/privacidad" className="hover:text-white">Privacidad</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-navy-700 text-center text-sm text-navy-300">
          © {new Date().getFullYear()} Multiplica. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
