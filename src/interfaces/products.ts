export interface IProducts {
  pageTotal: number;
  pageSize: number;
  pageNumber: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  items: ProductList[];
}

export interface ProductList {
  id: number;
  titulo: string;
  subtitulo: string;
  imagem: string;
  url: string;
  categoriaTitle: string;

  pageTotal: number;
  pageSize: number;
  pageNumber: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  sku: string;
}
