import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AetherisSecurity = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100 flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556742400-b5b7c5121f85?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-green-800/50 to-black/80 backdrop-blur-sm" />

      <motion.div className="absolute w-[600px] h-[600px] bg-emerald-400/30 rounded-full blur-3xl top-0 left-10 animate-pulse" />
      <motion.div className="absolute w-[400px] h-[400px] bg-green-500/30 rounded-full blur-3xl bottom-0 right-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-4xl px-6 py-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-300 mb-6 drop-shadow-[0_0_25px_rgba(0,255,150,0.5)]">
          AETHERIS SECURITY
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Bouclier éthique d’Aetheris : chaque donnée, chaque identité, chaque pensée numérique est protégée par des systèmes IA auto-régulés et biométriques.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/technologie")}
          className="mt-10 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full shadow-lg border border-emerald-300/50 backdrop-blur-md"
        >
          ⬅️ Retour à la technologie
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AetherisSecurity;
