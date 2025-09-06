import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
const Influencers = (props) => {
    return (
        <div className='lg:py-20 text-black'>
            <p className='lg:text-3xl font-bold lg:pb-12 text-center'>Famous Influencers About Us</p>
            <Swiper
                spaceBetween={0}
                slidesPerView={2.5}  // Ensure 3 slides are visible
                loop={true}

            >
                <SwiperSlide >
                    <div className=" text-gray-800 bg-[#D9D9D9] rounded-lg p-6 lg:h-[420px] lg:w-[400px] h-[20px] w-[20px]">

                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=" text-gray-800 bg-[#D9D9D9] rounded-lg p-6 lg:h-[420px] lg:w-[400px] h-[20px] w-[20px]">

                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=" text-gray-800 bg-[#D9D9D9] rounded-lg p-6 lg:h-[420px] lg:w-[400px] h-[20px] w-[20px]">

                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=" text-gray-800 bg-[#D9D9D9] rounded-lg p-6 lg:h-[420px] lg:w-[400px] h-[20px] w-[20px]">

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Influencers;