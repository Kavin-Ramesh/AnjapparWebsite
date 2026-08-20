/**
 * Parchment After Dark reminder: shared chrome stays editorial and sharp—warm parchment,
 * thin rules, compact Manrope labels, restrained saffron, no soft cards or shadows.
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, MapPin, Menu, X, Instagram, Facebook, Phone, Mail } from "lucide-react";
import { imageUrls, restaurant } from "@/data/restaurant";

const primaryLinks = [
  ["Menu", "/Food-Menu"],
  ["Catering", "/Catering"],
  ["Private Events", "/party"],
  ["Our Story", "/about-us"],
] as const;

const exploreLinks = [
  ["Drinks", "/drink-menu"],
  ["Reservations", "/reservations"],
  ["Events", "/events"],
  ["Promotions", "/Promotions"],
  ["Specials", "/happy-hours-specials"],
  ["Contact", "/contactus"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const onHero = location === "/";

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const light = onHero && !scrolled;
  return (
    <header className={`site-header ${light ? "site-header--hero" : ""} ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand-lockup" aria-label="Anjappar San Diego home">
          <img src={imageUrls.mark} alt="" className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">ANJAPPAR</span>
            <span className="brand-place">SAN DIEGO</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryLinks.map(([label, href]) => (
            <Link key={href} href={href} className={location === href ? "active" : ""}>{label}</Link>
          ))}
          <div className="nav-more">
            <button type="button" className="nav-more-trigger" aria-label="More restaurant pages">
              More <ChevronDown aria-hidden="true" size={14} />
            </button>
            <div className="nav-more-panel">
              {exploreLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <Link href="/reservations" className="header-text-link">Reserve</Link>
          <a href={restaurant.orderUrl} target="_blank" rel="noreferrer" className="order-button">Order online</a>
          <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {[...primaryLinks, ...exploreLinks].map(([label, href], index) => (
            <Link key={href} href={href}><span>{String(index + 1).padStart(2, "0")}</span>{label}</Link>
          ))}
          <a href={restaurant.orderUrl} target="_blank" rel="noreferrer" className="mobile-order">Order online</a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-topline" />
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={imageUrls.mark} alt="Anjappar Chettinad Indian Restaurant" className="footer-mark" />
          <p className="footer-wordmark"><span>AN</span>JAPPAR</p>
          <p className="footer-intro">Chettinad cooking, set at the table in Mira Mesa.</p>
          <div className="social-links" aria-label="Social links">
            <a href={restaurant.social.instagram} target="_blank" rel="noreferrer" aria-label="Anjappar San Diego on Instagram"><Instagram size={17} /></a>
            <a href={restaurant.social.facebook} target="_blank" rel="noreferrer" aria-label="Anjappar San Diego on Facebook"><Facebook size={17} /></a>
            <a href={restaurant.social.reviews} target="_blank" rel="noreferrer">Reviews</a>
          </div>
        </div>
        <div className="footer-column">
          <p className="eyebrow">Visit</p>
          <address>{restaurant.address.split(", ").map((line) => <span key={line}>{line}</span>)}</address>
          <a href={restaurant.directionsUrl} target="_blank" rel="noreferrer" className="footer-action"><MapPin size={15} /> Directions</a>
        </div>
        <div className="footer-column footer-hours">
          <p className="eyebrow">Hours</p>
          {restaurant.hours.map(([day, time]) => <p key={day}><span>{day}</span>{time}</p>)}
        </div>
        <div className="footer-column">
          <p className="eyebrow">Contact</p>
          <a href={restaurant.phoneHref} className="footer-action"><Phone size={15} /> {restaurant.phone}</a>
          <a href={restaurant.emailHref} className="footer-action"><Mail size={15} /> {restaurant.email}</a>
          <Link href="/contactus" className="footer-action">Send an inquiry</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Anjappar San Diego</p>
        <Link href="/PrivacyPolicy">Privacy policy</Link>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="site-shell"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}
