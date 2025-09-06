import React from 'react';
import Image from 'next/image';

const Waiting = () => {
    return (
        <div className="py-10 lg:py-20 relative px-4 sm:px-6 lg:px-8">
            {/* Image with Flower (positioned above image) */}
            <div className="relative z-10 mb-8 flex justify-center lg:absolute lg:left-[222px] lg:top-[102px]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-20">
                    <span className="text-pink-500 text-2xl">🌸</span>
                </div>
                <Image
                    src="/images/waiting.png"
                    alt="Period Pain Relief"
                    width={330}
                    height={450}
                    className="rounded-lg object-cover w-[200px] sm:w-[250px] md:w-[280px] lg:w-[330px] h-auto"
                />
            </div>

            {/* Section Title */}
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                Waiting For
            </h2>
            <div className="h-1 w-24 bg-[#8660f6] mx-auto rounded mb-10" />

            {/* Main content box */}
            <div className="relative bg-[#fff5f5] pt-12 pb-12 px-4 sm:px-8 w-full flex flex-col md:flex-row gap-10 items-center md:items-start">
                {/* (Optional) Second Image or Placeholder — remove if unused */}
                {/* <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
                    Optional Image or Content
                </div> */}

                {/* Right text and buttons */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        What Are You Waiting For
                    </h3>
                    <p className="text-gray-700 mb-6 leading-7 md:leading-9">
                        Say goodbye to period pain! Relieve it in just 10 minutes with safe, tablet-free TENS therapy.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                        <a
                            href="tel:+123456789"
                            className="bg-[#8660f6] hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
                        >
                            📞 Call us
                        </a>
                        <a
                            href="https://wa.me/123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition"
                        >
                            💬 Whatsapp us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Waiting;
