// 출처: https://bepyan.github.io/blog/nextjs-blog/6-comments
// import { useTheme } from 'next-themes';
import { IframeHTMLAttributes, useEffect, useRef } from 'react';

interface SupacusProps {
  siteId: number,
  contentId: string
}

export default function Supacus({ siteId, contentId } : SupacusProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLIFrameElement>(null);
  // const { resolvedTheme } = useTheme();

  // https://github.com/giscus/giscus/tree/main/styles/themes
  // const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    // if (!ref.current || ref.current.hasChildNodes()) return;

    if (!!document.getElementById('supacus-script')) {
      return;
    }

    const scriptElem = document.createElement('script')
    scriptElem.id = 'supacus-script'
    scriptElem.async = true;
    scriptElem.setAttribute('data-site-id', siteId.toString());
    scriptElem.setAttribute('data-content-id', encodeURIComponent(contentId));
    // scriptElem.crossOrigin = 'anonymous';
    // scriptElem.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.6/js/iframeResizer.min.js'
    scriptElem.innerHTML = `
      (function() {
        const self = document.currentScript;
        const siteId = self.getAttribute("data-site-id");
        const contentId = self.getAttribute("data-content-id");
        const ORIGIN = "https://supacus.offwork.kr"
        const SOURCE = \`\${ORIGIN}/sites/\${siteId}/contents/\${contentId}\`
      
        const iframeResizer = document.createElement('script');
        iframeResizer.async = true;
        iframeResizer.crossOrigin = 'anonymous';
        iframeResizer.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.6/js/iframeResizer.min.js'
      
        iframeResizer.onload = function() {
          const iframe = document.createElement('iframe');
      
          iframe.id = 'supacus'
          iframe.src = SOURCE;
          iframe.onload = function() {
            iFrameResize({}, '#supacus');
          }
          self.parentElement.appendChild(iframe);

          window.addEventListener('message', function(e) {
            console.log(e);
            if (!!e.data.access_token) {
              iframe.src = SOURCE + \`?accessToken=\${e.data.access_token}&refreshToken=\${e.data.refresh_token}\`;
            }
          });
        };
        console.log(self.parentElement)
        self.parentElement.appendChild(iframeResizer);
      })();
    `;
    divRef?.current?.appendChild(scriptElem)

    // iFrameResize({}, "#supacus")
  });

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  // useEffect(() => {
    // const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    // iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
  // }, [theme]);

  // useEffect(() => {
  //   if (!!ref.current?.style) {
  //     ref.current.style.height = (ref?.current?.contentWindow?.document.documentElement.scrollHeight ?? 0) + 'px';
  //   }
  // }, [ref?.current?.contentWindow?.document.documentElement.scrollHeight])

  // return <section ref={ref} />;
  console.log(contentId, encodeURIComponent(contentId))
  return (
    <div ref={divRef} className="flex flex-col items-stretch">
      {/* <iframe id="supacus" ref={ref} src={"https://supacus.offwork.kr/sites/2/contents/" + encodeURIComponent(contentId)}
        onLoad={() => {
          
        }}/> */}
    </div>
  )
}
