import Button from "../Button/Button";
import "./CTABanner.css";

export default function CTABanner() {
  return (
    <section
      className="cta-banner"
      id="cta"
      style={{ backgroundImage: "url(/problemWeSolvebg.png)" }}
    >
      <div className="container cta-banner__inner">
        <p className="cta-banner__eyebrow">Designing Better Experience</p>
        <h2 className="cta-banner__title">
          Problems trying to resolve the conflict between
        </h2>
        <p className="cta-banner__text">
          Problems trying to resolve the conflict between the two major realms of Classical physics.
        </p>
        <p className="cta-banner__price">$16.48</p>
        <Button variant="solid">ADD YOUR CALL TO ACTION</Button>
      </div>
    </section>
  );
}
