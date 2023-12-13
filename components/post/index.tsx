import { Post } from 'contentlayer/generated';
import PostHeader from '@/components/post/PostHeader';
import PostBody from '@/components/post/PostBody';
import PostTableOfContent from '@/components/post/PostTableOfContent';

import { NextSeo } from 'next-seo';

import style from './posts.module.scss';
import Separator from '@/components/post/Separator';
import useTableOfContents from '@/hooks/useTableOfContents';
import Supacus from '@/components/Supacus';
import { useEffect, useRef, useState } from 'react';

type PostProps = {
  post: Post
}

const Post = ({
  post,
}: PostProps) => {
  const [renderedContent, setRenderedContent] = useState<HTMLElement | null>(null);
  const renderedContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (renderedContentRef.current == null) {
      return;
    }
    setRenderedContent(renderedContentRef.current)
  }, [])

  const tableOfContent = useTableOfContents(renderedContent)

  return (
    <div className={ "flex w-full max-w-screen-lg gap-3 justify-center " + style.post }>
      <NextSeo
        title={post?.title}
        description={post?.description}
      />
      <div className={"relative hidden " + (tableOfContent?.length == 0 ? "lg:hidden" : "lg:block")} style={{width: '240px'}}>
        <div className="fixed my-10 ml-2 pl-5 pr-5" style={{width: '240px'}}>
          <PostTableOfContent className={style.toc}>
            {tableOfContent}
          </PostTableOfContent>          
        </div>
      </div>
      <div className="lg:my-10 p-5 lg:p-10 lg:pt-8 lg:border flex lg:justify-center flex-col flex-1 min-w-0 max-w-3xl">
        <PostHeader
          title={post?.title}
          description={post?.description}
          author={"김대용"}
          category={post?.category}
          createdAt={post?.createdAt}
        />
        <Separator/>
        <PostBody className={ "mt-5 " + style.body } renderedContentRef={renderedContentRef}>
          {post?.body.code}
        </PostBody>
        <Separator/>
        <Supacus siteId={1} contentId={post?._raw.flattenedPath}/>
      </div>
   </div>
  );
};

export default Post;