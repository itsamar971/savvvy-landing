import Link from "next/link";

export default function DataStoring() {
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
            dangerouslySetInnerHTML={{ __html: 'DATA<br/>STORING' }}
          />
          
          <div style={{ borderTop: "1px solid rgba(244,242,236,0.1)", paddingTop: 40 }}>
            <div style={{ color: "rgba(184,184,176,0.5)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 32 }}>
              OVERVIEW & CLAUSES
            </div>
            
            <div style={{ color: "#B8B8B0", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 32 }}>
              
          <p><strong>Effective Date:</strong> September 21, 2026</p>
          <p>This Data Storing Policy outlines how Savvvy manages, secures, and retains the information you process through the Savvvy Knowledge Engine.</p>
          
          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>1. Storage Infrastructure</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>1.1. Cloud Architecture</strong></p>
              <p>Your knowledge cards, transcripts, and metadata are stored securely in cloud databases hosted by industry-leading providers (e.g., Google Cloud/Firestore).</p>
              
              <p><strong>1.2. Encryption Protocols</strong></p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>1.2.1. In Transit:</strong> All data transferred between your device and our servers is encrypted using TLS 1.3 or higher.</p>
                <p><strong>1.2.2. At Rest:</strong> Data stored within our databases is encrypted at rest using AES-256 standard encryption.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>2. Data Ownership and Export</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>2.1. User Ownership</strong></p>
              <p>You retain absolute ownership of all content, URLs, and knowledge structures you ingest into the platform.</p>
              
              <p><strong>2.2. Export Capabilities</strong></p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>2.2.1. Format Flexibility:</strong> You may export your processed data at any time in standard formats including JSON and Markdown.</p>
                <p><strong>2.2.2. Integrations:</strong> Direct export paths to tools like Notion and Obsidian are provided without data lock-in.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ color: "#F4F2EC", fontSize: 20, marginBottom: 16 }}>3. Deletion and Right to be Forgotten</h2>
            <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p><strong>3.1. User-Initiated Deletion</strong></p>
              <p>You can delete your account and all associated knowledge cards at any time directly from the application's account settings panel.</p>
              
              <p><strong>3.2. Deletion Timelines</strong></p>
              <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <p><strong>3.2.1. Active Databases:</strong> Upon requesting deletion, your data is purged from our active databases within 24 hours.</p>
                <p><strong>3.2.2. Backups:</strong> Residual copies of your data may remain in encrypted cold-storage backups for up to 30 days before being fully overwritten.</p>
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
