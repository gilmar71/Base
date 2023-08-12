import Head from 'next/head';

import { Error } from 'components/data';
import { Layout } from 'components/layout';

import { BlogContent } from 'codieweb/dist/cjs/components/pages/blog';

import { GetServerSideProps } from 'next';
import { api, pathsApi, siteUrl } from 'src/services/api';
import { IBlogCategories } from 'src/interfaces/blog-categories';
import { IBlogs, IDetach } from 'src/interfaces/IBlogs';

import * as S from 'styles/pages/blog';

interface IBlogPage {
  blogList: IBlogs;
  detachList: IDetach[];
  blogCategories: IBlogCategories[];
}

export default function BlogPage({
  blogList,
  detachList,
  blogCategories,
}: IBlogPage) {
  const filterList = blogCategories.map((category) => {
    return {
      id: category.id,
      url: category.url,
      titulo: category.titulo,
    };
  });

  return (
    <Layout noBg>
      <Head>
        <title>Grupo i9 - Comunidade</title>
      </Head>

      <Error name="Blog">
        <S.BlogPage>
          <BlogContent
            default={{
              titleBlog: 'Comunidade',
              isBaseUrl: true,
              baseImage: pathsApi.uploads,
              siteDomain: siteUrl,
            }}
            hasNewsletter
            hasDestaques
            blogList={blogList}
            api={api}
            hasfilter
            categories={filterList}
            detach={detachList}
          />
        </S.BlogPage>
      </Error>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = ctx.query.url;

  const responseBlogs = await api.get<IBlogs>(`blogs/list/${url}`);

  const responseDetach = await api.get<IDetach[]>('blog/destaques');

  const responseBlogCategories = await api.get<IBlogCategories[]>(
    'blog/categorias',
  );

  return {
    props: {
      blogList: responseBlogs.data,
      detachList: responseDetach.data,
      blogCategories: responseBlogCategories.data,
    },
  };
};
