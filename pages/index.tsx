import {
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { Post, allDocuments, allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useScript } from '@/hooks/useScript';

const Home = ({
  documents,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useScript('https://tenor.com/embed.js')

  return (
    <div className="w-full m-3">
      <div className="max-w-sm border border-black">
        <div className="tenor-gif-embed" data-postid="1243269066573718874" data-share-method="host" data-aspect-ratio="1.60645" data-width="100%">
          <a href="https://tenor.com/view/chipi-chipi-chapa-chapa-gif-1243269066573718874">
            Chipi Chipi Chapa Chapa GIF</a>from <a href="https://tenor.com/search/chipi+chipi+chapa+chapa-gifs">Chipi Chipi Chapa Chapa GIFs
          </a>
        </div>
      </div>
     <h2>누구냐, 넌.</h2>
      <ul>
        <li>개발자 김대용입니다.</li>
        <li>배우는 것도 좋지만, 가르치는 걸 좋아합니다.</li>
        <li>가르치면서 부족함을 느끼고 겸손함을 배웁니다.</li>
      </ul>

      <h2>최근 발행한 글</h2>
      <ul>
        {documents.map((doc: Post) => <li key={doc._id}><Link href={doc?._raw.flattenedPath}>
          <div className="mr-5 lg:inline">{dayjs(doc.createdAt).format("YYYY-MM-DD")}</div>
          {doc.title}
        </Link></li>)}
      </ul>
    </div>
  )
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      documents: allPosts.filter(post => !post.draft).sort((a, b) =>  dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix()).slice(0, 9),
    },
  };
};