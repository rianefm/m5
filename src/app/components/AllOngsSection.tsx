import { fetchAllOngs } from "@/app/hooks/useFetchOngs";

export default async function AllOngsSection() {
  const ongs = await fetchAllOngs();
  const destaque = ongs.slice(0, 3); 
  
  return (
    <section id="ongs" className="my-8">
      <h2 className="text-2xl font-bold mb-4">ONGs em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {destaque.map((ong: any) => (
          <div key={ong.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg">{ong.nome}</h3>
            <p>Estado: {ong.estado}</p>
            <p>Serviço: {ong.servico}</p>
            <button className="mt-2 text-purple-600 underline">Saiba mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
  /*
  return (
    <section className="p-6 bg-white rounded-lg shadow-md my-8">
      <h2 className="text-2xl font-bold mb-4">Todas as ONGs</h2>
      <ul className="space-y-2">
        {ongs.map((ong: any) => (
          <li key={ong.id} className="p-4 bg-gray-100 rounded">
            <h3 className="font-semibold">{ong.nome}</h3>
            <p>Estado: {ong.estado}</p>
            <p>Serviço: {ong.servico}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

*/


