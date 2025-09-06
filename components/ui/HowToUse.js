import React from 'react';
import Image from 'next/image';
const HowToUse = (props) => {
    return (
        <div className='lg:px-24 px-2 flex lg:flex-row flex-col justify-between text-black'>
            <div className='lg:w-1/2'>
                <p className='text-[#8576FF] font-bold'>Crocto</p>
                <h3 className="lg:text-4xl font-bold mb-10 py-2">How To Use Our Device</h3>
                <ul className="relative font-bold text-xs lg:text-xl ">
                    {/* Step 1 */}
                    <li className="flex items-center relative pb-10 ">
                        {/* Dotted line */}
                        <div className="absolute left-10 top-10 bottom-0 border-l-2 border-dotted border-purple-400"></div>

                        {/* Icon */}
                        <span className="z-10">
                            <Image alt="Cozita Logo" src={'/images/steps/1.png'} className="h-20 w-20" height={1000} width={1000} />
                        </span>

                        {/* Text */}
                        <span className="ml-4  w-1/2">
                            Fix Crocto Pads Comfortably On Your Stomach or Pain Area
                        </span>
                    </li>

                    {/* Step 2 */}
                    <li className="flex items-center relative pb-10">
                        <div className="absolute left-10 top-10 bottom-0 border-l-2 border-dotted border-purple-400"></div>
                        <span className="z-10">
                            <Image alt="Cozita Logo" src={'/images/steps/2.png'} className="h-20 w-20" height={1000} width={1000} />
                        </span>
                        <span className="ml-4 w-1/2">
                            Attach The Crocto Device To Crocto Pads
                        </span>
                    </li>

                    {/* Step 3 (Last step, no dotted line) */}
                    <li className="flex items-center relative pb-10">
                        <div className="absolute left-10 top-10 bottom-0 border-l-2 border-dotted border-purple-400"></div>
                        <span className="z-10">
                            <Image alt="Cozita Logo" src={'/images/steps/3.png'} className="h-20 w-20" height={1000} width={1000} />
                        </span>
                        <span className="ml-4 w-1/2">
                            Press The On Button
                        </span>
                    </li>
                    <li className="flex items-center relative">
                        <span className="z-10">
                            <Image alt="Cozita Logo" src={'/images/steps/4.png'} className="h-20 w-20" height={1000} width={1000} />
                        </span>
                        <span className="ml-4 w-1/2">
                            Adjust The Intensity Levels As Needed
                        </span>
                    </li>
                </ul>

            </div>
            <Image alt="Cozita Logo" src={'/images/usehow.png'} className='h-full lg:w-[500px] w-[200px]' height={1000} width={1000} />
        </div>
    );
};

export default HowToUse;