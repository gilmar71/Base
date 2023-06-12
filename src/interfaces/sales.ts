export interface ISales {
  pageTotal: number;
  pageSize: number;
  pageNumber: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  promocoes: [];
  itens: ISalesItems[];
}

export interface ISalesItems {
  id: number;
  titulo: string;
  subtitulo: string;
  categoriaBlogId: number;
  thumbnail: string;
  imagem: string;
  url: string;
  descricao: string;
}
