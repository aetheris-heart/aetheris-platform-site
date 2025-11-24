import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Class = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-gray-100">
      {/* 🏫 Fond technologique */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584697964154-13b5a8b1f1e3?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-indigo-900/70 to-black/90 backdrop-blur-sm" />

      {/* 🌐 Halo bleu */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl top-0 right-1/4 animate-pulse"
      />

      {/* 🌟 Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-4xl px-6 py-20"
      >
        <h1 className="text-6xl font-extrabold text-blue-300 mb-6 drop-shadow-[0_0_20px_rgba(96,165,250,0.6)]">
          📊 Aetheris Class
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          Un **tableau de bord IA** pour les enseignants.  
          Il observe les performances, détecte les difficultés et suggère les stratégies pédagogiques les plus efficaces.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-md border border-blue-300/30 rounded-2xl p-6 shadow-xl text-left max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-blue-300 mb-3">
            📘 Fonctions principales
          </h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Analyse automatique de progression par élève</li>
            <li>Alertes IA sur les décrochages scolaires</li>
            <li>Visualisation interactive de classe</li>
            <li>Suggestions d’adaptation pédagogique</li>
          </ul>
        </motion.div>

        <p className="mt-10 italic text-blue-200 text-sm">
          “L’enseignant du futur n’est pas remplacé — il est amplifié.” ✨
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/education")}
          className="mt-10 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg border border-blue-300/40 transition"
        >
          ⬅️ Retour à l'Éducation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Class;
