import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CloudSun, Wind } from "lucide-react";

const Climat = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-800 p-10 flex flex-col items-center justify-center">
      {/* 🌤️ FOND VIVANT — CIEL DYNAMIQUE CODÉ */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-sky-200 via-blue-300 to-indigo-400"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ☁️ Nuages animés */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white opacity-70 select-none"
          style={{
            top: `${10 + Math.random() * 60}%`,
            left: `${-20 + Math.random() * 10}%`,
            fontSize: `${80 + Math.random() * 50}px`,
          }}
          animate={{ x: ["-10%", "110%"] }}
          transition={{
            duration: 45 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          ☁️
        </motion.div>
      ))}

      {/* 🌞 Halo solaire dynamique */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-yellow-400/30 rounded-full blur-3xl top-10 right-[-200px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌈 Halo bleu lointain */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl bottom-[-150px] left-[-200px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌍 CONTENU PRINCIPAL */}
      <div className="relative z-10 max-w-4xl text-center bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-blue-100/50">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-[0_0_10px_rgba(30,64,175,0.3)]">
          🌦️ AETHERIS CLIMAT
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Aetheris Climat repose sur des{" "}
          <strong>stations météorologiques IA</strong> équipées de capteurs de
          pression, température, UV, vent et pluie.  
          Ces données permettent de <strong>prévoir les risques climatiques</strong> et
          d’aider les communautés à se préparer face aux changements
          environnementaux. 🌍
        </p>

        {/* 🌬️ Cartes de fonctionnalités */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/80 rounded-2xl border-l-4 border-blue-600 shadow-lg"
          >
            <CloudSun className="w-10 h-10 text-blue-600 mb-2" />
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Modélisation prédictive
            </h3>
            <p className="text-gray-700">
              L’IA Aetheris fusionne les données issues des capteurs et satellites
              pour établir des <strong>modèles de prévision météo ultra-précis</strong> et
              générer des alertes climatiques intelligentes.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/80 rounded-2xl border-l-4 border-indigo-500 shadow-lg"
          >
            <Wind className="w-10 h-10 text-indigo-600 mb-2" />
            <h3 className="text-xl font-bold text-indigo-800 mb-2">
              Prévention et alerte
            </h3>
            <p className="text-gray-700">
              En cas d’anomalie (sécheresse, tempête, inondation), Aetheris
              transmet <strong>des alertes automatiques</strong> aux autorités et
              utilisateurs connectés via ses réseaux de capteurs.
            </p>
          </motion.div>
        </motion.div>

        <p className="mt-12 italic text-gray-700">
          « L’IA Aetheris ne prédit pas le futur, elle le prépare. »
        </p>

        {/* 🔙 Bouton retour */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/environnement")}
          className="mt-10 px-8 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-full shadow-lg transition"
        >
          ⬅️ Retour à l’Environnement
        </motion.button>
      </div>
    </div>
  );
};

export default Climat;
