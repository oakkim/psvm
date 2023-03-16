// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
import highlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import firefoxLight from './firefox-light.json';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`, // mdx 파일경로 패턴

  // mdx로 작성한 글 정보에 대해 입력해야하는 필드 정의
  /*
    [필드명]: {
      type: '자료형',
      required: '필수여부',
    }
  */
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: false,
    },
    createdAt: {
      type: 'date',
      required: true,
    },
  },
}));

const options = {
  theme: firefoxLight,
 
  keepBackground: true,
 
  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node: any) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}];
    }
  },
  onVisitHighlightedLine(node: any) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node: any) {
    // Each word node has no className by default.
    node.properties.className = ['word'];
  },
};

const contentSource = makeSource({
  // 마크다운 파일이 저장되어 있는 루트 폴더
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        options
      ],
      highlight,
    ],
  },
});

export default contentSource;