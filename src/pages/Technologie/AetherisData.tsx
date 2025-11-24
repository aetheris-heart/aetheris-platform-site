import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AetherisData = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100 flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/80 via-purple-800/50 to-black/80 backdrop-blur-sm" />

      <motion.div className="absolute w-[700px] h-[700px] bg-fuchsia-500/30 rounded-full blur-3xl top-0 left-10 animate-pulse" />
      <motion.div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl bottom-0 right-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-4xl px-6 py-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-fuchsia-300 mb-6 drop-shadow-[0_0_25px_rgba(255,0,200,0.5)]">
          AETHERIS DATA
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          La plateforme d’analyse prédictive.  
          Grâce à ses modèles neuronaux, Aetheris Data comprend les tendances, anticipe les crises et prévient les anomalies médicales.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/technologie")}
          className="mt-10 px-8 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold rounded-full shadow-lg border border-fuchsia-300/50 backdrop-blur-md"
        >
          ⬅️ Retour à la technologie
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AetherisData;
