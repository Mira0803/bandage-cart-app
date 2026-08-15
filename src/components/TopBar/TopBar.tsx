import "./TopBar.css";

const SOCIAL_ICONS = [
  { label: "Instagram", path: "M4 4h16v16H4z M12 15a3 3 0 100-6 3 3 0 000 6z M16.5 7.5h.01" },
  { label: "YouTube", path: "M4 8a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2z M10 9l5 3-5 3z" },
  { label: "Facebook", path: "M14 20v-7h2.5l.5-3H14V8.5c0-.9.3-1.5 1.6-1.5H17V4.2C16.6 4.1 15.6 4 14.5 4 12.1 4 10.5 5.4 10.5 8v2H8v3h2.5v7z" },
  { label: "Twitter", path: "M21 5.5c-.7.3-1.4.5-2.2.6a3.7 3.7 0 001.6-2 7.4 7.4 0 01-2.4.9 3.7 3.7 0 00-6.3 3.4A10.5 10.5 0 013.5 4.8a3.7 3.7 0 001.1 4.9c-.6 0-1.2-.2-1.7-.4v.1c0 1.8 1.3 3.3 3 3.7-.5.1-1.1.2-1.6.1.5 1.5 1.9 2.6 3.6 2.6A7.4 7.4 0 013 17c-.3 0-.7 0-1-.1A10.4 10.4 0 008.3 18.5c6.4 0 9.9-5.3 9.9-9.9v-.5c.7-.5 1.3-1.1 1.8-1.8" },
];

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contact">
          <a href="tel:+12255550118" className="topbar__contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.6 3.6 1 1 0 01-.25 1z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            (225) 555-0118
          </a>
          <a href="mailto:michelle.rivera@example.com" className="topbar__contact-item topbar__contact-item--email">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            michelle.rivera@example.com
          </a>
        </div>

        <p className="topbar__promo">Follow Us and get a chance to win 80% off</p>

        <div className="topbar__social">
          <span>Follow Us :</span>
          {SOCIAL_ICONS.map(({ label, path }) => (
            <a key={label} href="#" aria-label={label}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
