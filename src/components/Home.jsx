import React, { useEffect, useState } from "react";
import Card from "./Card";
import { CiSearch } from "react-icons/ci";
import FilterByRegion from "./FilterByRegion";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const [countriesDetails, setCountriesDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State to handle errors

  const getCountriesDetails = async (endpoint) => {
    try {
      const data = await fetch(endpoint);
      if (!data.ok) {
        throw new Error("Data not found");
      }
      const jsonData = await data.json();
      setCountriesDetails(jsonData);
      setErrorMessage(""); // Clear any error message
    } catch (error) {
      console.error("Error fetching countries data:", error);
      setCountriesDetails([]); // Clear previous data
      setErrorMessage(error.message); // Set error message
    }
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent form reload
    if (searchTerm.trim()) {
      getCountriesDetails(`https://restcountries.com/v3.1/name/${searchTerm}`);
    }
  };
  if(searchTerm===""){
    getCountriesDetails("https://restcountries.com/v3.1/all")
  }

  const handleRegionSelect = (region) => {
    // Fetch countries by region
    getCountriesDetails(`https://restcountries.com/v3.1/region/${region}`);
  };

  useEffect(() => {
    getCountriesDetails("https://restcountries.com/v3.1/all"); // Fetch all countries by default
  }, []);

  return (
    <div className="p-16">
      <div className="flex flex-wrap justify-between items-center">
        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-5 shadow-xl p-5 mb-10 rounded-3xl text-xl w-2/5"
        >
          <CiSearch />
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            className="w-full outline-none"
          />
        </form>

        {/* Filter By Region */}
        <FilterByRegion onRegionSelect={handleRegionSelect} />
      </div>

      {/* Display Data or Errors */}
      {errorMessage ? (
        <p className="text-red-500 text-xl">{errorMessage}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {countriesDetails.map((data) => (
           
            <Card propData={data} key={data.cioc} />
           
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
