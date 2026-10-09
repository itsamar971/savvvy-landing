import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div style={{ background: "#090A0A", minHeight: "100vh", color: "#F4F2EC", padding: "clamp(40px, 8vw, 120px) clamp(20px, 4vw, 40px)", fontFamily: "var(--font-inter)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <Link href="/" style={{ color: "#00C389", textDecoration: "none", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, display: "inline-block", marginBottom: 40 }}>
          &#8592; Back to Home
        </Link>
        
        <div style={{ border: "1px solid rgba(244,242,236,0.1)", padding: "clamp(32px, 6vw, 80px)", backgroundColor: "rgba(244,242,236,0.01)" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ border: "1px solid #00C389", color: "#00C389", padding: "2px 6px", fontSize: 11, letterSpacing: "0.15em", fontFamily: "monospace" }}>
              03
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
            dangerouslySetInnerHTML={{ __html: 'REFUND<br/>POLICY' }}
          />
          
          <div style={{ borderTop: "1px solid rgba(244,242,236,0.1)", paddingTop: 40 }}>
            <div style={{ color: "rgba(184,184,176,0.5)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 32 }}>
              OVERVIEW & CLAUSES
            </div>
            
            <div style={{ color: "#B8B8B0", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 32 }}>
              
          <p><strong>Effective Date:</strong> September 21, 2026</p>
          <p>This Refund Policy ("Policy") outlines the conditions under which refunds are provided for services purchased through the Savvvy Knowledge Engine.</p>
          
          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>1. Refund Eligibility Criteria</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>1.1. Accepted Conditions</strong></p>
              <p>We only issue full refunds under the following strictly defined circumstances:</p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>1.1.1. Mis-transactions:</strong> Duplicate charges or charges incorrectly applied due to a system error on our end.</p>
                <p><strong>1.1.2. Cancelled Subscriptions:</strong> If a subscription is cancelled prior to the renewal date, but you are erroneously billed for the subsequent period.</p>
              </div>

              <p><strong>1.2. Non-Refundable Scenarios</strong></p>
              <p>Refunds will not be issued for:</p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>1.2.1. Change of Mind:</strong> We do not offer refunds if you simply decide you no longer want to use the service after a billing cycle has begun.</p>
                <p><strong>1.2.2. Partial Usage:</strong> We do not prorate refunds for unused time within an active subscription period.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>2. Refund Processing and Timelines</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>2.1. Processing Time</strong></p>
              <p>Once a refund is approved by our billing department, it is processed within 3 to 4 business days.</p>
              
              <p><strong>2.2. Original Payment Method</strong></p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>2.2.1. Routing:</strong> All refunds are issued exclusively back to the original payment method used for the transaction.</p>
                <p><strong>2.2.2. Bank Delays:</strong> Depending on your financial institution, it may take an additional 5-10 business days for the funds to reflect in your account ledger.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>3. How to Initiate a Request</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>3.1. Contact Information</strong></p>
              <p>To request a refund, you must contact our billing support team directly at <a href="mailto:savvvy.in@gmail.com" style={{ color: "#00C389", textDecoration: "none" }}>savvvy.in@gmail.com</a>.</p>
              
              <p><strong>3.2. Required Details</strong></p>
              <p>Please include your account email, the date of the transaction, and the transaction ID to expedite the review process.</p>
            </div>
          </section>
        
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
