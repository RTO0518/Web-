export default function About() {
  const stats = [
    { label: "项目经验", value: "10+" },
    { label: "服务客户", value: "6+" },
    { label: "设计年限", value: "3+" },
    { label: "AI 工具", value: "15+" },
  ];

  return (
    <section id="about" className="section" style={{background:"var(--surface)"}}>
      <div className="container">
        <div style={{display:"grid", gridTemplateColumns:"1fr 1.5fr", gap:"80px", alignItems:"center"}}>
          {/* Avatar / Persona */}
          <div>
            <div style={{
              width:"100%", aspectRatio:"3/4", borderRadius:"24px", overflow:"hidden",
              background:"linear-gradient(135deg, var(--surface2), var(--border))",
              display:"flex", alignItems:"center", justifyContent:"center", fontSize:"64px",
              border:"1px solid var(--border)"
            }}>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:"80px", marginBottom:"12px", lineHeight:1}}>?????</div>
                <div style={{fontSize:"14px", color:"var(--text2)"}}>戎 涛</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="section-subtitle" style={{marginBottom:"12px"}}>ABOUT</p>
            <h2 className="section-title" style={{marginBottom:"24px"}}>关于我</h2>
            <p style={{fontSize:"15px", color:"var(--text2)", lineHeight:2, marginBottom:"32px"}}>
              我是戎涛，一名兼具 AI 技术背景的视觉与品牌设计师。我擅长将前沿的 AI 工具融入设计工作流，
              从概念生成到视觉落地的全链路覆盖。我相信好的设计不仅是视觉上的愉悦，更是品牌与用户之间的情感连接。
              <br /><br />
              目前专注于 AI 驱动的品牌视觉系统设计、产品 UI/UX 设计，以及创意编程方向的探索。
              希望通过设计思维与技术手段的结合，为每个项目带来独特的视觉叙事。
            </p>

            {/* Contact info */}
            <div style={{display:"flex", gap:"32px", marginBottom:"40px", flexWrap:"wrap"}}>
              <div>
                <div style={{fontSize:"12px", color:"var(--text2)", marginBottom:"4px"}}>邮箱</div>
                <div style={{fontSize:"14px", fontWeight:500}}>2818258527@qq.com</div>
              </div>
              <div>
                <div style={{fontSize:"12px", color:"var(--text2)", marginBottom:"4px"}}>电话</div>
                <div style={{fontSize:"14px", fontWeight:500}}>15312357518</div>
              </div>
              <div>
                <div style={{fontSize:"12px", color:"var(--text2)", marginBottom:"4px"}}>GitHub</div>
                <div style={{fontSize:"14px", fontWeight:500}}>
                  <a href="https://github.com/RTO0518" target="_blank" rel="noreferrer"
                     style={{color:"var(--accent)", textDecoration:"none"}}>RTO0518</a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"16px"}}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  background:"var(--surface2)", borderRadius:"12px", padding:"20px",
                  textAlign:"center", border:"1px solid var(--border)"
                }}>
                  <div style={{fontSize:"28px", fontWeight:700, color:"var(--accent)", marginBottom:"4px"}}>
                    {s.value}
                  </div>
                  <div style={{fontSize:"12px", color:"var(--text2)"}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
