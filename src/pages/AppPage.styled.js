import styled from '@emotion/styled';

export const AppPageContainer = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 24px;
  flex: 1;
  width: 100%;
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: ${props => props.hasPost ? 'minmax(300px, 400px) 1fr' : '1fr'};
  gap: 24px;
  min-height: calc(100vh - 100px);
`;
