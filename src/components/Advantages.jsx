const advantages = [
  {
    icon: "\u{1F916}",
    title: "LangChain 全栈开发",
    desc: "熟练掌握 LLM/Chain/Retriever/Memory 核心组件，深入理解 RAG 全流程，能独立完成 AI 应用全链路落地。",
  },
  {
    icon: "\u{1F4AC}",
    title: "Agent 框架",
    desc: "熟悉 ReAct、Plan-and-Execute 等 Agent 框架，基于 asyncio 实现多步工具调用闭环与并发调度。",
  },
  {
    icon: "\u{1F4CA}",
    title: "RAG 检索增强",
    desc: "熟练使用 Chroma/FAISS 向量数据库，掌握 Embedding 模型向量化落地，实现高准确率文档问答。",
  },
  {
    icon: "\u{1F40D}",
    title: "Python 异步编程",
    desc: "熟练 asyncio 异步编程、装饰器、设计模式，能开发高并发可扩展应用，具备 Java/Vue 基础。",
  },
  {
    icon: "\u{1F6E0}",
    title: "工程化工具",
    desc: "熟练使用 Linux、Git 工作流，能运用 Claude Code/Cursor 等 AI 编程工具，提升开发效率 40%+。",
  },
  {
    icon: "\u{1F504}",
    title: "MCP 协议扩展",
    desc: "支持 MCP 协议扩展与长对话上下文管理，实现 200+ 轮对话持久化、恢复与分叉。",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="section reveal" style={{ background: "var(--surface)" }}>
      <div className="container">
        <p className="section-subtitle" style={{ marginBottom: "12px" }}>
          ADVANTAGES
        </p>
        <h2 className="section-title" style={{ marginBottom: "60px" }}>
          个人优势
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {advantages.map((a, i) => (
            <div
              key={i}
              className="adv-card card-hover gradient-border"
              style={{
                background: "var(--surface2)",
                borderRadius: "20px",
                padding: "36px",
                border: "1px solid var(--border)",
                position: "relative",
                transition:
                  "transform 0.4s cubic-bezier(.4,0,.2,1), box-shadow 0.4s cubic-bezier(.4,0,.2,1), border-color 0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector(".adv-icon").style.transform =
                  "scale(1.15) rotate(-5deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector(".adv-icon").style.transform =
                  "scale(1) rotate(0deg)";
              }}
            >
              <div
                className="adv-icon"
                style={{
                  fontSize: "40px",
                  marginBottom: "20px",
                  display: "inline-block",
                  transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
                }}
              >
                {a.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>
                {a.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text2)", lineHeight: 1.8 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
