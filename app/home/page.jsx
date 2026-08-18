"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

/* ── static data ── */
const teamMembers = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    bio: "15+ years in Sikar and Jaipur real estate. Expert in Smart City corridors and plot valuation.",
    initials: "RS",
    color: "#16324F",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Head of Sales",
    bio: "Specialises in matching buyers with the right residential and commercial plots.",
    initials: "PV",
    color: "#C08A2E",
  },
  {
    id: 3,
    name: "Amit Gupta",
    role: "Legal & Compliance",
    bio: "Ensures every title is clear and every registry process runs without surprises.",
    initials: "AG",
    color: "#5B7065",
  },
];

const blogs = [
  {
    id: 1,
    tag: "Market Insights",
    title: "Why Jaipur's Smart City Corridor Is the Best Bet in 2026",
    excerpt:
      "Infrastructure investment, metro expansion, and DMIC alignment are driving land appreciation across Sikar and Jaipur's western sectors.",
    date: "Aug 05, 2026",
    readTime: "4 min read",
  },
  {
    id: 2,
    tag: "Buyer's Guide",
    title: "5 Things to Verify Before You Buy a Plot in Rajasthan",
    excerpt:
      "Title clarity, jamabandi, nagar nigam approval — here's the exact checklist our legal team uses before listing any property.",
    date: "Jul 22, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    tag: "Investment",
    title: "Residential vs Commercial: Which Plot Type Gives Better Returns?",
    excerpt:
      "A data-driven comparison of price appreciation, rental yield, and liquidity for both plot categories in the region.",
    date: "Jul 10, 2026",
    readTime: "5 min read",
  },
];

