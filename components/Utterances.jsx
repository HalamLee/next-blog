import { memo } from 'react';

function Utterances() {
  return (
    <section
      ref={(el) => {
        if (!el) {
          return;
        }
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://utteranc.es/client.js';
        scriptElement.async = true;
        scriptElement.setAttribute('repo', 'HalamLee/next-blog');
        scriptElement.setAttribute('issue-term', 'pathname');
        scriptElement.setAttribute('theme', 'github-dark-orange');
        scriptElement.crossorigin = 'anonymous';
        el.appendChild(scriptElement);
      }}
    />
  );
}

export default memo(Utterances);
