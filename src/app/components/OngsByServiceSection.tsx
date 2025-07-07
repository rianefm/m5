import { fetchOngsByService } from "@/app/hooks/useFetchOngs";

export default async function OngsByServiceSection() {
  const ongs = await fetchOngsByService("alimentação");
  console.log(ongs);

  // Verifica se a resposta é um array ou uma mensagem
  const ongList = Array.isArray(ongs) ? ongs : [];

  return (
    <section>
      <h2>ONGs que oferecem alimentação</h2>
      {ongList.length === 0 ? (
        <p>Nenhuma ONG encontrada com esse serviço.</p>
      ) : (
        <ul>
          {ongList.map((ong: any) => (
            <li key={ong.id}>{ong.nome}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
