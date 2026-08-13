"use client";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks — we will contact you shortly.");
  }

  return (
    <>
      <Header />

      <section className="contact" style={{ paddingTop: "100px" }}>
        <div className="section-inner contact-grid">
          <div>
            <div
              className="section-tag"
              style={{ color: "var(--brass-bright)" }}
            >
              // Get In Touch
            </div>
            <h2>Talk to Nexus Properties.</h2>
            <p
              style={{
                marginTop: "14px",
                color: "rgba(243,237,225,0.75)",
              }}
            >
              Tell us your budget and preferred sector — we'll match you with
              plots that fit.
            </p>
            <div className="contact-info">
              <div>
                <div className="ci-label">Phone</div>
                <div className="ci-value">+91 XXXXX XXXXX</div>
              </div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-value">contact@nexusproperties.in</div>
              </div>
              <div>
                <div className="ci-label">Office</div>
                <div className="ci-value">Jaipur, Rajasthan</div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="interest">Interested In</label>
              <select id="interest" defaultValue="Residential Plot">
                <option>Residential Plot</option>
                <option>Commercial Approved Property</option>
                <option>Smart City Sector Plot</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="msg">Message</label>
              <textarea
                id="msg"
                placeholder="Your budget, preferred location, or any questions"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}