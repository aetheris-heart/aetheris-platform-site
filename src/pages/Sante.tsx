import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Sante = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🩺 Image / animation médicale de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588776814546-ec7d1c3a9f62?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/40 via-blue-900/50 to-black/70 backdrop-blur-sm" />

      {/* 🌟 Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl px-6 py-20 text-white"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
          Santé & Intelligence
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-100 drop-shadow-lg">
          Aetheris révolutionne la médecine moderne grâce à une intelligence
          artificielle empathique et prédictive.  
          Nos systèmes accompagnent les médecins dans la détection précoce, la
          prévention et la recherche clinique, tout en replaçant **l’humain au cœur du soin**.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/sante/ia-medicale")}
            className="cursor-pointer bg-white/10 border border-cyan-200/40 p-6 rounded-2xl shadow-xl backdrop-blur-md max-w-sm hover:bg-white/20 transition"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
              🧠 IA Médicale
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Analyse automatique des fonctions vitales, aide au diagnostic,
              détection d’anomalies et génération de rapports médicaux précis.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/sante/surveillance")}
            className="cursor-pointer bg-white/10 border border-cyan-200/40 p-6 rounded-2xl shadow-xl backdrop-blur-md max-w-sm hover:bg-white/20 transition"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
              💓 Surveillance Continue
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Suivi temps réel des patients via tableaux IA, alertes intelligentes
              et prévision des risques cliniques.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 text-gray-300 text-sm italic"
        >
          “Aetheris, là où la science rencontre la conscience.” 🩺
        </motion.p>

        {/* 🔙 Bouton retour à l'accueil */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mt-12 px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-full shadow-lg transition-all border border-cyan-300/50 backdrop-blur-md"
        >
          ⬅️ Retour à l'accueil
        </motion.button>
      </motion.div>

      {/* ✨ Particules lumineuses */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-pulse-slow absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_20px_5px_rgba(0,255,255,0.4)]" />
        <div className="animate-pulse-slow absolute top-2/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_25px_10px_rgba(0,200,255,0.3)]" />
        <div className="animate-pulse-slow absolute bottom-1/3 left-1/2 w-2 h-2 bg-teal-200 rounded-full shadow-[0_0_15px_6px_rgba(0,255,200,0.3)]" />
      </div>
    </div>
  );
};

export default Sante;
