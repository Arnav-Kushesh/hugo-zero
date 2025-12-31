import styled from '@emotion/styled';

export const SidebarHeaderSection = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
`;

export const SidebarHeaderTitle = styled.div`
  h2 {
    font-family: 'Pixelify Sans', sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #ffffff;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const SidebarHeaderControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ServerUrlInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 10px 14px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    font-size: 13px;
    font-family: 'SF Mono', Monaco, monospace;
    color: #ffffff;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: #007AFF;
      background: rgba(255, 255, 255, 0.08);
    }
  }
`;

export const CurrentFolderDisplay = styled.div`
  margin-top: 8px;
`;

export const CurrentFolder = styled.div`
  padding: 10px 14px;
  background: rgba(0, 122, 255, 0.1);
  border: 1px solid rgba(0, 122, 255, 0.2);
  border-radius: 10px;
  font-size: 12px;
  color: #007AFF;
  display: flex;
  align-items: center;
  gap: 8px;

  &.active {
    background: rgba(0, 122, 255, 0.15);
  }
`;

export const SidebarMessage = styled.div`
  margin-top: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 12px;
  backdrop-filter: blur(10px);
`;

export const SuccessMessage = styled(SidebarMessage)`
  background: rgba(52, 199, 89, 0.2);
  color: #34c759;
  border: 1px solid rgba(52, 199, 89, 0.3);
`;

export const ErrorMessage = styled(SidebarMessage)`
  background: rgba(255, 59, 48, 0.2);
  color: #ff6b6b;
  border: 1px solid rgba(255, 59, 48, 0.3);
`;
