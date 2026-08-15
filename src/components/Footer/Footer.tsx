import "./Footer.css";

const SOCIAL_ICONS = [
  { label: "Facebook", path: "M14 20v-7h2.5l.5-3H14V8.5c0-.9.3-1.5 1.6-1.5H17V4.2C16.6 4.1 15.6 4 14.5 4 12.1 4 10.5 5.4 10.5 8v2H8v3h2.5v7z" },
  { label: "Instagram", path: "M4 4h16v16H4z M12 15a3 3 0 100-6 3 3 0 000 6z M16.5 7.5h.01" },
  { label: "Twitter", path: "M21 5.5c-.7.3-1.4.5-2.2.6a3.7 3.7 0 001.6-2 7.4 7.4 0 01-2.4.9 3.7 3.7 0 00-6.3 3.4A10.5 10.5 0 013.5 4.8a3.7 3.7 0 001.1 4.9c-.6 0-1.2-.2-1.7-.4v.1c0 1.8 1.3 3.3 3 3.7-.5.1-1.1.2-1.6.1.5 1.5 1.9 2.6 3.6 2.6A7.4 7.4 0 013 17c-.3 0-.7 0-1-.1A10.4 10.4 0 008.3 18.5c6.4 0 9.9-5.3 9.9-9.9v-.5c.7-.5 1.3-1.1 1.8-1.8" },
];

const COLUMNS = [
  { title: "Company Info", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
  { title: "Legal", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
  { title: "Features", links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"] },
  { title: "Resources", links: ["IOS & Android", "Watch a Demo", "Customers", "API"] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand-row">
          <span className="footer__brand">Bandage</span>
          <div className="footer__social">
            {SOCIAL_ICONS.map(({ label, path }) => (
              <a key={label} href="#" aria-label={label}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>
      </div>
      <div className="container">
        <div className="footer__top">
          {COLUMNS.map((col) => (
            <div key={col.title} className="footer__col">
              <h3 className="footer__col-title">{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col footer__subscribe">
            <h3 className="footer__col-title">Get In Touch</h3>
            <form className="footer__subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" aria-label="Your email" />
              <button type="submit">Subscribe</button>
            </form>
            <p className="footer__subscribe-note">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Made With Love By Finland All Right Reserved.</p>
      </div>
    </footer>
  );
}
