import {
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { allJournals } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';

const JournalPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="w-full">
      {posts.map((post?: any) => 
        <Link key={post?.id} className="block p-4 border-b" href={"/posts/" + post?._raw.flattenedPath}>
          <div>
            <span>{post?.title}</span>
          </div>
          <div>{dayjs(post?.createdAt).format("YYYY년 MM월 DD일")}</div>
        </Link>
      )}
    </div>
  )
};

export default JournalPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      posts: allJournals.filter(post => !post.draft).sort((a, b) =>  dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix()),
    },
  };
};