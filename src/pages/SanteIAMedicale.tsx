import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SanteIAMedicale = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 🩺 Fond animé */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606813908785-9c8e9b8bb30a?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* 🌫️ Couche lumineuse */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-blue-900/40 to-black/80 backdrop-blur-[2px]" />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-cyan-400/25 rounded-full blur-3xl top-10 left-1/4 animate-pulse"
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-500/25 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse"
      />

      {/* 🌟 Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-5xl px-6 py-20 text-white"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">
          🧠 Aetheris IA Médicale
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-10">
          Aetheris développe une intelligence médicale prédictive, capable de comprendre
          les données cliniques, biologiques et visuelles afin d’aider les médecins
          à poser des diagnostics plus rapides, précis et humains.
        </p>

        {/* 💎 Sections descriptives */}
        <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 border border-cyan-300/30 rounded-2xl shadow-xl backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
              Diagnostic prédictif
            </h3>
            <p className="text-gray-200">
              L’IA analyse les constantes vitales, le dossier patient et les tendances biologiques pour
              anticiper les pathologies avant qu’elles ne deviennent critiques.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 border border-cyan-300/30 rounded-2xl shadow-xl backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
              Lecture d’images médicales
            </h3>
            <p className="text-gray-200">
              Scanner, IRM, radiographie : les algorithmes détectent tumeurs, lésions ou anomalies
              avec une précision clinique exceptionnelle.
            </p>
          </motion.div>
        </div>

        {/* 📊 Mini signal vital animé */}
        <div className="relative mt-16 h-20 w-full max-w-2xl mx-auto overflow-hidden">
          <svg
            viewBox="0 0 600 100"
            className="w-full h-full text-cyan-400 stroke-current"
            fill="none"
            strokeWidth="2"
          >
            <motion.path
              d="M0,50 L50,50 L70,10 L90,90 L110,50 L160,50 L180,20 L200,80 L220,50 L600,50"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            />
          </svg>
        </div>

        {/* ⚖️ Bloc éthique */}
        <div className="mt-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-cyan-300/30 shadow-lg max-w-3xl mx-auto text-gray-200">
          <h4 className="text-xl font-semibold text-cyan-300 mb-2">Éthique & Confiance</h4>
          <p>
            Aetheris s’engage pour une IA médicale responsable : 
            <span className="text-white"> protection des données, supervision humaine et transparence totale</span>.
            Chaque décision algorithmique est expliquée et validée par les professionnels de santé.
          </p>
        </div>

        {/* 🔙 Bouton retour */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/sante")}
          className="mt-12 px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition"
        >
          ⬅️ Retour à la Santé
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SanteIAMedicale;
