import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Leaf, Droplet, CloudSun, BatteryCharging, Sprout } from "lucide-react";

const Environnement = () => {
  const navigate = useNavigate();

  const modules = [
    {
      icon: <Leaf className="text-green-700 w-10 h-10 mb-2" />,
      title: "Analyse écologique",
      text: "🌳 Surveillance IA de la qualité de l’air et de l’eau grâce à des capteurs connectés et des modèles prédictifs.",
      link: "/environnement/ecologie",
      border: "border-green-500",
    },
    {
      icon: <CloudSun className="text-cyan-600 w-10 h-10 mb-2" />,
      title: "Climat prédictif",
      text: "🌦️ Aetheris anticipe les catastrophes naturelles grâce à des modèles météorologiques évolutifs.",
      link: "/environnement/climat",
      border: "border-cyan-500",
    },
    {
      icon: <BatteryCharging className="text-yellow-600 w-10 h-10 mb-2" />,
      title: "Énergie intelligente",
      text: "🔋 Gestion automatisée des infrastructures énergétiques et réduction de l’empreinte carbone.",
      link: "/environnement/energie",
      border: "border-yellow-400",
    },
    {
      icon: <Sprout className="text-green-600 w-10 h-10 mb-2" />,
      title: "AgroIA",
      text: "🚜 Soutien à l’agriculture durable et à la reforestation via des modèles prédictifs écologiques.",
      link: "/environnement/agroia",
      border: "border-green-400",
    },
    {
      icon: <Droplet className="text-emerald-600 w-10 h-10 mb-2" />,
      title: "Protection hydrique",
      text: "💧 Gestion intelligente de l’eau et détection en temps réel des zones de stress hydrique.",
      link: "/environnement/eau",
      border: "border-emerald-500",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-50 via-green-100 to-teal-200 text-gray-800 p-10">
      {/* 🌿 Arrière-plan écosystémique */}
      <motion.div
        className="absolute inset-0 bg-[url('/assets/ecosystem-bg.webp')] bg-cover bg-center opacity-40 blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      />
      {/* 🌫️ Brumes et halos organiques */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-green-300/20 rounded-full blur-3xl top-32 left-[-150px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[700px] h-[700px] bg-emerald-400/20 rounded-full blur-3xl bottom-[-80px] right-[-50px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 🌍 Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-green-900 drop-shadow-xl mb-6 z-10"
      >
        🌍 AETHERIS ENVIRONNEMENT
      </motion.h1>

      {/* 🧠 Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-3xl text-center leading-relaxed text-lg text-gray-700 mb-10 z-10"
      >
        Aetheris œuvre pour un monde plus durable 🌿.  
        Grâce à l’intelligence artificielle, nous surveillons, prévoyons et préservons la planète.  
        La technologie devient ici une conscience écologique au service de la Terre et de la vie.
      </motion.p>

      {/* 🌱 Modules écologiques (cliquables) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 z-10"
      >
        {modules.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(item.link)}
            className={`cursor-pointer bg-white/75 backdrop-blur-md rounded-2xl shadow-xl p-6 border-l-4 ${item.border} hover:shadow-2xl transition transform hover:scale-105 hover:border-opacity-80`}
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* 🌿 Citation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-10 italic text-gray-700 text-center max-w-2xl z-10"
      >
        « Ensemble, faisons de la technologie un souffle de vie pour la nature et les générations futures. »
      </motion.p>

      {/* 🟢 Bouton retour */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate("/")}
        className="mt-10 z-10 bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        ⬅️ Retour à l’accueil
      </motion.button>
    </div>
  );
};

export default Environnement;
