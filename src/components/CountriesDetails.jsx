import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate, useParams } from 'react-router-dom'


export const CountryDetails = () => {

    const {id} = useParams(); // this get the country name
    const [countryData, setCountryData] = useState(null);
    const navigate = useNavigate()
   
  

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(id)}`)
            const details = await response.json();
            setCountryData(details[0]);
            console.log(details[0]); // shows country details in console
        }

        fetchDetails();
    },[id])

    if (!countryData) {
        return(
            <p className='text-3xl font-semibold flex items-center justify-center p-4 m-20'> Loading...</p>
        )
    }
    const {
      flags,
      name,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
    } = countryData;
    
    const handleClick = () =>{
      if(handleClick()){
        const fetchDetailsByClick = async () => {
          const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(id)}`)
          const details = await response.json();
          setCountryData(details[0]);
          console.log(details[0]); // shows country details in console
      }
      }
      navigate(`/details/${name}`);
    }
    console.log(id);

  return (
    <div className="dark:bg-gray-900 min-h-screen p-4 md:p-8">
        <div 
            onClick={() => navigate(-1)}
            className='flex items-center gap-2 py-2 px-6 md:py-4 md:px-10 shadow-lg text-lg md:text-2xl w-fit rounded-xl my-6 md:my-14 mx-4 md:mx-20 cursor-pointer dark:bg-gray-800 dark:text-white'
        >
            <FaArrowLeftLong />
            <p>Back</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 md:gap-12 px-4 md:px-8'>
            <img
                className='shadow-md w-full lg:w-[500px] xl:w-[850px] h-[200px] md:h-[350px] object-cover'
                src={flags?.png}
                alt="Error" 
            />

            <div className='flex flex-col gap-4 dark:text-white'>
                <h1 className='text-2xl md:text-3xl font-bold capitalize'>{name?.common}</h1>
                <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
                   <div className='flex flex-col gap-2'>
                     <div className='flex flex-wrap items-center gap-2'>
                        <p className='text-lg md:text-xl font-semibold'>Native Name : </p>
                        <p className='text-base md:text-lg'>{name?.nativeName? Object.values(name?.nativeName)[0]?.common:"N/A"}</p>
                     </div>

                     <div className='flex flex-wrap items-center gap-2'>
                        <p className='text-lg md:text-xl font-semibold'>Population : </p>
                        <p className='text-base md:text-lg'>{population}</p>
                     </div>

                     <div className='flex flex-wrap items-center gap-2'>
                        <p className='text-lg md:text-xl font-semibold'>Region : </p>
                        <p className='text-base md:text-lg'>{region}</p>
                     </div>

                     <div className='flex flex-wrap items-center gap-2'>
                        <p className='text-lg md:text-xl font-semibold'>Sub Region : </p>
                        <p className='text-base md:text-lg'>{subregion}</p>
                     </div>

                     <div className='flex flex-wrap items-center gap-2'>
                        <p className='text-lg md:text-xl font-semibold'>Capital : </p>
                        <p className='text-base md:text-lg'>{capital?.[0]}</p>
                     </div>

                    </div> 

                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-wrap items-center gap-2'>
                            <p className='text-lg md:text-xl font-semibold'>Top Level Domain : </p>
                            <p className='text-base md:text-lg'>{tld?.join(", ")}</p>
                        </div>

                        <div className='flex flex-wrap items-center gap-2'>
                            <p className='text-lg md:text-xl font-semibold'>Currencies : </p>
                            <p className='text-base md:text-lg'>{currencies? Object.values(currencies)[0]?.name:", "}
                            </p>
                        </div>

                        <div className='flex flex-wrap items-center gap-2'>
                            <p className='text-lg md:text-xl font-semibold'>Languages : </p>
                            <p className='text-base md:text-lg'>{languages? Object.values(languages).join(", "): "N/A"}</p>
                        </div> 
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4 items-start md:items-center my-8 md:my-12'>
                    <h1 className='text-lg md:text-xl font-semibold dark:text-white'>Border Countries : </h1>
                    <div
                        onClick={handleClick}
                        className='flex flex-wrap items-center gap-4'>
                        {countryData?.borders?.length > 0 ? countryData.borders.map((border, index) => (
                            <p key={index}
                            className='py-1 md:py-2 px-3 md:px-4 shadow-lg cursor-pointer dark:bg-gray-800 dark:text-white text-sm md:text-base'>{border}</p>
                        ))
                        : "None"
                        }
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}



export default CountryDetails;