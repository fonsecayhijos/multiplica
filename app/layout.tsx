import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multiplica | Foro de Inversión Inmobiliaria en Miami y España",
  description:
    "Foro de inversión inmobiliaria en Miami y España. Análisis de mercado, oportunidades y asesoramiento para inversores.",
  keywords: [
    "inversión inmobiliaria",
    "Miami",
    "España",
    "Costa del Sol",
    "Multiplica",
    "foro inversión",
  ],
  openGraph: {
    title: "Multiplica | Inversión Inmobiliaria Miami y España",
    description: "Oportunidades de inversión inmobiliaria en Miami y la Costa del Sol.",
    siteName: "Multiplica",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen bg-white text-navy-900">
        {children}
      </body>
    </html>
  );
}
