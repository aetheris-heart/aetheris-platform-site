interface LangSwitchProps {
  lang: "fr" | "en";
  setLang: React.Dispatch<React.SetStateAction<"fr" | "en">>;
}

const LangSwitch: React.FC<LangSwitchProps> = ({ lang, setLang }) => {
  return (
    <div className="flex items-center gap-3">
      {/* 🇫🇷 Bouton Français */}
      <button
        onClick={() => setLang("fr")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
          lang === "fr"
            ? "bg-cyan-600 text-white shadow-lg scale-105"
            : "bg-transparent text-gray-400 hover:text-white hover:scale-105"
        }`}
        title="Français"
      >
        🇫🇷 FR
      </button>

      {/* 🇬🇧 Bouton Anglais */}
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
          lang === "en"
            ? "bg-cyan-600 text-white shadow-lg scale-105"
            : "bg-transparent text-gray-400 hover:text-white hover:scale-105"
        }`}
        title="English"
      >
        🇬🇧 EN
      </button>
    </div>
  );
};

export default LangSwitch;
