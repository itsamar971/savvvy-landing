import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | Savvvy Knowledge Engine",
  description: "Refund Policy and terms for subscriptions and in-app purchases for Savvvy Knowledge Engine.",
};

export default function RefundPolicy() {
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
              03
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
            dangerouslySetInnerHTML={{ __html: 'REFUND<br/>POLICY' }}
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
                This Refund Policy (&quot;Policy&quot;) outlines the terms, conditions, and procedures regarding refunds for subscriptions and services purchased through the <strong>Savvvy Knowledge Engine</strong> mobile application and platform, operated by <strong>Savvvy</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>

              <section style={sectionDivider}>
                <h2 style={h2Style}>1. Google Play In-App Purchases &amp; Subscriptions</h2>
                <p style={{ marginBottom: 12 }}>
                  For purchases made within the Android application via the <strong>Google Play Store</strong>:
                </p>
                <ul style={listStyle}>
                  <li>
                    <strong>Google Play Billing System:</strong> Transactions are processed securely through Google Play&apos;s In-App Billing system and are governed by the{" "}
                    <a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      Google Play Terms of Service &#8599;
                    </a>{" "}
                    and{" "}
                    <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      Google Play Refund Policies &#8599;
                    </a>.
                  </li>
                  <li>
                    <strong>Refunds Within 48 Hours:</strong> You can request a refund directly from Google Play within 48 hours of purchase by visiting your{" "}
                    <a href="https://play.google.com/store/account/orderhistory" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      Google Play Order History &#8599;
                    </a>.
                  </li>
                  <li>
                    <strong>Developer Direct Assistance:</strong> After 48 hours, or for technical payment discrepancies, you may contact our billing team directly at <a href="mailto:savvvy.in@gmail.com" style={linkStyle}>savvvy.in@gmail.com</a> for case-by-case review.
                  </li>
                </ul>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>2. Refund Eligibility Criteria</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>2.1 Accepted Circumstances</h3>
                    <p style={{ marginBottom: 10 }}>We evaluate and issue refunds under the following strictly defined conditions:</p>
                    <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                      <li>
                        <strong>Duplicate Charges / Technical Billing Errors:</strong> You were erroneously charged multiple times for the same transaction due to a verified network or system glitch.
                      </li>
                      <li>
                        <strong>Post-Cancellation Billing Errors:</strong> You cancelled your subscription prior to the scheduled renewal date, but the system erroneously processed a renewal charge.
                      </li>
                      <li>
                        <strong>Major Service Outage / Unusable Feature:</strong> The core service was completely inaccessible or non-functional for an extended period, preventing access to your paid features.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 style={h3Style}>2.2 Non-Refundable Scenarios</h3>
                    <p style={{ marginBottom: 10 }}>Refunds will <strong>not</strong> be issued for:</p>
                    <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                      <li>
                        <strong>Change of Mind:</strong> You simply decide you no longer wish to use the service after a billing period has already started.
                      </li>
                      <li>
                        <strong>Partial / Unused Time:</strong> We do not provide prorated refunds for mid-cycle cancellations or unused portions of an active subscription period.
                      </li>
                      <li>
                        <strong>Violations of Terms:</strong> Accounts suspended or terminated due to violations of our Acceptable Use Policy or Terms and Conditions are not eligible for a refund.
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>3. Subscription Cancellations</h2>
                <p style={{ marginBottom: 12 }}>You may cancel your subscription at any time:</p>
                <ul style={listStyle}>
                  <li>
                    <strong>For Google Play Subscriptions:</strong> Open the <strong>Google Play Store app</strong> &rarr; Tap your profile icon &rarr; <strong>Payments &amp; Subscriptions</strong> &rarr; <strong>Subscriptions</strong> &rarr; Select <strong>Savvvy</strong> &rarr; Tap <strong>Cancel Subscription</strong>.
                  </li>
                  <li>
                    Following cancellation, you will retain full access to your paid subscription benefits until the end of the current billing cycle.
                  </li>
                </ul>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>4. Refund Processing and Timelines</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={h3Style}>4.1 Processing Duration</h3>
                    <p>
                      Once our billing team reviews and approves a refund, the transaction is initiated within <strong>3 to 4 business days</strong>.
                    </p>
                  </div>
                  <div>
                    <h3 style={h3Style}>4.2 Reversal to Original Payment Method</h3>
                    <ul style={listStyle}>
                      <li>All approved refunds are credited back exclusively to the original payment method used during checkout.</li>
                      <li>Depending on your bank, card issuer, or payment provider, it typically takes an additional <strong>5 to 10 business days</strong> for the credit to appear on your account statement.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>5. How to Initiate a Refund Request</h2>
                <p style={{ marginBottom: 12 }}>To submit a refund request, contact our billing support team:</p>
                <ul style={{ ...listStyle, listStyleType: "none", paddingLeft: 0, gap: 8 }}>
                  <li><strong>Email:</strong> <a href="mailto:savvvy.in@gmail.com" style={linkStyle}>savvvy.in@gmail.com</a></li>
                  <li><strong>Subject Line:</strong> <code style={codeStyle}>Refund Request - [Your Account Email]</code></li>
                </ul>
                <div style={{ marginTop: 16 }}>
                  <p style={{ marginBottom: 10, fontWeight: 600, color: "#F4F2EC" }}>Required Information to Include:</p>
                  <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    <li>Your registered Savvvy account email address.</li>
                    <li>The Google Play Order Number (GPA number, e.g., <code style={codeStyle}>GPA.1234-5678-9012-34567</code>) or transaction invoice.</li>
                    <li>The date and exact amount charged.</li>
                    <li>A brief explanation of the reason for your refund request.</li>
                  </ol>
                </div>
                <p style={{ marginTop: 14 }}>
                  Our billing department will review your request and respond within 24–48 business hours.
                </p>
              </section>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
