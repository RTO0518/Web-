import { useState, useEffect, useRef } from "react";

function CountUp({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const numValue = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = numValue / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= numValue) {
              setCount(numValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numValue, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const stats = [
    { label: "项目经验", value: "2" },
    { label: "掌握技术", value: "10+" },
    { label: "AI 工具", value: "5+" },
    { label: "自学编程", value: "1+" },
  ];

  return (
    <section id="about" className="section reveal" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Avatar / Persona */}
          <div>
            <div
              className="card-hover gradient-border"
              style={{
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: "24px",
                overflow: "hidden",
                background: "linear-gradient(135deg, var(--surface2), var(--border))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "64px",
                border: "1px solid var(--border)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(124,108,255,0.08) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    fontSize: "80px",
                    marginBottom: "12px",
                    lineHeight: 1,
                    background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 900,
                  }}
                >
                  RD
                </div>
                <div style={{ fontSize: "14px", color: "var(--text2)" }}>戎 涛</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="section-subtitle" style={{ marginBottom: "12px" }}>
              ABOUT
            </p>
            <h2 className="section-title" style={{ marginBottom: "24px" }}>
              关于我
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "var(--text2)",
                lineHeight: 2,
                marginBottom: "32px",
              }}
            >
              我是戎涛，一名应届毕业生，专注于 AI Agent 开发与 RAG
              检索增强生成技术。我擅长构建智能问答系统、自动化工作流，以及基于
              LangChain 的全栈 AI 应用。
              <br />
              <br />
              熟悉 Python 后端开发、向量数据库、大模型应用集成等技术栈，能够将
              AI 能力落地到实际产品中。对新技术保持热情，具备快速学习和独立交付的能力。
            </p>

            {/* Contact info */}
            <div
              style={{
                display: "flex",
                gap: "32px",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ fontSize: "12px", color: "var(--text2)", marginBottom: "4px" }}>
                  邮箱
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>2818258527@qq.com</div>
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "var(--text2)", marginBottom: "4px" }}>
                  电话
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>15312357518</div>
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "var(--text2)", marginBottom: "4px" }}>
                  GitHub
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500 }}>
                  <a
                    href="https://github.com/RTO0518"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "var(--accent)",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    RTO0518
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="card-hover gradient-border"
                  style={{
                    background: "var(--surface2)",
                    borderRadius: "16px",
                    padding: "24px 20px",
                    textAlign: "center",
                    border: "1px solid var(--border)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: "4px",
                    }}
                  >
                    <CountUp value={s.value} />+
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text2)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
