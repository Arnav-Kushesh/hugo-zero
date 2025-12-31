import styled from '@emotion/styled';

export const SidebarContainer = styled.aside`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
`;

export const SidebarTabs = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
`;

export const SidebarTab = styled.button`
  flex: 1;
  padding: 14px;
  background: ${props => props.active ? 'rgba(0, 122, 255, 0.05)' : 'transparent'};
  border: none;
  border-bottom: 2px solid ${props => props.active ? '#007AFF' : 'transparent'};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? '#007AFF' : 'rgba(255, 255, 255, 0.7)'};
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
  }
`;

export const SidebarContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
