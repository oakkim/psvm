// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

// firefox-light.json
var firefox_light_default = {
  name: "Firefox Light",
  tokenColors: [
    {
      settings: {
        background: "#FFFFFF",
        foreground: "#939393"
      }
    },
    {
      name: "Comment",
      scope: "comment",
      settings: {
        foreground: "#939393"
      }
    },
    {
      name: "String",
      scope: "string",
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      name: "Regexp",
      scope: "string.regexp",
      settings: {
        foreground: "#003EAA"
      }
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: "#003EAA"
      }
    },
    {
      name: "Variable",
      scope: "variable.language",
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      scope: "variable.other.constant",
      settings: {
        foreground: "#0074E8"
      }
    },
    {
      name: "Keyword",
      scope: "keyword",
      settings: {
        foreground: "#DD00A9"
      }
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: "#003EAA"
      }
    },
    {
      name: "Class name",
      scope: [
        "entity.name.class",
        "entity.name.type"
      ],
      settings: {
        foreground: "#0074E8"
      }
    },
    {
      name: "Function name",
      scope: "meta.function-call",
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      name: "Function definition",
      scope: "meta.definition.function",
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      scope: "variable.object.property",
      settings: {
        foreground: "#058B00"
      }
    },
    {
      name: "Embedded code markers",
      scope: [
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.end"
      ],
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      name: "Built-in constant",
      scope: [
        "constant.language",
        "meta.preprocessor"
      ],
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      name: "User-defined constant",
      scope: [
        "constant.character",
        "constant.other"
      ],
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      name: "Inherited class",
      scope: "entity.other.inherited-class",
      fontStyle: "italic",
      settings: {
        fontStyle: "underline",
        foreground: "#0074E8"
      }
    },
    {
      name: "Function argument",
      scope: "variable.parameter",
      settings: {
        foreground: "#0074E8"
      }
    },
    {
      name: "Punctuation acessor",
      scope: "punctuation.accessor",
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      scope: "keyword.type",
      settings: {
        foreground: "#003EAA"
      }
    },
    {
      scope: [
        "entity.name.variable.property.cs",
        "entity.name.function.cs"
      ],
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      scope: "storage.modifier.cs",
      settings: {
        foreground: "#058B00"
      }
    },
    {
      scope: "keyword.other.new.cs",
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      scope: "meta.tag.sgml.doctype.html",
      settings: {
        fontStyle: "italic",
        foreground: "#D9DBDF"
      }
    },
    {
      name: "Tag name",
      scope: "entity.name.tag",
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      name: "Tag start/end",
      scope: "punctuation.definition.tag",
      settings: {
        foreground: "#767676"
      }
    },
    {
      name: "Tag attribute",
      scope: [
        "meta.tag.structure.any.html"
      ],
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      name: "Tag attribute",
      scope: [
        "entity.other.attribute.name",
        "entity.other.attribute-name.html",
        "entity.other.attribute-name.id.html"
      ],
      settings: {
        foreground: "#DD00A9"
      }
    },
    {
      name: "Library function",
      scope: "support.function",
      settings: {
        foreground: "#058B00"
      }
    },
    {
      name: "Continuation",
      scope: "punctuation.separator.continuation",
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      name: "Library constant",
      scope: "support.constant",
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      name: "Library class/type",
      scope: [
        "support.type",
        "support.class"
      ],
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      name: "Library variable",
      scope: "support.other.variable",
      settings: {
        foreground: "#A7A6C5"
      }
    },
    {
      scope: [
        "string.quoted.single",
        "string.quoted.double"
      ],
      settings: {
        foreground: "#003EAA"
      }
    },
    {
      scope: "comment.block.html",
      settings: {
        foreground: "#058B00AA"
      }
    },
    {
      scope: [
        "punctuation.definition.string.begin.html",
        "punctuation.definition.string.end.html"
      ],
      settings: {
        foreground: "#D9DBDF"
      }
    },
    {
      name: "Storage type",
      scope: "storage.type",
      settings: {
        foreground: "#DD00A9"
      }
    },
    {
      name: "Other",
      scope: "variable.language.this",
      settings: {
        foreground: "#DD00A9",
        fontStyle: "italic"
      }
    },
    {
      name: "Other",
      scope: [
        "constant.language.boolean.true",
        "constant.language.boolean.false"
      ],
      settings: {
        foreground: "#DD00A9"
      }
    },
    {
      scope: [
        "constant.language.undefined",
        "keyword.operator.comparison",
        "keyword.operator.logical",
        "keyword.operator.assignment",
        "keyword.operator.arithmetic"
      ],
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      scope: [
        "variable.other.property",
        "variable.other.object.property",
        "meta.object-literal.key",
        "meta.object.member",
        "entity.name.function"
      ],
      settings: {
        foreground: "#058B00"
      }
    },
    {
      scope: "entity.name.function",
      settings: {
        fontStyle: "italic"
      }
    },
    {
      scope: [
        "meta.object.member"
      ],
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      scope: "variable.other.readwrite",
      settings: {
        foreground: "#0074E8"
      }
    },
    {
      scope: "keyword.control.flow",
      settings: {
        foreground: "#DD00A9"
      }
    },
    {
      scope: [
        "variable.other.object",
        "entity.name.type.module"
      ],
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      scope: [
        "meta.brace.square",
        "meta.brace.round",
        "punctuation.definition.block",
        "punctuation.definition.parameters.begin",
        "punctuation.definition.parameters.end"
      ],
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      scope: "string.template",
      settings: {
        foreground: "#003EAA"
      }
    },
    {
      scope: "meta.template.expression",
      settings: {
        foreground: "#003EAA"
      }
    },
    {
      scope: "variable.other.constant.property",
      settings: {
        foreground: "#058B00"
      }
    },
    {
      scope: [
        "support.type.property-nameon",
        "meta.structure.arrayon"
      ],
      settings: {
        foreground: "#0074E8"
      }
    },
    {
      scope: "string.quoted.doubleon",
      settings: {
        foreground: "#E437BB"
      }
    },
    {
      scope: [
        "constant.languageon",
        "constant.numericon"
      ],
      settings: {
        foreground: "#1F971B"
      }
    },
    {
      name: "Other",
      scope: [
        "meta.selector.css",
        "entity.name.tag.css",
        "keyword.control.at-rule.media.css"
      ],
      settings: {
        foreground: "#8000D7"
      }
    },
    {
      name: "Other",
      scope: [
        "meta.function.url.css",
        "meta.property-value.css",
        "support.constant.property-value.css",
        "support.function.url.css",
        "support.function.misc.css",
        "keyword.other.unit.px.css",
        "keyword.other.unit.pt.css",
        "keyword.other.unit.percentage.css",
        "keyword.other.unit.em.css",
        "keyword.other.unit.rem.css",
        "keyword.other.unit.ch.css",
        "keyword.other.unit.vh.css",
        "keyword.other.unit.vw.css",
        "keyword.other.unit.s.css",
        "keyword.other.unit.deg.css",
        "keyword.other.unit.scss",
        "keyword.other.unit.dppx.css",
        "support.constant.media.css",
        "constant.numeric.css",
        "string.quoted.single.css",
        "string.quoted.double.css"
      ],
      settings: {
        foreground: "#003EAA"
      }
    },
    {
      name: "Other",
      scope: [
        "constant.other.color.rgb-value.hex.css",
        "variable.parameter.url.css",
        "support.function.transform.css",
        "support.function.calc.css",
        "entity.other.attribute-name.pseudo-class.css",
        "meta.function.gradient.css",
        "support.function.gradient.css",
        "variable.parameter.url.scss",
        "entity.name.tag.scss"
      ],
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      name: "Other",
      scope: [
        "punctuation.terminator.rule.css",
        "punctuation.separator.key-value.css",
        "punctuation.section.property-list.begin.bracket.curly.css",
        "punctuation.section.property-list.end.bracket.curly.css",
        "punctuation.section.function.begin.bracket.round.css",
        "punctuation.section.function.end.bracket.round.css",
        "punctuation.definition.entity.begin.bracket.square.css",
        "punctuation.definition.entity.end.bracket.square.css",
        "punctuation.separator.list.comma.css",
        "keyword.operator.pattern.css"
      ],
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      scope: [
        "support.type.property-name.css",
        "support.type.property-name.media.css",
        "support.type.vendored.property-name.media.css"
      ],
      settings: {
        foreground: "#058B00"
      }
    },
    {
      scope: [
        "support.type.vendored.property-name.css",
        "entity.other.attribute-name.pseudo-element.css"
      ],
      settings: {
        foreground: "#939393"
      }
    },
    {
      scope: [
        "keyword.operator.combinator.css"
      ],
      settings: {
        foreground: "#D9DBDF"
      }
    },
    {
      scope: [
        "support.type.property-name.css"
      ],
      settings: {
        foreground: "#058B00"
      }
    },
    {
      scope: "markup.heading",
      settings: {
        foreground: "#8000D7",
        fontStyle: "bold"
      }
    },
    {
      scope: "markup.underline",
      settings: {
        foreground: "#75BFFF",
        fontStyle: "underline"
      }
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold"
      }
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic"
      }
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: "#86DE74"
      }
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: "#CC3D3D"
      }
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: "#0A84FF"
      }
    },
    {
      scope: "punctuation.definition.quote.begin.markdown",
      settings: {
        foreground: "#FF7DE9"
      }
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#75BFFF"
      }
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: "#058B00"
      }
    },
    {
      scope: "meta.paragraph.markdown",
      settings: {
        foreground: "#4A4A4F"
      }
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#B1B1B3"
      }
    },
    {
      scope: [
        "string.other.link.title.markdown",
        "string.other.link.description.markdown"
      ],
      settings: {
        foreground: "#003EAA"
      }
    },
    {
      scope: [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown"
      ],
      settings: {
        foreground: "#0A84FF",
        fontStyle: "italic"
      }
    }
  ],
  colors: {
    contrastBorder: "#E0E0E1",
    focusBorder: "#0A84FF",
    foreground: "#939393",
    "selection.background": "#B9D7FD",
    errorForeground: "#a4000f",
    "button.background": "#EDEDF0",
    "button.foreground": "#4A4A4F",
    "button.hoverBackground": "#D9DBDF",
    "dropdown.background": "#EDEDF0",
    "dropdown.border": "#0A84FF",
    "dropdown.foreground": "#D9DBDF",
    "input.background": "#FFFFFF",
    "input.border": "#E0E0E1",
    "input.foreground": "#000000",
    "input.placeholderForeground": "#767676",
    "inputOption.activeBorder": "#0A84FF",
    "inputValidation.errorBackground": "#fdf2f5",
    "inputValidation.errorBorder": "#a4000f",
    "inputValidation.infoBackground": "#0A84FFCC",
    "inputValidation.infoBorder": "#0A84FF",
    "inputValidation.warningBackground": "#FFF89E",
    "inputValidation.warningBorder": "#FFBF00",
    "scrollbarSlider.activeBackground": "#2A76C6",
    "scrollbarSlider.background": "#767676",
    "scrollbarSlider.hoverBackground": "#4A4A4F",
    "list.activeSelectionBackground": "#B9D7FD",
    "list.activeSelectionForeground": "#4A4A4F",
    "list.dropBackground": "#B9D7FD",
    "list.focusBackground": "#B9D7FD",
    "list.hoverBackground": "#D9DBDF",
    "list.inactiveSelectionBackground": "#D9DBDF",
    "list.invalidItemForeground": "#E52E2E",
    "activityBar.background": "#F9F9FA",
    "activityBar.dropBackground": "#E0E0E1",
    "activityBar.foreground": "#939393",
    "activityBarBadge.background": "#8000D7",
    "activityBarBadge.foreground": "#FFFFFF",
    "sideBar.background": "#F9F9FA",
    "sideBar.foreground": "#3c3c3c",
    "sideBarTitle.foreground": "#939393",
    "sideBarSectionHeader.background": "#EDEDF0",
    "editorGroup.background": "#f9f9fa",
    "editorGroupHeader.noTabsBackground": "#F9F9FA",
    "editorGroupHeader.tabsBackground": "#F9F9FA",
    "tab.activeBackground": "#F9F9FA",
    "tab.activeForeground": "#0060df",
    "tab.border": "#e0e0e2",
    "tab.activeBorder": "#0060df",
    "tab.inactiveBackground": "#F9F9FA",
    "tab.inactiveForeground": "#4A4A4F",
    "tab.hoverBorder": "#0060df",
    "editor.background": "#FFFFFF",
    "editor.foreground": "#4A4A4F",
    "editorLineNumber.foreground": "#667380",
    "editorLineNumber.activeForeground": "#4A4A4F",
    "editorCursor.background": "#4A4A4F",
    "editorCursor.foreground": "#000000",
    "editor.selectionBackground": "#B9D7FD",
    "editor.selectionForeground": "#FFFFFF",
    "editor.lineHighlightBackground": "#E7F1FE",
    "editor.lineHighlightBorder": "#E7F1FE",
    "editorWhitespace.foreground": "#D9DBDF",
    "editorBracketMatch.background": "#B9D7FD",
    "editorBracketMatch.border": "#4A4A4F",
    "editorError.foreground": "#A4000F",
    "editorWarning.foreground": "#FFBF00",
    "editorInfo.foreground": "#0A84FF",
    "editorHint.foreground": "#058B00",
    "editorWidget.background": "#F9F9FA",
    "editorWidget.border": "#2C2E31",
    "editorSuggestWidget.background": "#F9F9FA",
    "editorSuggestWidget.border": "#2C2E31",
    "editorSuggestWidget.foreground": "#4A4A4F",
    "editorSuggestWidget.highlightForeground": "#0A84FF",
    "editorSuggestWidget.selectedBackground": "#B9D7FD",
    "editorHoverWidget.background": "#F9F9FA",
    "editorHoverWidget.border": "#2C2E31",
    "peekView.border": "#E0E0E1",
    "panel.background": "#F9F9FA",
    "panel.border": "#4A4A4F",
    "panel.dropBackground": "#EDEDF0",
    "panelTitle.activeBorder": "#0A84FF",
    "panelTitle.activeForeground": "#0A84FF",
    "panelTitle.inactiveForeground": "#4A4A4F",
    "statusBar.background": "#F9F9FA",
    "statusBar.foreground": "#4A4A4F",
    "statusBar.border": "#F9F9FA",
    "statusBar.debuggingBackground": "#0A84FF",
    "statusBar.debuggingForeground": "#F9F9FA",
    "statusBar.debuggingBorder": "#0A84FF",
    "statusBar.noFolderBackground": "#4A4A4F",
    "statusBar.noFolderForeground": "#F9F9FA",
    "statusBar.noFolderBorder": "#4A4A4F",
    "statusBarItem.activeBackground": "#B9D7FD",
    "statusBarItem.hoverBackground": "#B9D7FD",
    "gitDecoration.modifiedResourceForeground": "#003eaa",
    "gitDecoration.deletedResourceForeground": "#a4000f",
    "gitDecoration.untrackedResourceForeground": "#715100",
    "gitDecoration.ignoredResourceForeground": "#939393",
    "gitDecoration.conflictingResourceForeground": "#8103d7"
  }
};

// contentlayer.config.ts
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
  theme: firefox_light_default,
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
//# sourceMappingURL=compiled-contentlayer-config-RP2NO7QI.mjs.map
