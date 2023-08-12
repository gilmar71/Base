export interface IBlogCategories {
  head: {
    pageTitle: string;
    metaDescription: string;
    imageOpenGraph: string;
    headScripts: string;
  };
  body: {
    bodyScripts: string;
  };
  blogs: [
    {
      categoriaTitle: string;
      categoriaId: number;
      titulo: string;
      descricao: string;
      imagem: string;
      url: string;
      id: number;
    },
  ];
  id: number;
  titulo: string;
  url: string;
}
