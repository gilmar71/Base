export interface ICategoriesProducts {
  id: number;
  titulo: string;
  listItens: ProductList[];
}

export interface ProductList {
  pageTotal: number;
  pageSize: number;
  pageNumber: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  sku: string;
  id: number;
  titulo: string;
  imagem: string;
  url: string;
}
