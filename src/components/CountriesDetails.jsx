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
            <p className='text-3xl font-semibold flex items-center justify-center p-4 m-20'>Page is loading...... please wait</p>
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

    console.log(id);

  return (
    <div>
        <div 
            onClick={() => navigate(-1)}
            className='flex items-center gap-2 py-4 px-10 shadow-lg text-2xl w-fit rounded-xl my-14  mx-20 cursor-pointer'
        >
            <FaArrowLeftLong />
            <p>Back</p>
        </div>

        <div className='flex'>
            <img
                className='shadow-md w-[850px] h-[350px] ml-28 mr-12'
                src={flags?.png}
                alt="Error" 
            />

            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold capitalize'>{name?.common}</h1>
                <div className='flex gap-12'>
                   <div className='flex flex-col gap-2'>
                     <div className='flex items-center gap-2'>
                        <p className='text-xl font-semibold'>Native Name : </p>
                        <p className='text-lg'>{name?.nativeName? Object.values(name?.nativeName)[0]?.common:"N/A"}
                        </p>
                     </div>

                     <div className='flex items-center gap-2'>
                        <p className='text-xl font-semibold'>Population : </p>
                        <p className='text-lg'>{population}</p>
                     </div>

                     <div className='flex items-center gap-2'>
                        <p className='text-xl font-semibold'>Region : </p>
                        <p className='text-lg'>{region}</p>
                     </div>

                     <div className='flex items-center gap-2'>
                        <p className='text-xl font-semibold'>Sub Region : </p>
                        <p className='text-lg'>{subregion}</p>
                     </div>

                     <div className='flex items-center gap-2'>
                        <p className='text-xl font-semibold'>Capital : </p>
                        <p className='text-lg'>{capital?.[0]}</p>
                     </div>

                    </div> 

                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <p className='text-xl font-semibold'>Top Level Domain : </p>
                            <p className='text-lg'>{tld?.join(", ")}</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <p className='text-xl font-semibold'>Currencies : </p>
                            <p className='text-lg'>{currencies? Object.values(currencies)[0]?.name:", "}
                            </p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <p className='text-xl font-semibold'>Languages : </p>
                            <p className='text-lg'>{languages? Object.values(languages).join(", "): "N/A"}</p>
                        </div> 
                    </div>
                </div>

                <div className='flex gap-4 items-center my-12'>
                    <h1 className='text-xl font-semibold'>Border Countries : </h1>
                    <div className='flex items-center gap-4'>
                        {countryData?.borders?.length > 0 ? countryData.borders.map((border, index) => (
                            <p key={index} className='py-2 px-4 shadow-lg'>{border}</p>
                        ))
                        : "None"
                        }
                        
                        <p className='py-2 px-4 shadow-lg'>Pakistan</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}



export default CountryDetails;