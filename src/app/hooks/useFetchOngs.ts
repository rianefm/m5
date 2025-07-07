export async function fetchAllOngs() {
  const res = await fetch("https://api-ongs.onrender.com/api/ongs", {
    cache: "no-store",
  });
  return res.json();
}

export async function fetchOngsByState(uf: string) {
  const res = await fetch(
    `https://api-ongs.onrender.com/api/ongs/estado/${uf}`,
    { cache: "no-store" }
  );
  return res.json();
}

export async function fetchOngsByService(servico: string) {
  const res = await fetch(
    `https://api-ongs.onrender.com/api/ongs/servico/${servico}`,
    { cache: "no-store" }
  );
  return res.json();
}
