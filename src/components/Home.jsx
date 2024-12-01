import React from 'react'
import Card from './Card'
import { CiSearch } from 'react-icons/ci'
import { FaArrowDown } from 'react-icons/fa'
import FilterByRegion from './FilterByRegion'

const Home = () => {
  return (
    <div className='p-16'>
        <div className='flex flex-wrap justify-between items-center'>

        <div className='flex items-center gap-5 shadow-xl p-5 mb-10 rounded-3xl text-xl w-2/5'>
            <CiSearch />
            <input type="text" placeholder='Search for a country...' />
        </div>
        <div>
            <div className='flex items-center gap-4 p-4 rounded-3xl'>
                {/* <span>Filter By Region </span>
                <FaArrowDown /> */}
                <FilterByRegion />
            </div>

        </div>
        </div>
        <Card />
    </div>
  )
}

export default Home