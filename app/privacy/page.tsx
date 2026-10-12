import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Savvvy Knowledge Engine",
  description: "Privacy Policy for Savvvy and the Savvvy Knowledge Engine in compliance with Google Play Developer Program Policies.",
};

export default function PrivacyPolicy() {
  const linkStyle = { color: "#00C389", textDecoration: "none" };
  const h2Style = { color: "#F4F2EC", fontSize: 20, fontWeight: 700, marginBottom: 16, marginTop: 8 };
  const h3Style = { color: "#F4F2EC", fontSize: 16, fontWeight: 600, marginBottom: 10, marginTop: 8 };
  const sectionDivider = { borderTop: "1px solid rgba(244,242,236,0.08)", paddingTop: 28, marginTop: 12 };
  const listStyle = { margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column" as const, gap: 10 };
  const codeStyle = { background: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 4, fontFamily: "monospace", fontSize: "0.9em", color: "#00C389" };

  return (
    <div style={{ background: "#090A0A", minHeight: "100vh", color: "#F4F2EC", padding: "clamp(40px, 8vw, 120px) clamp(20px, 4vw, 40px)", fontFamily: "var(--font-inter)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <Link href="/" style={{ color: "#00C389", textDecoration: "none", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, display: "inline-block", marginBottom: 40 }}>
          &#8592; Back to Home
        </Link>
        
        <div style={{ border: "1px solid rgba(244,242,236,0.1)", padding: "clamp(32px, 6vw, 80px)", backgroundColor: "rgba(244,242,236,0.01)" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ border: "1px solid #00C389", color: "#00C389", padding: "2px 6px", fontSize: 11, letterSpacing: "0.15em", fontFamily: "monospace" }}>
              01
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
            dangerouslySetInnerHTML={{ __html: 'PRIVACY<br/>POLICY' }}
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
                This Privacy Policy applies to the <strong>Savvvy</strong> mobile application and the <strong>Savvvy Knowledge Engine</strong> (the &quot;Application&quot; or &quot;Services&quot;), developed and operated by <strong>Savvvy</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>

              <p>
                We take your privacy seriously. This Privacy Policy describes how we collect, use, store, share, and protect your information when you use our application, particularly in compliance with Google Play Developer Program Policies.
              </p>

              <section style={sectionDivider}>
                <h2 style={h2Style}>1. Information We Collect</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  
                  <div>
                    <h3 style={h3Style}>1.1 Personal Information You Provide</h3>
                    <ul style={listStyle}>
                      <li>
                        <strong>Account Information:</strong> When you create an account or sign in, we may collect your name, email address, profile picture (if authenticated via Google/Firebase), and authentication credentials.
                      </li>
                      <li>
                        <strong>User-Generated Content &amp; Knowledge Cards:</strong> Text, notes, links, saved articles, summaries, and images you explicitly create, save, or organize within the application.
                      </li>
                      <li>
                        <strong>Customer Support:</strong> Information you provide when contacting us for support or feedback.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 style={h3Style}>1.2 Device Permissions &amp; Sensitive Data</h3>
                    <p style={{ marginBottom: 12 }}>
                      To provide the core features of Savvvy, the application requests access to certain device capabilities:
                    </p>
                    <ul style={listStyle}>
                      <li>
                        <strong>Photos and Media (Image Picker):</strong> Accessed only when you choose to attach images, documents, or screenshots to your knowledge cards or notes. We do not access your photo gallery without your explicit action.
                      </li>
                      <li>
                        <strong>Display Over Other Apps / Quick Access (Optional):</strong> If enabled by the user, this permission is used solely to display quick-access assistant shortcuts or floating tools while using other applications.
                      </li>
                      <li>
                        <strong>Clipboard Data:</strong> Used when you trigger the auto-save or quick-capture feature to detect shared URLs or copied text for your knowledge cards. The app only accesses clipboard text upon your explicit action or trigger.
                      </li>
                      <li>
                        <strong>Share Intent (<code style={codeStyle}>receive_sharing_intent</code>):</strong> Used when you use Android&apos;s system &quot;Share&quot; menu from browsers or other apps to send text, links, or media directly to Savvvy.
                      </li>
                      <li>
                        <strong>Voice / Assistant Interaction:</strong> If you enable the assistant shortcut or tile, audio/voice input is processed temporarily to execute your assistant commands. We do not continuously record background audio.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 style={h3Style}>1.3 Information Collected Automatically</h3>
                    <ul style={listStyle}>
                      <li>
                        <strong>Log and Diagnostic Data:</strong> Crash logs, device model, operating system version, and general performance metrics collected via Firebase to ensure application stability.
                      </li>
                      <li>
                        <strong>IP Address &amp; Network Info:</strong> Basic connection information required to interact with our backend and AI APIs.
                      </li>
                    </ul>
                  </div>

                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>2. How We Use Your Information</h2>
                <p style={{ marginBottom: 12 }}>We use the collected information for the following purposes:</p>
                <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  <li>
                    <strong>Core Functionality:</strong> Providing account authentication, cloud sync, and the ability to save, organize, and retrieve knowledge cards.
                  </li>
                  <li>
                    <strong>AI-Powered Features:</strong> When you request AI summaries or responses, your prompt/query is processed via AI APIs (such as Google Gemini / Sarvam AI) to generate responses.
                  </li>
                  <li>
                    <strong>App Performance &amp; Stability:</strong> Monitoring crashes, resolving bugs, and optimizing app speed.
                  </li>
                  <li>
                    <strong>Service Communications:</strong> Sending critical service alerts or responding to your support inquiries.
                  </li>
                </ol>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>3. Third-Party Services &amp; Data Processors</h2>
                <p style={{ marginBottom: 14 }}>
                  We do not sell, rent, or trade your personal information. We only share data with trusted third-party service providers necessary to operate the application:
                </p>
                <ul style={listStyle}>
                  <li>
                    <strong>Google Firebase (Google LLC):</strong>
                    <ul style={{ ...listStyle, marginTop: 8, paddingLeft: 18 }}>
                      <li><em>Firebase Authentication:</em> User login and identity management.</li>
                      <li><em>Cloud Firestore &amp; Firebase Storage:</em> Secure cloud database and storage for your knowledge cards, notes, and uploaded media.</li>
                      <li>
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                          Google Privacy Policy &#8599;
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Google Gemini API (Google LLC):</strong> Used for generative AI assistance and text understanding. User prompts are transmitted securely via API.
                  </li>
                  <li>
                    <strong>Sarvam AI:</strong> Used for optional language models and translation services.
                  </li>
                </ul>
                <p style={{ marginTop: 14 }}>
                  All third-party processors adhere to strict confidentiality and industry-standard security practices.
                </p>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>4. Data Security</h2>
                <p style={{ marginBottom: 12 }}>
                  We implement industry-standard administrative, technical, and physical safeguards to protect your personal data, including:
                </p>
                <ul style={listStyle}>
                  <li>HTTPS / TLS encryption for all data in transit.</li>
                  <li>Secure Firestore Security Rules ensuring users can only read and write their own data.</li>
                  <li>Restrictive access to backend API keys and infrastructure.</li>
                </ul>
                <p style={{ marginTop: 14 }}>
                  While we strive to protect your personal data, no electronic transmission over the internet or storage system is 100% secure.
                </p>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>5. Data Retention &amp; Account Deletion (Google Play Compliance)</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>5.1 Retention</h3>
                    <p>We retain your personal information and stored knowledge cards for as long as your account remains active.</p>
                  </div>

                  <div>
                    <h3 style={h3Style}>5.2 Account &amp; Data Deletion Rights</h3>
                    <p style={{ marginBottom: 12 }}>In accordance with Google Play&apos;s User Data policy:</p>
                    <ul style={listStyle}>
                      <li>
                        <strong>In-App Deletion:</strong> You can delete individual knowledge cards or notes directly inside the application at any time.
                      </li>
                      <li>
                        <strong>Complete Account &amp; Data Erasure:</strong> You have the right to request permanent deletion of your account and all associated personal data from our systems.
                      </li>
                      <li>
                        <strong>How to Request Deletion:</strong>
                        <ul style={{ ...listStyle, marginTop: 8, paddingLeft: 18 }}>
                          <li>
                            Send an email from your registered email address to <a href="mailto:savvvy.in@gmail.com?subject=Delete%20My%20Account%20%26%20Data" style={linkStyle}>savvvy.in@gmail.com</a> with the subject line: <em>&quot;Delete My Account &amp; Data&quot;</em>.
                          </li>
                          <li>
                            Upon receiving your request, all personal data, Firestore records, and uploaded files associated with your account will be permanently deleted within 30 days.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>6. Children&apos;s Privacy (COPPA Compliance)</h2>
                <p>
                  Savvvy is not intended for use by children under the age of 13. We do not knowingly collect personal identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we will promptly delete it from our servers.
                </p>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>7. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy periodically. We will notify you of any changes by updating the &quot;Last Updated&quot; date at the top of this Privacy Policy. Continued use of the Application following any updates signifies your acceptance of the revised policy.
                </p>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>8. Contact Us</h2>
                <p style={{ marginBottom: 12 }}>
                  If you have any questions, concerns, or data deletion requests regarding this Privacy Policy, please contact us at:
                </p>
                <ul style={{ ...listStyle, listStyleType: "none", paddingLeft: 0 }}>
                  <li><strong>Company:</strong> Savvvy</li>
                  <li><strong>Email:</strong> <a href="mailto:savvvy.in@gmail.com" style={linkStyle}>savvvy.in@gmail.com</a></li>
                  <li><strong>Developer Contact:</strong> <a href="mailto:savvvy.in@gmail.com" style={linkStyle}>savvvy.in@gmail.com</a></li>
                </ul>
              </section>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
