"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FormData = {
  mercado: string;
  tipo: string;
  presupuesto: string;
  experiencia: string;
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
};

const initialForm: FormData = {
  mercado: "",
  tipo: "",
  presupuesto: "",
  experiencia: "",
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const STEPS = ["mercado", "tipo", "presupuesto", "experiencia", "contacto", "final"] as const;
type Step = (typeof STEPS)[number];

const mercados = [
  { id: "miami", label: "Miami", flag: "🇺🇸", desc: "Estados Unidos" },
  { id: "espana", label: "Costa del Sol / España", flag: "🇪🇸", desc: "España" },
  { id: "ambos", label: "Ambos mercados", flag: "🌍", desc: "Diversificar" },
];

const tipos = [
  { id: "residencial", label: "Residencial", icon: "🏠" },
  { id: "lujo", label: "Lujo / Premium", icon: "✨" },
  { id: "comercial", label: "Comercial / Locales", icon: "🏢" },
  { id: "vacacional", label: "Vacacional / Alquiler", icon: "🌴" },
];

const presupuestos = [
  { id: "100-300", label: "100.000 – 300.000 €/$" },
  { id: "300-600", label: "300.000 – 600.000 €/$" },
  { id: "600-1m", label: "600.000 – 1.000.000 €/$" },
  { id: "1m+", label: "Más de 1.000.000 €/$" },
];

const experiencias = [
  { id: "primera", label: "Primera inversión" },
  { id: "alguna", label: "Ya he invertido antes" },
  { id: "experto", label: "Inversor experimentado" },
];

export default function Funnel() {
  const [step, setStep] = useState<Step>("mercado");
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const progress = () => {
    const idx = STEPS.indexOf(step);
    return ((idx + 1) / STEPS.length) * 100;
  };

  const handleSubmit = async () => {
    if (!form.nombre || !form.email) return;
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mpqvbpey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Nuevo lead Multiplica - ${form.nombre}`,
          mercado: form.mercado,
          tipo: form.tipo,
          presupuesto: form.presupuesto,
          experiencia: form.experiencia,
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono || "-",
          mensaje: form.mensaje || "-",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setStep("final");
      } else {
        alert("Hubo un error al enviar. Inténtalo de nuevo.");
      }
    } catch (err) {
      alert("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted || step === "final") {
    return (
      <div className="step-enter text-center py-10">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-navy-900 mb-2">¡Gracias, {form.nombre.split(" ")[0]}!</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Hemos recibido tu interés. Un asesor de Multiplica se pondrá en contacto contigo pronto.
        </p>
        <button
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
            setStep("mercado");
          }}
          className="mt-6 text-navy-700 text-sm underline"
        >
          Nueva consulta
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-navy-900 rounded-full transition-all duration-500"
            style={{ width: `${progress()}%` }}
          />
        </div>
      </div>

      <div className="step-enter">
        {step === "mercado" && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 text-center">
              ¿En qué mercado quieres invertir?
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">Elige una opción</p>
            <div className="space-y-3">
              {mercados.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    update("mercado", m.id);
                    setTimeout(() => setStep("tipo"), 150);
                  }}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all",
                    form.mercado === m.id
                      ? "border-navy-900 bg-navy-50"
                      : "border-gray-200 hover:border-navy-300 bg-white"
                  )}
                >
                  <span className="text-2xl">{m.flag}</span>
                  <div>
                    <div className="font-semibold text-navy-900">{m.label}</div>
                    <div className="text-sm text-gray-500">{m.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "tipo" && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 text-center">
              Tipo de inversión
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">¿Qué buscas?</p>
            <div className="grid grid-cols-2 gap-3">
              {tipos.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    update("tipo", t.id);
                    setTimeout(() => setStep("presupuesto"), 150);
                  }}
                  className={cn(
                    "flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all",
                    form.tipo === t.id
                      ? "border-navy-900 bg-navy-50"
                      : "border-gray-200 hover:border-navy-300 bg-white"
                  )}
                >
                  <span className="text-2xl">{t.icon}</span>
                  <span className="font-medium text-sm text-navy-900 text-center">{t.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setStep("mercado")} className="mt-6 text-gray-500 text-sm">
              ← Atrás
            </button>
          </div>
        )}

        {step === "presupuesto" && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 text-center">
              Presupuesto aproximado
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">Rango de inversión</p>
            <div className="space-y-3">
              {presupuestos.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    update("presupuesto", p.id);
                    setTimeout(() => setStep("experiencia"), 150);
                  }}
                  className={cn(
                    "w-full px-5 py-4 rounded-xl border-2 text-left font-medium transition-all",
                    form.presupuesto === p.id
                      ? "border-navy-900 bg-navy-50 text-navy-900"
                      : "border-gray-200 hover:border-navy-300 bg-white text-gray-800"
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <button onClick={() => setStep("tipo")} className="mt-6 text-gray-500 text-sm">
              ← Atrás
            </button>
          </div>
        )}

        {step === "experiencia" && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 text-center">
              Tu experiencia como inversor
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">Así adaptamos el asesoramiento</p>
            <div className="space-y-3">
              {experiencias.map((e) => (
                <button
                  key={e.id}
                  onClick={() => {
                    update("experiencia", e.id);
                    setTimeout(() => setStep("contacto"), 150);
                  }}
                  className={cn(
                    "w-full px-5 py-4 rounded-xl border-2 text-left font-medium transition-all",
                    form.experiencia === e.id
                      ? "border-navy-900 bg-navy-50 text-navy-900"
                      : "border-gray-200 hover:border-navy-300 bg-white text-gray-800"
                  )}
                >
                  {e.label}
                </button>
              ))}
            </div>
            <button onClick={() => setStep("presupuesto")} className="mt-6 text-gray-500 text-sm">
              ← Atrás
            </button>
          </div>
        )}

        {step === "contacto" && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 text-center">
              Tus datos de contacto
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">Te contactaremos en menos de 24 h</p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo *"
                value={form.nombre}
                onChange={(e) => update("nombre", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
              />
              <input
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={(e) => update("telefono", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white"
              />
              <textarea
                placeholder="Mensaje u objetivos de inversión (opcional)"
                value={form.mensaje}
                onChange={(e) => update("mensaje", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white resize-none"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between">
              <button onClick={() => setStep("experiencia")} className="text-gray-500 text-sm order-2 sm:order-1">
                ← Atrás
              </button>
              <button
                onClick={handleSubmit}
                disabled={!form.nombre || !form.email || submitting}
                className={cn(
                  "px-8 py-3 rounded-xl font-semibold text-white order-1 sm:order-2",
                  !form.nombre || !form.email || submitting
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-navy-900 hover:bg-navy-800"
                )}
              >
                {submitting ? "Enviando..." : "Enviar consulta →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
