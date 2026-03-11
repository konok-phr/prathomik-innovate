import { useEffect, useRef } from "react";

const ParticleGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Skip on mobile for performance
    if (window.innerWidth < 768) return;

    let animId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouse);

    const spacing = 50; // larger spacing = fewer dots
    const cols = Math.ceil(canvas.offsetWidth / spacing);
    const rows = Math.ceil(canvas.offsetHeight / spacing);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const isDark = document.documentElement.classList.contains("dark") || !document.documentElement.classList.contains("light");

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2;
          const y = j * spacing + spacing / 2;
          const dist = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
          const maxDist = 120;
          const intensity = Math.max(0, 1 - dist / maxDist);

          const baseAlpha = isDark ? 0.05 : 0.07;
          const alpha = baseAlpha + intensity * 0.4;
          const size = 1.2 + intensity * 2.5;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? `hsla(185, 80%, 50%, ${alpha})`
            : `hsla(185, 80%, 40%, ${alpha})`;
          ctx.fill();
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
      className="absolute inset-0 w-full h-full pointer-events-auto hidden md:block"
      style={{ opacity: 0.7 }}
    />
  );
};

export default ParticleGrid;
