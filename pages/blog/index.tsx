import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { BlogContent } from 'codieweb/dist/cjs/components/pages/blog';

import { api, pathsApi, siteUrl } from 'src/services/api';
import { IBlogCategories } from 'src/interfaces/blog-categories';

import { Error } from 'components/data';
import { Layout } from 'components/layout';

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
          {blogList && filterList && detachList && (
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
          )}
        </S.BlogPage>
      </Error>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responseBlogs = await api.get<IBlogs>('blogs/list/GetAll');

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
