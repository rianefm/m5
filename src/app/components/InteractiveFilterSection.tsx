"use client";

import { useState } from "react";

export default function InteractiveFilterSection() {
  const [estado, setEstado] = useState("");
  const [servico, setServico] = useState("");
  const [resultados, setResultados] = useState<any[]>([]);
  const [mensagem, setMensagem] = useState("");

  const buscarONGs = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("");
    setResultados([]);

    try {
      let url = "";
      if (estado) {
        url = `https://api-ongs.onrender.com/api/ongs/estado/${estado}`;
      } else if (servico) {
        url = `https://api-ongs.onrender.com/api/ongs/servico/${servico}`;
      } else {
        setMensagem("Por favor, selecione um estado ou um serviço.");
        return;
      }

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Erro na API: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setResultados(data);
      } else {
        setMensagem(data.mensagem || "Nenhuma ONG encontrada.");
      }
    } catch (error: any) {
      console.error("Erro ao buscar ONGs:", error.message);
      setMensagem(
        "Falha ao conectar com a API. Verifique sua conexão ou tente mais tarde."
      );
    }
  };

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">
        Busque ONGs por Estado ou Serviço
      </h2>
      <form onSubmit={buscarONGs} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Estado (UF):</label>
          <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Ex: SP"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Serviço:</label>
          <input
            type="text"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Ex: alimentação"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
        >
          Buscar
        </button>
      </form>

      <div className="mt-6">
        {mensagem && <p className="text-red-600">{mensagem}</p>}
        {resultados.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resultados.map((ong: any) => (
              <li key={ong.id} className="bg-gray-100 p-4 rounded shadow">
                <h3 className="font-semibold">{ong.nome}</h3>
                <p>Estado: {ong.estado}</p>
                <p>Serviço: {ong.servico}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
