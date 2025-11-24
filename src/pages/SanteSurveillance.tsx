import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SanteSurveillance = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 💠 Fond visuel clinique */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-cyan-900/60 to-black/80 backdrop-blur-sm" />

      {/* 🌟 Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-4xl px-6 py-16 text-white"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
          💓 Surveillance Continue IA
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-10">
          Aetheris surveille les patients en continu grâce à une technologie de capteurs intelligents 
          et d’analyse prédictive.  
          Le système alerte les soignants en cas d’anomalie critique et anticipe les risques 
          avant qu’ils ne deviennent urgents.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 border border-cyan-300/30 rounded-2xl shadow-xl backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Alertes Vitales</h3>
            <p className="text-gray-200">
              Le système détecte automatiquement toute chute de tension, variation cardiaque 
              ou désaturation en oxygène.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 border border-cyan-300/30 rounded-2xl shadow-xl backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Suivi Temporel</h3>
            <p className="text-gray-200">
              Les courbes d’évolution sont analysées sur 24h, 7j ou 30j pour repérer 
              les tendances de dégradation avant tout symptôme visible.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-gray-300 italic"
        >
          “Aetheris observe, comprend et prévient — avant même l’urgence.” 🫀
        </motion.p>

        {/* 🔙 Retour */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/sante")}
          className="mt-10 px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition"
        >
          ⬅️ Retour à la Santé
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SanteSurveillance;
