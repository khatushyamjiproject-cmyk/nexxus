import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Top CTA Banner */}
      <div className="footer-cta-bar">
        <div className="footer-cta-inner">
          <div>
            <h2 className="footer-cta-title">Ready to Invest in Your Future?</h2>
            <p className="footer-cta-sub">
              Let our experts help you find the perfect plot in Jaipur.
            </p>
          </div>
          <Link href="/contact" className="footer-cta-btn">
            Get a Free Consultation →
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-main">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-brand-col">
            <Link href="/home" className="footer-brand">
              <span className="footer-brand-mark"></span>
              NEXUS PROPERTIES
            </Link>
            <p className="footer-tagline">
              Your trusted real estate partner for residential plots, commercial
              property, and Smart City sector land in Jaipur, Rajasthan.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="social-icon">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon fill="#fff" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pages Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/home">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Properties Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Properties</h4>
            <ul className="footer-links">
              <li><Link href="/projects">Residential Plots</Link></li>
              <li><Link href="/projects">Commercial Plots</Link></li>
              <li><Link href="/projects">Smart City Land</Link></li>
              <li><Link href="/projects">Premium Sectors</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="fc-icon">📍</span>
                <span>Jaipur, Rajasthan, India</span>
              </li>
              <li>
                <span className="fc-icon">📞</span>
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li>
                <span className="fc-icon">✉️</span>
                <span>contact@nexusproperties.in</span>
              </li>
              <li>
                <span className="fc-icon">🕐</span>
                <span>Mon–Sat, 10am – 7pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {currentYear} Nexus Properties. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/about">Privacy Policy</Link>
            <Link href="/about">Terms of Service</Link>
            <Link href="/contact">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}