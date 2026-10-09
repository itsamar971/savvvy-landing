const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'app/privacy/page.tsx', num: '01', title: 'PRIVACY<br/>POLICY', name: 'PrivacyPolicy' },
  { file: 'app/terms/page.tsx', num: '02', title: 'TERMS &<br/>CONDITIONS', name: 'TermsAndConditions' },
  { file: 'app/refund/page.tsx', num: '03', title: 'REFUND<br/>POLICY', name: 'RefundPolicy' },
  { file: 'app/data-storing/page.tsx', num: '04', title: 'DATA<br/>STORING', name: 'DataStoring' },
  { file: 'app/cookies/page.tsx', num: '05', title: 'COOKIE<br/>SETTINGS', name: 'CookieSettings' }
];

pages.forEach(p => {
  const filePath = path.join('e:/accredian-enterprise-master', p.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the content inside <div style={{ color: "#B8B8B0"... }}>...</div>
    const contentMatch = content.match(/<div style={{ color: "#B8B8B0"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/);
    let innerContent = contentMatch ? contentMatch[1] : '';
    
    if (!innerContent) {
       console.log('Failed to parse ' + p.file);
       return;
    }
    
    const newContent = `import Link from "next/link";

export default function ${p.name}() {
  return (
    <div style={{ background: "#090A0A", minHeight: "100vh", color: "#F4F2EC", padding: "clamp(40px, 8vw, 120px) clamp(20px, 4vw, 40px)", fontFamily: "var(--font-inter)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <Link href="/" style={{ color: "#00C389", textDecoration: "none", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, display: "inline-block", marginBottom: 40 }}>
          &#8592; Back to Home
        </Link>
        
        <div style={{ border: "1px solid rgba(244,242,236,0.1)", padding: "clamp(32px, 6vw, 80px)", backgroundColor: "rgba(244,242,236,0.01)" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ border: "1px solid #00C389", color: "#00C389", padding: "2px 6px", fontSize: 11, letterSpacing: "0.15em", fontFamily: "monospace" }}>
              ${p.num}
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
            dangerouslySetInnerHTML={{ __html: '${p.title}' }}
          />
          
          <div style={{ borderTop: "1px solid rgba(244,242,236,0.1)", paddingTop: 40 }}>
            <div style={{ color: "rgba(184,184,176,0.5)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 32 }}>
              OVERVIEW & CLAUSES
            </div>
            
            <div style={{ color: "#B8B8B0", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 32 }}>
              ${innerContent}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
`;

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated ' + p.file);
  }
});
