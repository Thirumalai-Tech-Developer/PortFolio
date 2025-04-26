import React from 'react'
import Data from '../Data/details.json'

const About = () => {
  return (
    <div className='flex justify-evenly p-2'>
      <div className='flex justify-center p-10 bg-slate-800 bg-opacity-30 hover:bg-opacity-45 duration-700 rounded-2xl sm:w-[90%] md:w-[90%] lg:w-[50%] text-base sm:text-md md:text-xl lg:text-lg xl:text-xl'>
        {
          Data.map((i) => {
            return (
              <div key={i.key}>
                <h1 className="text-[50px] py-4">{i.name}</h1>
                <br></br>
                <p style={{textIndent: '2rem'}}>{i.objective}</p>
              </div>
            )
          })
        }
      </div>
      <div className='hidden lg:flex w-[50%] justify-center'>
        <h1>
          hello
        </h1>
      </div>
    </div>
  )
}

export default About
