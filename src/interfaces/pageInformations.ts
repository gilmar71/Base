export interface IPageInformations {
  head: {
    pageTitle: string;
    metaDescription: string;
    imageOpenGraph: string;
    headScripts: string;
  };
  body: { bodyScripts: string };
  banner: {
    titulo: string;
    subtitulo: string;
    descricao: string;
    imagem: string;
    thumbnail: string;
    url: string;
    id: number;
    ativo: boolean;
    dataCriacao: string;
    dataEdicao: string;
  };
  detail: {
    id: number;
    titulo: string;
    thumbnail: string;
    imagem: string;
    url: string;
    categoriaId: number;
    descricao: string;
  };
  categorias: ICategories[];
  depoimentos: IDepoiments[];
  marcas: IBrands[];
  blogs: IEvents[];
  servicos: IServices[];
  proposito: {
    subCategoriaId: number;
    titulo: string;
    descricao: string;
    imagem: string;
    thumbnail: string;
    id: number;
    ativo: boolean;
    dataCriacao: string;
    dataEdicao: string;
  };
  sobre: {
    detail: {
      id: number;
      titulo: string;
      subtitulo: string;
      thumbnail: string;
      imagem: string;
      categoriaId: number;
      descricao: string;
    };
    imagens: IImagens[];
  };
  posts: IPosts[];
  imagens: IImagens[];
  categoria: {
    subCategorias: [];
    autor: [];
    noticias: [];
    products: [];
    titulo: string;
    descricao: string;
    imagem: string;
    pageTitle: string;
    metaDescription: string;
    url: string;
    id: number;
    ativo: boolean;
    excluido: boolean;
    dataEdicao: string;
  };
}

interface ICategories {
  subCategorias: [];
  autor: [];
  noticias: [];
  products: [];
  servicos: IServices[];
  titulo: string;
  descricao: string;
  url: string;
  id: number;
}

export interface IServices {
  categoriaId: number;
  titulo: string;
  descricao?: string;
  imagem?: string;
  url: string;
  id: number;
}

interface IDepoiments {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  id: number;
}

export interface IBrands {
  detail: IDetails;
  imagens: IImagens[];
}

interface IDetails {
  id: number;
  titulo: string;
  thumbnail: string;
  imagem: string;
  url: string;
  categoriaId: number;
}

export interface IImagens {
  fileType: string;
  fileSize: string;
  fileData: string;
  guid: string;
  slug: string;
  placeReceived: string;
  tableId: number;
  tableAction: string;
  id: number;
  ativo: boolean;
  excluido: boolean;
  dataCriacao: string;
  dataEdicao: string;
}

export interface IEvents {
  data: string;
  categoriaId: number;
  titulo: string;
  subtitulo: string;
  imagem: string;
  url: string;
  id: number;
}

export interface IPosts {
  id: number;
  titulo: string;
  subtitulo: string;
  imagem?: string;
  url: string;
  categoriaId: number;
  descricao?: string;
  data: string;
}
