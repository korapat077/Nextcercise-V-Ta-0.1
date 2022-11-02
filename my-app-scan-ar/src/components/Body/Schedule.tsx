import React, { useContext, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import activity from '../../mockupjson/activity';
import axios from 'axios';
import { AppCtx } from '../../hook/context';

const settings = {
  className: "center",
  centerMode: true,
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  cssEase: "linear"
};


const Schedule = () => {
  return (
    <div>
      <div className='flex w-full justify-center font-bold text-xl mt-5 text-[#9c3b30]'>
        {/* effect 2 */}
        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all  rounded hover:bg-white group">

          {/* purple box */}
          <span className="w-0 h-0 rounded bg-[#f84d3a] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-[#f84d3a] transition-colors duration-300 ease-in-out group-hover:text-white z-10 px-7 py-2">
            Welcome to the Exercise
          </span>
        </button>
      </div>
      {/* body */}
      <div className='container mx-auto px-2'>
        <div className=' w-full mt-10 overflow-hidden grid grid-cols-1 lg:grid-cols-2 '>
          <Slider {...settings}>
            {activity.data.map((r, k) => {
              return (
                <div key={k}>
                  <img src={r.nameImg} className="w-full h-52 md:h-96 lg:w-full lg:h-[450px] bg-cover bg-center rounded-xl" />
                  <div className=' text-center mt-2 font-bold text-[#f84d3a]'>{r.content}</div>
                </div>
              )
            })}
          </Slider>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2'>
            <div>
              <div className="block p-6 max-w-sm bg-[#f84d3a] rounded-lg hover:shadow-xl hover:shadow-[#f84d3a] hover:-translate-y-2 hover:scale-100 duration-300">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule