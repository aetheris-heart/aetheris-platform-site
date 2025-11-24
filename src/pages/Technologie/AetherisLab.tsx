import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AetherisLab = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100 flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605647540924-852290f7e7c2?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/80 via-purple-800/50 to-black/80 backdrop-blur-sm" />

      <motion.div className="absolute w-[600px] h-[600px] bg-violet-400/30 rounded-full blur-3xl top-0 left-10 animate-pulse" />
      <motion.div className="absolute w-[400px] h-[400px] bg-indigo-400/30 rounded-full blur-3xl bottom-0 right-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-4xl px-6 py-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-violet-300 mb-6 drop-shadow-[0_0_25px_rgba(150,100,255,0.5)]">
          AETHERIS LAB
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Le laboratoire central où s’unissent IA, biotechnologie et physique médicale.  
          Aetheris Lab conçoit les modèles cognitifs de l’intelligence empathique et les prototypes de soins augmentés.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 border border-violet-300/40 p-6 rounded-2xl shadow-xl backdrop-blur-md">
            <h3 className="text-2xl text-violet-300 font-semibold mb-2">🧬 IA biologique</h3>
            <p className="text-gray-200 text-sm">
              Étude des interactions entre tissus vivants et réseaux neuronaux artificiels pour créer une médecine augmentée.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 border border-purple-300/40 p-6 rounded-2xl shadow-xl backdrop-blur-md">
            <h3 className="text-2xl text-purple-300 font-semibold mb-2">🧪 Simulation moléculaire</h3>
            <p className="text-gray-200 text-sm">
              IA prédictive capable de simuler l’action des traitements au niveau cellulaire avant expérimentation réelle.
            </p>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/technologie")}
          className="mt-10 px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full shadow-lg border border-violet-300/50 backdrop-blur-md"
        >
          ⬅️ Retour à la technologie
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AetherisLab;
