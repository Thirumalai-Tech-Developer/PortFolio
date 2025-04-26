import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {
  return (
    <div className='flex justify-center p-3'>
      <div className='flex gap-20 justify-center bg-black bg-opacity-10 rounded-full p-3 md:w-[90%] lg:w-[50%] xl:w-[40%]'>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
