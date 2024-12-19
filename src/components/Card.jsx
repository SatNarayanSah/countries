import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const { propData } = props;
  const {
    flags: { png: flagImage },
    name: { common: countryName },
    population = "N/A",
    region = "N/A",
    capital = ["N/A"],
    cioc ,
  } = propData;

  
  const navigate = useNavigate();
  const handleclick = () =>{
    navigate(`/details/${countryName}`);
  }

  return (
    <div className="w-full sm:w-auto flex justify-center">
      <div
        onClick={handleclick}
        className="shadow rounded-md w-full sm:w-80 bg-white dark:bg-gray-800 dark:text-white cursor-pointer hover:shadow-xl transition-shadow">
        <div>
          <img
            src={flagImage}
            className="w-full sm:w-80 h-48 sm:h-60 object-cover rounded-t-md"
            alt={`${countryName} flag`}
          />
        </div>
        <div className="p-4 sm:p-6">
          <p className="text-xl sm:text-2xl font-bold mb-4">{countryName}</p>
          <p className="mb-1">Population: {population.toLocaleString()} </p>
          <p className="mb-1">Region: {region} </p>
          <p className="mb-1">Capital: {capital.join(", ")} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
