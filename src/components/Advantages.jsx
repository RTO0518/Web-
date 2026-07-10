const advantages = [
  {
    icon: "??",
    title: "视觉叙事",
    desc: "善于通过色彩、排版与构图讲述品牌故事，让每一次视觉传达都成为有情感、有逻辑的叙事体验。",
  },
  {
    icon: "??",
    title: "AI 驱动设计",
    desc: "将 Midjourney、Stable Diffusion、DALL·E 等 AI 工具深度融入设计流程，实现创意生成到落地的效率飞跃。",
  },
  {
    icon: "?",
    title: "全栈执行力",
    desc: "从 Python 后端到前端展示，从 LangChain 开发到 API 对接，能独立完成从技术到设计的全链路落地。",
  },
  {
    icon: "??",
    title: "数据洞察",
    desc: "用数据分析驱动设计决策，通过用户研究与 A/B 测试验证设计方案，确保每个像素都有据可依。",
  },
  {
    icon: "??",
    title: "品牌系统思维",
    desc: "从 LOGO 到完整设计系统，构建可扩展、一致性强的品牌视觉体系，确保多触点体验的统一。",
  },
  {
    icon: "??",
    title: "快速迭代",
    desc: "熟练使用 Claude Code、Cursor 等 AI 编程工具，将开发效率提升 40%+，实现设计的快速原型与迭代。",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="section" style={{background:"var(--surface)"}}>
      <div className="container">
        <p className="section-subtitle" style={{marginBottom:"12px"}}>ADVANTAGES</p>
        <h2 className="section-title" style={{marginBottom:"60px"}}>个人优势</h2>

        <div style={{
          display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"24px"
        }}>
          {advantages.map((a, i) => (
            <div key={i} style={{
              background:"var(--surface2)", borderRadius:"20px", padding:"36px",
              border:"1px solid var(--border)", transition:"transform 0.3s, box-shadow 0.3s",
              cursor:"default"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{fontSize:"36px", marginBottom:"16px"}}>{a.icon}</div>
              <h3 style={{fontSize:"18px", fontWeight:600, marginBottom:"12px"}}>{a.title}</h3>
              <p style={{fontSize:"14px", color:"var(--text2)", lineHeight:1.8}}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
