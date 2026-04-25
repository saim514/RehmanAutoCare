const addons = [
  { name: "Heavy stain removal", price: "+ $20–50", icon: "🧹" },
  { name: "Pet hair removal", price: "+ $30", icon: "🐾" },
  { name: "Extra dirty fee", price: "+ $20–50", icon: "💧" },
  { name: "Express maintenance wash", price: "+ $60", note: "Returning clients only", icon: "⚡" },
];

export default function AddOns() {
  return (
    <section
      id="addons"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg, #071526 0%, #0a1d35 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-blue font-semibold tracking-widest uppercase text-sm mb-2">
            Customize Your Detail
          </p>
          <h2 className="section-title text-4xl md:text-5xl">Add-Ons</h2>
          <p className="text-slate-400 mt-3">Stack extras on top of any service</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {addons.map((addon) => (
            <div
              key={addon.name}
              className="card flex items-center gap-4 py-5 px-6"
            >
              <span className="text-3xl shrink-0">{addon.icon}</span>
              <div className="flex-1">
                <p className="text-white font-semibold">{addon.name}</p>
                {addon.note && (
                  <p className="text-slate-500 text-xs mt-0.5">{addon.note}</p>
                )}
              </div>
              <span className="price-tag text-lg shrink-0">{addon.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
