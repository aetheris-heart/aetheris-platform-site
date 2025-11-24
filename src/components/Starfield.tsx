import { useRef, useEffect } from "react";

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars: { x: number; y: number; z: number }[] = [];
    const numStars = 800;

    // 🌌 Génération des étoiles
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * width,
      });
    }

    // ✨ Animation du champ d’étoiles
    const moveStars = () => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 15, 0.5)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= 2;
        if (star.z <= 0) {
          star.z = width;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = (1 - star.z / width) * 2;
          const opacity = 1 - star.z / width;
          ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`; // 🌠 Lueur cyan Aetheris
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(moveStars);
    };

    moveStars();

    // 🧩 Réajuste la taille du canvas si la fenêtre change
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
      className="fixed top-0 left-0 w-full h-full z-0 bg-transparent"
    />
  );
};

export default Starfield;
