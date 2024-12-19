import React, { useEffect, useState } from "react";
import Card from "./Card";
import { CiSearch } from "react-icons/ci";
import FilterByRegion from "./FilterByRegion";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countriesDetails, setCountriesDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getCountriesDetails = async (endpoint) => {
    try {
      const data = await fetch(endpoint);
      if (!data.ok) {
        throw new Error("Data not found");
      }
      const jsonData = await data.json();
      setCountriesDetails(jsonData);
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching countries data:", error);
      setCountriesDetails([]);
      setErrorMessage(error.message);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      getCountriesDetails(`https://restcountries.com/v3.1/name/${searchTerm}`);
    }
  };

  const handleRegionSelect = (region) => {
    getCountriesDetails(`https://restcountries.com/v3.1/region/${region}`);
  };

  useEffect(() => {
    getCountriesDetails("https://restcountries.com/v3.1/all");
  }, []);

  return (
    <div className="p-4 md:p-16 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-5 shadow-xl p-4 rounded-xl text-base md:text-xl w-full sm:w-2/5 bg-white dark:bg-gray-800 dark:text-white"
        >
          <CiSearch />
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none bg-transparent dark:text-white"
          />
        </form>

        {/* Filter By Region */}
        <FilterByRegion onRegionSelect={handleRegionSelect} />
      </div>

      {/* Display Data or Errors */}
      {errorMessage ? (
        <p className="text-red-500 text-xl mt-4">{errorMessage}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {countriesDetails.map((data, index) => (
            <Card propData={data} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
