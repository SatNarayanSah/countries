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
    <div className="flex flex-wrap gap-10">
      <div
      onClick={handleclick}
      className="shadow rounded-md w-80">
        <div>
          <img
            src={flagImage}
            className="w-80 h-60 object-cover"
            alt={`${countryName} flag`}
          />
        </div>
        <div className="p-6">
          <p className="text-2xl font-bold">{countryName}</p>
          <p>Population: {population.toLocaleString()} </p>
          <p>Region: {region} </p>
          <p>Capital: {capital.join(", ")} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
