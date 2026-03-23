import { motion } from "framer-motion";

const codeSnippet = `class BaseTool(ABC):
    """Strategy Pattern — each tool is interchangeable."""

    @abstractmethod
    def execute(self, **kwargs) -> str: ...

    @abstractmethod
    def get_declaration(self) -> dict: ...


class ToolRegistry:
    """Factory Pattern — maps names to tool instances."""

    def register(self, tool: BaseTool) -> None:
        self._tools[tool.name] = tool

    def execute(self, name: str, args: dict) -> str:
        return self._tools[name].execute(**args)


class Agent:
    """ReAct Loop — Reason → Act → Observe."""

    def chat(self, user_input: str) -> str:
        # 1. Send context + tools to LLM
        # 2. If tool_calls → execute → feed back
        # 3. Repeat until final answer
        ...`;

const CodePreview = () => {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Clean <span className="text-accent">Architecture</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            SOLID principles in action — modular, extensible, maintainable
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background border border-border rounded-lg overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/50">
            <span className="font-mono text-xs text-muted-foreground">ai_agent.py</span>
          </div>
          <pre className="p-6 overflow-x-auto text-sm leading-relaxed font-mono">
            <code>
              {codeSnippet.split("\n").map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-muted-foreground/40 w-8 text-right mr-4 select-none text-xs leading-relaxed">
                    {i + 1}
                  </span>
                  <span
                    className={
                      line.startsWith("class ")
                        ? "text-secondary"
                        : line.includes("def ")
                          ? "text-primary"
                          : line.trimStart().startsWith("#") || line.trimStart().startsWith('"""')
                            ? "text-muted-foreground"
                            : "text-foreground"
                    }
                  >
                    {line || " "}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default CodePreview;
