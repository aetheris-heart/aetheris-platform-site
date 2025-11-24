import { useEffect, useRef } from "react";

/**
 * 🌤️ Fond médical futuriste Aetheris
 * Dégradé clair animé (cyan / bleu / blanc)
 */
const BackgroundAetheris = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let t = 0;

    const draw = () => {
      if (!ctx) return;
      t += 0.002;

      // 🎨 Dégradé animé médical
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `hsl(${180 + Math.sin(t) * 20}, 100%, 88%)`);
      gradient.addColorStop(1, `hsl(${230 + Math.cos(t) * 20}, 100%, 93%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(draw);
    };

    draw();

    // 🔁 Ajustement lors du redimensionnement
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{
        background:
          "linear-gradient(135deg, #E0F7FA, #E3F2FD, #F8FBFF)",
      }}
    />
  );
};

export default BackgroundAetheris;
