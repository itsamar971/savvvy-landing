import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie and Tracking Technologies Policy | Savvvy Knowledge Engine",
  description: "Cookie and Tracking Technologies Policy for Savvvy Knowledge Engine detailing cookies, local storage, and session tokens.",
};

export default function CookieSettings() {
  const linkStyle = { color: "#00C389", textDecoration: "none" };
  const h2Style = { color: "#F4F2EC", fontSize: 20, fontWeight: 700, marginBottom: 16, marginTop: 8 };
  const h3Style = { color: "#F4F2EC", fontSize: 16, fontWeight: 600, marginBottom: 10, marginTop: 8 };
  const sectionDivider = { borderTop: "1px solid rgba(244,242,236,0.08)", paddingTop: 28, marginTop: 12 };
  const listStyle = { margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column" as const, gap: 10 };
  const pathNavStyle = { background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: 4, fontFamily: "monospace", fontSize: "0.9em", color: "#F4F2EC" };

  return (
    <div style={{ background: "#090A0A", minHeight: "100vh", color: "#F4F2EC", padding: "clamp(40px, 8vw, 120px) clamp(20px, 4vw, 40px)", fontFamily: "var(--font-inter)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <Link href="/" style={{ color: "#00C389", textDecoration: "none", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, display: "inline-block", marginBottom: 40 }}>
          &#8592; Back to Home
        </Link>
        
        <div style={{ border: "1px solid rgba(244,242,236,0.1)", padding: "clamp(32px, 6vw, 80px)", backgroundColor: "rgba(244,242,236,0.01)" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ border: "1px solid #00C389", color: "#00C389", padding: "2px 6px", fontSize: 11, letterSpacing: "0.15em", fontFamily: "monospace" }}>
              05
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
            dangerouslySetInnerHTML={{ __html: 'COOKIE<br/>SETTINGS' }}
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
                This Cookie Policy explains how <strong>Savvvy</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies, local storage, device identifiers, and similar technologies within the <strong>Savvvy Knowledge Engine</strong> mobile application and associated web interfaces.
              </p>

              <section style={sectionDivider}>
                <h2 style={h2Style}>1. What Are Cookies and Local Storage?</h2>
                <ul style={listStyle}>
                  <li>
                    <strong>Cookies:</strong> Small text files placed on your device by websites or web views to store preferences, session states, and diagnostic details.
                  </li>
                  <li>
                    <strong>Mobile Local Storage &amp; Tokens:</strong> Within mobile applications, local storage mechanisms (such as SharedPreferences, encrypted key-value stores, and device tokens) fulfill a similar function by securely persisting user authentication sessions, offline settings, and UI themes.
                  </li>
                </ul>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>2. Categories of Technologies We Use</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>2.1 Strictly Necessary (Essential)</h3>
                    <p style={{ marginBottom: 10 }}>These identifiers are mandatory to enable basic functionality and security:</p>
                    <ul style={listStyle}>
                      <li>
                        <strong>Authentication &amp; Session Persistence:</strong> Firebase Auth tokens that keep you securely logged into your account so you do not have to re-enter credentials on every app launch.
                      </li>
                      <li>
                        <strong>Security &amp; Fraud Prevention:</strong> Tokens used to protect against CSRF attacks and detect unauthorized access attempts.
                      </li>
                    </ul>
                    <p style={{ marginTop: 10, fontStyle: "italic", color: "#F4F2EC" }}>
                      Essential technologies cannot be disabled as the app cannot function without them.
                    </p>
                  </div>

                  <div>
                    <h3 style={h3Style}>2.2 Functional Preferences</h3>
                    <ul style={listStyle}>
                      <li>Storing your selected user interface theme (Dark Mode, Light Mode, or System Default).</li>
                      <li>Caching your preferred knowledge card layout and filter configurations locally on your device for rapid offline loading.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 style={h3Style}>2.3 Performance &amp; Diagnostics (Telemetry)</h3>
                    <p>
                      Aggregated, non-personally identifiable performance metrics (such as page load duration, network timeouts, and app crash traces) collected to diagnose bugs and improve app responsiveness.
                    </p>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>3. Third-Party Technologies</h2>
                <p style={{ marginBottom: 12 }}>
                  We integrate limited third-party services that utilize secure tokens:
                </p>
                <ul style={listStyle}>
                  <li>
                    <strong>Google Firebase (Google LLC):</strong> Manages user session tokens, cloud database handshakes, and diagnostic crash analytics.
                  </li>
                  <li>
                    <strong>Google Play Services:</strong> Manages in-app billing verification and app integrity validation.
                  </li>
                </ul>
                <p style={{ marginTop: 14 }}>
                  We do <strong>not</strong> use third-party behavioral advertising cookies, and we do <strong>not</strong> sell tracking data to data brokers.
                </p>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>4. Your Control and Opt-Out Choices</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>4.1 In-App Preferences</h3>
                    <p>
                      You can reset local application caches and clear locally stored preferences at any time through the Savvvy settings menu or Android&apos;s system App Info settings (<span style={pathNavStyle}>Settings &gt; Apps &gt; Savvvy &gt; Storage &gt; Clear Cache</span>).
                    </p>
                  </div>
                  <div>
                    <h3 style={h3Style}>4.2 Browser Settings (Web interfaces)</h3>
                    <p>
                      If accessing Savvvy via a web browser, you can adjust your browser settings to decline, block, or delete cookies. Note that disabling essential cookies will prevent authentication.
                    </p>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>5. Contact Information</h2>
                <p style={{ marginBottom: 12 }}>
                  For any inquiries regarding our use of cookies or tracking technologies, please contact us:
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
