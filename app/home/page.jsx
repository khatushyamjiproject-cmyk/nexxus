import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

/* ── static data ── */
const teamMembers = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    bio: "15+ years in Jaipur real estate. Expert in Smart City corridors and plot valuation.",
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
      "Infrastructure investment, metro expansion, and DMIC alignment are driving land appreciation across Jaipur's western sectors.",
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
      "A data-driven comparison of price appreciation, rental yield, and liquidity for both plot categories in Jaipur.",
    date: "Jul 10, 2026",
    readTime: "5 min read",
  },
];

const faqs = [
  {
    q: "What documents should I check before buying a plot in Jaipur?",
    a: "You should verify the Jamabandi (record of rights), Khasra/Khatoni numbers, Nagar Nigam or JDA approval layout, No Objection Certificate (NOC), and the seller's ownership chain. Our legal team reviews all of these before listing any property.",
  },
  {
    q: "What is the current registry rate in Jaipur?",
    a: "The stamp duty and registration fee in Rajasthan is approximately 11% of the circle rate or agreement value (whichever is higher). This includes 6% stamp duty, 1% registration fee, and other surcharges. We provide transparent, upfront disclosure on all our listings.",
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
    a: "JDA (Jaipur Development Authority) approval means the layout plan is sanctioned by the local body. RERA registration is mandatory for developers selling more than 8 plots or above 500 sq m. We clarify the exact regulatory status for each listing.",
  },
  {
    q: "How long does the registry process take?",
    a: "Once all documents are in order, the registry typically completes within 7–15 working days. Our legal team coordinates with the Sub-Registrar office and guides you through every step.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <header className="hero">
        <span className="corner-pin cp-tl"></span>
        <span className="corner-pin cp-tr"></span>
        <div className="hero-inner">
          <div className="eyebrow">Jaipur · Plots &amp; Commercial Property</div>
          <h1>
            Land and property deals, <em>surveyed and settled</em> for you.
          </h1>
          <p className="lead">
            Nexus Properties helps you find, evaluate, and close residential
            plots and approved commercial property across Jaipur's
            fastest-growing sectors — including Smart City zones.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary">
              Get a Property Match
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              View Current Projects
            </Link>
          </div>
          <div className="coord-strip">
            <div className="coord-item">
              <div className="num">3</div>
              <div className="label">New Projects · Jaipur</div>
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
                Early-stage plots inside Jaipur's Smart City development
                corridor, positioned for long-term appreciation.
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

      {/* ── PROJECTS ── */}
      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Current Listings</div>
            <h2>3 new projects, open now in Jaipur.</h2>
          </div>
          <div className="project-list">
            <div className="project-row">
              <div className="pnum mono">A</div>
              <div>
                <div className="pname">Smart City Residential Plots</div>
                <div className="pmeta">From ₹8L · Plot only · 1 year no-interest plan</div>
              </div>
              <div className="pstatus">Open for booking</div>
            </div>
            <div className="project-row">
              <div className="pnum mono">B</div>
              <div>
                <div className="pname">Commercial Approved Corner Plots</div>
                <div className="pmeta">₹14L – ₹16L · Approved commercial layout</div>
              </div>
              <div className="pstatus">Few units left</div>
            </div>
            <div className="project-row">
              <div className="pnum mono">C</div>
              <div>
                <div className="pname">Premium Sector Plots</div>
                <div className="pmeta">₹48L · Prime location · 11% registry</div>
              </div>
              <div className="pstatus">Open for booking</div>
            </div>
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
              on-ground experience in Jaipur's property landscape.
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
              Market trends, buyer guides, and investment insights from Jaipur's
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
              Everything you need to know before buying a plot in Jaipur.
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