import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ParticleGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouse);

    const cols = Math.ceil(canvas.offsetWidth / 40);
    const rows = Math.ceil(canvas.offsetHeight / 40);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      const isDark = document.documentElement.classList.contains("dark") || !document.documentElement.classList.contains("light");

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * 40 + 20;
          const y = j * 40 + 20;
          const dist = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
          const maxDist = 150;
          const intensity = Math.max(0, 1 - dist / maxDist);

          const baseAlpha = isDark ? 0.06 : 0.08;
          const alpha = baseAlpha + intensity * 0.5;
          const size = 1.5 + intensity * 3;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `hsla(185, 80%, 50%, ${alpha})`
            : `hsla(185, 80%, 40%, ${alpha})`;
          ctx.fill();

          if (intensity > 0.2) {
            // Draw connecting lines to nearby dots
            for (let di = -1; di <= 1; di++) {
              for (let dj = -1; dj <= 1; dj++) {
                if (di === 0 && dj === 0) continue;
                const nx = (i + di) * 40 + 20;
                const ny = (j + dj) * 40 + 20;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(nx, ny);
                ctx.strokeStyle = isDark
                  ? `hsla(185, 80%, 50%, ${intensity * 0.15})`
                  : `hsla(185, 80%, 40%, ${intensity * 0.1})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ParticleGrid;
