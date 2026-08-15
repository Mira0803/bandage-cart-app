import "./HeroBanner.css";

const TILES = [
  {
    label: "5 Items",
    title: "FURNITURE",
    image: "/hero-1.png",
    className: "hero-banner__tile--tall",
  },
  {
    label: "5 Items",
    title: "FURNITURE",
    image: "/hero-2.png",
    className: "hero-banner__tile--wide",
  },
  {
    label: "5 Items",
    title: "FURNITURE",
    image: "/hero-4.png",
    className: "",
  },
  {
    label: "5 Items",
    title: "FURNITURE",
    image: "/hero-3.png",
    className: "",
  },
];

export default function HeroBanner() {
  return (
    <section className="hero-banner container">
      <div className="hero-banner__grid">
        {TILES.map((tile, i) => (
          <div
            key={i}
            className={`hero-banner__tile ${tile.className}`}
            style={{ backgroundImage: `url(${tile.image})`, objectFit: 'cover' }}
          >
            <div className="hero-banner__content">
              <span className="hero-banner__label">{tile.label}</span>
              <h2 className="hero-banner__title">{tile.title}</h2>
              <a className="hero-banner__link" href="#">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
