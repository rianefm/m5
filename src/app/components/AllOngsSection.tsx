import { fetchAllOngs } from "@/app/hooks/useFetchOngs";
import type { Ong } from "@/types";
import Link from "next/link";

export default async function AllOngsSection() {
  let ongs: Ong[] = [];

  try {
    ongs = await fetchAllOngs();
  } catch (error) {
    console.error("Falha ao buscar ONGs em destaque:", error);
    return (
      <section id="ongs" className="my-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          ONGs em Destaque
        </h2>
        <p className="text-red-500">
          Não foi possível carregar as ONGs no momento.
        </p>
      </section>
    );
  }

  const destaque = ongs.slice(0, 3);

  return (
    <section id="ongs" className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          ONGs em Destaque
        </h2>
        {}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {destaque.map((ong: Ong) => (
          <div
            key={ong.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {ong.nome}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                <strong>Estado:</strong> {ong.estado}
              </p>
              <div className="mt-2">
                <strong className="text-gray-700 dark:text-gray-300">
                  Serviços:
                </strong>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                  {ong.servicos.map((servico, index) => (
                    <li key={index}>{servico}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href={`/ongs/${ong.id}`}
                className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
              >
                Ver Detalhes &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
