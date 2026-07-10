import { useState, useEffect } from "react";

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
          <a href="#" className="nav-logo">戎涛<span style={{color:"var(--accent)"}}>.</span></a>
          <ul className="nav-links">
            <li><a href="#about">经历</a></li>
            <li><a href="#projects">作品</a></li>
            <li><a href="#advantages">优势</a></li>
            <li><a href="#contact" className="nav-cta">联系我</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" style={{
        position:"relative", height:"100vh", display:"flex", alignItems:"center", overflow:"hidden"
      }}>
        {/* Video background placeholder - dark gradient as fallback */}
        <div style={{
          position:"absolute", inset:0, zIndex:0,
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 30%, #0f172a 60%, #0a0a0f 100%)",
        }} />
        {/* Animated gradient overlay */}
        <div style={{
          position:"absolute", inset:0, zIndex:1,
          background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(108,108,255,0.08) 0%, transparent 70%)",
        }} />
        {/* Grid pattern */}
        <div style={{
          position:"absolute", inset:0, zIndex:1, opacity:0.03,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="container" style={{position:"relative", zIndex:2}}>
          <p className="animate-in" style={{
            fontSize:"16px", color:"var(--accent)", letterSpacing:"4px", textTransform:"uppercase",
            marginBottom:"20px", fontWeight:500
          }}>
            视觉设计 · AI 设计 · 品牌设计
          </p>
          <h1 className="animate-in-delay" style={{
            fontSize:"80px", fontWeight:900, letterSpacing:"-0.03em", lineHeight:1.1,
            marginBottom:"24px", maxWidth:"900px"
          }}>
            用创意与算法<br />
            <span style={{
              background: "linear-gradient(135deg, #6c6cff, #3b82f6, #60a5fa)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>重新定义视觉体验</span>
          </h1>
          <p className="animate-in-delay2" style={{
            fontSize:"18px", color:"var(--text2)", maxWidth:"600px", lineHeight:1.8, marginBottom:"40px"
          }}>
            探索设计与技术的交汇点，用 AI 驱动创意 workflow，
            打造有影响力的品牌视觉系统。
          </p>
          <div className="animate-in-delay2" style={{display:"flex", gap:"16px"}}>
            <a href="#projects" style={{
              padding:"14px 36px", background:"var(--accent)", color:"#fff",
              borderRadius:"10px", textDecoration:"none", fontWeight:600, fontSize:"15px"
            }}>查看作品</a>
            <a href="#contact" style={{
              padding:"14px 36px", border:"1px solid var(--border)", color:"var(--text)",
              borderRadius:"10px", textDecoration:"none", fontWeight:500, fontSize:"15px"
            }}>联系我</a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position:"absolute", bottom:"40px", left:"50%", transform:"translateX(-50%)", zIndex:2,
          display:"flex", flexDirection:"column", alignItems:"center", gap:"8px", color:"var(--text2)", fontSize:"12px"
        }}>
          <span>SCROLL</span>
          <div style={{
            width:"1px", height:"40px", background:"linear-gradient(to bottom, var(--text2), transparent)"
          }} />
        </div>
      </section>
    </>
  );
}
