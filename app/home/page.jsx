import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

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
                <div className="pmeta">
                  From ₹8L · Plot only · 1 year no-interest plan
                </div>
              </div>
              <div className="pstatus">Open for booking</div>
            </div>
            <div className="project-row">
              <div className="pnum mono">B</div>
              <div>
                <div className="pname">Commercial Approved Corner Plots</div>
                <div className="pmeta">
                  ₹14L – ₹16L · Approved commercial layout
                </div>
              </div>
              <div className="pstatus">Few units left</div>
            </div>
            <div className="project-row">
              <div className="pnum mono">C</div>
              <div>
                <div className="pname">Premium Sector Plots</div>
                <div className="pmeta">
                  ₹48L · Prime location · 11% registry
                </div>
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

      <section className="contact" style={{ paddingBottom: "70px" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div
            className="section-tag"
            style={{
              color: "var(--brass-bright)",
              justifyContent: "center",
            }}
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