"use client";

import { IconButton } from "@material-tailwind/react";

export default function DropboxImage() {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      {/* 이미지 */}
      <div>
        <img
          src="/images/cutedog.jpeg"
          alt="cutedog"
          className="w-full aspect-square rounded-2xl"
        />
      </div>

      {/* 이미지 이름 */}
      <div className="">cutedog.jpeg</div>

      <div className="absolute top-4 right-4">
        <IconButton onClick={() => console.log("delete")} color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
