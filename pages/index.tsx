import {
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';

const Home = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="w-full">
      {posts.map((post?: any) => 
        <Link key={post?.id} className="block p-4 border-b" href={"/posts/" + post?._raw.flattenedPath}>
          <div>
            <span className="font-bold">{post?.title}</span>
          </div>
          <div>{dayjs(post?.createdAt).format("YYYY년 MM월 DD일")}</div>
        </Link>
      )}
    </div>
  )
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      posts: allPosts.filter(post => !post.draft),
    },
  };
};