import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Savvvy Knowledge Engine",
  description: "Terms and Conditions governing access to and use of the Savvvy mobile application and Knowledge Engine platform.",
};

export default function TermsAndConditions() {
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
              02
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
            dangerouslySetInnerHTML={{ __html: 'TERMS &<br/>CONDITIONS' }}
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
                These Terms and Conditions (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) govern your access to and use of the Savvvy mobile application and the Savvvy Knowledge Engine (the &quot;Application&quot; or &quot;Service&quot;), operated by Savvvy (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>

              <p>
                By downloading, installing, accessing, or using the Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Service.
              </p>

              <section style={sectionDivider}>
                <h2 style={h2Style}>1. Agreement to Terms &amp; Service Nature</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>1.1 Acceptance</h3>
                    <p>
                      By using the Service, you confirm that you are at least 13 years of age and legally capable of entering into a binding contract. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                    </p>
                  </div>
                  <div>
                    <h3 style={h3Style}>1.2 &quot;As-Is&quot; and Service Modifications</h3>
                    <ul style={listStyle}>
                      <li>The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied.</li>
                      <li>We reserve the right to modify, suspend, update, or discontinue the Service (or any feature therein) at any time with or without notice.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>2. User Accounts and Security</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>2.1 Account Creation &amp; Accuracy</h3>
                    <p>
                      When creating an account, you agree to provide true, accurate, and complete information. You must keep your credentials up to date.
                    </p>
                  </div>
                  <div>
                    <h3 style={h3Style}>2.2 Security of Credentials</h3>
                    <ul style={listStyle}>
                      <li>You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
                      <li>You agree to notify us immediately at <a href="mailto:savvvy.in@gmail.com" style={linkStyle}>savvvy.in@gmail.com</a> upon becoming aware of any unauthorized use or security breach of your account.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>3. Intellectual Property and Content</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>3.1 Your Content (&quot;User Content&quot;)</h3>
                    <ul style={listStyle}>
                      <li>You retain full ownership and intellectual property rights in the notes, links, text, images, and data you submit, store, or organize within the Service (&quot;User Content&quot;).</li>
                      <li>By saving Content to the Service, you grant Savvvy a non-exclusive, worldwide, royalty-free license solely to host, process, store, and display your Content as necessary to provide and operate the Service for you.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={h3Style}>3.2 Company Intellectual Property</h3>
                    <p>
                      The Application, including its software, UI design, branding, schemas, logos, and features (excluding your User Content), is the exclusive property of Savvvy and its licensors, protected by intellectual property and copyright laws. You may not reverse-engineer, decompile, copy, or distribute any part of the Application.
                    </p>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>4. Artificial Intelligence (AI) Features &amp; Disclaimer</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>4.1 Generative AI Integration</h3>
                    <p>
                      Savvvy integrates third-party Artificial Intelligence technologies (including Google Gemini and Sarvam AI) to assist you with generating summaries, processing knowledge cards, and answering queries.
                    </p>
                  </div>
                  <div>
                    <h3 style={h3Style}>4.2 AI Accuracy Disclaimer (Important)</h3>
                    <ul style={listStyle}>
                      <li><strong>Informational Purposes Only:</strong> AI-generated outputs are generated probabilistically and are intended solely for personal, organizational, and informational purposes.</li>
                      <li><strong>No Professional Advice:</strong> AI outputs do not constitute legal, medical, financial, or professional advice.</li>
                      <li><strong>Accuracy:</strong> We do not guarantee that AI-generated responses will be error-free, accurate, or complete. You should independently verify any critical information generated by AI features.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>5. Acceptable Use Policy</h2>
                <p style={{ marginBottom: 12 }}>You agree not to use the Service:</p>
                <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  <li>For any unlawful purpose or in violation of applicable laws or regulations.</li>
                  <li>To upload, store, or transmit harmful code, viruses, malware, or destructive data.</li>
                  <li>To attempt unauthorized access to our servers, databases (Firestore), or connected networks.</li>
                  <li>To scrape, crawl, or harvest data from the Service using automated means.</li>
                  <li>To generate, store, or distribute content that is defamatory, abusive, harassing, or infringes on third-party intellectual property or privacy rights.</li>
                </ol>
                <p style={{ marginTop: 14 }}>
                  Violating this Acceptable Use Policy may result in immediate suspension or termination of your account without prior notice.
                </p>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>6. Third-Party Services and Links</h2>
                <p style={{ marginBottom: 12 }}>
                  Our Service relies on third-party cloud infrastructure (such as Google Firebase) and external links (processed via link preview and web browsing features):
                </p>
                <ul style={listStyle}>
                  <li>We do not control and are not responsible for the content, privacy policies, or practices of any third-party websites or services linked to or previewed from within the app.</li>
                  <li>Your use of third-party features is subject to the respective terms and privacy policies of those third-party providers.</li>
                </ul>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>7. Termination and Account Deletion</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>7.1 Termination by You</h3>
                    <p>
                      You may terminate these Terms at any time by deleting your account or requesting complete account deletion by emailing <a href="mailto:savvvy.in@gmail.com" style={linkStyle}>savvvy.in@gmail.com</a>.
                    </p>
                  </div>
                  <div>
                    <h3 style={h3Style}>7.2 Termination by Us</h3>
                    <p>
                      We may suspend or terminate your account and access to the Service immediately, without prior notice or liability, if you breach these Terms or engage in fraudulent or abusive activities.
                    </p>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>8. Limitation of Liability</h2>
                <p style={{ marginBottom: 12 }}>
                  To the maximum extent permitted by applicable law, in no event shall Savvvy, its founders, directors, employees, or partners be liable for:
                </p>
                <ul style={listStyle}>
                  <li>Any indirect, incidental, special, consequential, or punitive damages.</li>
                  <li>Any loss of profits, revenue, data, use, goodwill, or other intangible losses.</li>
                  <li>Any unauthorized access, alteration, or loss of your User Content.</li>
                  <li>Any errors, inaccuracies, or hallucinations in AI-generated content.</li>
                </ul>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>9. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws applicable to Savvvy&apos;s place of operation, without regard to its conflict of law provisions.
                </p>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>10. Changes to These Terms</h2>
                <p>
                  We reserve the right to revise these Terms at our discretion. We will update the &quot;Last Updated&quot; date at the top of this document whenever changes are made. Continued use of the Service following any revisions signifies your acceptance of the updated Terms.
                </p>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>11. Contact Information</h2>
                <p style={{ marginBottom: 12 }}>
                  If you have any questions, feedback, or legal inquiries concerning these Terms, please contact us exclusively at:
                </p>
                <ul style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
                  <li><strong>Company:</strong> Savvvy</li>
                  <li><strong>Contact Email:</strong> <a href="mailto:savvvy.in@gmail.com" style={linkStyle}>savvvy.in@gmail.com</a></li>
                </ul>
              </section>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
