import { motion } from "framer-motion";

const Partnership = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 lg:px-20 py-20">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-4 
                   bg-gradient-to-r from-cyan-400 to-blue-600 
                   bg-clip-text text-transparent"
      >
        Aetheris Partnerships
      </motion.h1>

      {/* 🔥 TEXTE FINAL ULTIME */}
      <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-16">
        <strong className="text-cyan-400">Rejoignez une coalition mondiale visionnaire</strong>{" "}
        engagée dans la transformation numérique durable : systèmes de santé intelligents,
        technologies climatiques avancées, éducation augmentée et innovations environnementales
        conçues pour protéger l’avenir de notre planète.
        <br /><br />
        <strong className="text-cyan-400">Aetheris</strong> unifie santé, climat et éducation 
        dans une plateforme souveraine, prédictive et profondément humanisée, capable 
        d’accompagner les institutions, les peuples et les gouvernements vers un futur plus sûr, 
        plus équitable et résolument durable.
      </p>

      {/* SECTIONS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {[
          {
            title: "Institutions de Santé",
            text: "Solutions IA de diagnostic, surveillance en temps réel, alertes prédictives et transformation numérique hospitalière.",
            icon: "🏥",
          },
          {
            title: "ONG & Organisations Humanitaires",
            text: "Technologies adaptées pour renforcer les capacités d’intervention, la télémédecine et les actions sur le terrain.",
            icon: "🌍",
          },
          {
            title: "Gouvernements & Administrations",
            text: "Solutions souveraines pour infrastructures de santé, climat et éducation. Déploiements nationaux pilotés par IA.",
            icon: "🏛️",
          },
          {
            title: "Entreprises & Startups",
            text: "Co-développement, IA sur mesure, digitalisation avancée et intégrations stratégiques.",
            icon: "🤝",
          },
          {
            title: "Universités & Centres de Recherche",
            text: "Accès à Aetheris Lab, collaboration scientifique, simulations et innovations partagées.",
            icon: "🎓",
          },
          {
            title: "Éducation & Écoles",
            text: "IA éducative, protection numérique, outils d'apprentissage intelligent et environnement scolaire futuriste.",
            icon: "📘",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 
                       hover:border-cyan-500 hover:shadow-cyan-500/40 
                       transition-all flex flex-col items-start"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CONTACT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-bold mb-3 text-cyan-400">
          Vous souhaitez collaborer avec Aetheris ?
        </h2>

        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Contactez notre équipe dédiée aux partenariats stratégiques.
        </p>

        <a
          href="mailto:partnership@aetheris-platform.com"
          className="px-10 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 
                     text-white text-lg font-semibold hover:opacity-90 transition-all 
                     shadow-lg shadow-cyan-600/30"
        >
          partnership@aetheris-platform.com
        </a>
      </motion.div>

    </div>
  );
};

export default Partnership;
