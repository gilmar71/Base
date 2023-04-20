import { GetServerSideProps } from 'next';
import { api } from 'src/services/api';
import { generateMapSite } from 'src/services/sitemap';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const siteUrl = 'https://' + ctx.req.rawHeaders[1];

  return generateMapSite(api, siteUrl, ctx.res);
};

const SitemapXML: React.FC = () => {
  return null;
};

export default SitemapXML;
