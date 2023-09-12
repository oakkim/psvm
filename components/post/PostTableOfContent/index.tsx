import { Heading } from '@/hooks/useTableOfContents';

type PostTableOfContentProps = {
  children?: Heading[] | null;
  className: string;
}

const PostTableOfContent = ({ children, className }: PostTableOfContentProps) => {
  return (
    <div className={className}>
      <ol>
        {children?.map(heading => <TableOfContentElement key={heading.id} {...heading}/>)}
      </ol>
    </div>
  )
}

const TableOfContentElement = ({ id, level, title, children }: Heading) => {
  return (
    <li key={id}><a href={"#" + id}>{title}</a>{children && (<ol>{children.map(child => <TableOfContentElement key={child.id} {...child}/>)}</ol>)}</li>
  )
};

export default PostTableOfContent;