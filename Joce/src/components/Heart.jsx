import React from "react";

export default function Heart() {
  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
      <div className="relative heart animate-beat z-1">
        <p className="absolute inset-0 flex items-center justify-center z-1 text-amber-50 text-sm font-bold text-center p-4 rotate-45 mb-18 ms-4 w-[250px]">
          Un mes a tu lado y has cambiado mi mundo por completo. Gracias por
          cada sonrisa, cada detalle y por hacerme sentir tan especial. Esto
          apenas comienza, pero ya siento que contigo quiero todo. Feliz primer
          mes, mi amor. 💖
        </p>
      </div>

      {/* Corazones */}
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-500 opacity-30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDuration: `${Math.random() * 5 + 4}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          ❤️
        </span>
      ))}

     
    </div>
  );
}
