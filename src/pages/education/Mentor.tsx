import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Mentor = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-gray-100">
      {/* 🎓 Fond intelligent */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-indigo-900/70 to-black/90 backdrop-blur-sm" />

      {/* 💬 Halo lumineux */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse"
      />

      {/* 🌟 Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-4xl px-6 py-20"
      >
        <h1 className="text-6xl font-extrabold text-purple-300 mb-6 drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
          💬 Aetheris Mentor
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          Le **professeur virtuel Aetheris** capable de comprendre, dialoguer et enseigner.  
          Grâce au traitement du langage naturel, il s’adapte au ton, à l’âge et au niveau de l’apprenant.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-md border border-purple-300/30 rounded-2xl p-6 shadow-xl text-left max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-purple-300 mb-3">
            ⚙️ Capacités d’Aetheris Mentor
          </h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Dialogue naturel et empathique</li>
            <li>Correction automatique des erreurs</li>
            <li>Explications adaptées à chaque profil</li>
            <li>Simulation de débats éducatifs et examens oraux</li>
          </ul>
        </motion.div>

        <p className="mt-10 italic text-purple-200 text-sm">
          “Aetheris ne parle pas pour enseigner, il écoute pour comprendre.” 🧠
        </p>

        {/* 🔙 Retour */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/education")}
          className="mt-10 px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-lg border border-purple-300/40 transition"
        >
          ⬅️ Retour à l'Éducation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Mentor;
