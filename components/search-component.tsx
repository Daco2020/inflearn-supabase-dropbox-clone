"use client";

import { Input } from "@material-tailwind/react";
import { useState } from "react";

export default function SearchComponent({ searchInput, setSearchInput }) {
  return (
    <Input
      label="Search Images"
      placeholder="Search Images"
      icon={<i className="fas fa-search" />}
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
