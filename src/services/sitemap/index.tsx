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
  const date = new Date();
  const year = date.getFullYear().toString();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  const dateFormated = year + '-' + month + '-' + day;

  const fixedPages = [
    '',
    '/implantes-e-proteses-dentarias',
    '/ortodontia',
    '/Endontia',
    '/clínica-geral',
    '/cirurgia',
  ];

  const generateSiteMap = fixedPages.map((url) => ({
    url,
    lastmod: dateFormated,
    priority: 0.9,
    changefreq: 'Monthly',
  }));

  const generateMap = [...generateSiteMap];

  const transformedData = generateMap.reduce(
    (
      filtered: {
        loc: string;
        lastmod: string;
        priority: number;
        changefreq: string;
      }[],
      page,
    ) => {
      filtered.push({
        loc: apiURL + page.url,
        lastmod: page.lastmod,
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
