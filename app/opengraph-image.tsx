import { ImageResponse } from "next/og";

export const alt = "India Visa Experts — Business Visa & Immigration Consulting India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required for `output: export` — render this image once at build time.
export const dynamic = "force-static";

// Dynamically generated, on-brand social share image (replaces the missing /og-image.jpg).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #102a43 0%, #243b53 55%, #0a1929 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#f59e0b",
              color: "#102a43",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            IVE
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "30px", fontWeight: 700 }}>India Visa Experts</div>
            <div style={{ fontSize: "20px", color: "rgba(255,255,255,0.6)" }}>
              Immigration Consulting
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "960px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "60px",
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            <span style={{ marginRight: "16px" }}>
              Navigate India&apos;s Visa &amp; Immigration Process with
            </span>
            <span style={{ color: "#fbbf24" }}>Confidence</span>
          </div>
          <div style={{ marginTop: "24px", fontSize: "26px", color: "rgba(255,255,255,0.7)" }}>
            Business Visa · Employment Visa · X Visa · FRRO Registration · Compliance
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "24px",
          }}
        >
          <div style={{ fontSize: "22px", color: "#fbbf24", fontWeight: 600 }}>
            indiavisaexperts.com
          </div>
          <div style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)" }}>
            Independent service · Not a government agency
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
