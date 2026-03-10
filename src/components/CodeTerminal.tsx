import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { text: "import { AI } from '@prathomik/core';", color: "text-primary" },
  { text: "import { deploy } from './cloud';", color: "text-muted-foreground" },
  { text: "", color: "" },
  { text: "const app = new AI.Builder()", color: "text-foreground" },
  { text: "  .withModel('gpt-4-turbo')", color: "text-primary" },
  { text: "  .withDatabase('postgres')", color: "text-primary" },
  { text: "  .enableRealtime()", color: "text-muted-foreground" },
  { text: "  .build();", color: "text-foreground" },
  { text: "", color: "" },
  { text: "await deploy(app, {", color: "text-foreground" },
  { text: "  scale: 'auto',", color: "text-primary" },
  { text: "  region: 'global'", color: "text-primary" },
  { text: "});", color: "text-foreground" },
];

const CodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= codeLines.length) return v;
        return v + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card overflow-hidden max-w-md w-full">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">prathomik.ts</span>
      </div>
      {/* Code body */}
      <div className="p-5 font-mono text-xs leading-6 min-h-[280px]">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={i < visibleLines ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className={line.color}
          >
            {line.text || "\u00A0"}
          </motion.div>
        ))}
        {visibleLines < codeLines.length && (
          <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default CodeTerminal;
