import { GetServerSideProps } from 'next';

import { api } from 'src/services/api';

import { AxiosInstance } from 'axios';

import { ServerResponse } from 'http';

const withXMLTemplate = (content: string): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${content}</urlset>`;
};

const buildSitemapXml = (fields): string => {
  const content = fields
    .map((fieldData) => {
      const field = Object.entries(fieldData).map(([key, value]) => {
        if (!value) return '';
        return `<${key}>${value}</${key}>`;
      });

      return `<url>${field.join('')}</url>\n`;
    })
    .join('');

  return withXMLTemplate(content);
};

export const generateMapSite = async (
  api: AxiosInstance,
  apiURL: string,
  res: ServerResponse,
) => {
  // const products = await api.get<ProductProps>('categories/products/');
  // const categories = await api.get<ProductProps>('/Produto/list/tecnologia');

  // const allObjectsOfProducts = products.data.products.map((product) => ({
  //   url: 'produto/' + product.url,
  //   lastmod: new Date(),
  //   priority: 1,
  //   changefreq: 'always',
  // }));

  // const allObjectsOfCategories = categories.data.items.map((categorie) => ({
  //   url: `servicos/${categorie.url}`,
  //   lastmod: new Date(),
  //   priority: 0.9,
  //   changefreq: 'weekly',
  // }));

  const fixedPages = [
    '',
    '404',
    'atendimento-ao-cliente',
    'criar-conta',
    'termos-de-uso',
    'sobre-nos',
    'politica-e-privacidade',
    'nova-senha',
    'esqueci-minha-senha',
    'carrinho',
    'passeios',
    'servicos',
    'login',
    'produtos',
    'perfil',
    'pagamento',
    'meusPedidos',
    'contato',
    'contato/success',
    'busca',
  ];

  const generateSiteMap = fixedPages.map((url) => ({
    url,
    lastmod: new Date(),
    priority: 0.8,
    changefreq: 'daily',
  }));

  const generateMap = [
    // ...allObjectsOfProducts,
    ...generateSiteMap,
    // ...allObjectsOfCategories,
  ];

  const transformedData = generateMap.reduce(
    (
      filtered: {
        loc: string;
        lastmod: Date;
        priority: number;
        changefreq: string;
      }[],
      page,
    ) => {
      filtered.push({
        loc: apiURL + page.url,
        lastmod: page.lastmod || undefined,
        priority: page.priority,
        changefreq: page.changefreq,
      });

      return filtered;
    },
    [],
  );

  const sitemapContent = buildSitemapXml(transformedData);

  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapContent);

  res.end();

  return {
    props: {},
  };
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const siteUrl = 'https://' + ctx.req.rawHeaders[1] + '.com.br/';

  return generateMapSite(api, siteUrl, ctx.res);
};

const SitemapXML: React.FC = () => {
  return null;
};

export default SitemapXML;
