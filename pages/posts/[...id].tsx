import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { allPosts } from 'contentlayer/generated';
import PostHeader from '@/components/post/PostHeader';
import PostBody from '@/components/post/PostBody';
import PostTableOfContent from '@/components/post/PostTableOfContent';

import style from './posts.module.scss';
import Giscus from '@/components/Giscus';
import Separator from '@/components/post/Separator';

const PostDetailPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={ "flex w-full max-w-screen-lg gap-3 " + style.post }>
      <div className="relative hidden lg:block" style={{width: '240px'}}>
        <div className="fixed my-10 ml-2 pl-5 pr-5" style={{width: '240px'}}>
          <PostTableOfContent className={style.toc}>
            {post?.body.code}
          </PostTableOfContent>          
        </div>
      </div>
      <div className="lg:my-10 p-5 lg:p-10 lg:pt-8 lg:border flex lg:justify-center flex-col flex-1 min-w-0">
        <PostHeader
          title={post?.title}
          description={post?.description}
          category={post?.category}
          createdAt={post?.createdAt}
          />
        <PostBody className={ "mt-5 " + style.body }>
          {post?.body.code}
        </PostBody>
        <Separator/>
        <Giscus/>
      </div>
   </div>
  );
};

export default PostDetailPage;

// SSG 렌더링을 사용하기 위한 getStaticPaths 함수 사용
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(({ _raw }) => ({
      params: {
        // 마크다운 파일의 파일명을 기반으로 id를 지정합니다.
        id: _raw.flattenedPath.split('/') ?? null,
      },
    })),

    // 현재 등록된 글 이외의 제목이 전달될경우 404 처리
    fallback: false,
  };
};

// SSG 렌더링을 사용하기 위한 getStaticProps 함수 사용
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = ((params?.id ?? []) as string[]).join('/');

  // 동적 id 파라미터를 통해서 파일명과 동일한 글을 찾아서 리턴합니다.
  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post,
    },
  };
};