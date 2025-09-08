import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
const Influencers = (props) => {
    return (
        <div className='lg:py-20 py-10 text-black'>
            <p className='lg:text-3xl text-2xl pb-6 font-bold lg:pb-12 text-center'>Famous Influencers About Us</p>
            <Swiper
                spaceBetween={0}
                slidesPerView={2.5}
                loop={true}
            >
                <SwiperSlide >
                    <div className=" text-gray-800 bg-[#D9D9D9] rounded-lg p-6 lg:h-[420px] lg:w-[400px] h-[100px] w-[120px]">
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=" text-gray-800 bg-[#D9D9D9] rounded-lg p-6 lg:h-[420px] lg:w-[400px] h-[100px] w-[120px]">

                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=" text-gray-800 bg-[#D9D9D9] rounded-lg p-6 lg:h-[420px] lg:w-[400px] h-[100px] w-[120px]">

                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=" text-gray-800 bg-[#D9D9D9] rounded-lg p-6 lg:h-[420px] lg:w-[400px] h-[100px] w-[120px]">

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Influencers;