const faqs = [
  {
    q: "What documents should I check before buying a plot in Jaipur / Sikar?",
    a: "You should verify the Jamabandi (record of rights), Khasra/Khatoni numbers, Nagar Nigam, JDA or local authority approved layout, No Objection Certificate (NOC), and the seller's ownership chain. Our legal team reviews all of these before listing any property.",
  },
  {
    q: "What is the current registry rate in Rajasthan?",
    a: "The stamp duty and registration fee in Rajasthan is approximately 11% of the circle rate or agreement value (whichever is higher). This includes 6% stamp duty, 1% registration fee, and other surcharges.",
  },
  {
    q: "Do you offer a no-interest payment plan?",
    a: "Yes. On select residential plots, we offer a 1-year no-interest payment plan — typically 30% upfront and the remaining spread over 12 months. Ask our team for project-specific eligibility.",
  },
  {
    q: "Can I visit the plot before buying?",
    a: "Absolutely. We arrange guided site visits at your convenience. Our team accompanies you to the location, explains surrounding infrastructure, and answers any questions on-site.",
  },
  {
    q: "What is the difference between a JDA-approved and RERA-registered plot?",
    a: "JDA (Jaipur Development Authority) or local body approval means the layout plan is sanctioned by the local body. RERA registration is mandatory for developers selling more than 8 plots or above 500 sq m.",
  },
  {
    q: "How long does the registry process take?",
    a: "Once all documents are in order, the registry typically completes within 7–15 working days. Our legal team coordinates with the Sub-Registrar office and guides you through every step.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/image/4.jpg", "/image/5.jpg", "/image/8.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <header className="hero">
        <span className="corner-pin cp-tl"></span>
        <span className="corner-pin cp-tr"></span>

        <div className="hero-inner">
          <div className="hero-grid">
            {/* Left Column: Text Content */}
            <div className="hero-text-content">
              <div className="eyebrow">Thank you for visiting &amp; Nexxus Homz Pvt. Ltd.</div>
              <h1>
                Land and property deals, <em>surveyed and settled</em> for you.
              </h1>
              <p className="lead">
                Understanding the demands of both individuals and corporate clients.
                Living alone is insufficient. The quality of life is becoming increasingly significant as we adapt to the changing times.
                Whether for home or commercial use, the idea of purchasing space has evolved to encompass much more than just the structure or land. It now covers pre- and post-purchase services as well as the requirement to streamline the whole real estate purchasing process. Therefore, the discriminating, astute consumer now chooses a real estate consultant and organization based on the overall real estate transaction experience.
              </p>
              <div className="hero-cta">
                <Link href="/contact" className="btn btn-primary">
                  Get a Property Match
                </Link>
                <Link href="/projects" className="btn btn-ghost">
                  View Current Projects
                </Link>
              </div>
            </div>

            {/* Right Column: Premium Auto Slider */}
            <div className="hero-slider-container">
              {slides.map((src, index) => (
                <div
                  key={src}
                  className={`hero-slide${index === currentSlide ? " active" : ""}`}
                  style={{ backgroundImage: `url(${src})` }}
                >
                  <div className="hero-slide-overlay" />
                </div>
              ))}
            </div>
          </div>

          <div className="coord-strip">
            <div className="coord-item">
              <div className="num">3</div>
              <div className="label">New Projects · Sikar Corridor</div>
            </div>
            <div className="coord-item">
              <div className="num">11%</div>
              <div className="label">Registry Rate</div>
            </div>
            <div className="coord-item">
              <div className="num">₹8L–48L</div>
              <div className="label">Price Range</div>
            </div>
            <div className="coord-item">
              <div className="num">1 Yr</div>
              <div className="label">No-Interest Plan</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── ABOUT / PARCELS ── */}
      <section className="about">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// What We Handle</div>
            <h2>Three plot categories, one point of contact.</h2>
            <p>
              Every listing is checked before it reaches you — clear title,
              approved layout, and a straight path to registry.
            </p>
          </div>
          <div className="parcel-grid">
            <div className="parcel">
              <div className="parcel-id">PARCEL / 01</div>
              <h3>Residential Plots</h3>
              <p>
                Open plots in developing sectors, priced from ₹8L, with flexible
                1-year no-interest payment plans.
              </p>
            </div>
            <div className="parcel">
              <div className="parcel-id">PARCEL / 02</div>
              <h3>Commercial Approved Property</h3>
              <p>
                Shop and office plots with clear commercial approval — ready for
                construction or resale.
              </p>
            </div>
            <div className="parcel">
              <div className="parcel-id">PARCEL / 03</div>
              <h3>Smart City Sector Land</h3>
              <p>
                Early-stage plots inside planned development
                corridors, positioned for long-term appreciation.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "36px" }}>
            <Link
              href="/about"
              className="btn btn-ghost"
              style={{ borderColor: "var(--sage)", color: "var(--sage)" }}
            >
              More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ── */}
      <section className="project-gallery-section">
        <div className="section-inner">
          <div className="section-head" style={{ textAlign: "center", maxWidth: "100%" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>// Featured Projects</div>
            <h2>Gallery</h2>
            <p>A glimpse of the layouts, streets, and spaces we offer.</p>
          </div>

          <div className="image-gallery-grid">
            <div className="gallery-card">
              <div className="gallery-img-wrapper">
                <img
                  src="/project-gellery/1.jpg"
                  alt="Residential plot with green boundary"
                />
              </div>
              <div className="gallery-info">
                <h4>Green Boundary Plots</h4>
                <p>Wide open residential parcels demarcated with lush trees and paths.</p>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-img-wrapper">
                <img
                  src="/project-gellery/2.jpg"
                  alt="Corner commercial plot view"
                />
              </div>
              <div className="gallery-info">
                <h4>Commercial Corner Units</h4>
                <p>High-visibility corner plots optimized for retail business and offices.</p>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-img-wrapper">
                <img
                  src="/project-gellery/8.jpg"
                  alt="Wide street in a residential layout"
                />
              </div>
              <div className="gallery-info">
                <h4>Paved Arterial Roads</h4>
                <p>Wide, concrete internal roads featuring modern streetlights.</p>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-img-wrapper">
                <img
                  src="/project-gellery/7.jpg"
                  alt="Clear demarcated plots"
                />
              </div>
              <div className="gallery-info">
                <h4>Precise Plot Boundaries</h4>
                <p>Every single plot is professionally measured, numbered, and demarcated.</p>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-img-wrapper">
                <img
                  src="/project-gellery/6.jpg"
                  alt="Premium plotted community"
                />
              </div>
              <div className="gallery-info">
                <h4>Gated Development Layouts</h4>
                <p>Secured gated entrance and planned green belts surrounding the township.</p>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-img-wrapper">
                <img
                  src="/project-gellery/9.jpg"
                  alt="Entrance view of the development"
                />
              </div>
              <div className="gallery-info">
                <h4>Grand Entrance Arch</h4>
                <p>Impressive entry gateway with round-the-clock security cabin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Current Listings</div>
            <h2>3 new projects, open now in Sikar &amp; Jaipur.</h2>
          </div>
          <div className="project-list">
            <Link href="/nexxus-city" className="project-row" style={{ textDecoration: 'none' }}>
              <div className="pnum mono">A</div>
              <div>
                <div className="pname">Nexxus City</div>
                <div className="pmeta">From ₹8L · Plot only · 1 year no-interest plan · NH-11 Sikar</div>
              </div>
              <div className="pstatus">Open for booking</div>
            </Link>
            <Link href="/Saanwariya-City" className="project-row" style={{ textDecoration: 'none' }}>
              <div className="pnum mono">B</div>
              <div>
                <div className="pname">Saanwariya City</div>
                <div className="pmeta">₹14L – ₹16L · Aloda-Palsana Road · RIICO Industrial area proximity</div>
              </div>
              <div className="pstatus">Few units left</div>
            </Link>
            <Link href="/shri-shyam-colony" className="project-row" style={{ textDecoration: 'none' }}>
              <div className="pnum mono">C</div>
              <div>
                <div className="pname">Shri Shyam Colony</div>
                <div className="pmeta">₹12L – ₹28L · Prime location near Khatu Shyam Temple · 11% registry</div>
              </div>
              <div className="pstatus">Open for booking</div>
            </Link>
          </div>
          <div style={{ marginTop: "36px" }}>
            <Link href="/projects" className="btn btn-ghost">
              See All Project Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="stats-section">
        <div className="section-inner">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-num">12+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">500+</div>
              <div className="stat-label">Plots Sold</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">₹0</div>
              <div className="stat-label">Hidden Charges</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section">
        <div className="section-inner">
          <div className="section-head" style={{ textAlign: "center", maxWidth: "100%" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>
              // Meet the Team
            </div>
            <h2>People you can trust with your investment.</h2>
            <p>
              Our team brings together legal expertise, market knowledge, and
              on-ground experience in Rajasthan's property landscape.
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((m) => (
              <div key={m.id} className="team-card">
                <div
                  className="team-avatar"
                  style={{ background: m.color }}
                >
                  {m.initials}
                </div>
                <div className="team-info">
                  <h3 className="team-name">{m.name}</h3>
                  <div className="team-role">{m.role}</div>
                  <p className="team-bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className="blogs-section">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Insights &amp; Updates</div>
            <h2>Latest from our blog.</h2>
            <p>
              Market trends, buyer guides, and investment insights from Rajasthan's
              real estate landscape.
            </p>
          </div>
          <div className="blog-grid">
            {blogs.map((b) => (
              <article key={b.id} className="blog-card">
                <div className="blog-tag">{b.tag}</div>
                <h3 className="blog-title">{b.title}</h3>
                <p className="blog-excerpt">{b.excerpt}</p>
                <div className="blog-meta">
                  <span>{b.date}</span>
                  <span className="blog-dot">·</span>
                  <span>{b.readTime}</span>
                </div>
                <Link href="/contact" className="blog-read-more">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="faq-section">
        <div className="section-inner">
          <div className="section-head" style={{ textAlign: "center", maxWidth: "100%" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>
              // Common Questions
            </div>
            <h2>Frequently asked questions.</h2>
            <p>
              Everything you need to know before buying a plot.
            </p>
          </div>
          <div className="faq-grid">
            {faqs.map((f, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">
                  <span>{f.q}</span>
                  <span className="faq-chevron">↓</span>
                </summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="contact" style={{ paddingBottom: "70px" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div
            className="section-tag"
            style={{ color: "var(--brass-bright)", justifyContent: "center" }}
          >
            // Ready To Talk?
          </div>
          <h2 style={{ marginTop: "14px" }}>
            Let's find the right plot for your budget.
          </h2>
          <div style={{ marginTop: "30px" }}>
            <Link href="/contact" className="btn btn-primary">
              Contact Nexus Properties
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}