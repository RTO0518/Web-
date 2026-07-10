export default function Contact() {
  return (
    <section
      id="contact"
      className="reveal"
      style={{
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #06060c 0%, #0c0620 50%, #06060c 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(124,108,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontSize: "14px",
            color: "var(--accent)",
            letterSpacing: "4px",
            marginBottom: "20px",
            fontWeight: 500,
          }}
        >
          CONTACT
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            background: "linear-gradient(135deg, var(--text) 0%, var(--text2) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          联系方式
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "var(--text2)",
            maxWidth: "500px",
            margin: "0 auto 48px",
            lineHeight: 1.8,
          }}
        >
          如需合作或交流，欢迎通过以下方式联系
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <div
            className="contact-item"
            style={{
              textAlign: "center",
              padding: "24px 32px",
              borderRadius: "16px",
              border: "1px solid var(--border)",
              background: "rgba(22,22,36,0.5)",
              transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
              minWidth: "180px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(124,108,255,0.3)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "12px", color: "var(--text2)", marginBottom: "8px" }}>
              邮箱
            </div>
            <a
              href="mailto:2818258527@qq.com"
              style={{
                fontSize: "15px",
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              2818258527@qq.com
            </a>
          </div>

          <div
            className="contact-item"
            style={{
              textAlign: "center",
              padding: "24px 32px",
              borderRadius: "16px",
              border: "1px solid var(--border)",
              background: "rgba(22,22,36,0.5)",
              transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
              minWidth: "180px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(124,108,255,0.3)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "12px", color: "var(--text2)", marginBottom: "8px" }}>
              电话
            </div>
            <span style={{ fontSize: "15px", color: "var(--text)", fontWeight: 500 }}>
              15312357518
            </span>
          </div>

          <div
            className="contact-item"
            style={{
              textAlign: "center",
              padding: "24px 32px",
              borderRadius: "16px",
              border: "1px solid var(--border)",
              background: "rgba(22,22,36,0.5)",
              transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
              minWidth: "180px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(124,108,255,0.3)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "12px", color: "var(--text2)", marginBottom: "8px" }}>
              GitHub
            </div>
            <a
              href="https://github.com/RTO0518"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "15px",
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              github.com/RTO0518
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            fontSize: "13px",
            color: "var(--text2)",
          }}
        >
          &copy; 2026 戎涛
        </div>
      </div>
    </section>
  );
}
