import { api } from 'src/services/api';

// import { Review } from "components/sections/home/components";
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

export interface ProductListItem {
  id: number;
  categoriaTitle?: string;
  categoriaUrl?: string;
  descricao: string;
  idFile?: number;
  imagem: string;
  isPromotion?: boolean;
  metaDescription?: string;
  metaImage?: string;
  pageTitle?: string;
  preco?: number;
  precoPromo?: number;
  subTitulo?: string;
  tags?: string;
  titulo: string;
  url: string;
  sku?: string;
  ordem?: number;
  thumbnail?: string;
}

export interface Product {
  product: any;
  id: number;
  titulo: string;
  descricao?: string;
  subTitulo: string;
  preco?: number;
  sku?: string;
  tags?: string;
  imagem: string;
  url: string;
  pageTitle: string;
  metaDescription: string;
  isPromotion: boolean;
  precoPromo?: number;
  categoriaTitle: string;
  categoriaUrl: string;
  video?: string;
  idFile: number;
  ordem: number;
  thumbnail: string;
  extra1: string;
  extra2: string;
  extra3: string;
  extra4: string;

  //new
  brinde?: string;
  isPreVenda?: boolean;
  kit?: string;
  prazo?: string;
  disponibilidade?: string;
}

// interface ProductVariation {
//   id: number;
//   imagemId: number;
//   titulo: string;
//   ordem: string;
//   preco: number;
//   isPromotion: boolean;
//   precoPromo?: number;
// }

export interface Imagem {
  id: number;
  fileData: string;
}

export interface ProductDetail {
  product: Product;

  // variations: ProductVariation[];
  // imagens: Imagem[];
  // reviews: Review[];
}

export interface ProductProps {
  items: ProductListItem[];
  map(
    arg0: (product: ProductListItem) => JSX.Element,
  ): import('react').ReactNode;
  pageTotal: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  products: ProductListItem[];
  pageNumber: number;
  isFirstPage: boolean;
  isLastPage: boolean;
}

export interface CategoriesList {
  id: number;
  metaDescription: string;
  pageTitle: string;
  titulo: string;
  productsCount: number;
  url: string;
}

export async function GetProducts(
  router: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) {
  if (router) {
    const { data } = await api.get<ProductProps>(
      `/categories/products${router.resolvedUrl.substr(
        router.resolvedUrl.split('/')[1].length + 1,
      )}`,
    );
    if (data) {
      return data;
    }
    return undefined;
  }
}

export async function GetProductsDestaques(
  router: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) {
  if (router) {
    const { data } = await api.get<ProductProps>(
      `/categories/products?departament=GetAll`
    );
    
    if (data) {
      return data;
    }
    return undefined;
  }
}

export async function GetProduct(
  router: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
): Promise<ProductDetail | undefined> {
  if (router && router.query.sku && router.query.url) {
    const { data } = await api.get<ProductDetail>(
      `/product/${router.query.sku}/${router.query.url}`,
    );

    if (data) {
      return data;
    }

    return undefined;
  }
}

export async function GetCategories() {
  const { data } = await api.get<CategoriesList[]>(`/categories/list`);

  return data;
}
