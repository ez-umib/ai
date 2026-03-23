import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const DEMO_RESPONSES: Record<string, { tool?: string; args?: string; result?: string; answer: string }> = {
  "what is 2^10 + sqrt(144)": {
    tool: "calculator",
    args: '{"expression": "2**10 + sqrt(144)"}',
    result: "Result: 1036.0",
    answer: "2^10 + sqrt(144) = 1,036.",
  },
  "convert 42 km to miles": {
    tool: "unit_converter",
    args: '{"value": 42, "from_unit": "km", "to_unit": "miles"}',
    result: "42 km = 26.0976 miles",
    answer: "42 kilometers is approximately 26.1 miles.",
  },
  "what time is it": {
    tool: "datetime_info",
    args: '{"query": "now"}',
    result: `Current date and time: ${new Date().toISOString().slice(0, 19).replace("T", " ")}`,
    answer: `The current date and time is ${new Date().toLocaleString()}.`,
  },
  "translate hello to spanish": {
    tool: "translator",
    args: '{"text": "hello", "target_language": "Spanish"}',
    result: "Translation (Spanish): hola",
    answer: '"Hello" in Spanish is "hola".',
  },
};

const findResponse = (input: string) => {
  const lower = input.toLowerCase().trim();
  for (const [key, val] of Object.entries(DEMO_RESPONSES)) {
    if (lower.includes(key) || key.includes(lower)) return val;
  }
  return {
    answer:
      "I'm a demo agent running client-side. Try asking me to calculate something, convert units, check the time, or translate a word! For the full experience, run the Python agent from the downloadable file.",
  };
};

const TerminalChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: "Personal Assistant Agent initialized. Type a message below." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userInput = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userInput }]);
    setIsTyping(true);

    const response = findResponse(userInput);

    // Simulate tool call delay
    if (response.tool) {
      await new Promise((r) => setTimeout(r, 400));
      setMessages((prev) => [
        ...prev,
        { role: "system", content: `🔧 Tool: ${response.tool}(${response.args})` },
      ]);
      await new Promise((r) => setTimeout(r, 600));
      setMessages((prev) => [
        ...prev,
        { role: "system", content: `📋 Result: ${response.result}` },
      ]);
    }

    await new Promise((r) => setTimeout(r, 500));
    setMessages((prev) => [...prev, { role: "assistant", content: response.answer }]);
    setIsTyping(false);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Interactive <span className="text-primary text-glow">Demo</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            Try: "what is 2^10 + sqrt(144)" · "convert 42 km to miles" · "translate hello to spanish"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg overflow-hidden box-glow"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-muted-foreground">agent_cli — bash</span>
            <div className="ml-auto flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-2 font-mono text-sm">
            {messages.map((msg, i) => (
              <div key={i} className="leading-relaxed">
                {msg.role === "user" && (
                  <div>
                    <span className="text-primary">👤 You:</span>{" "}
                    <span className="text-foreground">{msg.content}</span>
                  </div>
                )}
                {msg.role === "assistant" && (
                  <div>
                    <span className="text-secondary">🤖 Assistant:</span>{" "}
                    <span className="text-foreground">{msg.content}</span>
                  </div>
                )}
                {msg.role === "system" && (
                  <div className="text-muted-foreground text-xs">{msg.content}</div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="text-muted-foreground text-xs">
                <span className="animate-pulse-glow">● thinking...</span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center border-t border-border px-4 py-3 gap-2 bg-muted/30">
            <span className="text-primary font-mono text-sm">❯</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask the agent..."
              className="flex-1 bg-transparent text-foreground font-mono text-sm outline-none placeholder:text-muted-foreground/50"
            />
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="text-primary hover:text-primary/80 disabled:text-muted-foreground/30 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalChat;
