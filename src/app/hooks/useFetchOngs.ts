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

export async function fetchStatesList() {
  const res = await fetch("https://api-ongs.onrender.com/api/ongs/lists/estados", {
    cache: "no-store",
  });
  return res.json();
}

export async function fetchServicesList() {
  const res = await fetch("https://api-ongs.onrender.com/api/ongs/lists/servicos", {
    cache: "no-store",
  });
  return res.json();
}

export async function fetchOngById(id: string) {
  const res = await fetch(`https://api-ongs.onrender.com/api/ongs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // Se a ONG não for encontrada, a API retorna 404, o que causa um erro aqui
    throw new Error('ONG não encontrada');
  }

  return res.json();
}