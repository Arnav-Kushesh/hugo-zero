import styled from '@emotion/styled';

export const ContentTextarea = styled.textarea`
  flex: 1;
  padding: 24px;
  background: transparent;
  border: none;
  resize: none;
  font-family: 'SF Mono', Monaco, 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.8;
  outline: none;
  color: #ffffff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
