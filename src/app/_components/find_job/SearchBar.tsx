"use client"

import React, { useState } from "react";
import { Briefcase, MapPin } from "lucide-react";

interface SearchBarProps {
  onSearch: (title: string, location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-stretch gap-2 rounded-full bg-white border border-fuchsia-400 p-2 shadow-2xl sm:flex-row sm:items-center">
      {/* Job Title */}
      <div className="flex w-full items-center gap-2 px-4 py-2 sm:border-r">
        <Briefcase className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search Jobs By Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      {/* Location */}
      <div className="flex w-full items-center gap-2 px-4 py-2 sm:border-r">
        <MapPin className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search By Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      {/* Button */}
      <button
        onClick={() => onSearch(title, location)}
        className="w-full rounded-full bg-fuchsia-600 hover:bg-fuchsia-400 px-6 py-2 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto"
      >
        Search Now
      </button>
    </div>
  );
};

export default SearchBar;
