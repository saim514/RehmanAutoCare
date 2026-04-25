const services = [
  {
    name: "Exterior Detail",
    price: "$60–80",
    note: "Price varies by size/condition",
    popular: false,
    icon: "🚿",
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
    icon: "🪑",
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
    icon: "⭐",
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
    icon: "🔬",
    items: [
      "Everything in Full Detail",
      "Deep cleaning of cracks, vents & cupholders",
      "Extra time on heavily soiled areas",
      "Enhanced finish quality",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: "#071526" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-brand-blue font-semibold tracking-widest uppercase text-sm mb-2">
            What We Offer
          </p>
          <h2 className="section-title text-4xl md:text-5xl">Our Services</h2>
          <p className="text-slate-400 mt-3 max-w-md mx-auto">
            All prices vary by vehicle size and condition. Final price confirmed at booking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.name}
              className="relative card flex flex-col"
              style={
                svc.popular
                  ? { borderColor: "#1a8cff", boxShadow: "0 0 30px rgba(26,140,255,0.25), inset 0 0 30px rgba(26,140,255,0.04)" }
                  : {}
              }
            >
              {svc.popular && (
                <div
                  className="absolute -top-px left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: "linear-gradient(90deg, transparent, #1a8cff, transparent)" }}
                />
              )}
              {svc.popular && (
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap"
                  style={{ background: "#1a8cff" }}
                >
                  Most Popular
                </span>
              )}

              {/* Icon + name */}
              <div className="mb-5">
                <span className="text-3xl mb-3 block">{svc.icon}</span>
                <h3 className="text-white font-bold text-lg">{svc.name}</h3>
                <span className="price-tag text-2xl">{svc.price}</span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-2.5">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {svc.note && (
                <p className="mt-4 text-slate-500 text-xs italic border-t border-white/5 pt-3">{svc.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
