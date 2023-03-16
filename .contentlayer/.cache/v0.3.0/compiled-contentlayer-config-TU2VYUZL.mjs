// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";
import firefoxLight from "@/firefox-light.json";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  // mdx 파일경로 패턴
  // mdx로 작성한 글 정보에 대해 입력해야하는 필드 정의
  /*
    [필드명]: {
      type: '자료형',
      required: '필수여부',
    }
  */
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: false
    },
    createdAt: {
      type: "date",
      required: true
    }
  }
}));
var options = {
  theme: firefoxLight,
  keepBackground: true,
  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  }
};
var contentSource = makeSource({
  // 마크다운 파일이 저장되어 있는 루트 폴더
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        options
      ],
      highlight
    ]
  }
});
var contentlayer_config_default = contentSource;
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-TU2VYUZL.mjs.map
