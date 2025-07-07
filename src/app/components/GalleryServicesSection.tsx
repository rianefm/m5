"use client";

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
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Serviços Oferecidos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {servicos.map((s) => (
          <div
            key={s.nome}
            className="flex flex-col items-center justify-center p-4 rounded shadow bg-gray-100"
          >
            <span className="text-4xl">{s.emoji}</span>
            <span className="mt-2 font-medium">{s.nome}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
