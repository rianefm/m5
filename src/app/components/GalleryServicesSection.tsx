"use client";

import { motion } from "framer-motion";

const servicos = [
  { nome: "Adoção", emoji: "🐶" },
  { nome: "Resgate", emoji: "🚑" },
  { nome: "Abrigo", emoji: "🏠" },
  { nome: "Apoio psicológico", emoji: "🧠" },
  { nome: "Distribuição de alimentos", emoji: "🍛" },
  { nome: "Vacinação", emoji: "💉" },
];

export default function GalleryServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-8"
      aria-label="Galeria de serviços"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Serviços Oferecidos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {servicos.map((s) => (
          <div
            key={s.nome}
            className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-100 via-white to-purple-100 rounded-xl shadow-md transition hover:scale-105 hover:shadow-lg cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`Serviço de ${s.nome}`}
          >
            <span className="text-5xl">{s.emoji}</span>
            <span className="mt-4 text-lg font-semibold text-center">
              {s.nome}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
