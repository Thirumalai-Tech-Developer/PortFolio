import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <div className='flex justify-center p-3'>
      <div className='flex gap-20 justify-center bg-black bg-opacity-10 rounded-full w-[70%] p-3'>
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
    </div>
  )
}

export default Header
