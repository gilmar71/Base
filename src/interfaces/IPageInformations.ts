export interface IPageInformations {
  head: {
    pageTitle: string;
    metaDescription: string;
    imageOpenGraph: string;
    headScripts: string;
  };
  body: { bodyScripts: string };
  banner: IBanners;
  depoimentos: IDepoiments[];
  faqs: IFaqs[];
  blogs: [];
  servicos: [
    {
      titulo: string;
      descricao: string;
      imagem: string;
      url: string;
      id: number;
    },
  ];
  sobre: ISobre;
  instituto: ISobre;
  institutoGaleria?: IInstitutoGaleria;
  detail?: IBlogDetail;
}

export interface IBanners {
  titulo: string;
  descricao: string;
  imagem: string;
  thumbnail: string;
  url: string;
  id: number;
  ativo: boolean;
  dataCriacao: string;
  dataEdicao: string;
}

export interface IServices {
  titulo: string;
  subtitulo: string;
  url: string;
  id: number;
}

export interface IDepoiments {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  id: number;
}

export interface IFaqs {
  titulo: string;
  descricao: string;
  url?: string;
  id: number;
}

export interface ISobre {
  titulo: string;
  descricao: string;
  imagem: string;
  url: string;
  id: number;
  ativo: boolean;
  dataCriacao: string;
  dataEdicao: string;
}

export interface IInstitutoGaleria {
  id: number;
  titulo: string;
  descricao: string;
  url: string;
  imagens: IGaleriaInstituto[];
}

export interface IGaleriaInstituto {
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

export interface IBlogDetail {
  id: number;
  titulo: string;
  subtitulo: string;
  categoriaBlogId: number;
  thumbnail: string;
  imagem: string;
  url: string;
  descricao: string;
  dataCadastro: string;
  dataCriacao: string;
}
