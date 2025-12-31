import styled from '@emotion/styled';

export const FrontmatterEditor = styled.div`
  padding: 24px;
  overflow-y: auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #ffffff;
    font-size: 14px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px 14px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    font-size: 14px;
    font-family: inherit;
    color: #ffffff;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: #007AFF;
      background: rgba(255, 255, 255, 0.08);
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  input[type="checkbox"] {
    width: auto;
    margin-right: 8px;
  }
`;

export const EmptyState = styled.p`
  padding: 40px 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
`;
