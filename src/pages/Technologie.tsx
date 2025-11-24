import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Technologie = () => {
  const navigate = useNavigate();

  const modules = [
    {
      title: "Aetheris OS",
      icon: "💻",
      text: "Système d’exploitation IA intelligent, capable d’apprendre, d’évoluer et de synchroniser tous les modules Aetheris.",
      route: "/technologie/aetheris-os",
      color: "cyan",
    },
    {
      title: "Aetheris Lab",
      icon: "🔬",
      text: "Laboratoire de recherche et d’innovation, où science, IA et biotechnologie fusionnent pour façonner le futur.",
      route: "/technologie/aetheris-lab",
      color: "indigo",
    },
    {
      title: "Aetheris Cloud",
      icon: "☁️",
      text: "Cloud médical et éducatif ultra-sécurisé, conçu pour la vitesse, la confidentialité et l’interconnexion mondiale.",
      route: "/technologie/aetheris-cloud",
      color: "blue",
    },
    {
      title: "Aetheris Data",
      icon: "📊",
      text: "Analyse de données massives, apprentissage profond et visualisations IA pour une intelligence prédictive globale.",
      route: "/technologie/aetheris-data",
      color: "violet",
    },
    {
      title: "Aetheris Security",
      icon: "🛡️",
      text: "Cybersécurité éthique, chiffrement biométrique et bouclier IA protégeant les données humaines et médicales.",
      route: "/technologie/aetheris-security",
      color: "emerald",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-gray-100">
      {/* 🧠 Nouveau fond d’écran réaliste */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601944177325-f8461b1f7e8b?auto=format&fit=crop&w=1920&q=80')", // 💻 vrai fond d'écran futuriste
        }}
      />
      {/* 🌌 Filtre et ambiance bleutée */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-cyan-900/50 to-black/80 backdrop-blur-sm" />

      {/* 💡 Halos de lumière */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-cyan-400/20 rounded-full blur-3xl top-0 left-10 animate-pulse"
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl bottom-0 right-10 animate-pulse"
      />

      {/* 🧠 Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-5xl px-6 py-20"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-cyan-300 drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]">
          AETHERIS TECHNOLOGIE
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-200">
          Dans un monde dominé par la donnée et la vitesse, Aetheris construit 
          l’infrastructure du futur : **consciente, éthique et interconnectée**.  
          Chaque innovation technologique est une extension de la pensée humaine.
        </p>

        {/* 🔗 Modules technologiques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              onClick={() => navigate(mod.route)}
              className={`cursor-pointer bg-white/10 border border-${mod.color}-300/30 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:bg-${mod.color}-500/10 transition`}
            >
              <div className="text-4xl mb-3">{mod.icon}</div>
              <h3
                className={`text-2xl font-semibold text-${mod.color}-300 mb-3`}
              >
                {mod.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {mod.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ⚡ Citation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-14 italic text-cyan-200 text-sm"
        >
          “La technologie n’est pas froide, elle est vivante quand elle sert la vie.” ⚙️
        </motion.p>

        {/* 🔙 Bouton retour */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mt-10 px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-full shadow-lg border border-cyan-300/50 backdrop-blur-md"
        >
          ⬅️ Retour à l'accueil
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Technologie;
