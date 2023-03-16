import dayjs from 'dayjs';

type PostHeaderProps = {
  title: string;
  description?: string;
  category?: string;
  createdAt: string;
};

const PostHeader = ({ title, description, category, createdAt }: PostHeaderProps) => {
  return (
    <div>
      <span>{category}</span>
      <h1>{title}</h1>
      <time dateTime={dayjs(createdAt).toISOString()}>{dayjs(createdAt).format('YYYY년 MM월 DD일')}</time>
      <div>--------------------</div>
    </div>
  );
};

export default PostHeader;