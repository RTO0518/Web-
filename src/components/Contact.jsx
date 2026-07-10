export default function Contact() {
  return (
    <section id="contact" style={{
      minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden",
      background: "linear-gradient(135deg, #0a0a0f 0%, #0f0a1e 50%, #0a0a0f 100%)"
    }}>
      {/* Background effects */}
      <div style={{
        position:"absolute", inset:0, zIndex:0, overflow:"hidden",
        background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(108,108,255,0.06) 0%, transparent 70%)"
      }} />
      <div style={{
        position:"absolute", inset:0, zIndex:0, opacity:0.02,
        backgroundImage: "radial-gradient(circle at 30% 40%, rgba(108,108,255,0.3) 0%, transparent 30%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.2) 0%, transparent 30%)",
      }} />

      <div className="container" style={{position:"relative", zIndex:1, textAlign:"center"}}>
        <p className="animate-in" style={{
          fontSize:"14px", color:"var(--accent)", letterSpacing:"4px", textTransform:"uppercase",
          marginBottom:"20px", fontWeight:500
        }}>
          GET IN TOUCH
        </p>
        <h2 className="animate-in-delay" style={{
          fontSize:"72px", fontWeight:900, letterSpacing:"-0.03em", lineHeight:1.15,
          marginBottom:"32px"
        }}>
          一起创造<br />
          <span style={{
            background: "linear-gradient(135deg, #6c6cff, #3b82f6, #60a5fa)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>有意义的设计</span>
        </h2>
        <p className="animate-in-delay2" style={{
          fontSize:"16px", color:"var(--text2)", maxWidth:"500px", margin:"0 auto 48px", lineHeight:1.8
        }}>
          无论你有一个新的品牌项目、需要设计咨询，还是想聊聊 AI 与设计的结合，
          都欢迎随时联系。
        </p>

        <div className="animate-in-delay2" style={{
          display:"flex", justifyContent:"center", gap:"24px", flexWrap:"wrap", marginBottom:"60px"
        }}>
          <a href="mailto:2818258527@qq.com" style={{
            padding:"16px 48px", background:"var(--accent)", color:"#fff", borderRadius:"12px",
            textDecoration:"none", fontWeight:600, fontSize:"16px"
          }}>发送邮件</a>
          <a href="https://github.com/RTO0518" target="_blank" rel="noreferrer" style={{
            padding:"16px 48px", border:"1px solid var(--border)", color:"var(--text)", borderRadius:"12px",
            textDecoration:"none", fontWeight:500, fontSize:"16px"
          }}>GitHub</a>
        </div>

        {/* Contact info */}
        <div className="animate-in" style={{
          display:"flex", justifyContent:"center", gap:"48px", flexWrap:"wrap",
          padding:"32px 0", borderTop:"1px solid var(--border)"
        }}>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:"12px", color:"var(--text2)", marginBottom:"4px"}}>邮箱</div>
            <div style={{fontSize:"15px", color:"var(--text)"}}>2818258527@qq.com</div>
          </div>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:"12px", color:"var(--text2)", marginBottom:"4px"}}>电话</div>
            <div style={{fontSize:"15px", color:"var(--text)"}}>15312357518</div>
          </div>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:"12px", color:"var(--text2)", marginBottom:"4px"}}>GitHub</div>
            <div style={{fontSize:"15px", color:"var(--text)"}}>github.com/RTO0518</div>
          </div>
        </div>

        <p style={{marginTop:"48px", fontSize:"13px", color:"var(--text2)"}}>
          ? 2026 戎涛. All rights reserved.
        </p>
      </div>
    </section>
  );
}
