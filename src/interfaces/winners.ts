export interface IWinners {
  pageTotal: number;
  pageSize: number;
  pageNumber: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  itens: IWinnersList[];
}

export interface IWinnersList {
  id: number;
  titulo: string;
  subtitulo: string;
  categoriaBlogId: number;
  imagem: string;
  url: string;
}
