import React from 'react';

const Card = (props) => {
  const { propData } = props;
  const {
    flags: { png: flagImage },
    name: { common: countryName },
    population = "N/A",
    region = "N/A",
    capital = ["N/A"],
  } = propData;

  return (
    <div className="flex flex-wrap gap-10">
      <div className="shadow rounded-md w-80">
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
