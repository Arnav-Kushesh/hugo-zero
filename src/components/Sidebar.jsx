import React, { useState, useEffect } from "react";
import { useFileSystem } from "../contexts/FileSystemContext";
import { FiFileText, FiImage } from "react-icons/fi";
import SidebarHeader from "./SidebarHeader";
import PostsList from "./PostsList";
import MediaList from "./MediaList";
import {
  SidebarContainer,
  SidebarTabs,
  SidebarTab,
  SidebarContent,
} from "./Sidebar.styled";

function Sidebar({ sidebarTab, setSidebarTab, currentPost, setCurrentPost }) {
  return (
    <SidebarContainer>
      <SidebarHeader />
      <SidebarTabs>
        <SidebarTab
          active={sidebarTab === "posts"}
          onClick={() => setSidebarTab("posts")}
        >
          <FiFileText size={16} />
          Posts
        </SidebarTab>
        <SidebarTab
          active={sidebarTab === "media"}
          onClick={() => setSidebarTab("media")}
        >
          <FiImage size={16} />
          Media
        </SidebarTab>
      </SidebarTabs>

      <SidebarContent
        style={{ display: sidebarTab === "posts" ? "block" : "none" }}
      >
        <PostsList currentPost={currentPost} setCurrentPost={setCurrentPost} />
      </SidebarContent>

      <SidebarContent
        style={{ display: sidebarTab === "media" ? "block" : "none" }}
      >
        <MediaList visibility={sidebarTab === "media"} />
      </SidebarContent>
    </SidebarContainer>
  );
}

export default Sidebar;
