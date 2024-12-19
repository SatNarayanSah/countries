import React, { useState, useEffect } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const FilterByRegion = ({ onRegionSelect }) => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setIsDropdownOpen(false);
    onRegionSelect(region); // Notify parent about selection
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="relative w-64 dropdown-container">
      {/* Dropdown Button */}
      <button
        onClick={handleDropdownToggle}
        aria-expanded={isDropdownOpen}
        aria-haspopup="listbox"
        className="w-full bg-white dark:bg-gray-800 dark:text-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm flex justify-between items-center"
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
        <ul
          role="listbox"
          className="absolute mt-2 w-full bg-white dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md shadow-lg z-50"
        >
          {regions.map((region) => (
            <li
              key={region}
              role="option"
              aria-selected={region === selectedRegion}
              onClick={() => handleRegionSelect(region)}
              className={`block w-full text-left px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                region === selectedRegion ? "font-bold" : ""
              }`}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterByRegion;
