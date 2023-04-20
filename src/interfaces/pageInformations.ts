export interface PageInformationProps {
  head: {
    pageTitle: string;
    metaDescription: string;
    imageOpenGraph: string;
    headScripts: string;
  };
  body: { bodyScripts: string };
  item?: {
    id?: number;
    titulo: string;
    subtitulo?: string;
    thumbnail?: string;
    imagem: string;
    url?: string;
    descricao?: string;
    tituloPagina?: string;
    imagemInovacao?: string;
    fundadorImagem?: string;
    fundadorTitulo?: string;
    fundadorDescricao?: string;
    extra1?: string;
    extra2?: string;
    textoA?: string;
    textoB?: string;
    textoC?: string;
  };
  detail?: {
    id: number;
    titulo: string;
    subtitulo: string;
    thumbnail: string;
    imagem: string;
    url: string;
    sku: string;
    composicao?: string;
    garantia?: string;
    enriquecimento?: string;
    modoUsar?: string;
    descricao: string;
    descricao2?: string;
    categoriaTitle?: string;
    categoriaUrl?: string;
  };
  imagens?: Imagens[];
  arquivos?: Arquivos[];
}

export interface Imagens {
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

export interface Arquivos {
  fileName: string;
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
