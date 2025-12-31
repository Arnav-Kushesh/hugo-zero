import styled from '@emotion/styled';

export const EditorArea = styled.main`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  flex: 1;
  min-width: 0;
`;

export const EditorContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const EditorHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.02);

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }
`;

export const EditorToolbar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ToolbarButton = styled.button`
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #007AFF;
  }

  &.save {
    background: #007AFF;
    border-color: #007AFF;
    color: white;

    &:hover {
      background: #0051D5;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 122, 255, 0.4);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SaveButton = styled(ToolbarButton)`
  background: #007AFF;
  border-color: #007AFF;
  color: white;

  &:hover {
    background: #0051D5;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 122, 255, 0.4);
  }
`;

export const EditorContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const EditorTabs = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 24px;
  background: rgba(255, 255, 255, 0.02);
`;

export const Tab = styled.div`
  padding: 14px 24px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #007AFF;
    border-bottom-color: #007AFF;
  }
`;

export const TabContent = styled.div`
  flex: 1;
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  overflow: hidden;
`;
