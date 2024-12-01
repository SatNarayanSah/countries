import React, { useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const FilterByRegion = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-64">
      {/* Dropdown Button */}
      <button
        onClick={handleDropdownToggle}
        className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm flex justify-between items-center"
      >
        <span>{selectedRegion || "Filter by Region"}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionSelect(region)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterByRegion;
