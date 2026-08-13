import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Projects() {
  return (
    <>
      <Header />

      <header className="hero" style={{ padding: "80px 24px 60px" }}>
        <span className="corner-pin cp-tl"></span>
        <span className="corner-pin cp-tr"></span>
        <div className="hero-inner">
          <div className="eyebrow">Current Listings · Jaipur</div>
          <h1 style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)" }}>
            3 new projects, open now.
          </h1>
          <p className="lead">
            Each listing below includes price, plot type, and payment terms so
            you can shortlist before your first site visit.
          </p>
        </div>
      </header>

      <section className="about">
        <div className="section-inner">
          <div className="project-detail">
            <div className="pd-head">
              <div>
                <div className="parcel-id">PROJECT / A</div>
                <h3>Smart City Residential Plots</h3>
              </div>
              <div className="pstatus">Open for booking</div>
            </div>
            <p style={{ marginTop: "14px", color: "#4a5049" }}>
              Residential plots inside Jaipur's Smart City development
              corridor — an early entry point into a sector positioned for
              long-term growth.
            </p>
            <div className="pd-facts">
              <div>
                <div className="fk">Price</div>
                <div className="fv">From ₹8L</div>
              </div>
              <div>
                <div className="fk">Type</div>
                <div className="fv">Plot only</div>
              </div>
              <div>
                <div className="fk">Payment</div>
                <div className="fv">1yr no-interest</div>
              </div>
              <div>
                <div className="fk">Registry</div>
                <div className="fv">11%</div>
              </div>
            </div>
          </div>

          <div className="project-detail">
            <div className="pd-head">
              <div>
                <div className="parcel-id">PROJECT / B</div>
                <h3>Commercial Approved Corner Plots</h3>
              </div>
              <div className="pstatus">Few units left</div>
            </div>
            <p style={{ marginTop: "14px", color: "#4a5049" }}>
              Corner plots with approved commercial layout — suited for retail,
              office, or mixed-use construction.
            </p>
            <div className="pd-facts">
              <div>
                <div className="fk">Price</div>
                <div className="fv">₹14L – ₹16L</div>
              </div>
              <div>
                <div className="fk">Type</div>
                <div className="fv">Commercial approved</div>
              </div>
              <div>
                <div className="fk">Payment</div>
                <div className="fv">On request</div>
              </div>
              <div>
                <div className="fk">Registry</div>
                <div className="fv">11%</div>
              </div>
            </div>
          </div>

          <div className="project-detail">
            <div className="pd-head">
              <div>
                <div className="parcel-id">PROJECT / C</div>
                <h3>Premium Sector Plots</h3>
              </div>
              <div className="pstatus">Open for booking</div>
            </div>
            <p style={{ marginTop: "14px", color: "#4a5049" }}>
              Prime-location plots in an established sector, for buyers looking
              for a straightforward, high-value purchase.
            </p>
            <div className="pd-facts">
              <div>
                <div className="fk">Price</div>
                <div className="fv">₹48L</div>
              </div>
              <div>
                <div className="fk">Type</div>
                <div className="fv">Plot only</div>
              </div>
              <div>
                <div className="fk">Payment</div>
                <div className="fv">On request</div>
              </div>
              <div>
                <div className="fk">Registry</div>
                <div className="fv">11%</div>
              </div>
            </div>
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
            // Not Sure Which One Fits?
          </div>
          <h2 style={{ marginTop: "14px" }}>
            Tell us your budget — we'll shortlist for you.
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