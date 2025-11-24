import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Leaf, TreePine } from "lucide-react";

const Ecologie = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-800 p-10 flex flex-col items-center justify-center">
      {/* 🌿 FOND VIVANT — FORÊT CODÉE */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-100 via-emerald-200 to-teal-300"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🍃 Feuilles flottantes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-700 opacity-50 select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 10}%`,
            fontSize: `${Math.random() * 22 + 8}px`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, Math.random() * 180 - 90],
            opacity: [0.8, 0.6, 0.8],
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          🍃
        </motion.div>
      ))}

      {/* 🌫️ Halos organiques */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-green-300/30 rounded-full blur-3xl bottom-[-200px] left-[-150px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-emerald-400/25 rounded-full blur-3xl top-[-150px] right-[-200px]"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌍 CONTENU PRINCIPAL */}
      <div className="relative z-10 max-w-4xl text-center bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-green-100/50">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-green-900 mb-6 drop-shadow-[0_0_10px_rgba(22,163,74,0.3)]"
        >
          🌳 AETHERIS ÉCOLOGIE
        </motion.h1>

        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          <strong>Aetheris Écologie</strong> est le cœur vivant de notre mission environnementale.  
          Grâce à ses <strong>capteurs IA de terrain</strong> (air, sol, eau), elle surveille la santé des écosystèmes,  
          identifie les déséquilibres et prédit les zones à risque pour{" "}
          <strong>préserver la biodiversité et anticiper les crises naturelles</strong>.
        </p>

        {/* 🌿 Cartes de fonctions écologiques */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 text-left"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/80 rounded-2xl shadow-xl backdrop-blur-lg border-l-4 border-green-600"
          >
            <Leaf className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="text-2xl font-semibold text-green-800 mb-2">
              Analyse en temps réel
            </h3>
            <p className="text-gray-700">
              Les capteurs Aetheris collectent des données sur la{" "}
              <strong>qualité de l’air, du sol et de l’eau</strong>.  
              Ces informations nourrissent des modèles IA qui identifient les
              pollutions et anomalies écologiques instantanément.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/80 rounded-2xl shadow-xl backdrop-blur-lg border-l-4 border-emerald-500"
          >
            <TreePine className="w-10 h-10 text-emerald-700 mb-3" />
            <h3 className="text-2xl font-semibold text-emerald-800 mb-2">
              Préservation et reforestation
            </h3>
            <p className="text-gray-700">
              L’IA Aetheris modélise les{" "}
              <strong>zones à risque écologique</strong> et propose des{" "}
              <strong>plans de reforestation optimisés</strong> selon la biodiversité
              locale et la régénération naturelle du sol.
            </p>
          </motion.div>
        </motion.div>

        <p className="mt-12 italic text-gray-700">
          « Chaque capteur Aetheris est une cellule vivante de la planète,
          un souffle que l’IA écoute pour protéger la Terre. »
        </p>

        {/* 🔙 Bouton retour */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/environnement")}
          className="mt-10 px-8 py-3 bg-green-700 hover:bg-green-600 text-white rounded-full shadow-lg transition"
        >
          ⬅️ Retour à l’Environnement
        </motion.button>
      </div>
    </div>
  );
};

export default Ecologie;
