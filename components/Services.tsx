const services = [
  {
    name: "Exterior Detail",
    price: "$60–80",
    note: "Price varies based on size/condition",
    popular: false,
    items: [
      "Foam pre-soak",
      "Safe hand wash (2-bucket method)",
      "Wheels & tires deep cleaned",
      "Streak-free dry",
    ],
  },
  {
    name: "Interior Detail",
    price: "$70–100",
    note: "Heavier mess = higher end",
    popular: false,
    items: [
      "Full vacuum (seats, carpets, trunk)",
      "Deep wipe down (dash, doors, console)",
      "Interior glass cleaned",
    ],
  },
  {
    name: "Full Detail",
    price: "$160–180",
    note: null,
    popular: true,
    items: [
      "Complete exterior detail",
      "Complete interior detail",
      "Tire finish (clean, non-greasy look)",
      "Attention to high-touch areas",
    ],
  },
  {
    name: "Deep Detail",
    price: "$180–220",
    note: null,
    popular: false,
    items: [
      "Everything in Full Detail",
      "Deep cleaning of cracks, vents, cupholders",
      "Extra time on heavily soiled areas",
      "Enhanced finish quality",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Services</h2>
          <p className="text-slate-400 mt-2">All prices vary by vehicle size and condition</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.name}
              className={`relative card flex flex-col ${
                svc.popular
                  ? "border-brand-blue shadow-glow-lg ring-1 ring-brand-blue/40"
                  : ""
              }`}
            >
              {svc.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-white font-bold text-lg mb-1">{svc.name}</h3>
                <span className="price-tag">{svc.price}</span>
              </div>

              <ul className="flex-1 space-y-2">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-brand-blue mt-0.5 shrink-0">●</span>
                    {item}
                  </li>
                ))}
              </ul>

              {svc.note && (
                <p className="mt-4 text-slate-500 text-xs italic">{svc.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
