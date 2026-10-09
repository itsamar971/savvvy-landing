import Link from "next/link";

export default function TermsAndConditions() {
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
            dangerouslySetInnerHTML={{ __html: 'TERMS &<br/>CONDITIONS' }}
          />
          
          <div style={{ borderTop: "1px solid rgba(244,242,236,0.1)", paddingTop: 40 }}>
            <div style={{ color: "rgba(184,184,176,0.5)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 32 }}>
              OVERVIEW & CLAUSES
            </div>
            
            <div style={{ color: "#B8B8B0", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 32 }}>
              
          <p><strong>Effective Date:</strong> September 21, 2026</p>
          <p>These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with the Savvvy Knowledge Engine application operated by Savvvy ("us", "we", or "our").</p>
          
          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>1. Agreement to Terms</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>1.1. Acceptance</strong></p>
              <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
              
              <p><strong>1.2. Beta Phase Acknowledgement</strong></p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>1.2.1. Provided "As-Is":</strong> The Savvvy application is currently in a private beta phase. It is provided on an "as-is" and "as available" basis without any warranties.</p>
                <p><strong>1.2.2. Service Modifications:</strong> We reserve the right to modify, suspend, or discontinue the service (or any part or content thereof) at any time without notice.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>2. Accounts and Responsibilities</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>2.1. Account Creation</strong></p>
              <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.</p>
              
              <p><strong>2.2. Security Responsibilities</strong></p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>2.2.1. Credential Protection:</strong> You are responsible for safeguarding the password that you use to access the Service.</p>
                <p><strong>2.2.2. Unauthorized Use:</strong> You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>3. Intellectual Property and Content</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>3.1. User Content</strong></p>
              <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You retain all rights to the Content you process through Savvvy.</p>
              
              <p><strong>3.2. Company Property</strong></p>
              <p>The Service and its original content (excluding Content provided by users), features, schemas, and functionality are and will remain the exclusive property of Savvvy and its licensors.</p>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>4. Limitation of Liability</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>4.1. General Limitation</strong></p>
              <p>In no event shall Savvvy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
            </div>
          </section>
        
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
