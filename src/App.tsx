import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import BackgroundAetheris from "./components/BackgroundAetheris";
import LangSwitch from "./components/LangSwitch";
import { texts } from "./i18n";
import AetherisLoader from "@/components/AetherisLoader"; // 🧠 Loader futuriste

// 🧩 Import des futures pages explicatives
import Sante from "./pages/Sante";
import Education from "./pages/Education";
import Technologie from "./pages/Technologie";
import Environnement from "./pages/Environnement";
import Contact from "./pages/Contact";
import SanteIAMedicale from "./pages/SanteIAMedicale";
import SanteSurveillance from "./pages/SanteSurveillance";

// 🎓 Sous-pages Éducation
import Learn from "./pages/education/Learn";
import Mentor from "./pages/education/Mentor";
import Class from "./pages/education/Class";
import Future from "./pages/education/Future";
import Academy from "./pages/education/Academy";

// ⚙️ Sous-pages technologie
import AetherisOS from "./pages/Technologie/AetherisOS";
import AetherisLab from "./pages/Technologie/AetherisLab";
import AetherisCloud from "./pages/Technologie/AetherisCloud";
import AetherisData from "./pages/Technologie/AetherisData";
import AetherisSecurity from "./pages/Technologie/AetherisSecurity";

// ======================
// 🌍 Environnement
// ======================
import Ecologie from "./pages/environnement/Ecologie";
import Climat from "./pages/environnement/Climat";
import Energie from "./pages/environnement/Energie";
import AgroIA from "./pages/environnement/AgroIA";
import Eau from "./pages/environnement/Eau";
import Partnership from "./pages/Partnership";


