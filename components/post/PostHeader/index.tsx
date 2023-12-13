import dayjs from 'dayjs';

type PostHeaderProps = {
  title: string;
  description?: string;
  author?: string;
  category?: string;
  createdAt: string;
};

const PostHeader = ({ title, description, author, category, createdAt }: PostHeaderProps) => {
  return (
    <div className="mb-8">
      <div className={"flex mb-5"}>
        <div>{author}</div>
        <div className="flex-1"/>
        <time dateTime={dayjs(createdAt).toISOString()}>{dayjs(createdAt).format('YYYY년 MM월 DD일')}</time>
      </div>
      <div className="text-center">{category}</div>
      <h1 className="text-center font-bold">{title}</h1>
      {/* <Separator className='text-center'/> */}
    </div>
  );
};

export default PostHeader;