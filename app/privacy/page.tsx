import Link from "next/link";

export default function PrivacyPolicy() {
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
            dangerouslySetInnerHTML={{ __html: 'PRIVACY<br/>POLICY' }}
          />
          
          <div style={{ borderTop: "1px solid rgba(244,242,236,0.1)", paddingTop: 40 }}>
            <div style={{ color: "rgba(184,184,176,0.5)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 32 }}>
              OVERVIEW & CLAUSES
            </div>
            
            <div style={{ color: "#B8B8B0", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 32 }}>
              
          <p><strong>Effective Date:</strong> September 21, 2026</p>
          <p>This Privacy Policy applies to the Savvvy Knowledge Engine, operated by Savvvy (“Company,” “we,” “us,” or “our”).</p>
          
          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>1. Information We Collect</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>1.1. Personal Data Provided by You</strong></p>
              <p>We may collect personal data that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Services, or otherwise when you contact us.</p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>1.1.1. Account Information:</strong> Name, email address, company name, primary platform used, and password.</p>
                <p><strong>1.1.2. Communication Data:</strong> Any information you provide in correspondence with our support team.</p>
              </div>

              <p><strong>1.2. Information Automatically Collected</strong></p>
              <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information.</p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>1.2.1. Log and Usage Data:</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services.</p>
                <p><strong>1.2.2. Device Data:</strong> Information about your computer, phone, tablet, or other device you use to access the Services, including IP address, browser type, and operating system.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>2. How We Use Your Information</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>2.1. Provision of Services</strong></p>
              <p>We use your information to provide, maintain, and improve the Savvvy Knowledge Engine. This includes account creation, authentication, and enabling the core functionality of saving and retrieving knowledge cards.</p>
              
              <p><strong>2.2. Communication</strong></p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>2.2.1. Service Updates:</strong> Sending administrative information such as updates to our terms, conditions, and policies.</p>
                <p><strong>2.2.2. Support:</strong> Responding to user inquiries and offering customer support.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>3. Information Sharing and Disclosure</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>3.1. Third-Party Service Providers</strong></p>
              <p>We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf (e.g., cloud hosting via Google Cloud/Firestore, payment processing).</p>
              
              <p><strong>3.2. Legal Obligations</strong></p>
              <p>We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</p>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>4. Data Security and Retention</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>4.1. Security Measures</strong></p>
              <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
              
              <p><strong>4.2. Data Retention</strong></p>
              <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.</p>
            </div>
          </section>
        
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
