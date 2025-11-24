import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-gray-100">
      {/* 🌌 Fond éducatif */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 via-blue-900/60 to-black/90 backdrop-blur-sm" />

      {/* 💡 Halo animé */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-3xl top-0 left-1/4 animate-pulse"
      />

      {/* 🌟 Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-4xl px-6 py-20"
      >
        <h1 className="text-6xl font-extrabold text-indigo-300 mb-6 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)]">
          🎓 Aetheris Learn
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          Un **tuteur IA personnel** conçu pour s’adapter à chaque élève.  
          Il observe, comprend et guide en fonction de ton rythme d’apprentissage,  
          créant un parcours unique et évolutif vers la réussite.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-md border border-indigo-300/30 rounded-2xl p-6 shadow-xl text-left max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
            💫 Fonctionnalités
          </h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Suivi d’apprentissage dynamique basé sur la mémoire IA</li>
            <li>Recommandations de cours et d’exercices personnalisés</li>
            <li>Visualisation de progression en temps réel</li>
            <li>Motivation et feedback positif continu</li>
          </ul>
        </motion.div>

        <p className="mt-10 italic text-indigo-200 text-sm">
          “Apprendre, c’est éveiller la conscience. Aetheris ne forme pas, il illumine.” ✨
        </p>

        {/* 🔙 Retour */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/education")}
          className="mt-10 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg border border-indigo-300/40 transition"
        >
          ⬅️ Retour à l'Éducation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Learn;
