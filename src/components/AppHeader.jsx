import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AppHeaderContainer, AppHeaderContent, AppHeaderLogo, GithubButton } from './AppHeader.styled';

function AppHeader() {
  return (
    <AppHeaderContainer>
      <AppHeaderContent>
        <AppHeaderLogo>Hugo Zero</AppHeaderLogo>
        <GithubButton
          href="https://github.com/Arnav-Kushesh/hugo-zero"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </GithubButton>
      </AppHeaderContent>
    </AppHeaderContainer>
  );
}

export default AppHeader;
