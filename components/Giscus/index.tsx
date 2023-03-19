// 출처: https://bepyan.github.io/blog/nextjs-blog/6-comments
// import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);
  // const { resolvedTheme } = useTheme();

  // https://github.com/giscus/giscus/tree/main/styles/themes
  // const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    scriptElem.setAttribute('data-repo', 'oakkim/psvm');
    scriptElem.setAttribute('data-repo-id', 'R_kgDOJKdo8Q');
    scriptElem.setAttribute('data-category', 'General');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOJKdo8c4CU-yA');
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', 'light_high_contrast');
    scriptElem.setAttribute('data-lang', 'en');
    scriptElem.setAttribute('data-loading', 'lazy');

    ref.current.appendChild(scriptElem);
  }, []);

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  // useEffect(() => {
    // const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    // iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
  // }, [theme]);

  return <section ref={ref} />;
}
