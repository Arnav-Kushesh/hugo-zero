import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { PreviewModeSelector, PreviewContainer, PreviewIframe } from './PreviewTab.styled';

function PreviewTab({ postData }) {
  const [previewMode, setPreviewMode] = useState('rendered');
  const [hugoServerUrl, setHugoServerUrl] = useState('http://localhost:1313');

  useEffect(() => {
    const savedUrl = localStorage.getItem('hugoServerUrl');
    if (savedUrl) {
      setHugoServerUrl(savedUrl);
    }
  }, []);

  useEffect(() => {
    if (previewMode === 'live') {
      updateLivePreview();
    }
  }, [previewMode, postData, hugoServerUrl]);

  function renderPreview() {
    if (typeof marked === 'undefined') {
      return '<p class="error">Markdown parser not loaded. Please refresh the page.</p>';
    }

    marked.setOptions({
      breaks: true,
      gfm: true
    });

    try {
      const html = marked.parse(postData?.content || '');
      const title = postData?.frontmatter?.title || 'Untitled';
      const date = postData?.frontmatter?.date ? new Date(postData.frontmatter.date).toLocaleDateString() : '';
      
      return `
        <article class="preview-article">
          <header class="preview-header">
            <h1 class="preview-title">${escapeHtml(title)}</h1>
            ${date ? `<time class="preview-date">${date}</time>` : ''}
          </header>
          <div class="preview-content">
            ${html}
          </div>
        </article>
      `;
    } catch (error) {
      return `<p class="error">Error rendering preview: ${error.message}</p>`;
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function updateLivePreview() {
    const liveFrame = document.getElementById('livePreviewFrame');
    if (!liveFrame || !postData) return;
    
    // Get the filename and normalize path separators
    const filename = postData.filename.replace(/\\/g, '/');
    const pathParts = filename.split('/');
    const slug = pathParts[pathParts.length - 1].replace('.md', '');
    
    // Extract the directory path (everything except the filename)
    // e.g., "posts/my-post.md" -> "posts", "blog/2024/post.md" -> "blog/2024"
    const directoryPath = pathParts.length > 1 
      ? pathParts.slice(0, -1).join('/')
      : '';
    
    // Construct the URL based on the actual file structure
    // Hugo typically uses the directory structure from content/ as the URL path
    let previewUrl;
    
    if (directoryPath) {
      // If file is in a subdirectory (e.g., content/posts/my-post.md)
      // URL will be: baseUrl/posts/my-post/
      previewUrl = `${hugoServerUrl}/${directoryPath}/${slug}/`;
    } else {
      // If file is directly in content/ (e.g., content/my-post.md)
      // Try common patterns
      previewUrl = `${hugoServerUrl}/${slug}/`;
    }
    
    liveFrame.src = previewUrl;
  }

  return (
    <>
      <PreviewModeSelector>
        <label>
          <input
            type="radio"
            name="previewMode"
            value="rendered"
            checked={previewMode === 'rendered'}
            onChange={(e) => setPreviewMode(e.target.value)}
          />
          Rendered Preview
        </label>
        <label>
          <input
            type="radio"
            name="previewMode"
            value="live"
            checked={previewMode === 'live'}
            onChange={(e) => setPreviewMode(e.target.value)}
          />
          Live Server
        </label>
      </PreviewModeSelector>
      {previewMode === 'rendered' ? (
        <PreviewContainer
          id="previewContainer"
          dangerouslySetInnerHTML={{ __html: renderPreview() }}
        />
      ) : (
        <PreviewIframe
          id="livePreviewFrame"
          title="Live Preview"
        />
      )}
    </>
  );
}

export default PreviewTab;
