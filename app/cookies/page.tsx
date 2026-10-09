import Link from "next/link";

export default function CookieSettings() {
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
              LEGAL & COMPLIANCE
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
              OVERVIEW & CLAUSES
            </div>
            
            <div style={{ color: "#B8B8B0", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 32 }}>
              
          <p><strong>Effective Date:</strong> September 21, 2026</p>
          <p>This Cookie Policy explains how Savvvy uses cookies and similar tracking technologies on the Savvvy Knowledge Engine platform.</p>
          
          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>1. What Are Cookies?</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>1.1. Definition</strong></p>
              <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used to make applications work efficiently and to provide reporting information.</p>
              
              <p><strong>1.2. First-Party vs. Third-Party</strong></p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>1.2.1. First-Party Cookies:</strong> Cookies set by the website owner (Savvvy).</p>
                <p><strong>1.2.2. Third-Party Cookies:</strong> Cookies set by parties other than the website owner, used to provide third-party features (e.g., analytics).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>2. Types of Cookies We Use</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>2.1. Strictly Necessary Cookies</strong></p>
              <p>These cookies are essential to provide you with services available through our application. Without these, core functionality like user authentication cannot be provided.</p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>2.1.1. Authentication:</strong> To identify you once you have logged into Savvvy.</p>
                <p><strong>2.1.2. Session Security:</strong> To prevent fraudulent use of login credentials.</p>
              </div>
              
              <p><strong>2.2. Analytics and Performance Cookies</strong></p>
              <p>These cookies collect information that is used in aggregate form to help us understand how the application is being used, so we can improve the user experience.</p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>2.2.1. Telemetry Data:</strong> Tracking general usage patterns such as page load times and error rates.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>3. Your Control and Opt-Out Rights</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>3.1. Browser Controls</strong></p>
              <p>You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas may be restricted.</p>
              
              <p><strong>3.2. Application Settings</strong></p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>3.2.1. Managing Preferences:</strong> You can manage your preferences regarding non-essential Analytics cookies directly from the settings panel within the Savvvy application.</p>
                <p><strong>3.2.2. Necessary Exemptions:</strong> Strictly Necessary Cookies cannot be disabled as they are required for the application to function.</p>
              </div>
            </div>
          </section>
        
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
