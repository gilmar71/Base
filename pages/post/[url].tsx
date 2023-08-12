import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import { PostContent } from 'codieweb/dist/cjs/components/pages/post';
import { HeadComponent } from 'codieweb/dist/cjs/components/data/head';
import { PostDetail } from 'codieweb/dist/cjs/components/pages/post/interfaces';

import { IBlogCategories } from 'src/interfaces/blog-categories';
import { api, siteUrl, pathsApi, painelURL } from 'src/services/api';
import { IDetach } from 'src/interfaces/IBlogs';

import { Layout } from 'components/layout';

interface IPostPage {
  detachList: IDetach[];
  postDetail: PostDetail;
  blogCategories: IBlogCategories[];
}

export default function PostPage({
  postDetail,
  detachList,
  blogCategories,
}: IPostPage) {
  const router = useRouter();

  const filterList =
    blogCategories && blogCategories.length > 0
      ? blogCategories.map((category) => {
          return {
            id: category.id,
            url: category.url,
            titulo: category.titulo,
          };
        })
      : [{ id: 0, url: '', titulo: '' }];

  return (
    <Layout noBg>
      {postDetail && postDetail.head && (
        <HeadComponent painel={painelURL} headContent={postDetail.head} />
      )}

      {postDetail.detail && filterList && detachList ? (
        <PostContent
          api={api}
          postDetail={postDetail}
          categories={filterList}
          hasNewsletter
          hasfilter
          default={{
            isBaseUrl: true,
            baseImage: pathsApi.uploads,
            siteDomain: siteUrl,
          }}
          detach={detachList}
        />
      ) : (
        <h2
          className="title-4"
          style={{ padding: '200px 0', textAlign: 'center' }}
        >
          Desculpe, houve um problema com esse post, estamos trabalhando para
          corrigir!
        </h2>
      )}
    </Layout>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const url = ctx.query.url;

//   const { postDetailData, categories, detachs } = await getPostDetailData(url);

//   return {
//     props: {
//       detachList: detachs,
//       postDetail: postDetailData,
//       blogCategories: categories,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = ctx.query.url;

  const responsePostDetail = await api.get<PostDetail>('blog/detail/' + url);

  const responseDetach = await api.get<IDetach[]>('blog/destaques');

  const responseBlogCategories = await api.get<IBlogCategories[]>(
    'blog/categorias',
  );

  return {
    props: {
      detachList: responseDetach.data,
      postDetail: responsePostDetail.data,
      blogCategories: responseBlogCategories.data,
    },
  };
};
