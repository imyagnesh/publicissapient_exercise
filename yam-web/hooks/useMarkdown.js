import { useState, useEffect } from 'react';
import remark from 'remark';
import html from 'remark-html';

const useMarkdown = (markdown) => {
  const [HTML, setHTML] = useState('');

  useEffect(() => {
    const markdownToHtml = async () => {
      const result = await remark().use(html).processSync(markdown);
      setHTML(result.toString());
    };
    if (markdown) {
      markdownToHtml();
    }
  }, [markdown]);

  return { HTML };
};

export default useMarkdown;
