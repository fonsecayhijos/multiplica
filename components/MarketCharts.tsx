export default function MarketCharts() {
  const miamiData = [
    { label: "Brickell", value: 92 },
    { label: "Miami Beach", value: 88 },
    { label: "Coral Gables", value: 75 },
    { label: "Downtown", value: 70 },
  ];
  const spainData = [
    { label: "Marbella", value: 90 },
    { label: "Málaga", value: 82 },
    { label: "Estepona", value: 78 },
    { label: "Benahavís", value: 85 },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">🇺🇸</span>
          <h3 className="font-bold text-navy-900">Interés inversor — Miami</h3>
        </div>
        <p className="text-xs text-gray-500 mb-6">Índice relativo de demanda (ilustrativo)</p>
        <div className="space-y-4">
          {miamiData.map((d) => (
            <div key={d.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700 font-medium">{d.label}</span>
                <span className="text-navy-900 font-semibold">{d.value}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-navy-800 to-navy-600 rounded-full transition-all"
                  style={{ width: `${d.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">🇪🇸</span>
          <h3 className="font-bold text-navy-900">Interés inversor — Costa del Sol</h3>
        </div>
        <p className="text-xs text-gray-500 mb-6">Índice relativo de demanda (ilustrativo)</p>
        <div className="space-y-4">
          {spainData.map((d) => (
            <div key={d.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700 font-medium">{d.label}</span>
                <span className="text-navy-900 font-semibold">{d.value}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full transition-all"
                  style={{ width: `${d.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
