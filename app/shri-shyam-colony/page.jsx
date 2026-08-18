import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const features = [
  { title: "Strategic Proximity", desc: "Located on Aloda-Palsana Road, with close proximity to Khatu Shyam Ji temple." },
  { title: "Modern Sanitation", desc: "Premium sewage grids, separate storm drainage, and water networks." },
  { title: "Concrete Roadways", desc: "Wide cement-concrete internal avenues built to withstand heavy rains." },
  { title: "Reliable Grid", desc: "Stable electricity layout with safety cabling and transformer setups." },
  { title: "Secure Living", desc: "Gated entry, regular community patrol, and 3-tier security systems." },
  { title: "Lush Greenery", desc: "Dedicated open green zones and landscaped parks for families." },
  { title: "Horticulture Focus", desc: "Wide tree borders and decorative plantations matching local environment." },
  { title: "Daily Convenience", desc: "Within walking distance of essential local markets and transport links." },
];

const plots = [
  { size: "100 Sq. Yards", status: "Available", desc: "Excellent residential investment size" },
  { size: "150 Sq. Yards", status: "Available", desc: "Ideal for comfortable family residency" },
  { size: "200 Sq. Yards", status: "Available", desc: "Spacious villa plot layout" },
  { size: "300 Sq. Yards", status: "Available", desc: "Premium spacious parcel with wide road front" },
  { size: "400 Sq. Yards", status: "Available", desc: "Double frontage or corner property layouts" },
  { size: "500 Sq. Yards", status: "Available", desc: "Perfect for large homes and courtyard layouts" },
  { size: "600 Sq. Yards", status: "Available", desc: "Luxury farmhouse scale property" },
  { size: "700 Sq. Yards", status: "Available", desc: "Ultimate size for custom luxury builds" },
];

export default function ShriShyamColony() {
  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <header className="hero" style={{ padding: "100px 24px 70px" }}>
        <span className="corner-pin cp-tl"></span>
        <span className="corner-pin cp-tr"></span>
        <div className="hero-inner">
          <div className="eyebrow">Planned Premium Colony</div>
          <h1 style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)" }}>
            Shri Shyam Colony — Sikar District
          </h1>
          <p className="lead">
            Spread across 25 bighas of prime property in the holy region of Khatu Shyam Ji. Developed to provide world-class amenities and clear registries.
          </p>
        </div>
      </header>

      {/* ── OVERVIEW ── */}
      <section className="about">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Modern Amenities</div>
            <h2>Planned infrastructure in a holy region.</h2>
            <p style={{ marginTop: "14px", color: "var(--gray-600)" }}>
              Shri Shyam Colony combines the peacefulness of spiritual living with modern infrastructure. Featuring fully concrete roads, 3-tier security, stable power grids, and pure drinking water connections, it is ready for immediate registry and construction.
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
            <div className="section-tag">// Plot Directory</div>
            <h2>Available Dimensions &amp; Status</h2>
            <p>Review the plot configurations available for immediate ownership.</p>
          </div>

          <div className="plots-table-wrapper">
            <table className="plots-table">
              <thead>
                <tr>
                  <th>Plot Size</th>
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

      {/* ── LAYOUT DOWNLOAD & MAP PREVIEW ── */}
      <section className="projects" style={{ background: "var(--off-white)" }}>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Colony Plans</div>
            <h2>Official Layout &amp; Map</h2>
            <p>Download the official colony layout PDF map or view the visual outline of the project.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginTop: "30px" }}>
            {/* Left: Map Preview */}
            <div style={{ background: "#fff", border: "1px solid var(--gray-200)", padding: "24px", borderRadius: "16px" }}>
              <h4 style={{ marginBottom: "16px", color: "var(--blueprint-deep)" }}>Visual Location Reference</h4>
              <div style={{ position: "relative", width: "100%", height: "300px", background: "#f8fafc", borderRadius: "8px", overflow: "hidden" }}>
                <img
                  src="/nexxus-project/Nexxus City - Location Map.jpg"
                  alt="Shri Shyam Colony Visual Layout Map"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Right: Layout PDF Info & Download Button */}
            <div style={{ background: "#fff", border: "1px solid var(--gray-200)", padding: "24px", borderRadius: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h4 style={{ marginBottom: "16px", color: "var(--blueprint-deep)" }}>Official Layout Document</h4>
                <p style={{ color: "var(--gray-600)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  The layout plan for Shri Shyam Colony has been officially drafted, detailed, and certified. You can download the layout document in PDF format to review all demarcations, road widths, and open spaces.
                </p>
                <div style={{ marginTop: "20px", display: "flex", gap: "10px", fontSize: "0.85rem", color: "var(--sage)" }}>
                  <span><strong>Format:</strong> PDF</span>
                  <span>•</span>
                  <span><strong>Size:</strong> 616 KB</span>
                </div>
              </div>

              <div style={{ marginTop: "30px" }}>
                <a
                  href="/nexxus-project/shri-shyam-layout.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: "inline-block", textAlign: "center", width: "100%" }}
                >
                  Download Layout PDF 📥
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="contact" style={{ paddingBottom: "70px" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="section-tag" style={{ color: "var(--brass-bright)", justifyContent: "center" }}>
            // Get in Touch
          </div>
          <h2 style={{ marginTop: "14px" }}>
            Have questions about pricing or payment structures?
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