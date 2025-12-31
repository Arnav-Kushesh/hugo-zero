import styled from '@emotion/styled';

export const PreviewModeSelector = styled.div`
  padding: 12px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  gap: 24px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #ffffff;
    }

    input[type="radio"] {
      cursor: pointer;
      accent-color: #007AFF;
    }
  }
`;

export const PreviewContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  background: #111111;
`;

export const PreviewIframe = styled.iframe`
  flex: 1;
  width: 100%;
  border: none;
  background: #111111;
`;
