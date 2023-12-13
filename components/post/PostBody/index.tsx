import { useMDXComponent } from 'next-contentlayer/hooks';
import { ReactNode, RefObject, useState } from 'react';

import style from '../posts.module.scss'
import CustomTable from '@/components/common/CustomTable';
import Accordian from '@/components/Accordian';

type PostBodyProps = {
  children: string;
  className?: string;
  renderedContentRef?: RefObject<HTMLDivElement>
}

type CustomHeadingProps = {
  as: React.ElementType;
  className?: string;
  children?: ReactNode;
}

const CustomHeading = ({ as, className, children }: CustomHeadingProps) => {
  const id = children?.toString().replace(/ /g, '_').toLowerCase();
  const Component = as

  const [showHash, setShowHash] = useState<boolean>(false)

  return (
    <Component id={id} className={`block w-full ${className}`}>
      <a className="flex w-full" href={"#" + id} onMouseEnter={() => setShowHash(true)} onMouseLeave={() => setShowHash(false)}>
        {children}
        <div className={`ml-2 ${showHash ? "" : "hidden"}`}>
          <u>#</u>
        </div>
      </a>
    </Component>
  )
}

const CustomImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <span className={style.img}>
      <img {...props}/>
      <span className={`${style['img-alt']} mt-3`}>
        {props.alt}
      </span>
    </span>
  )
}

const PostBody = ({ children, className, renderedContentRef }: PostBodyProps) => {
  const MDXComponent = useMDXComponent(children || '');
  
  return (
    <div ref={renderedContentRef} className={className}>
      <MDXComponent components={{
        h1: ({ children }) => <CustomHeading as="h2">{children}</CustomHeading>,
        h2: ({ children }) => <CustomHeading as="h3">{children}</CustomHeading>,
        h3: ({ children }) => <CustomHeading as="h4">{children}</CustomHeading>,
        h4: ({ children }) => <CustomHeading as="h5">{children}</CustomHeading>,
        h5: ({ children }) => <CustomHeading as="h6">{children}</CustomHeading>,
        h6: ({ children }) => <CustomHeading as="div" className="h7">{children}</CustomHeading>,
        img: CustomImage,
        table: ({ children }) => <CustomTable>{children}</CustomTable>,
        Accordian: Accordian
      }}/>
    </div>
  )
};

export default PostBody;