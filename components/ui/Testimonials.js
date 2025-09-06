import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const userData = [
    {
        id: 1,
        name: 'John Doe',
        age: '24',
        img: '/images/testimonialimg/profile1.png',
        review: "This service has completely transformed the way I work. Highly recommended!"
    },
    {
        id: 2,
        name: 'Maria Garcia',
        age: '25',
        img: '/images/testimonialimg/profile1.png',
        review: "The experience has been seamless and intuitive. I love it!"
    },
    {
        id: 3,
        name: 'Li Wei',
        age: '22',
        img: '/images/testimonialimg/profile1.png',
        review: "Exceptional support and easy to use. Couldn't ask for more."
    },
    {
        id: 4,
        name: 'Amina Yusuf',
        age: '24',
        img: '/images/testimonialimg/profile1.png',
        review: "A game-changer for our team. Great user experience!"
    },
];

const avatarPositions = [
    { id: 1, img: '/images/testimonialimg/profile1.png', style: 'top-[20%] left-[25%]' },
    { id: 2, img: '/images/user2.png', style: 'top-[40%] left-[55%]' },
    { id: 3, img: '/images/user3.png', style: 'top-[25%] left-[75%]' },
    { id: 4, img: '/images/user4.png', style: 'top-[65%] left-[50%]' },
];

const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    function toCapitalCase(str) {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center text-black"
            style={{ backgroundImage: "url('/images/Testimonials.png')" }}
        >
            <p className='text-center lg:text-3xl font-bold pt-10'> What People Say About Us</p>
            {/* Map Avatars */}
            {avatarPositions.map(({ id, img, style }) => (
                <div
                    key={id}
                    className={`absolute ${style} transform -translate-x-1/2 -translate-y-1/2`}
                >

                </div>
            ))}

            {/* Swiper Testimonial Carousel */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4 flex  gap-x-4">
                <button
                    ref={prevRef}
                    className="z-10 mx- relative left-1"
                >
                    <IoArrowBackCircleOutline  className="size-6 lg:size-10 cursor-pointer" />
                </button>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}  // Ensure 3 slides are visible
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                >
                    {userData.map(({ id, name, age, review, img }) => (
                        <SwiperSlide key={id}>
                            <div className=" text-gray-800 rounded-lg p-6">
                                <div className="flex flex-col justify-center items-center gap-4 mb-4">
                                    <img
                                        src={img}
                                        alt={name}
                                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                                    />
                                    <p className="text-base italic pb-6 font-bold lg:text-xl text-center">"{review}"</p>
                                    <h3 className="font-semibold">{name}</h3>
                                    <p className="text-sm text-gray-500">{age}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    ref={nextRef}
                    className="z-10 relative right-1"
                >
                    <IoArrowForwardCircleOutline className="size-6 lg:size-10 cursor-pointer" />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
