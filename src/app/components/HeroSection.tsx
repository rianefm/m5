"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F3F4F6] dark:bg-[#1F2937] rounded-lg overflow-hidden shadow mb-8">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.svg"
          alt="Imagem Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative p-6 text-center z-10">
        <h1 className="text-3xl font-bold text-[#7C3AED] dark:text-white mb-2">
          Conheça a EloSocial e Apoie ONGs que Fazem a Diferença
        </h1>
        <p className="text-white mb-4 text-shadow-sm">
          Encontre ONGs por estado, tipo de serviço ou conheça todas elas!
        </p>
        <a
          href="#ongs"
          className="inline-block bg-[#7C3AED] text-white px-4 py-2 rounded hover:bg-[#5B21B6] transition"
        >
          Ver ONGs
        </a>
      </div>
    </section>
  );
}
