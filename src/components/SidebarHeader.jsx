import React, { useState, useEffect } from "react";
import { useFileSystem } from "../contexts/FileSystemContext";
import { FiFolder, FiServer } from "react-icons/fi";
import {
  SidebarHeaderSection,
  SidebarHeaderTitle,
  SidebarHeaderControls,
  ServerUrlInput,
  CurrentFolderDisplay,
  CurrentFolder,
  SidebarMessage,
} from "./SidebarHeader.styled";

function SidebarHeader() {
  const { currentFolderName, hasAccess } = useFileSystem();
  const [hugoServerUrl, setHugoServerUrl] = useState("http://localhost:1313");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  useEffect(() => {
    const savedUrl = localStorage.getItem("hugoServerUrl");
    if (savedUrl) {
      setHugoServerUrl(savedUrl);
    }
  }, []);

  const handleUrlChange = (e) => {
    const url = e.target.value.trim();
    setHugoServerUrl(url);
    localStorage.setItem("hugoServerUrl", url);
  };

  return (
    <SidebarHeaderSection>
      <SidebarHeaderTitle>
        <h2>HUGO ZERO</h2>
      </SidebarHeaderTitle>
      <SidebarHeaderControls>
        <ServerUrlInput>
          <label htmlFor="hugoServerUrl">Hugo Local Server Url:</label>
          <input
            type="text"
            id="hugoServerUrl"
            value={hugoServerUrl}
            onChange={handleUrlChange}
            placeholder="http://localhost:1313"
          />
        </ServerUrlInput>
        {currentFolderName && (
          <CurrentFolderDisplay>
            <CurrentFolder className={hasAccess ? "active" : ""}>
              <FiFolder size={14} />
              {currentFolderName}
            </CurrentFolder>
          </CurrentFolderDisplay>
        )}
      </SidebarHeaderControls>
      {message && messageType === "success" && (
        <SuccessMessage>{message}</SuccessMessage>
      )}
      {message && messageType === "error" && (
        <ErrorMessage>{message}</ErrorMessage>
      )}
    </SidebarHeaderSection>
  );
}

export default SidebarHeader;
