import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFileSystem } from '../contexts/FileSystemContext';
import AppHeader from '../components/AppHeader';
import Sidebar from '../components/Sidebar';
import Editor from '../components/Editor';
import { AppPageContainer, Container, MainContent } from './AppPage.styled';

function AppPage() {
  const navigate = useNavigate();
  const { hasAccess } = useFileSystem();
  const [currentPost, setCurrentPost] = useState(null);
  const [sidebarTab, setSidebarTab] = useState('posts');

  useEffect(() => {
    if (!hasAccess) {
      navigate('/');
    }
  }, [hasAccess, navigate]);

  if (!hasAccess) {
    return null;
  }

  return (
    <AppPageContainer>
      <AppHeader />
      <Container>
        <MainContent hasPost={!!currentPost}>
          <Sidebar 
            sidebarTab={sidebarTab} 
            setSidebarTab={setSidebarTab}
            currentPost={currentPost}
            setCurrentPost={setCurrentPost}
          />
          {currentPost && (
            <Editor 
              currentPost={currentPost}
              setCurrentPost={setCurrentPost}
            />
          )}
        </MainContent>
      </Container>
    </AppPageContainer>
  );
}

export default AppPage;
