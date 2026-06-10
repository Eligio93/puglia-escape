"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      router.push(`/blog?searchValue=${searchValue}`);
    }
  }

  return (
    <form className="flex justify-end">
      <label htmlFor="searchBar" className="w-full">
        <input
          type="text"
          name="searchValue"
          id="searchBar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Posts ..."
          className="text-dark-blue focus:text-dark-blue w-full text-xs md:text-sm"
        />
      </label>
      <button type="submit" onClick={handleSearch}>
        <Search className="text-dark-blue size-4" />
      </button>
    </form>
  );
}
