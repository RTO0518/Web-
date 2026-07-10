const projects = [
  {
    title: "智能知识库问答系统",
    subtitle: "RAG · AI · 全栈开发",
    desc: "基于检索增强生成的企业文档智能问答系统，支持自然语言提问与答案来源追溯。向量检索召回 Top-3 相关片段，答案准确率达 85%+。",
    tags: ["LangChain", "Chroma", "智谱GLM", "Python"],
    link: "https://github.com/RTO0518/ai_research_assistant",
    gradient: "linear-gradient(135deg, #1a1a3e, #2d1b5e)",
  },
  {
    title: "MiniCode 编程助手",
    subtitle: "AI Agent · 终端工具",
    desc: "轻量级终端 AI 编程 Agent，基于 asyncio 事件驱动实现多步工具调用闭环，支持 MCP 协议扩展与 200+ 轮长对话上下文管理。",
    tags: ["Python", "asyncio", "MCP", "TUI"],
    link: "#",
    gradient: "linear-gradient(135deg, #0f2922, #1a3a30)",
  },
  {
    title: "AI 品牌视觉系统",
    subtitle: "品牌设计 · 视觉识别",
    desc: "结合 Midjourney / DALL·E 与设计系统方法论，为多个品牌完成从 LOGO、色彩体系到完整 UI Kit 的视觉识别系统设计。",
    tags: ["AI 生成", "品牌设计", "UI/UX", "Figma"],
    link: "#",
    gradient: "linear-gradient(135deg, #2a1a1a, #3e1a2e)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-subtitle" style={{marginBottom:"12px"}}>SELECTED WORKS</p>
        <h2 className="section-title" style={{marginBottom:"60px"}}>精选项目</h2>

        <div style={{display:"flex", flexDirection:"column", gap:"40px"}}>
          {projects.map((p, i) => (
            <div key={i} style={{
              display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:"60px",
              background:"var(--surface)", borderRadius:"24px", overflow:"hidden",
              border:"1px solid var(--border)", minHeight:"400px"
            }}>
              {/* Project image area */}
              <div style={{
                background: p.gradient, minHeight:"400px", height:"100%",
                display:"flex", alignItems:"center", justifyContent:"center",
                position:"relative", overflow:"hidden"
              }}>
                <div style={{
                  position:"absolute", inset:0, opacity:0.05,
                  backgroundImage: "radial-gradient(circle at 30% 50%, #fff 0%, transparent 50%)",
                }} />
                <div style={{textAlign:"center", position:"relative", zIndex:1}}>
                  <div style={{fontSize:"48px", marginBottom:"8px"}}>??</div>
                  <div style={{fontSize:"13px", color:"rgba(255,255,255,0.5)", letterSpacing:"2px"}}>
                    PROJECT 0{i + 1}
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div style={{padding:"48px 48px 48px 0", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <p style={{fontSize:"13px", color:"var(--accent)", letterSpacing:"2px", marginBottom:"12px"}}>
                  {p.subtitle}
                </p>
                <h3 style={{fontSize:"28px", fontWeight:700, marginBottom:"16px", letterSpacing:"-0.02em"}}>
                  {p.title}
                </h3>
                <p style={{fontSize:"14px", color:"var(--text2)", lineHeight:1.8, marginBottom:"24px"}}>
                  {p.desc}
                </p>
                <div style={{display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"28px"}}>
                  {p.tags.map((t, j) => (
                    <span key={j} style={{
                      background:"var(--surface2)", color:"var(--text2)", padding:"4px 14px",
                      borderRadius:"6px", fontSize:"12px", border:"1px solid var(--border)"
                    }}>{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" style={{
                  color:"var(--accent)", textDecoration:"none", fontSize:"14px", fontWeight:500,
                  display:"inline-flex", alignItems:"center", gap:"6px"
                }}>
                  查看详情 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
