import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <div className='flex justify-center p-3'>
      <div className='flex gap-20 justify-center bg-black bg-opacity-10 rounded-full p-3 md:w-[90%] lg:w-[50%] xl:w-[40%] fixed'>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Header
