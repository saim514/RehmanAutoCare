const addons = [
  { name: "Heavy stain removal", price: "+ $20–50" },
  { name: "Pet hair removal", price: "+ $30" },
  { name: "Extra dirty fee", price: "+ $20–50" },
  { name: "Express maintenance wash", price: "+ $60", note: "Returning clients only" },
];

export default function AddOns() {
  return (
    <section id="addons" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Add-Ons</h2>
          <p className="text-slate-400 mt-2">Customize your detail with extras</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {addons.map((addon) => (
            <div
              key={addon.name}
              className="flex items-center justify-between card py-4 px-5"
            >
              <div>
                <p className="text-white font-medium text-sm">{addon.name}</p>
                {addon.note && (
                  <p className="text-slate-500 text-xs mt-0.5">{addon.note}</p>
                )}
              </div>
              <span className="price-tag text-base shrink-0 ml-4">{addon.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
