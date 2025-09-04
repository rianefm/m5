"use client";

import { fetchOngById } from "@/app/hooks/useFetchOngs";
import type { Ong } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OngDetailPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [ong, setOng] = useState<Ong | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const loadOngData = async () => {
        try {
          const ongData = await fetchOngById(id);
          setOng(ongData);
        } catch (err) {
          setError("ONG não encontrada ou falha ao carregar.");
        } finally {
          setIsLoading(false);
        }
      };
      loadOngData();
    }
  }, [id]);

  if (isLoading) {
    return (
      <main className="container mx-auto p-8 text-center">
        <p className="dark:text-gray-300">Carregando informações da ONG...</p>
      </main>
    );
  }

  if (error || !ong) {
    return (
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-500 dark:text-red-400">
          ONG Não Encontrada
        </h1>
        <p className="dark:text-gray-300">
          A ONG que você está procurando não existe ou foi removida.
        </p>
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            &larr; Voltar para a busca
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          {ong.nome}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {ong.descricao}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              Localização
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Estado:</strong> {ong.estado}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              Contato
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {ong.contato || "Não informado"}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
            Serviços Oferecidos
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {ong.servicos.map((servico, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {servico}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          href="/"
          className="text-purple-600 dark:text-purple-400 hover:underline"
        >
          &larr; Voltar para a busca
        </Link>
      </div>
    </main>
  );
}
