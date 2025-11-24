import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sprout, Tractor } from "lucide-react";

const AgroIA = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-800 p-10 flex flex-col items-center justify-center">
      {/* 🌾 FOND VIVANT — CROISSANCE VERTE CODÉE */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-lime-100 via-green-200 to-amber-100"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌱 Particules dorées (graines vivantes) */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-amber-500 opacity-60 select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 20}%`,
            fontSize: `${Math.random() * 18 + 10}px`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0.8, 0.4, 0.8],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          🌱
        </motion.div>
      ))}

      {/* ☀️ Halo solaire agricole */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-yellow-400/25 rounded-full blur-3xl top-[-100px] right-[-200px]"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌿 Halo vert du sol */}
      <motion.div
        className="absolute w-[900px] h-[900px] bg-green-400/20 rounded-full blur-3xl bottom-[-200px] left-[-150px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌍 CONTENU PRINCIPAL */}
      <div className="relative z-10 max-w-4xl text-center bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-green-100/50">
        <h1 className="text-5xl font-extrabold text-green-900 mb-6 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
          🌾 AETHERIS AGROIA
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Aetheris AgroIA utilise <strong>l’intelligence artificielle</strong> pour
          soutenir les agriculteurs et préserver la biodiversité.  
          Des <strong>capteurs de sol, d’humidité et de fertilité</strong> connectés
          permettent d’anticiper les besoins des cultures, d’ajuster les arrosages
          et d’assurer une <strong>production durable et optimisée</strong>.
        </p>

        {/* 🌾 Cartes IA agricole */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/80 border-l-4 border-green-500 rounded-2xl shadow-lg"
          >
            <Sprout className="w-10 h-10 text-green-600 mb-2" />
            <h3 className="text-xl font-bold text-green-700 mb-2">
              IA de croissance
            </h3>
            <p className="text-gray-700">
              L’IA Aetheris analyse les cycles de culture, la température et
              l’humidité du sol pour recommander un{" "}
              <strong>arrosage intelligent et un ensemencement prédictif</strong>.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/80 border-l-4 border-emerald-500 rounded-2xl shadow-lg"
          >
            <Tractor className="w-10 h-10 text-emerald-700 mb-2" />
            <h3 className="text-xl font-bold text-emerald-800 mb-2">
              Agro-monitoring
            </h3>
            <p className="text-gray-700">
              Les capteurs Aetheris surveillent la{" "}
              <strong>fertilité du sol, la croissance végétale</strong> et les
              besoins nutritifs en temps réel, afin de minimiser les pertes et
              maximiser la santé écologique.
            </p>
          </motion.div>
        </motion.div>

        <p className="mt-12 italic text-gray-700">
          « Nourrir le monde sans épuiser la Terre, tel est le serment d’Aetheris AgroIA. »
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

export default AgroIA;
