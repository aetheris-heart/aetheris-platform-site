import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Academy = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-gray-100">
      {/* 🌐 Fond académique */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556767576-5ec41e3239fa?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/70 via-blue-900/70 to-black/90 backdrop-blur-sm" />

      {/* 🌍 Halo cyan */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse"
      />

      {/* 🌟 Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-4xl px-6 py-20"
      >
        <h1 className="text-6xl font-extrabold text-cyan-300 mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
          🌐 Aetheris Academy
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          Une <strong>plateforme mondiale de savoir</strong> qui relie les étudiants, les chercheurs et les écoles du monde entier dans un espace d’échange et de progrès.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-md border border-cyan-300/30 rounded-2xl p-6 shadow-xl text-left max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
            🌍 Objectifs d’Aetheris Academy
          </h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Favoriser le partage libre des connaissances</li>
            <li>Créer un réseau global de savoir interconnecté</li>
            <li>Encourager la recherche collaborative</li>
            <li>Offrir des formations certifiées Aetheris</li>
          </ul>
        </motion.div>

        <p className="mt-10 italic text-cyan-200 text-sm">
          “Le savoir n’a pas de frontière, seulement des ponts à construire.” 🌍
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/education")}
          className="mt-10 px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg border border-cyan-300/40 transition"
        >
          ⬅️ Retour à l'Éducation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Academy;
