import "./Testimonials.css";

const GALLERY = [
  { id: 1, image: "/testi-1.png" },
  { id: 2, image: "/testi-2.png" },
  { id: 3, image: "/testi-3.png" },
  { id: 4, image: "/testi-4.png" },
  { id: 5, image: "/testi-5.png" },
  { id: 6, image: "/testi-6.jpg" },
  { id: 7, image: "/testi-7.png" },
  { id: 8, image: "/testi-8.png" },
  { id: 9, image: "/testi-9.png" },
];

export default function Testimonials() {
  return (
    <section className="testimonials container">
      <div className="testimonials__quote">
        <h2 className="testimonials__title">What they say about us</h2>
        <img
          className="testimonials__avatar"
          src="/profile.png"
          alt="Regina Miles"
        />
        <div className="testimonials__stars" aria-label="4 out of 5 stars">
          <img src="/stars.png" alt="star" />
        </div>
        <p className="testimonials__text">
          This helps you see how many more days you need to work to reach your financial goal.
        </p>
        <p className="testimonials__name">Regina Miles</p>
        <p className="testimonials__role">Designer</p>
      </div>

      <div className="testimonials__gallery">
        {GALLERY.map((pic, i) => (
          <img
            key={i}
            style={{ backgroundImage: `url(${pic.image})` }}
          />
          
        ))}
      </div>
    </section>
  );
}
