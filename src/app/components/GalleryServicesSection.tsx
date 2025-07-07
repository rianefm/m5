"use client";

import { useState } from "react";

const servicos = [
  { nome: "Adoção", emoji: "🐶", filtro: "adoção" },
  { nome: "Resgate", emoji: "🚑", filtro: "resgate" },
  { nome: "Abrigo", emoji: "🏠", filtro: "abrigo" },
  { nome: "Apoio psicológico", emoji: "🧠", filtro: "apoio psicológico" },
  { nome: "Distribuição de alimentos", emoji: "🍛", filtro: "alimentação" },
  { nome: "Vacinação", emoji: "💉", filtro: "vacinação" },
];

export default function GalleryServicesSection() {
  const [selecionado, setSelecionado] = useState("");

  const selecionarServico = (servico: string) => {
    setSelecionado(servico);
    console.log(`Serviço selecionado: ${servico}`);

  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Serviços Oferecidos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {servicos.map((s) => (
          <button
            key={s.nome}
            onClick={() => selecionarServico(s.filtro)}
            className={`flex flex-col items-center justify-center p-4 rounded shadow transition ${
              selecionado === s.filtro ? "bg-purple-100" : "bg-gray-100"
            } hover:bg-purple-200`}
          >
            <span className="text-4xl">{s.emoji}</span>
            <span className="mt-2 font-medium">{s.nome}</span>
          </button>
        ))}
      </div>

      {selecionado && (
        <p className="mt-4 text-purple-700 font-semibold">
          Serviço selecionado: {selecionado}
        </p>
      )}
    </section>
  );
}
