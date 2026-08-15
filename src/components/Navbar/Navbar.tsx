import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCartItemCount } from "../../features/cart/cartSelectors";
import { selectWishlistCount } from "../../features/wishlist/wishListSelector";
import "./Navbar.css";

// "About", "Blog", "Contact", "Pages" mirror the reference design

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/#about" },
  { label: "Blog", to: "/#blog" },
  { label: "Contact", to: "/#cta" },
];

export default function Navbar() {
  const itemCount = useAppSelector(selectCartItemCount);
  const wishlistCount = useAppSelector(selectWishlistCount);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
          Bandage
        </Link>

        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.to} className="navbar__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <Link to="/" className="navbar__login">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M5 20c1.4-3.4 4-5 7-5s5.6 1.6 7 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span>Login / Register</span>
          </Link>

          <button type="button" className="navbar__icon-btn" aria-label="Search">
            <img src="/icon-search.png" alt="search" />
          </button>

          <Link to="/cart" className="navbar__icon-btn navbar__cart" aria-label="View cart">
            <img src="/icon-cart.png" alt="cart" />
            {itemCount > 0 && <span className="navbar__badge">{itemCount}</span>}
          </Link>

          <Link to="/shop" className="navbar__icon-btn navbar__wishlist" aria-label="Wishlist">
            <img src="/icon-fav.png" alt="favorite" />
            {wishlistCount > 0 && <span className="navbar__badge">{wishlistCount}</span>}
          </Link>

          <button
            type="button"
            className="navbar__menu-btn"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="navbar__mobile-menu">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="navbar__mobile-link"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}