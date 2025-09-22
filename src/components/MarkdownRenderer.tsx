import React from 'react';
import Markdown from 'react-markdown';

const MarkdownRenderer = ({ content, className }: {content: string, className: string}) => {
  return (
    <Markdown>
      {content}
    </Markdown>
  );
};

export default MarkdownRenderer;