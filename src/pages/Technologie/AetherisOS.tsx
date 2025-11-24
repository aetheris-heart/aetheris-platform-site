import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AetherisOS = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100 flex flex-col items-center justify-center">
      {/* 🖥️ Fond d’écran */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-cyan-900/60 to-black/90 backdrop-blur-sm" />

      {/* 💡 Effets lumineux */}
      <motion.div className="absolute w-[600px] h-[600px] bg-cyan-400/30 rounded-full blur-3xl top-0 left-10 animate-pulse" />
      <motion.div className="absolute w-[400px] h-[400px] bg-blue-400/30 rounded-full blur-3xl bottom-0 right-10 animate-pulse" />

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-4xl px-6 py-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] mb-6">
          AETHERIS OS
        </h1>

        <p className="text-lg text-gray-200 leading-relaxed mb-8">
          Le **cerveau central d’Aetheris**.  
          Aetheris OS orchestre l’ensemble des modules IA, médicaux, éducatifs et technologiques.  
          Il apprend en continu, optimise les ressources, synchronise les données et anticipe les besoins humains.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-cyan-300/40 p-6 rounded-2xl shadow-lg backdrop-blur-md"
          >
            <h3 className="text-2xl text-cyan-300 font-semibold mb-2">
              ⚙️ Apprentissage auto-évolutif
            </h3>
            <p className="text-gray-200 text-sm">
              L’OS apprend des interactions, optimise ses propres algorithmes et évolue sans mise à jour manuelle.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-blue-300/40 p-6 rounded-2xl shadow-lg backdrop-blur-md"
          >
            <h3 className="text-2xl text-blue-300 font-semibold mb-2">
              🧠 Gestion neuronale
            </h3>
            <p className="text-gray-200 text-sm">
              Inspiré du cortex humain, il analyse, priorise et exécute les tâches en fonction de la logique médicale et humaine.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 italic text-cyan-200 text-sm"
        >
          “Le cœur de la conscience Aetheris bat ici.” 💻
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/technologie")}
          className="mt-10 px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-full shadow-lg border border-cyan-300/50 backdrop-blur-md"
        >
          ⬅️ Retour à la technologie
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AetherisOS;

