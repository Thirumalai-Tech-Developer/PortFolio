import React, { useRef } from 'react'
import Data from '../Data/projects.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Navigation, Autoplay } from 'swiper/modules'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className='px-4 py-10 relative'>
      <button
        ref={prevRef}
        className='absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:scale-110 duration-300'
      >
        <FaArrowLeft />
      </button>
      <button
        ref={nextRef}
        className='absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:scale-110 duration-300'
      >
        <FaArrowRight />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {
          Data.map((i) => (
            <SwiperSlide key={i.id}>
              <div className='p-6 bg-slate-800 bg-opacity-30 hover:bg-opacity-45 duration-700 rounded-2xl text-base sm:text-md md:text-xl lg:text-lg xl:text-xl h-[250px]'>
                <div className='text-white'>
                  <a className="block mb-2 text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] p-2" href={i.url}>{i.title}</a>
                  <p className="text-justify indent-8">{i.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Projects
