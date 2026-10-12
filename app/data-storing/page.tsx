import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Storage & Security Policy | Savvvy Knowledge Engine",
  description: "Data Storage & Security Policy outlining cloud architecture, encryption, ownership, and retention practices for Savvvy Knowledge Engine.",
};

export default function DataStoring() {
  const linkStyle = { color: "#00C389", textDecoration: "none" };
  const h2Style = { color: "#F4F2EC", fontSize: 20, fontWeight: 700, marginBottom: 16, marginTop: 8 };
  const h3Style = { color: "#F4F2EC", fontSize: 16, fontWeight: 600, marginBottom: 10, marginTop: 8 };
  const sectionDivider = { borderTop: "1px solid rgba(244,242,236,0.08)", paddingTop: 28, marginTop: 12 };
  const listStyle = { margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column" as const, gap: 10 };

  return (
    <div style={{ background: "#090A0A", minHeight: "100vh", color: "#F4F2EC", padding: "clamp(40px, 8vw, 120px) clamp(20px, 4vw, 40px)", fontFamily: "var(--font-inter)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <Link href="/" style={{ color: "#00C389", textDecoration: "none", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, display: "inline-block", marginBottom: 40 }}>
          &#8592; Back to Home
        </Link>
        
        <div style={{ border: "1px solid rgba(244,242,236,0.1)", padding: "clamp(32px, 6vw, 80px)", backgroundColor: "rgba(244,242,236,0.01)" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ border: "1px solid #00C389", color: "#00C389", padding: "2px 6px", fontSize: 11, letterSpacing: "0.15em", fontFamily: "monospace" }}>
              04
            </span>
            <span style={{ color: "rgba(184,184,176,0.5)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
              LEGAL &amp; COMPLIANCE
            </span>
          </div>
          
          <h1 
            style={{ 
              fontSize: "clamp(40px, 8vw, 80px)", 
              fontWeight: 900, 
              letterSpacing: "-0.03em", 
              lineHeight: 0.9, 
              textTransform: "uppercase", 
              marginBottom: 48 
            }}
            dangerouslySetInnerHTML={{ __html: 'DATA<br/>STORING' }}
          />
          
          <div style={{ borderTop: "1px solid rgba(244,242,236,0.1)", paddingTop: 40 }}>
            <div style={{ color: "rgba(184,184,176,0.5)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 32 }}>
              OVERVIEW &amp; CLAUSES
            </div>
            
            <div style={{ color: "#B8B8B0", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 28 }}>
              
              <div>
                <p style={{ margin: "0 0 6px 0" }}><strong>Effective Date:</strong> September 21, 2026</p>
                <p style={{ margin: 0 }}><strong>Last Updated:</strong> October 12, 2026</p>
              </div>

              <p>
                This Data Storage Policy outlines how <strong>Savvvy</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) manages, encrypts, retains, and deletes information processed within the <strong>Savvvy Knowledge Engine</strong> application and services.
              </p>

              <section style={sectionDivider}>
                <h2 style={h2Style}>1. Storage Infrastructure &amp; Architecture</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>1.1 Cloud Architecture</h3>
                    <p>
                      Your knowledge cards, saved URLs, notes, and account metadata are hosted securely on industry-leading cloud infrastructure powered by <strong>Google Cloud Platform (GCP)</strong> and <strong>Firebase Cloud Firestore</strong>.
                    </p>
                  </div>
                  <div>
                    <h3 style={h3Style}>1.2 Enterprise Encryption Standards</h3>
                    <ul style={listStyle}>
                      <li>
                        <strong>Data in Transit:</strong> All communication between the Savvvy client app, our servers, and third-party APIs is encrypted using <strong>TLS 1.3 / HTTPS</strong> cryptographic protocols.
                      </li>
                      <li>
                        <strong>Data at Rest:</strong> All data stored within Google Cloud Firestore and Firebase Cloud Storage is encrypted at rest using <strong>AES-256 standard encryption</strong>.
                      </li>
                      <li>
                        <strong>Access Control:</strong> User data is strictly partitioned. Granular Firebase Security Rules ensure that authenticated users can only query, access, or modify their own private records.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>2. Data Ownership &amp; Export Capabilities</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>2.1 User Ownership</h3>
                    <p>
                      You retain 100% intellectual property ownership of all notes, knowledge structures, articles, and text you input or process through Savvvy. We do not claim ownership of your content.
                    </p>
                  </div>
                  <div>
                    <h3 style={h3Style}>2.2 Export Freedom (No Vendor Lock-In)</h3>
                    <p style={{ marginBottom: 10 }}>You have the right to extract your data at any time:</p>
                    <ul style={listStyle}>
                      <li>
                        <strong>Standard Formats:</strong> You can export your knowledge base in standard open formats, including <strong>JSON</strong> and <strong>Markdown (.md)</strong>.
                      </li>
                      <li>
                        <strong>Third-Party Compatibility:</strong> Formatted exports are designed to integrate smoothly with knowledge management systems such as <strong>Obsidian</strong>, <strong>Notion</strong>, and local markdown vaults.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>3. Data Retention &amp; The Right to Be Forgotten</h2>
                <p style={{ marginBottom: 14 }}>
                  In full compliance with <strong>Google Play Developer Policies</strong> and global data privacy regulations (GDPR / CCPA):
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>3.1 User-Initiated Data Erasure</h3>
                    <ul style={listStyle}>
                      <li>
                        <strong>Individual Items:</strong> You can permanently delete individual knowledge cards, tags, or notes at any time from within the application interface.
                      </li>
                      <li>
                        <strong>Full Account &amp; Data Purge:</strong> You can request the permanent removal of your account and all associated records by emailing <a href="mailto:savvvy.in@gmail.com?subject=Delete%20My%20Account%20%26%20Data" style={linkStyle}>savvvy.in@gmail.com</a> with the subject <em>&quot;Delete My Account &amp; Data&quot;</em>.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 style={h3Style}>3.2 Purge Timelines</h3>
                    <ul style={listStyle}>
                      <li>
                        <strong>Active Production Databases:</strong> Upon confirmed deletion request, your account and knowledge records are completely purged from our active Firestore production database within <strong>24 to 48 hours</strong>.
                      </li>
                      <li>
                        <strong>Automated Backups:</strong> Any residual disaster-recovery snapshots stored in secure, cold-storage encrypted backups are fully overwritten and scrubbed within <strong>30 days</strong>.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>4. Artificial Intelligence Data Handling</h2>
                <ul style={listStyle}>
                  <li>
                    <strong>Prompt Processing:</strong> When you invoke AI analysis or summaries, your input text is transmitted securely to AI processing models (such as Google Gemini / Sarvam AI) over encrypted API endpoints.
                  </li>
                  <li>
                    <strong>No Training on Private User Notes:</strong> We do not use your private personal knowledge cards or proprietary text to train public foundational AI models without your express consent.
                  </li>
                </ul>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>5. Contact Information</h2>
                <p style={{ marginBottom: 12 }}>
                  If you have questions regarding our data storage practices, encryption standards, or deletion processes, contact our data protection team:
                </p>
                <ul style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
                  <li><strong>Company:</strong> Savvvy</li>
                  <li><strong>Email:</strong> <a href="mailto:savvvy.in@gmail.com" style={linkStyle}>savvvy.in@gmail.com</a></li>
                </ul>
              </section>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
