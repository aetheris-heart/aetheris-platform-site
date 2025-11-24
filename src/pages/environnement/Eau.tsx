import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Droplet, Waves } from "lucide-react";

const Eau = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-800 p-10 flex flex-col items-center justify-center">
      {/* 🌊 FOND VIVANT — OCÉAN CODÉ */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-cyan-100 via-sky-200 to-blue-400"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 💧 Ondes lumineuses horizontales */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-t border-cyan-100/40 w-full opacity-30"
          style={{
            top: `${i * 12 + 10}%`,
            left: 0,
            height: "1px",
          }}
          animate={{
            y: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* 🌫️ Halo océanique bleu */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-sky-400/30 rounded-full blur-3xl bottom-[-150px] left-[-200px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 💙 Halo turquoise supérieur */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-cyan-300/30 rounded-full blur-3xl top-[-100px] right-[-150px]"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🫧 Bulles flottantes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-100 select-none"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 10}%`,
            fontSize: `${Math.random() * 16 + 10}px`,
          }}
          animate={{
            y: ["0vh", "-120vh"],
            opacity: [0.2, 0.7, 0.2],
            x: [0, Math.random() * 30 - 15],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          🫧
        </motion.div>
      ))}

      {/* 🌍 CONTENU PRINCIPAL */}
      <div className="relative z-10 max-w-4xl text-center bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-cyan-100/50">
        <h1 className="text-5xl font-extrabold text-cyan-900 mb-6 drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">
          💧 AETHERIS EAU
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          L’eau est le <strong>cœur battant de la planète</strong>.  
          Aetheris surveille sa pureté, son débit et sa distribution via des{" "}
          <strong>capteurs de pH, de turbidité et de pression</strong>.  
          Grâce à son IA, elle <strong>prévient la pollution</strong> et anticipe les{" "}
          <strong>zones de stress hydrique</strong> à travers un réseau mondial connecté.
        </p>

        {/* 💧 Cartes fonctionnelles */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/80 border-l-4 border-cyan-500 rounded-2xl shadow-lg"
          >
            <Droplet className="w-10 h-10 text-cyan-600 mb-2" />
            <h3 className="text-xl font-bold text-cyan-800 mb-2">
              Capteurs hydriques
            </h3>
            <p className="text-gray-700">
              Les stations Aetheris mesurent la qualité des eaux de surface et souterraines
              pour détecter instantanément toute{" "}
              <strong>anomalie chimique ou contamination</strong>.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/80 border-l-4 border-sky-500 rounded-2xl shadow-lg"
          >
            <Waves className="w-10 h-10 text-sky-600 mb-2" />
            <h3 className="text-xl font-bold text-sky-800 mb-2">
              IA de distribution
            </h3>
            <p className="text-gray-700">
              L’IA Aetheris <strong>optimise la distribution hydrique</strong> selon les
              besoins régionaux, réduisant le gaspillage et améliorant la
              disponibilité de l’eau potable.
            </p>
          </motion.div>
        </motion.div>

        <p className="mt-12 italic text-gray-700">
          « Chaque goutte d’eau sauvée est un battement de cœur de plus pour la planète. »
        </p>

        {/* 🔙 Bouton retour */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/environnement")}
          className="mt-10 px-8 py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded-full shadow-lg transition"
        >
          ⬅️ Retour à l’Environnement
        </motion.button>
      </div>
    </div>
  );
};

export default Eau;
