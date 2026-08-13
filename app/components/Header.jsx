"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`site-nav${scrolled ? " nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/home" className="brand">
            <span className="brand-mark"></span>
            NEXUS PROPERTIES
          </Link>

          {/* Desktop links */}
          <div className="nav-links desktop-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link${pathname === l.href ? " active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta-btn">
              Enquire Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? " mobile-menu-open" : ""}`}>
        <div className="mobile-menu-header">
          <Link href="/home" className="brand brand-dark" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark brand-mark-dark"></span>
            NEXUS PROPERTIES
          </Link>
          <button
            className="mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <div className="mobile-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`mobile-link${pathname === l.href ? " mobile-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
        <div className="mobile-menu-footer">
          <p>Nexus Properties · Jaipur, Rajasthan</p>
          <p>+91 XXXXX XXXXX</p>
        </div>
      </div>
    </>
  );
}