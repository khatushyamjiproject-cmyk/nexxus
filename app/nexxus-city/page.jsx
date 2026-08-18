import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const locationHighlights = [
  { title: "Location Map", desc: "Nexxus City detailed layout and location map", src: "/nexxus-project/Nexxus City - Location Map.jpg" },
  { title: "Khatu Shyam Temple", desc: "Just a quick 7-minute drive to the holy temple", src: "/nexxus-project/khatu-shyam-temple-(7-minute-drive).jpg" },
  { title: "National Highway 11", desc: "Conveniently situated right on NH-11 Sikar", src: "/nexxus-project/NATIONAL HIGHWAY NO.11.jpg" },
  { title: "National Highway 8", desc: "Direct connectivity to NH-8", src: "/nexxus-project/NATIONAL HIGHWAY NO.8.jpg" },
  { title: "Petrol Pump", desc: "Located at 0 kilometers for easy refueling", src: "/nexxus-project/PETROL PUMP - 0 kilometer.jpg" },
  { title: "Palsana Railway Station", desc: "Just a 7-minute drive away", src: "/nexxus-project/PALSANA RAILWAY STATION - 7 minute drive.jpg" },
  { title: "Singhania College", desc: "Quality higher education within a 10-minute drive", src: "/nexxus-project/SINGHANIA COLLEGE -10 minutes drive.jpg" },
  { title: "ATM Station", desc: "Banking convenience just a 6-minute drive away", src: "/nexxus-project/ATM STATION- 6 minute drive.jpg" },
  { title: "Bharon Baba Temple", desc: "Spiritual sanctuary located just 8 minutes away", src: "/nexxus-project/BHARON BABA TEMPLE - 8 minute drive.jpg" },
  { title: "Palsana Wholesale Market", desc: "Daily needs and business wholesale hub just 8 minutes away", src: "/nexxus-project/PALSANA WHOLESALE MARKET- 8 minutes drive.jpg" },
];

const features = [
  { title: "Pollution-Free", desc: "Lush green corridors and zero-pollution atmosphere." },
  { title: "Vastu Friendly", desc: "Layout designs aligned with traditional Vastu guidelines." },
  { title: "Well-Lighted Roads", desc: "Wide internal roads equipped with modern LED solar streetlights." },
  { title: "Green Belts", desc: "Dedicated parks, jogging tracks, and open play spaces." },
  { title: "24/7 Security", desc: "Integrated guard cabins, gated entry, and safety patrolling." },
  { title: "Horticulture", desc: "Heavy plantation selected and designed by local specialists." },
  { title: "Commercial Zone", desc: "Dedicated shopping space within the colony for daily essentials." },
  { title: "Water & Power", desc: "Reliable electricity grids and permanent drinking water supply connections." },
];

const plots = [
  { size: "100 Sq. Yards", desc: "Ideal for cozy residential villas", status: "Available" },
  { size: "150 Sq. Yards", desc: "Perfect size for standard family homes", status: "Available" },
  { size: "200 Sq. Yards", desc: "Excellent layout with spacious parking", status: "Available" },
  { size: "300 Sq. Yards", desc: "Premium corner plot layouts", status: "Available" },
  { size: "400 Sq. Yards", desc: "Large residential / mixed-use layout", status: "Available" },
  { size: "500 Sq. Yards", desc: "Ideal for luxury farmhouses and gardens", status: "Available" },
  { size: "600 Sq. Yards", desc: "Ultra-premium corner layout", status: "Available" },
  { size: "700 Sq. Yards", desc: "Grand residential estate option", status: "Available" },
];

export default function NexxusCity() {
  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <header className="hero" style={{ padding: "100px 24px 70px" }}>
        <span className="corner-pin cp-tl"></span>
        <span className="corner-pin cp-tr"></span>
        <div className="hero-inner">
          <div className="eyebrow">Premium Plotted Township</div>
          <h1 style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)" }}>
            Nexxus City — Near Khatu Shyam Ji
          </h1>
          <p className="lead">
            A government-approved residential site located directly on NH-11 Sikar, offering premium designer plots and farmhouses just 10 minutes from the holy Khatu Shyam Ji Temple.
          </p>
        </div>
      </header>

      {/* ── DETAILS ── */}
      <section className="about">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Overview</div>
            <h2>Premium features, immediate registry.</h2>
            <p style={{ marginTop: "14px", color: "var(--gray-600)" }}>
              Nexxus City is a fully planned township equipped with top-tier civic infrastructure. As a 100% approved residential development project, buyers can complete immediate land registries and begin construction on their dream villas or premium designer farmhouses.
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
            <div className="section-tag">// Available Parcels</div>
            <h2>Plots Availability &amp; Sizes</h2>
            <p>Select from our pre-demarcated plot ranges configured for immediate ownership.</p>
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
                      <span className={`status-badge ${p.status.toLowerCase()}`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── LOCATION HIGHLIGHTS GALLERY ── */}
      <section className="projects" style={{ background: "var(--off-white)" }}>
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Proximity &amp; Connectivity</div>
            <h2>Township Gallery &amp; Location Map</h2>
            <p>Every convenience is at your doorstep. Browse nearby infrastructures and drive-times.</p>
          </div>

          <div className="image-gallery-grid">
            {locationHighlights.map((lh, i) => (
              <div className="gallery-card" key={i}>
                <div className="gallery-img-wrapper">
                  <img src={lh.src} alt={lh.title} />
                </div>
                <div className="gallery-info">
                  <h4>{lh.title}</h4>
                  <p>{lh.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── bottom CTA ── */}
      <section className="contact" style={{ paddingBottom: "70px" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="section-tag" style={{ color: "var(--brass-bright)", justifyContent: "center" }}>
            // Schedule a visit
          </div>
          <h2 style={{ marginTop: "14px" }}>
            Interested in Nexxus City? Book a free guided site tour today.
          </h2>
          <div style={{ marginTop: "30px" }}>
            <Link href="/contact" className="btn btn-primary">
              Enquire &amp; Book Tour
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}