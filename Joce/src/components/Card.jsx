import { useState } from "react";
import { motion } from "framer-motion";

const Card = () => {
  const [showEffect, setShowEffect] = useState(false);

  const handleClick = () => {
    setShowEffect(true);
    setTimeout(() => setShowEffect(false), 1000); // Oculta el efecto después de 1s
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 to-purple-600">
      <motion.div
        className="relative bg-white p-6 rounded-3xl shadow-2xl w-[360px] text-center overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {/* Fondo de destellos */}
        {showEffect && (
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.5)_10%,_transparent_50%)]"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1 }}
          />
        )}

        {/* Contenido de la tarjeta */}
        <h1 className="text-2xl font-bold text-pink-600">🌸 Feliz Día de la Mujer 🌸</h1>
        <p className="mt-4 text-gray-600 font-semibold">
          Joce, gracias por tu fortaleza, amistad y dedicación. Hoy te deseo un gran día y siempre recuerda lo increíble que eres. 💖
        </p>

        {/* Botón con efecto */}
        <motion.button
          className="cursor-heart mt-6 px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300"
          onClick={handleClick}
          whileTap={{ scale: 0.9 }}
        >
          ✨ Presiona para brillar ✨
        </motion.button>

        {/* Animación de partículas (destellos) */}
        {showEffect &&
          Array.from({ length: 10 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-orange-300 w-2 h-2 rounded-full"
              initial={{
                top: "50%",
                left: "50%",
                opacity: 1,
                scale: 1,
              }}
              animate={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0,
                scale: 2,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          ))}
      </motion.div>
    </div>
  );
};

export default Card;