import { motion } from "framer-motion";
// =============================================================
// 🏠 PAGE D’ACCUEIL
// =============================================================
const Home: React.FC<{ lang: "fr" | "en"; setLang: any }> = ({ lang, setLang }) => {
  const navigate = useNavigate();
  const t = texts[lang];

  const handleClick = (slug: string) => navigate(`/${slug}`);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-gray-800">
      <BackgroundAetheris />

      {/* 💫 En-tête */}
      <header className="relative z-10 flex justify-between items-center p-6 md:p-10">
        <h1
          className="text-3xl md:text-5xl font-extrabold tracking-wide text-cyan-600 drop-shadow-lg animate-pulse-glow cursor-pointer"
          onClick={() => navigate("/")}
        >
          AETHERIS
        </h1>
        <LangSwitch lang={lang} setLang={setLang} />
      </header>

      {/* 🩺 Mission */}
      <section className="relative z-10 px-6 md:px-20 py-16 text-center fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-700">
          {t.mission_title}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
          {t.mission_text}
        </p>
      </section>

      {/* 🌍 Domaines */}
      <section className="relative z-10 px-6 md:px-20 py-16 bg-white/70 backdrop-blur-lg rounded-3xl mx-4 md:mx-20 shadow-2xl fade-in">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">
          {t.domains_title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { title: "Santé", link: "sante", desc: "Découvre nos innovations IA médicales." },
            { title: "Éducation", link: "education", desc: "Accès intelligent et équitable à la connaissance." },
            { title: "Technologie", link: "technologie", desc: "Aetheris au cœur de l’innovation numérique." },
            { title: "Environnement", link: "environnement", desc: "Solutions vertes et durables pour notre planète." },
          ].map((d, i) => (
            <div
              key={i}
              onClick={() => handleClick(d.link)}
              className="cursor-pointer p-6 rounded-2xl bg-white/80 hover:bg-cyan-50 transition transform hover:scale-105 shadow-lg border border-cyan-100"
            >
              <h3 className="text-xl font-semibold text-cyan-700 mb-3">{d.title}</h3>
              <p className="text-sm text-gray-600">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⚡ Initiatives */}
      <section className="relative z-10 px-6 md:px-20 py-16 text-center fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
          {t.initiatives_title}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10">{t.initiatives_text}</p>
      </section>

      {/* 🌐 Programmes */}
<section className="relative z-10 px-6 md:px-20 py-24 bg-gradient-to-br from-cyan-50 via-white to-emerald-100 text-gray-800 rounded-3xl shadow-xl mt-16 overflow-hidden">
  {/* 🌌 Effet de particules lumineuses */}
  {[...Array(15)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, Math.random() * 20 - 10],
        x: [0, Math.random() * 20 - 10],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 5 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}

  {/* 🌍 Titre principal */}
  <h2 className="text-5xl font-extrabold text-center text-cyan-700 mb-16 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
    🌐 Nos Programmes Aetheris
  </h2>

  {/* 🧩 Grille de programmes */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
    {[
      {
        title: "Aetheris Santé",
        desc: "Une plateforme IA médicale complète pour hôpitaux et cliniques modernes. Analyse, diagnostic, et assistance clinique IA.",
        color: "from-emerald-400/20 to-cyan-400/20",
        glow: "shadow-[0_0_30px_rgba(16,185,129,0.4)]",
        link: "/sante",
        icon: "🩺",
      },
      {
        title: "Aetheris Nexus",
        desc: "L’infrastructure centrale d’Aetheris : connectivité, données, cloud et sécurité. Le noyau de l’intelligence mondiale.",
        color: "from-indigo-400/20 to-purple-500/20",
        glow: "shadow-[0_0_30px_rgba(99,102,241,0.4)]",
        link: "/technologie",
        icon: "🌐",
      },
      {
        title: "Aetheris Learn",
        desc: "Un système éducatif intelligent et équitable, propulsé par une IA mentor. L’éducation réinventée pour tous.",
        color: "from-yellow-300/30 to-orange-400/30",
        glow: "shadow-[0_0_30px_rgba(251,191,36,0.4)]",
        link: "/education",
        icon: "🎓",
      },
      {
        title: "Aetheris Green",
        desc: "Notre engagement écologique mondial : IA, capteurs environnementaux et durabilité planétaire.",
        color: "from-green-300/30 to-lime-400/30",
        glow: "shadow-[0_0_30px_rgba(34,197,94,0.4)]",
        link: "/environnement",
        icon: "🌱",
      },
    ].map((p, i) => (
      <motion.div
        key={i}
        onClick={() => navigate(p.link)}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`relative cursor-pointer overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br ${p.color} backdrop-blur-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:${p.glow}`}
      >
        {/* Halo dynamique */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Contenu */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl mb-4"
          >
            {p.icon}
          </motion.div>
          <h3 className="text-2xl font-bold text-cyan-800 mb-3">{p.title}</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">{p.desc}</p>
          <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition-all">
            Explorer →
          </button>
        </div>
      </motion.div>
    ))}
  </div>

  {/* 💡 Section futures solutions */}
  <div className="mt-20 text-center">
    <h3 className="text-3xl font-extrabold text-cyan-700 mb-8 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
      🚀 Nos solutions  — L’Innovation Continue
    </h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {[
        {
          title: "Aetheris BioSense",
          desc: "Capteurs biologiques intelligents pour surveiller la santé cellulaire en temps réel.",
          icon: "🧬",
        },
        {
          title: "Aetheris Cloud Quantum",
          desc: "Infrastructure IA mondiale propulsée par des processeurs quantiques verts.",
          icon: "☁️",
        },
        {
          title: "Aetheris Drone Vision",
          desc: "Réseau autonome de drones IA pour la surveillance environnementale et logistique.",
          icon: "🚁",
        },
        {
          title: "Aetheris NeuralNet",
          desc: "Système neuronal auto-apprenant pour la recherche médicale et climatique.",
          icon: "🧠",
        },
        {
          title: "Aetheris SmartGrid",
          desc: "Gestion énergétique décentralisée et optimisée par IA pour un monde autonome.",
          icon: "🔋",
        },
        {
          title: "Aetheris LifeData",
          desc: "Cartographie planétaire des données de vie : santé, climat et société.",
          icon: "🌎",
        },
      ].map((sol, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          className="relative bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border-l-4 border-cyan-400 hover:shadow-cyan-200 transition"
        >
          <h4 className="text-2xl font-bold text-cyan-700 mb-2">
            {sol.icon} {sol.title}
          </h4>
          <p className="text-gray-700">{sol.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* 🤝 Contact */}
<section className="relative z-10 px-6 md:px-20 py-20 text-center 
bg-gradient-to-r from-cyan-100/70 to-indigo-100/70 backdrop-blur-xl 
mt-10 fade-in rounded-t-3xl shadow-inner">

  <h2 className="text-3xl font-bold text-cyan-700 mb-4">
    {t.contact_title}
  </h2>

  <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
    {t.contact_text}
  </p>

  {/* Boutons */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-4">

    {/* Bouton Contact */}
    <Link
      to="/contact"
      className="inline-block px-10 py-3 bg-cyan-600 hover:bg-cyan-500 
      text-white font-semibold rounded-full shadow-md transition 
      hover:shadow-lg"
    >
      ✉️ Écrivez-nous
    </Link>

    {/* Bouton Partenariats */}
    <Link
      to="/partnership"
      className="inline-block px-10 py-3 bg-indigo-600 hover:bg-indigo-500 
      text-white font-semibold rounded-full shadow-md transition 
      hover:shadow-lg"
    >
      🤝 Nos Partenariats
    </Link>
  </div>
</section>

{/* 🌠 Footer */}
<footer className="relative z-10 text-center py-10 border-t border-cyan-200 
text-gray-600 text-sm bg-white/70">
  <p className="italic mb-1">{t.footer_quote_fr}</p>
  <p className="italic text-gray-500">{t.footer_quote_en}</p>
  <p className="mt-3 text-xs text-gray-500">
    © 2025 Aetheris Initiative. All rights reserved.
  </p>
</footer>


    </div>
  );
};

// =============================================================
// 🌐 APP PRINCIPALE AVEC AETHERIS LOADER PREMIER CHARGEMENT
// =============================================================
const App: React.FC = () => {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("aetherisLoaded");
    if (alreadyLoaded) {
      setFirstLoad(false);
    } else {
      sessionStorage.setItem("aetherisLoaded", "true");
      const timer = setTimeout(() => setFirstLoad(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (firstLoad) return <AetherisLoader>{null}</AetherisLoader>;

  return (
    <Routes>
      <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
      <Route path="/sante" element={<Sante />} />
      <Route path="/sante/ia-medicale" element={<SanteIAMedicale />} />
      <Route path="/sante/surveillance" element={<SanteSurveillance />} />
      <Route path="/education" element={<Education />} />
      <Route path="/technologie" element={<Technologie />} />
      <Route path="/environnement" element={<Environnement />} />
      <Route path="/contact" element={<Contact />} />

      {/* Sous-pages */}
      <Route path="/education/learn" element={<Learn />} />
      <Route path="/education/mentor" element={<Mentor />} />
      <Route path="/education/class" element={<Class />} />
      <Route path="/education/future" element={<Future />} />
      <Route path="/education/academy" element={<Academy />} />
      <Route path="/technologie/aetheris-os" element={<AetherisOS />} />
      <Route path="/technologie/aetheris-lab" element={<AetherisLab />} />
      <Route path="/technologie/aetheris-cloud" element={<AetherisCloud />} />
      <Route path="/technologie/aetheris-data" element={<AetherisData />} />
      <Route path="/technologie/aetheris-security" element={<AetherisSecurity />} />
    
      <Route path="/environnement/ecologie" element={<Ecologie />} />
<Route path="/environnement/climat" element={<Climat />} />
<Route path="/environnement/energie" element={<Energie />} />
<Route path="/environnement/agroia" element={<AgroIA />} />
<Route path="/environnement/eau" element={<Eau />} />
<Route path="/partnership" element={<Partnership />} />

    </Routes>
  );
};

export default App;
