import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FileSystemProvider } from './contexts/FileSystemContext';
import HomePage from './pages/HomePage';
import AppPage from './pages/AppPage';
import './index.css';

function App() {
  return (
    <FileSystemProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </FileSystemProvider>
  );
}

export default App;
