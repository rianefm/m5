export interface Ong {
    id: number;
    nome: string;
    descricao: string | null;
    estado: string;
    servicos: string[];
    contato: string | null;
  }