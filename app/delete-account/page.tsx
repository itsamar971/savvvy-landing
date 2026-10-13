import type { Metadata } from "next";
import Link from "next/link";

const SUPPORT_EMAIL = "savvvy.in@gmail.com";

export const metadata: Metadata = {
  title: "Delete your Savvvy account | Savvvy Knowledge Engine",
  description:
    "This page explains how to request deletion of your Savvvy account and everything linked to it. Savvvy is the app published on Google Play under package com.savvvy.iqooproject.",
};

export default function DeleteAccount() {
  const linkStyle = { color: "#00C389", textDecoration: "none" };
  const h2Style = { color: "#F4F2EC", fontSize: 20, fontWeight: 700, marginBottom: 16, marginTop: 8 };
  const sectionDivider = { borderTop: "1px solid rgba(244,242,236,0.08)", paddingTop: 28, marginTop: 12 };
  const listStyle = { margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column" as const, gap: 12 };
  const codeStyle = { background: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 4, fontFamily: "monospace", fontSize: "0.9em", color: "#00C389" };

  const mailtoSubject = encodeURIComponent("Delete my Savvvy account");
  const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${mailtoSubject}`;

  return (
    <div style={{ background: "#090A0A", minHeight: "100vh", color: "#F4F2EC", padding: "clamp(40px, 8vw, 120px) clamp(20px, 4vw, 40px)", fontFamily: "var(--font-inter)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <Link href="/" style={{ color: "#00C389", textDecoration: "none", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, display: "inline-block", marginBottom: 40 }}>
          &#8592; Back to Home
        </Link>
        
        <div style={{ border: "1px solid rgba(244,242,236,0.1)", padding: "clamp(32px, 6vw, 80px)", backgroundColor: "rgba(244,242,236,0.01)" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ border: "1px solid #00C389", color: "#00C389", padding: "2px 6px", fontSize: 11, letterSpacing: "0.15em", fontFamily: "monospace" }}>
              06
            </span>
            <span style={{ color: "rgba(184,184,176,0.5)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
              LEGAL &amp; COMPLIANCE
            </span>
          </div>
          
          <h1 
            style={{ 
              fontSize: "clamp(32px, 6vw, 64px)", 
              fontWeight: 900, 
              letterSpacing: "-0.03em", 
              lineHeight: 1.05, 
              textTransform: "uppercase", 
              marginBottom: 48 
            }}
          >
            Delete your Savvvy account
          </h1>
          
          <div style={{ borderTop: "1px solid rgba(244,242,236,0.1)", paddingTop: 40 }}>
            <div style={{ color: "rgba(184,184,176,0.5)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 32 }}>
              ACCOUNT &amp; DATA DELETION
            </div>
            
            <div style={{ color: "#B8B8B0", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 32 }}>
              
              <p>
                This page explains how to request deletion of your Savvvy account and everything linked to it. Savvvy is the app published on Google Play under package <code style={codeStyle}>com.savvvy.iqooproject</code>.
              </p>

              <section style={sectionDivider}>
                <h2 style={h2Style}>How to request deletion</h2>
                <ol style={listStyle}>
                  <li>
                    <strong>Step 1:</strong> Send an email to{" "}
                    <a href={`mailto:${SUPPORT_EMAIL}`} style={linkStyle}>
                      {SUPPORT_EMAIL}
                    </a>{" "}
                    from the email address registered with your Savvvy account.
                  </li>
                  <li>
                    <strong>Step 2:</strong> Use the subject line <em>&quot;Delete my Savvvy account&quot;</em>.
                  </li>
                  <li>
                    <strong>Step 3:</strong> We will confirm your request and delete your account within 30 days.
                  </li>
                </ol>

                <div style={{ marginTop: 28 }}>
                  <a
                    href={mailtoUrl}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      backgroundColor: "#00C389",
                      color: "#090A0A",
                      fontWeight: 700,
                      fontSize: "clamp(13px, 1.5vw, 14px)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      padding: "14px 28px",
                      borderRadius: 4,
                      transition: "transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease",
                      boxShadow: "0 4px 20px rgba(0, 195, 137, 0.25)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send deletion request
                  </a>
                </div>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>What gets removed when you delete your account</h2>
                <p style={{ marginBottom: 16 }}>
                  When your deletion request is processed, everything tied to your account is permanently erased from our systems. This includes:
                </p>
                <ul style={listStyle}>
                  <li>Your account details (name, email, and login information)</li>
                  <li>Content you saved in the app</li>
                  <li>Your settings and preferences</li>
                </ul>
                <p style={{ marginTop: 18, color: "#F4F2EC", fontWeight: 500 }}>
                  We only store what is needed to run your account. Once deleted, it cannot be recovered.
                </p>
              </section>

              <section style={sectionDivider}>
                <h2 style={h2Style}>What may remain</h2>
                <p>
                  Anonymous, aggregated usage statistics that cannot be linked back to you may remain. Any records we are legally required to keep are retained only for the required period (up to 90 days) and then erased.
                </p>
              </section>

              <section style={sectionDivider}>
                <p style={{ margin: 0 }}>
                  Questions? Contact{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`} style={linkStyle}>
                    {SUPPORT_EMAIL}
                  </a>.
                </p>
              </section>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
