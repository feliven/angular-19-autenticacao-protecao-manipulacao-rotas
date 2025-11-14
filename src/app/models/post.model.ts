export interface Usuario {
  nome: string;
  avatar: string;
}

export interface Estatisticas {
  codigo: number;
  compartilhamentos: number;
  comentarios: number;
}

export interface Postagem {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  usuario: Usuario;
  estatisticas: Estatisticas;
}

export interface DadosPostagem {
  postagens: Postagem[];
}
