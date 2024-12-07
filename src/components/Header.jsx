import React from 'react'
import { Link } from 'react-router-dom'




const Header = () => {
  return (
    <div className='bg-white flex justify-between px-12 shadow-xl h-20 items-center font-bold text-4xl'>
      <Link to="/">
      <div>
        Where in the world
      </div>
      </Link>
      <div>
        Dark Mode
      </div>
    </div>
  )
}

export default Header