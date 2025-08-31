import { fetchOngById } from "@/app/hooks/useFetchOngs";
import type { Ong } from "@/types";
import Link from "next/link";

export default async function OngDetailPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const ong: Ong = await fetchOngById(params.id);

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
  } catch (error) {
    // Se a ONG não for encontrada, o fetch vai dar erro e cairemos aqui
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
}
