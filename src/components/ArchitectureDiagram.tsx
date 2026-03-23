import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, RotateCcw } from "lucide-react";

const steps = [
  { label: "User Input", color: "text-foreground", bg: "bg-muted", border: "border-border" },
  { label: "Reason", color: "text-primary", bg: "bg-card", border: "border-primary/30", glow: true },
  { label: "Act (Tool Call)", color: "text-secondary", bg: "bg-card", border: "border-secondary/30" },
  { label: "Observe", color: "text-accent", bg: "bg-card", border: "border-accent/30" },
  { label: "Final Answer", color: "text-primary", bg: "bg-card", border: "border-primary/30", glow: true },
];

const ArchitectureDiagram = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-primary text-glow">ReAct</span> Agent Loop
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            Reason → Act → Observe — repeat until resolved
          </p>
        </motion.div>

        {/* Desktop flow */}
        <div className="hidden md:flex items-center justify-center gap-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div
                className={`${step.bg} ${step.border} border rounded-lg px-5 py-4 text-center min-w-[130px] ${step.glow ? "box-glow" : ""}`}
              >
                <span className={`font-mono text-sm font-semibold ${step.color}`}>
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Loop arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="hidden md:flex justify-center mt-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <RotateCcw className="w-4 h-4" />
            <span className="font-mono text-xs">Loop back if tool called</span>
          </div>
        </motion.div>

        {/* Mobile flow */}
        <div className="flex md:hidden flex-col items-center gap-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`${step.bg} ${step.border} border rounded-lg px-5 py-3 text-center w-48 ${step.glow ? "box-glow" : ""}`}
              >
                <span className={`font-mono text-sm font-semibold ${step.color}`}>
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <ArrowDown className="w-4 h-4 text-muted-foreground" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Architecture components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {[
            {
              title: "MemoryManager",
              desc: "Stores conversation history for contextual awareness across turns. Implements sliding window to manage token limits.",
              pattern: "SRP",
            },
            {
              title: "ToolRegistry",
              desc: "Factory that maps tool names to implementations. No if-else chains — tools self-register via the registry pattern.",
              pattern: "Factory",
            },
            {
              title: "Agent",
              desc: "Orchestrates the ReAct loop. Depends on abstractions (BaseTool, MemoryManager), never on concrete tool implementations.",
              pattern: "DIP",
            },
          ].map((comp, i) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono text-primary font-semibold">{comp.title}</h3>
                <span className="font-mono text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                  {comp.pattern}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{comp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
