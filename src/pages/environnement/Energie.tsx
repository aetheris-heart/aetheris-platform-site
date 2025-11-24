import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BatteryCharging, Zap } from "lucide-react";

const Energie = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-800 p-10 flex flex-col items-center justify-center">
      {/* ⚡ FOND VIVANT — ÉNERGIE CODÉE */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-orange-200 to-amber-300"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ⚡ Flux lumineux horizontaux */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] w-full bg-gradient-to-r from-yellow-300 via-orange-400 to-transparent opacity-50"
          style={{ top: `${10 + i * 10}%` }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + i * 1.2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.6,
          }}
        />
      ))}

      {/* 🌞 Halo solaire */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-yellow-400/25 rounded-full blur-3xl top-[-100px] right-[-200px]"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔋 Halo d’énergie terrestre */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-3xl bottom-[-200px] left-[-200px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ⚡ Particules énergétiques */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400 select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 12 + 10}px`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 30 - 15],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ⚡
        </motion.div>
      ))}

      {/* 🌍 CONTENU PRINCIPAL */}
      <div className="relative z-10 max-w-4xl text-center bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-yellow-100/50">
        <h1 className="text-5xl font-extrabold text-yellow-800 mb-6 drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">
          ⚡ AETHERIS ÉNERGIE
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Aetheris Énergie révolutionne la gestion des ressources électriques 🌞.  
          À l’aide de <strong>capteurs de tension, de courant et d’énergie solaire</strong>,  
          l’IA ajuste la consommation en temps réel, favorise l’autonomie et réduit l’empreinte énergétique globale.  
          Chaque watt devient une décision intelligente ⚙️.
        </p>

        {/* 🔋 Cartes IA énergétique */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/80 border-l-4 border-yellow-500 rounded-2xl shadow-lg"
          >
            <BatteryCharging className="w-10 h-10 text-yellow-600 mb-2" />
            <h3 className="text-xl font-bold text-yellow-700 mb-2">
              IA Énergétique
            </h3>
            <p className="text-gray-700">
              L’intelligence Aetheris <strong>régule automatiquement la
              consommation</strong> selon les besoins réels, améliorant le rendement
              et garantissant un équilibre énergétique durable.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/80 border-l-4 border-orange-500 rounded-2xl shadow-lg"
          >
            <Zap className="w-10 h-10 text-orange-600 mb-2" />
            <h3 className="text-xl font-bold text-orange-700 mb-2">
              Optimisation solaire
            </h3>
            <p className="text-gray-700">
              Les capteurs solaires Aetheris <strong>communiquent avec le réseau</strong>  
              pour équilibrer les apports et garantir une énergie propre, stable et intelligente à chaque instant.
            </p>
          </motion.div>
        </motion.div>

        <p className="mt-12 italic text-gray-700">
          « L’énergie la plus pure est celle que nous comprenons, pas celle que nous gaspillons. »
        </p>

        {/* 🔙 Bouton retour */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/environnement")}
          className="mt-10 px-8 py-3 bg-yellow-700 hover:bg-yellow-600 text-white rounded-full shadow-lg transition"
        >
          ⬅️ Retour à l’Environnement
        </motion.button>
      </div>
    </div>
  );
};

export default Energie;
