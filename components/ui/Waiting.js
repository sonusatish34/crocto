import React from 'react';
import Image from 'next/image';
import { IoCall } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { FaWhatsapp } from 'react-icons/fa';
const Waiting = () => {
    return (
        <div className="py-10 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
            {/* Section Title */}
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                Waiting For
            </h2>
            <div className="h-1 w-24 bg-[#8660f6] mx-auto rounded mb-10" />
            <div className="relative bg-[#fff5f5] pt-1 lg:pt-20 pb-12 px-4 sm:px-8 w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
                <div className="lg:absolute lg:left-[644px] lg:-top-[31px] w-full lg:w-1/2 flex justify-center">
                    <div alt='kldsl' className="lg:absolute relative -top-4 left-10 transform -translate-x-1/2 z-20 lg:left-auto lg:top-[-20px] lg:right-[178px]">
                        <Image alt='s' src={'/images/flower.png'} height={500} width={500} className="w-10 h-10"></Image>
                    </div>
                    <Image
                        src="/images/waiting.png"
                        alt="Period Pain Relief"
                        width={330}
                        height={450}
                        className="rounded-lg object-cover w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-auto z-10"
                    />
                </div>

                {/* Right Text Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        What Are You Waiting For
                    </h3>
                    <p className="text-gray-700 mb-6 leading-7 md:leading-9"> Say Good Bye To Period Pain, Relieve period pain in just 10 minutes with safe, Without Tablets TENS therapy.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                        <a
                            href="tel:+123456789"
                            className="bg-[#8660f6] hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition flex gap-x-1 items-center"
                        >
                            <IoCall size={20} /> Call us
                        </a>
                        <a
                            href="https://wa.me/123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition flex gap-x-1 items-center"
                        >
                            <FaWhatsapp size={20} /> Whatsapp us
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Waiting;
