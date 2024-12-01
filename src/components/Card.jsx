import React from 'react'

const Card = () => {
  return (
    <>
    <div className='flex flex-wrap gap-10 '>

     <div className='shadow rounded-md'>
      <div>
        <img src=""
        className='w-80 h-52'
        alt="image" />
      </div>
      <div className='p-6'>
        <p className='text-4xl font-bold '>Germany</p>
        <p>Population: </p>
        <p>Region: </p>
        <p>Capital: </p>
      </div>
      </div> 
    </div>
    </>
  )
}

export default Card