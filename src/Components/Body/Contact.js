import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center p-4'>
      <div className='flex flex-col gap-4 p-6 bg-slate-900 bg-opacity-25 rounded-xl w-full sm:w-[90%] md:w-[80%] lg:w-[50%]'>
        <h2 className='text-white text-2xl font-semibold text-center'>Contact Me</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-sky-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-sky-500"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="p-3 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-sky-500"
        />

        <button
          className="bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-md transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Contact
