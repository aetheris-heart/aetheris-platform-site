import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();

  // 🎓 Liste des outils éducatifs cliquables
  const tools = [
    {
      slug: "learn",
      title: "Aetheris Learn",
      icon: "🎓",
      text: "Un tuteur IA qui s’adapte au rythme et au style de chaque élève pour un apprentissage sans limite.",
    },
    {
      slug: "mentor",
      title: "Aetheris Mentor",
      icon: "💬",
      text: "Une IA pédagogique qui explique, dialogue et corrige comme un véritable professeur interactif.",
    },
    {
      slug: "class",
      title: "Aetheris Class",
      icon: "📊",
      text: "Un tableau de bord intelligent pour enseignants, avec rapports de performance et alertes précoces.",
    },
    {
      slug: "future",
      title: "Aetheris Future",
      icon: "🔮",
      text: "Un système d’orientation intelligente qui révèle le potentiel de chaque élève et le guide vers son avenir.",
    },
    {
      slug: "academy",
      title: "Aetheris Academy",
      icon: "🌐",
      text: "Une plateforme mondiale de savoir reliant étudiants, chercheurs et écoles à travers le monde.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center text-gray-100">
      {/* 🌌 Fond lumineux éducatif */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 via-blue-900/60 to-black/80 backdrop-blur-sm" />

      {/* 💫 Sphères animées */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-indigo-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-cyan-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-12 h-12 bg-blue-500/30 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* 🧠 Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-5xl px-6 py-20"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-indigo-300 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          Éducation & Connaissance
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12">
          Aetheris transforme l’éducation en une expérience vivante et intuitive.  
          Grâce à une intelligence artificielle empathique, l’apprentissage devient  
          <strong> personnalisé, interactif et inspirant.</strong>
        </p>

        {/* 🧩 Cartes cliquables */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(99,102,241,0.4)",
              }}
              onClick={() => navigate(`/education/${tool.slug}`)}
              className="cursor-pointer p-6 bg-white/10 border border-indigo-200/30 rounded-2xl shadow-xl backdrop-blur-md hover:bg-indigo-500/10 transition"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
                {tool.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-2">
                {tool.text}
              </p>
              <p className="text-indigo-400 text-sm font-semibold underline">
                Explorer →
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🌟 Citation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-14 text-indigo-200 italic text-sm"
        >
          “L’éducation n’est pas remplir un vase, mais allumer une flamme.” — Aetheris ✨
        </motion.p>

        {/* 🔙 Bouton retour */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mt-10 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg transition-all border border-indigo-300/50 backdrop-blur-md"
        >
          ⬅️ Retour à l'accueil
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Education;
