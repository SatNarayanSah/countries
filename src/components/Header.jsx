import React from 'react'
import { Link } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white flex justify-between px-4 md:px-12 shadow-xl h-16 md:h-20 items-center'>
      <Link to="/">
        <div className="text-xl md:text-4xl font-bold">
          Where in the world
        </div>
      </Link>
      <button 
        onClick={toggleDarkMode}
        className="flex items-center gap-2"
      >
        {darkMode ? <FaSun className="text-lg md:text-xl" /> : <FaMoon className="text-lg md:text-xl" />}
        <span className="text-sm md:text-lg">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>
    </div>
  )
}

export default Header