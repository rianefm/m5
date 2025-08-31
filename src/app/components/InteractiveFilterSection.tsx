// Arquivo: src/app/components/InteractiveFilterSection.tsx

"use client";

import {
  fetchAllOngs,
  fetchOngsByService,
  fetchOngsByState,
  fetchServicesList,
  fetchStatesList,
} from "@/app/hooks/useFetchOngs";
import type { Ong } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InteractiveFilterSection() {
  // Estados para os dados e UI
  const [ongs, setOngs] = useState<Ong[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados para as opções dos filtros (os dropdowns)
  const [states, setStates] = useState<string[]>([]);
  const [services, setServices] = useState<string[]>([]);

  // Estados para guardar a seleção atual do usuário
  const [selectedState, setSelectedState] = useState("");
  const [selectedService, setSelectedService] = useState("");

  // Efeito para carregar os dados iniciais (opções dos filtros e todas as ONGs)
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [statesData, servicesData, initialOngsData] = await Promise.all([
          fetchStatesList(),
          fetchServicesList(),
          fetchAllOngs(),
        ]);
        setStates(statesData);
        setServices(servicesData);
        setOngs(initialOngsData);
      } catch (err) {
        setError(
          "Não foi possível carregar os dados. Tente novamente mais tarde."
        );
      } finally {
        setIsLoading(false);
      }
    };
    loadInitialData();
  }, []);

  // Função para lidar com a busca quando um filtro é alterado
  const handleFilterChange = async (
    type: "state" | "service",
    value: string
  ) => {
    if (!value) {
      setSelectedState("");
      setSelectedService("");
      handleSearch(null);
      return;
    }

    if (type === "state") {
      setSelectedState(value);
      setSelectedService("");
    } else {
      setSelectedService(value);
      setSelectedState("");
    }

    handleSearch({ type, value });
  };

  const handleSearch = async (
    filter: { type: "state" | "service"; value: string } | null
  ) => {
    setIsLoading(true);
    setError(null);
    setOngs([]);

    try {
      let results: Ong[] = [];
      if (!filter) {
        results = await fetchAllOngs();
      } else if (filter.type === "state") {
        results = await fetchOngsByState(filter.value);
      } else if (filter.type === "service") {
        results = await fetchOngsByService(filter.value);
      }
      setOngs(results);
    } catch (err) {
      setError("Nenhuma ONG encontrada com este critério.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="find-ongs" className="my-8">
      <div className="filters-container bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Encontre uma Causa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={selectedState}
            onChange={(e) => handleFilterChange("state", e.target.value)}
            className="p-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="">Selecione um Estado</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            value={selectedService}
            onChange={(e) => handleFilterChange("service", e.target.value)}
            className="p-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="">Selecione um Serviço</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-container">
        {isLoading && (
          <p className="text-center dark:text-gray-300">Buscando ONGs...</p>
        )}
        {error && (
          <p className="text-center text-red-500 dark:text-red-400">{error}</p>
        )}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ongs.map((ong) => (
              <div
                key={ong.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {ong.nome}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
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
        )}
      </div>
    </section>
  );
}
