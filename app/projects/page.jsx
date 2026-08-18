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
          <div className="eyebrow">Current Listings · Sikar &amp; Jaipur</div>
          <h1 style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)" }}>
            3 new projects, open now.
          </h1>
          <p className="lead">
            Each listing below includes price, plot type, and payment terms so
            you can shortlist before your first site visit. Click on any project to see detailed plans and galleries.
          </p>
        </div>
      </header>

      <section className="about">
        <div className="section-inner">
          {/* Project A */}
          <div className="project-detail">
            <div className="pd-head">
              <div>
                <div className="parcel-id">PROJECT / A</div>
                <h3>Nexxus City</h3>
              </div>
              <div className="pstatus">Open for booking</div>
            </div>
            <p style={{ marginTop: "14px", color: "#4a5049" }}>
              Residential plots inside the planned development corridor on NH-11 Sikar — an early entry point into a sector positioned for long-term growth.
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
            <div style={{ marginTop: "24px" }}>
              <Link href="/nexxus-city" className="btn btn-ghost" style={{ borderColor: "var(--blueprint)", color: "var(--blueprint)" }}>
                View Full Project Details &amp; Gallery →
              </Link>
            </div>
          </div>

          {/* Project B */}
          <div className="project-detail">
            <div className="pd-head">
              <div>
                <div className="parcel-id">PROJECT / B</div>
                <h3>Saanwariya City</h3>
              </div>
              <div className="pstatus">Few units left</div>
            </div>
            <p style={{ marginTop: "14px", color: "#4a5049" }}>
              Premium township on the famous Aloda-Palsana Road in Sikar. Distinguishing features include concrete roads, sewerage, and close proximity to the RIICO Industrial hub.
            </p>
            <div className="pd-facts">
              <div>
                <div className="fk">Price</div>
                <div className="fv">₹14L – ₹16L</div>
              </div>
              <div>
                <div className="fk">Type</div>
                <div className="fv">Approved township</div>
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
            <div style={{ marginTop: "24px" }}>
              <Link href="/Saanwariya-City" className="btn btn-ghost" style={{ borderColor: "var(--blueprint)", color: "var(--blueprint)" }}>
                View Full Project Details &amp; Gallery →
              </Link>
            </div>
          </div>

          {/* Project C */}
          <div className="project-detail">
            <div className="pd-head">
              <div>
                <div className="parcel-id">PROJECT / C</div>
                <h3>Shri Shyam Colony</h3>
              </div>
              <div className="pstatus">Open for booking</div>
            </div>
            <p style={{ marginTop: "14px", color: "#4a5049" }}>
              Prime-location plots in an established sector close to Baba Khatu Shyam temple, ideal for buyers looking for a straightforward, high-value purchase.
            </p>
            <div className="pd-facts">
              <div>
                <div className="fk">Price</div>
                <div className="fv">₹12L – ₹28L</div>
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
            <div style={{ marginTop: "24px" }}>
              <Link href="/shri-shyam-colony" className="btn btn-ghost" style={{ borderColor: "var(--blueprint)", color: "var(--blueprint)" }}>
                View Full Project Details &amp; Layout →
              </Link>
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