import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const CountryDetails = () => {
  const navigate = useNavigate()

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen">
      <div 
        onClick={() => navigate(-1)}
        className='flex items-center gap-2 py-4 px-10 shadow-lg text-2xl w-fit rounded-xl my-14 mx-20 cursor-pointer bg-white dark:bg-gray-800'
      >
        <FaArrowLeft />
        Back
      </div>
      {/* ... rest of the component ... */}
    </div>
  )
}

export default CountryDetails 