import React from "react";
import "./searchBox.css";
export default function SearchBox({ searchData, handleSearching }) {
  return (
    <div>
      <input
        type="text"
        className="searching"
        value={searchData}
        onChange={handleSearching}
        placeholder="Search by name, email or role..."
      />
    </div>
  );
}
