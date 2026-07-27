const stats = [
  { value: "+12%", label: "Rentabilidad media estimada*", sub: "Miami residencial" },
  { value: "+8%", label: "Revalorización anual*", sub: "Costa del Sol" },
  { value: "2", label: "Mercados clave", sub: "EE.UU. y España" },
  { value: "24h", label: "Respuesta media", sub: "a inversores" },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-navy-900 text-white rounded-2xl p-5 text-center"
        >
          <p className="text-3xl font-bold text-gold-400 mb-1">{s.value}</p>
          <p className="text-sm font-medium">{s.label}</p>
          <p className="text-xs text-navy-300 mt-1">{s.sub}</p>
        </div>
      ))}
    </div>
  );
}
