export type Heading = {
  id: string;
  level: number;
  title: string;
  children: Heading[];
};

class Stack<T> {
  elements: T[]

  constructor() {
    this.elements = []
  }

  push(element: T) {
    this.elements.push(element)
  }

  pop(): T {
    const poppedElement = this.peek()
    this.elements.splice(this.elements.length - 1, 1);
    return poppedElement;
  }

  peek(): T {
    const element = this.elements[this.elements.length - 1];
    return element;
  }

  length(): number {
    return this.elements.length;
  }
}

const useTableOfContents = (html: string) => {
  const getHeadings = (source: string) => {
    const regex = /<h([0-9]+)>(.*?)<\/h([0-9]+)>/g;
    const matches = source.matchAll(regex);

    if (!matches) {
      return null;
    }

    const headings: Heading[] = []
    for(const match of matches) {
      headings.push({ id: match[2].replace(/ /g, '_').toLowerCase(), level: Number.parseInt(match[1]), title: match[2], children: [] });
    }
    console.log(headings)

    const headingStack: Stack<Heading> = new Stack();
    const rootHeadings: Heading[] = []
    for(const heading of headings) {
      while (headingStack.length() != 0 && heading.level <= headingStack.peek().level) {
        headingStack.pop();
      }

      if (headingStack.length() == 0){
        headingStack.push(heading);
        rootHeadings.push(heading);
        continue;
      }

      headingStack.peek().children?.push(heading);
      headingStack.push(heading);
    }
    console.log(JSON.stringify(rootHeadings, null, 4));
    
    return rootHeadings;
  }
  return getHeadings(html);
};

export default useTableOfContents;