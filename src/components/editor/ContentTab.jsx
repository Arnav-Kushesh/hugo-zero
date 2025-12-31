import React, { useEffect, useRef } from 'react';
import { ContentTextarea } from './ContentTab.styled';

function ContentTab({ postData, setPostData }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current && postData) {
      textareaRef.current.value = postData.content || '';
    }
  }, [postData]);

  const handleChange = (e) => {
    setPostData(prev => ({ ...prev, content: e.target.value }));
  };

  return (
    <ContentTextarea
      ref={textareaRef}
      id="contentEditor"
      placeholder="Write your content here..."
      onChange={handleChange}
    />
  );
}

export default ContentTab;
