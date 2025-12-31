import styled from "@emotion/styled";

export const AppHeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const AppHeaderContent = styled.div`
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AppHeaderLogo = styled.h1`
  font-family: "Pixelify Sans", sans-serif;
  font-family: "Doto", sans-serif;
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.8) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

export const GithubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #ffffff;
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #007aff;
    transform: translateY(-1px);
  }
`;
