import { useMDXComponent } from 'next-contentlayer/hooks';
import useTableOfContents, { Heading } from '@/hooks/useTableOfContents';
import { renderToString } from "react-dom/server";
import { ReactNode } from 'react';

type PostBodyProps = {
  children: string;
  className?: string;
}

type CustomHeadingProps = {
  children?: ReactNode;
}

const CustomH1 = ({ children }: CustomHeadingProps) => {
  const id = children?.toString().replace(/ /g, '_').toLowerCase();

  return (
    <h2 id={id}><a href={"#" + id}>{"# " + children}</a></h2>
  )
}

const CustomH2 = ({ children }: CustomHeadingProps) => {
  const id = children?.toString().replace(/ /g, '_').toLowerCase();

  return (
    <h3 id={id}><a href={"#" + id}>{"# " + children}</a></h3>
  )
}

const CustomH3 = ({ children }: CustomHeadingProps) => {
  const id = children?.toString().replace(/ /g, '_').toLowerCase();

  return (
    <h4 id={id}><a href={"#" + id}>{"# " + children}</a></h4>
  )
}

const CustomH4 = ({ children }: CustomHeadingProps) => {
  const id = children?.toString().replace(/ /g, '_').toLowerCase();

  return (
    <h5 id={id}><a href={"#" + id}>{"# " + children}</a></h5>
  )
}

const CustomH5 = ({ children }: CustomHeadingProps) => {
  const id = children?.toString().replace(/ /g, '_').toLowerCase();

  return (
    <h6 id={id}><a href={"#" + id}>{"# " + children}</a></h6>
  )
}

const CustomH6 = ({ children }: CustomHeadingProps) => {
  const id = children?.toString().replace(/ /g, '_').toLowerCase();

  return (
    <div id={id} className="h7"><a href={"#" + id}>{"# " + children}</a></div>
  )
}


const PostBody = ({ children, className }: PostBodyProps) => {
  const MDXComponent = useMDXComponent(children || '');
  
  return (
    <div className={className}>
      <MDXComponent components={{
        h1: CustomH1,
        h2: CustomH2,
        h3: CustomH3,
        h4: CustomH4,
        h5: CustomH5,
        h6: CustomH6
      }}/>
    </div>
  )
};

export default PostBody;