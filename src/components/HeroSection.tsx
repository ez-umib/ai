import { motion } from "framer-motion";
import { Bot, Cpu, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none z-10" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(160 100% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 100% 45%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
            Software Architecture × AI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Adaptive </span>
          <span className="text-primary text-glow">AI Agent</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A personal assistant built with{" "}
          <span className="text-secondary text-glow-blue">SOLID principles</span>,{" "}
          <span className="text-primary text-glow">GoF design patterns</span>, and the{" "}
          <span className="text-accent">ReAct reasoning loop</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { icon: Bot, label: "Strategy Pattern", sub: "Interchangeable tools" },
            { icon: Cpu, label: "Registry Pattern", sub: "Dynamic tool dispatch" },
            { icon: Zap, label: "ReAct Loop", sub: "Reason → Act → Observe" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-3 box-glow"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground font-mono">{item.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
