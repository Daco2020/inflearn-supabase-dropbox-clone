"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/images/dropbox_icon.png"
        alt="Mini Dropbox"
        width={50}
        height={50}
        className="!w-8 !h-auto" // !를 붙이면 먼저 적용됩니다.
      />
      <span className="text-xl font-bold">Minibox</span>
    </div>
  );
}
