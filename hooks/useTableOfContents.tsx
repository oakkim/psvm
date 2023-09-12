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

const useTableOfContents = (element: HTMLElement | null) => {
  const getHeadings = (element: HTMLElement | null) => {
    const matches = element?.querySelectorAll('h2, h3, h4, h5')
    // const regex = /<h([0-9]+)>(.*?)<\/h([0-9]+)>/g;
    // const matches = source.matchAll(regex);
    
    // console.log(matches)

    if (!matches) {
      return null;
    }

    const headings: Heading[] = []
    for(const match of matches) {
      var title = match.innerHTML.replaceAll(/<[^<>]*>/g, "")
      title = title.substring(0, title.length - 1)
      headings.push({ id: match.id, level: Number.parseInt(match.nodeName.replace('H', '')), title: title, children: [] });
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

  return getHeadings(element);
};

export default useTableOfContents;