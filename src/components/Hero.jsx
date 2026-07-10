import { useState, useEffect, useRef } from "react";

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(60, Math.floor(window.innerWidth / 25));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,108,255,${p.opacity})`;
        ctx.fill();
      });

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,108,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            戎涛<span style={{ color: "var(--accent)" }}>.</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">经历</a></li>
            <li><a href="#projects">作品</a></li>
            <li><a href="#advantages">优势</a></li>
            <li><a href="#contact" className="nav-cta">联系我</a></li>
          </ul>
        </div>
      </nav>

      <section
        className="hero"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div className="hero-gradient" />
        <div className="hero-glow" />
        <div className="hero-grid" />
        <Particles />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p
            className="animate-in"
            style={{
              fontSize: "14px",
              color: "var(--accent)",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 500,
            }}
          >
            AI · 设计 · 开发
          </p>
          <h1
            className="animate-in-delay"
            style={{
              fontSize: "clamp(36px, 7vw, 80px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "24px",
              maxWidth: "900px",
            }}
          >
            用技术与创意
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #7c6cff, #3b82f6, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              构建更好的产品
            </span>
          </h1>
          <p
            className="animate-in-delay2"
            style={{
              fontSize: "18px",
              color: "var(--text2)",
              maxWidth: "600px",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            擅长 LangChain 全栈开发与 AI 应用构建，兼具设计思维
          </p>
          <div
            className="animate-in-delay2"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="#projects"
              className="hero-btn-primary"
              style={{
                padding: "14px 36px",
                background: "var(--accent)",
                color: "#fff",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "15px",
                transition: "transform 0.3s, box-shadow 0.3s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(124,108,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              查看作品
            </a>
            <a
              href="#contact"
              style={{
                padding: "14px 36px",
                border: "1px solid var(--border)",
                color: "var(--text)",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "15px",
                transition: "transform 0.3s, border-color 0.3s, background 0.3s",
                display: "inline-block",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.background = "rgba(124,108,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              联系我
            </a>
          </div>
        </div>

        <div
          className="scroll-indicator"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "var(--text2)",
            fontSize: "12px",
          }}
        >
          <span>SCROLL</span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
        </div>
      </section>
    </>
  );
}
