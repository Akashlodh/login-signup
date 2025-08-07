import React from "react";
import { motion } from "framer-motion";

function Home() {
     const cards = [
    { id: 1, title: "🚀 Launch", color: "from-purple-500 to-pink-500" },
    { id: 2, title: "🌌 Explore", color: "from-blue-500 to-cyan-500" },
    { id: 3, title: "🔥 Power", color: "from-orange-500 to-red-500" },
  ];

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-10 tracking-wide"
      >
        Mind‑Blowing Animation ✨
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`relative w-72 h-96 rounded-2xl bg-gradient-to-br ${card.color} shadow-2xl`}
            whileHover={{
              scale: 1.1,
              rotateY: 15,
              rotateX: 5,
              boxShadow: "0px 25px 50px rgba(0,0,0,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, type: "spring", stiffness: 120 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold drop-shadow-lg">
              {card.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
  

export default Home;
