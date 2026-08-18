import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const features = [
  { title: "Divine Location", desc: "Located in Khatu Shyam Baba area with high religious sentiments." },
  { title: "Industrial Proximity", desc: "Close to Palsana RIICO Industrial Area — a fast-growing commercial hub." },
  { title: "Infrastructure", desc: "Heavy-duty cement-concrete roads, planned drainage, and secure sewerage." },
  { title: "Expressway Corridor", desc: "Positioned near the DMIC & New Delhi - Jaipur Expressway corridor." },
  { title: "3-Tier Security", desc: "Advanced round-the-clock safety gates, guards, and CCTV surveillance." },
  { title: "Convenience Grid", desc: "Rapidly developing school, college, bank, ATM, and petrol pump infrastructure." },
  { title: "Spiritual Harmony", desc: "A peaceful residential environment offering a spiritual living experience." },
  { title: "Pollution-Free", desc: "Ample green belt landscaping to ensure clean air and absolute tranquility." },
];

const plots = [
  { size: "100 Sq. Yards", status: "Available", desc: "Ideal starter plot" },
  { size: "150 Sq. Yards", status: "Available", desc: "Mid-sized residential plot" },
  { size: "200 Sq. Yards", status: "Available", desc: "Generous residential spacing" },
  { size: "300 Sq. Yards", status: "Available", desc: "Ideal corner property size" },
  { size: "400 Sq. Yards", status: "Available", desc: "Suitable for multi-story residential construction" },
  { size: "500 Sq. Yards", status: "Available", desc: "Ideal for large family homes with lawn space" },
  { size: "600 Sq. Yards", status: "Available", desc: "Premium corner plot size" },
  { size: "700 Sq. Yards", status: "Available", desc: "Estate plots for luxury mansions" },
];

export default function SaanwariyaCity() {
  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <header className="hero" style={{ padding: "100px 24px 70px" }}>
        <span className="corner-pin cp-tl"></span>
        <span className="corner-pin cp-tr"></span>
        <div className="hero-inner">
          <div className="eyebrow">Self-Contained Township</div>
          <h1 style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)" }}>
            Saanwariya City — Khatu Shyam Ji
          </h1>
          <p className="lead">
            Spread over 40 bighas of premium land on the Aloda-Palsana Road in Sikar. A well-coordinated development combining residential comfort with proximity to key industrial zones.
          </p>
        </div>
      </header>

      {/* ── DESCRIPTION ── */}
      <section className="about">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Strategic Development</div>
            <h2>Premium design meets spiritual peace.</h2>
            <p style={{ marginTop: "14px", color: "var(--gray-600)" }}>
              Developed in collaboration with Nexxus Homz, Saanwariya City offers the best of both worlds: ultra-modern infrastructure with cement-concrete roads, drainage, water supply, and a pollution-free environment, situated in the holy land of Baba Khatu Shyam.
            </p>
          </div>

          <div className="key-features-grid">
            {features.map((f, i) => (
              <div className="feature-item" key={i}>
                <h4>
                  <span style={{ color: "var(--brass)", fontWeight: "bold" }}>✦</span> {f.title}
                </h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLOTS TABLE ── */}
      <section className="projects" style={{ background: "var(--white)", borderBottom: "1px solid var(--gray-200)" }}>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Availability Matrix</div>
            <h2>Pre-demarcated Plots &amp; Status</h2>
            <p>Review the standard residential plots sizes available at Saanwariya City.</p>
          </div>

          <div className="plots-table-wrapper">
            <table className="plots-table">
              <thead>
                <tr>
                  <th>Plot Dimension</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {plots.map((p, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: "600", color: "var(--blueprint-deep)" }}>{p.size}</td>
                    <td>{p.desc}</td>
                    <td>
                      <span className="status-badge available">{p.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PROJECT PRESENTATION & MEDIA ── */}
      <section className="projects" style={{ background: "var(--off-white)" }}>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Presentation &amp; Layout</div>
            <h2>Interactive Plan &amp; Gallery</h2>
            <p>Take a closer look at our project layouts, design plans, and development structures.</p>
          </div>

          <div style={{ marginTop: "30px", background: "#fff", border: "1px solid var(--gray-200)", padding: "20px", borderRadius: "16px", overflow: "hidden" }}>
            <h4 style={{ marginBottom: "16px", color: "var(--blueprint-deep)" }}>Township Plan Preview</h4>
            <div style={{ position: "relative", width: "100%", height: "450px", background: "#f8fafc", borderRadius: "8px", overflow: "hidden" }}>
              {/* Use location map from nexxus-project as visual reference for the township layout */}
              <img
                src="/nexxus-project/Nexxus City - Location Map.jpg"
                alt="Saanwariya City Township Location Map"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="image-gallery-grid" style={{ marginTop: "40px" }}>
            <div className="gallery-card">
              <div className="gallery-img-wrapper">
                <img src="/project-gellery/1.jpg" alt="Saanwariya City green landscape" />
              </div>
              <div className="gallery-info">
                <h4>Plot Boundaries</h4>
                <p>Wide streets bordered by plantation and walking pathways.</p>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-img-wrapper">
                <img src="/project-gellery/2.jpg" alt="Commercial sector" />
              </div>
              <div className="gallery-info">
                <h4>Commercial Zone</h4>
                <p>Strategically positioned plot spaces close to the entry road.</p>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-img-wrapper">
                <img src="/project-gellery/6.jpg" alt="Township Security Gate" />
              </div>
              <div className="gallery-info">
                <h4>Civic Amenities</h4>
                <p>Concrete roads, modern drainage channels, and security lines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="contact" style={{ paddingBottom: "70px" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="section-tag" style={{ color: "var(--brass-bright)", justifyContent: "center" }}>
            // Invest Today
          </div>
          <h2 style={{ marginTop: "14px" }}>
            Ready to secure your plot in Saanwariya City?
          </h2>
          <div style={{ marginTop: "30px" }}>
            <Link href="/contact" className="btn btn-primary">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}