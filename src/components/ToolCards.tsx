import { motion } from "framer-motion";
import { Calculator, Clock, Languages, Ruler } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    name: "Calculator",
    desc: "Evaluates mathematical expressions safely using a sandboxed namespace with support for sqrt, sin, cos, log, pi, and more.",
    custom: false,
  },
  {
    icon: Clock,
    name: "DateTime",
    desc: "Returns current date/time or calculates days between dates. Supports queries like 'now', 'date', 'time', and 'days_until:YYYY-MM-DD'.",
    custom: false,
  },
  {
    icon: Languages,
    name: "Translator",
    desc: "Translates text between languages using a cached dictionary with LLM fallback. Custom tool demonstrating extensibility.",
    custom: true,
  },
  {
    icon: Ruler,
    name: "Unit Converter",
    desc: "Converts between common units — length, weight, temperature, volume. Supports km↔miles, kg↔lbs, °C↔°F, and more.",
    custom: true,
  },
];

const ToolCards = () => {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tool <span className="text-secondary text-glow-blue">Strategies</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            Each tool extends BaseTool — adding new ones never modifies the Agent (OCP)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/40 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <tool.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-mono font-semibold text-foreground">{tool.name}</h3>
                    {tool.custom && (
                      <span className="font-mono text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                        CUSTOM
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolCards;
