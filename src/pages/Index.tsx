import HeroSection from "@/components/HeroSection";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ToolCards from "@/components/ToolCards";
import TerminalChat from "@/components/TerminalChat";
import CodePreview from "@/components/CodePreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ArchitectureDiagram />
      <ToolCards />
      <TerminalChat />
      <CodePreview />

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Built with SOLID principles · Strategy · Factory · Observer · ReAct
        </p>
      </footer>
    </div>
  );
};

export default Index;
