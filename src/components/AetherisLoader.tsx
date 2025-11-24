import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const loadingText = [
  "🧠 Initialisation du noyau AETHERIS...",
  "🔗 Connexion au réseau quantique...",
  "⚡ Activation des protocoles IA sécurisés...",
  "🌐 Synchronisation des modules hospitaliers...",
  "💫 Démarrage du système cognitif AETHERIS ✅",
];

const AetherisLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < loadingText.length - 1 ? prev + 1 : prev));
    }, 700);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-cyan-950 text-cyan-300 font-mono text-sm z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2 } }}
        >
          {/* 🌌 Fond dynamique holographique */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1),_transparent_80%)]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ repeat: Infinity, duration: 6 }}
          />

          {/* 🔮 Halo énergétique central */}
          <motion.div
            className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
          />

          {/* 💠 Sphère lumineuse centrale */}
          <motion.div
            className="relative w-40 h-40 rounded-full border border-cyan-400/50 shadow-[0_0_40px_#00ffff88] flex items-center justify-center"
            animate={{
              rotate: [0, 360],
              boxShadow: [
                "0 0 30px #00ffff44",
                "0 0 60px #00ffff88",
                "0 0 30px #00ffff44",
              ],
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <motion.div
              className="absolute w-24 h-24 rounded-full bg-cyan-400/30 blur-2xl"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.span
              className="text-2xl font-bold text-cyan-300 tracking-widest"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              AETHERIS
            </motion.span>
          </motion.div>

          {/* 🧠 Texte d’initialisation IA */}
          <motion.div
            className="mt-10 text-center space-y-2 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {loadingText.slice(0, step + 1).map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          {/* Curseur lumineux */}
          <motion.div
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="mt-4 text-cyan-200 text-lg"
          >
            █
          </motion.div>

          {/* ⚡ Lignes d’énergie descendantes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-20 bg-gradient-to-b from-cyan-400/70 to-transparent top-0"
                style={{ left: `${Math.random() * 100}%` }}
                animate={{
                  top: ["-10%", "110%"],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AetherisLoader;
