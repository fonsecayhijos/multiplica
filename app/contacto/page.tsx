"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nombre: ${form.nombre}\nEmail: ${form.email}\nTel: ${form.telefono}\n\n${form.mensaje}`;
    window.location.href = `mailto:info@multiplica.org?subject=${encodeURIComponent("Contacto Multiplica - " + form.nombre)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="pt-12 pb-8">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-navy-900 mb-2">Contacto</h1>
            <p className="text-gray-600">Escríbenos y te respondemos lo antes posible.</p>
          </div>
        </section>
        <section className="pb-16 px-4">
          <div className="max-w-lg mx-auto border border-gray-100 rounded-3xl shadow-sm p-6 sm:p-8">
            {sent ? (
              <p className="text-center text-navy-900 font-medium py-8">
                Gracias. Revisa tu cliente de correo para enviar el mensaje.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  placeholder="Nombre *"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300"
                />
                <input
                  required
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300"
                />
                <input
                  placeholder="Teléfono"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300"
                />
                <textarea
                  required
                  placeholder="Mensaje *"
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-navy-900 text-white font-semibold hover:bg-navy-800"
                >
                  Enviar
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
