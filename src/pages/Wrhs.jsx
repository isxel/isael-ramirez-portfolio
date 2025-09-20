import React from "react";
import wrhsLogo from "../assets/wellrockHSGreyLogo.jpg";
import wrhsLogoBreakdown from "../assets/wrhsLogoBreakdown.jpg";
import wrhsHero from "../assets/wrhsHero.png";
import wrhsLeadForm from "../assets/wrhsLeadForm.jpg";
import wrhsService from "../assets/wrhsService.jpg";
import wrhsAnalytics from "../assets/wrhsAnalytics.jpg";
import wrhsFacebookPage from "../assets/wrhsFacebookPage.jpg";
import wrhsFacebookEngagement from "../assets/wrhsFacebookEngagement.jpg";
import wrhsFacebookAnalytics from "../assets/wrhsFacebookAnalytics.jpg";
const Wrhs = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">Wellrock Home Solutions</h1>
      <h3 className="project-subheading">
        Family-founded cabinetry & countertop business — helping local
        homeowners design kitchens they love.
      </h3>
      <h3 className="project-secondary-description">
        I joined Wellrock at launch to help establish its brand presence and
        streamline early operations. I led the design of the company logo, color
        palette, and visual identity, built a Wix-based marketing site with
        on-page SEO, and developed tools for quoting and client communication.
        This work built credibility with local homeowners and enabled the team
        to capture and manage leads more efficiently.
      </h3>
      <h2 className="project-subtitle">Context</h2>
      <ul className="experience-list">
        <li>
          <b>Goal:</b> Build credibility, capture leads, and codify pricing/ops
          for early-stage growth.
        </li>
        <li>
          <b>Role:</b> Marketing & Operations Coordinator (solo contributor,
          cross-functional with family team)
        </li>
        <li>
          <b>Timeline:</b> Mar 2024 – Present
        </li>
        <li>
          <b>Scope:</b> Brand identity & social presence Website (Wix) + SEO
          (on-page + JSON-LD) Content/blog strategy + analytics setup Quote
          generator (Google Sheets) Light PR/outreach & customer testimonials
        </li>
      </ul>

      <h2 className="project-subtitle">Brand & Visual Identity</h2>
      <h3 className="project-secondary-title">What I did</h3>
      <ul className="experience-list">
        <li>
          Designed logo, color palette, and typography for a trustworthy,
          local-service feel.
        </li>
        <li>
          Built a lightweight brand kit for consistent use across site, quotes,
          and social.
        </li>
      </ul>
      <div className="project-image-container">
        <img src={wrhsLogo} alt="wrhs logo" className="page-image"></img>
        <img
          src={wrhsLogoBreakdown}
          alt="wrhs logo breakdown"
          className="page-image"
        ></img>
      </div>
      <h2 className="project-subtitle">
        Website (Wix) &amp; Landing Experience
      </h2>
      <h3 className="project-secondary-title">What I did</h3>

      <div className="two-col">
        {/* Left: What I did */}
        <div className="col">
          <ul className="experience-sublist">
            <li>
              Launched a responsive Wix site with clear service pages, FAQs, and
              a concise inquiry form.
            </li>
            <li>
              Wrote focused copy using a <br></br>
              <strong>problem → solution → proof → action</strong> flow.
            </li>
          </ul>

          <div className="note-cards">
            <div className="note-card">
              <h4>Accessibility</h4>
              <ul>
                <li>Alt text on key images & icons</li>
                <li>Contrast-safe color choices</li>
                <li>Readable type sizes/line-height</li>
              </ul>
            </div>
            <div className="note-card">
              <h4>Performance</h4>
              <ul>
                <li>Compressed media (JPG/WebP, MP4)</li>
                <li>Image dimensions set to avoid CLS</li>
                <li>Wix image CDN & lazy loading where possible</li>
              </ul>
            </div>
            <div className="note-card">
              <h4>Analytics & Tracking</h4>

              <ul>
                <li>Connected Google Analytics & Search Console</li>
                <li>Tracked lead form submissions</li>
                <li>Monitored traffic growth and top-performing pages</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Key screenshots */}
        <div className="col">
          <div className="key-shots">
            <figure className="shot">
              <img src={wrhsHero} alt="Wix homepage hero and primary CTA" />
              <figcaption>Homepage hero & primary CTA</figcaption>
            </figure>
            <figure className="shot">
              <img
                src={wrhsService}
                alt="Services page layout with value props"
              />
              <figcaption>Services page layout</figcaption>
            </figure>
            <figure className="shot">
              <img
                src={wrhsLeadForm}
                alt="Inquiry form with required fields and consent"
              />
              <figcaption>Lead form / CTA section</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <h2 className="project-subtitle">SEO & Schema (JSON-LD)</h2>
      <h3 className="project-secondary-title">What I did</h3>

      <div className="two-col">
        {/* Left: What I did + Impact */}
        <div className="col">
          <ul className="experience-sublist">
            <li>On-page SEO: titles, meta, headings, internal links.</li>
            <li>Local SEO: service-area cues &amp; NAP consistency.</li>
            <li>
              Implemented JSON-LD (<strong>LocalBusiness</strong> +{" "}
              <strong>Service</strong>).
            </li>
            <li>
              Connected Bing Webmaster Tools (+ GA); reviewed queries/coverage.
            </li>
          </ul>

          <h3 className="project-secondary-title">Impact</h3>
          <ul className="experience-sublist">
            <li>+533% impressions in 30 days</li>
            <li>
              Queries shifted toward intent terms like “kitchen remodel round
              rock”
            </li>
          </ul>
          <figure className="shot">
            <img
              src={wrhsAnalytics}
              alt="Search performance over time (impressions/clicks)"
            />
            <figcaption>Search Console / Bing WMT trend</figcaption>
          </figure>
        </div>

        {/* Right: Proof / artifacts */}
        <div className="col">
          <div className="proof-cards">
            <div className="proof">
              <div className="proof-title">Title &amp; Meta Pattern</div>
              <pre className="codeblock">
                {`<title>Cabinets & Countertops | Wellrock Home Solutions – Round Rock, TX</title>
<meta name="description" content="Custom cabinets and countertops in Round Rock & nearby. Free design consults, fast quotes, honest pricing." />`}
              </pre>
            </div>

            <div className="proof">
              <div className="proof-title">JSON-LD (redacted)</div>
              <pre className="codeblock">
                {`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Wellrock Home Solutions",
  "image": "https://example.com/logo.jpg",
  "telephone": "(XXX) XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Round Rock",
    "addressRegion": "TX"
  },
  "areaServed": ["Round Rock", "Austin", "Pflugerville"],
  "sameAs": ["https://facebook.com/...", "https://instagram.com/..."]
}
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Kitchen cabinet installation",
  "provider": { "@type": "LocalBusiness", "name": "Wellrock Home Solutions" }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <h2 className="project-subtitle">Social & Content</h2>
      <h3 className="project-secondary-title">What I did</h3>
      <div className="two-col">
        {/* Left column: what I did + impact */}
        <div className="col">
          <ul className="experience-sublist">
            <li>
              Created and managed the Wellrock Facebook page; grew to 50+ local
              followers.
            </li>
            <li>
              Planned a monthly content calendar: before/after posts, progress
              reels, FAQs, seasonal promos.
            </li>
            <li>
              Designed branded Canva templates for consistency across posts.
            </li>
            <li>
              Captured customer testimonials (with permission) and turned them
              into shareable graphics.
            </li>
            <li>
              Launched a blog on the site, posting every 1–2 weeks to support
              AI/search visibility and educate homeowners.
            </li>
          </ul>

          <h3 className="project-secondary-title">Impact</h3>
          <ul className="experience-sublist">
            <li>
              Established a consistent posting cadence of 3–5 posts per week.
            </li>
            <li>
              Increased average engagement from near-zero to steady interaction
              on each post.
            </li>
            <li>
              Built a foundation for organic reach and trust through
              testimonials and educational content.
            </li>
          </ul>
        </div>

        {/* Right column: proof / visuals */}
        <div className="col">
          <div className="key-shots">
            <figure className="shot">
              <img src={wrhsFacebookPage} alt="Facebook Page" />
              <figcaption>Facebook Page</figcaption>
            </figure>
            <figure className="shot">
              <img src={wrhsFacebookAnalytics} alt="Facebook Analytics" />
              <figcaption>Facebook analytics</figcaption>
            </figure>
            <figure className="shot">
              <img src={wrhsFacebookEngagement} alt="Facebook Engagement" />
              <figcaption>Example of engagement</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrhs;
