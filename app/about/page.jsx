import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <header className="hero" style={{ padding: "80px 24px 60px" }}>
        <span className="corner-pin cp-tl"></span>
        <span className="corner-pin cp-tr"></span>
        <div className="hero-inner">
          <div className="eyebrow">About Nexus Properties</div>
          <h1 style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)" }}>
            One point of contact for plots and property in Jaipur.
          </h1>
          <p className="lead">
            We help buyers and investors navigate residential plots, approved
            commercial property, and Smart City sector land — with verified
            titles and transparent terms at every step.
          </p>
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
        </div>
      </section>

      <section className="terms">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-tag">// Why Nexus</div>
            <h2>Straightforward terms, start to finish.</h2>
          </div>
          <div className="terms-grid">
            <div className="term-card">
              <div className="t-num mono">01</div>
              <h4>Verified Title</h4>
              <p>
                Every plot is checked for clear ownership before it's listed.
              </p>
            </div>
            <div className="term-card">
              <div className="t-num mono">02</div>
              <h4>11% Registry</h4>
              <p>
                Transparent, fixed registry rate — no hidden charges at closing.
              </p>
            </div>
            <div className="term-card">
              <div className="t-num mono">03</div>
              <h4>No-Interest Plan</h4>
              <p>
                Spread payments over 1 year with zero interest on select plots.
              </p>
            </div>
            <div className="term-card">
              <div className="t-num mono">04</div>
              <h4>Site Visits</h4>
              <p>
                We arrange guided visits so you see the plot before you decide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" style={{ paddingBottom: "70px" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div
            className="section-tag"
            style={{ justifyContent: "center" }}
          >
            // Explore Further
          </div>
          <h2 style={{ marginTop: "14px" }}>See what's currently open.</h2>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/projects"
              className="btn btn-primary"
              style={{
                background: "var(--blueprint)",
                color: "var(--parchment)",
              }}
            >
              View Current Projects
            </Link>
            <Link
              href="/contact"
              className="btn btn-ghost"
              style={{
                borderColor: "var(--blueprint)",
                color: "var(--blueprint)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}