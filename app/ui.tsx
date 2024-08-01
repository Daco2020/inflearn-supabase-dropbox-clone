"use client";

import Logo from "components/logo";
import FileDragDropZone from "components/file-dragdropzone";
import SearchComponent from "components/search-component";
import DropboxImageList from "components/dropbox-image-list";
import { useState } from "react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className="w-full p-4">
      {/* 로고 */}
      <Logo />
      {/* 검색 */}
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {/* 파일 드랍박스 존 */}
      <FileDragDropZone />
      {/* 이미지 */}
      <DropboxImageList />
    </main>
  );
}
