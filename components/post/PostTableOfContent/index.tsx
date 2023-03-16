import useTableOfContents, { Heading } from '@/hooks/useTableOfContents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { renderToString } from "react-dom/server";

type PostTableOfContentProps = {
  children: string;
  className: string;
}

const PostTableOfContent = ({ children, className }: PostTableOfContentProps) => {
  const MDXComponent = useMDXComponent(children || '');
  const contentString = renderToString(<MDXComponent/>)
  const headings = useTableOfContents(contentString);

  return (
    <div className={className}>
      <ol>
        {headings?.map(heading => <TableOfContentElement key={heading.id} {...heading}/>)}
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