import "./ServicesSection.css";

const SERVICES = [
  {
    title: "Easy Wins",
    text: "Get your best looking smile now!",
    icon: "/icon-2.svg",
  },
  {
    title: "Concrete",
    text: "Focused on helping you discover your most beautiful smile.",
    icon: "/icon-1.svg",
  },
  {
    title: "Hack Growth",
    text: "Overcome any hurdle or any other problem.",
    icon: "/growth-icon.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="services container" id="about">
      <p className="services__eyebrow">Featured Products</p>
      <h2 className="services__title">THE BEST SERVICES</h2>
      <p className="services__subtitle">Problems trying to resolve the conflict between</p>

      <div className="services__grid">
        {SERVICES.map((service) => (
          <div key={service.title} className="services__item">
            <span className="services__icon">
              <img src={service.icon} alt="" width={28} height={28} />
            </span>
            <h3 className="services__item-title">{service.title}</h3>
            <p className="services__item-text">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}