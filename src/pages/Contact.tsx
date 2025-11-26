import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message envoyé :", form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-teal-50 via-white to-emerald-100 flex flex-col items-center justify-center overflow-hidden p-10">

      {/* Halo lumineux */}
      <motion.div className="absolute w-[700px] h-[700px] bg-emerald-300/30 rounded-full blur-3xl top-20 left-10 animate-pulse" />
      <motion.div className="absolute w-[500px] h-[500px] bg-teal-400/30 rounded-full blur-3xl bottom-0 right-0 animate-pulse" />

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-emerald-700 text-center mb-8 z-10"
      >
        Entrer en contact
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-gray-700 text-center max-w-2xl mb-10 z-10 leading-relaxed"
      >
        Une question, une idée, une collaboration ?  
        L’équipe Aetheris vous écoute et vous répond avec attention 🌿  
        Ensemble, façonnons un futur durable et intelligent.
      </motion.p>

      {/* Formulaire */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-3xl border border-emerald-100 z-10"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2 font-semibold">Nom complet</label>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-emerald-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-semibold">Adresse e-mail</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-emerald-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-emerald-400 outline-none resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-full shadow-md transition"
          >
            <Send className="inline mr-2" /> Écrivez-nous
          </motion.button>
        </form>

        {sent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-emerald-700 font-semibold mt-6"
          >
            ✅ Votre message a bien été envoyé. Aetheris vous répondra sous 24h.
          </motion.p>
        )}
      </motion.div>

      {/* 📞 Coordonnées */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 grid md:grid-cols-3 gap-8 text-center text-gray-700 z-10"
      >
        <div>
          <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
          <p>info@aetheris-platform.com</p>
          <p>team@aetheris-platform.com</p>
        </div>
        <div>
          <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
          <p>+32 455 18 75 12</p>
        </div>
        <div>
          <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
          <p>Rue Vieille Voie de Liège 2, Sprimont (Belgique)</p>
        </div>
      </motion.div>

      {/* Bouton Retour */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="mt-12 z-10 bg-emerald-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-emerald-600 transition flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" /> Retour à l’accueil
      </motion.button>
    </div>
  );
};

export default Contact;
