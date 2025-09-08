import React from 'react';
import Image from 'next/image';
const HowToUse = (props) => {
    return (
        <div className='lg:px-24 px-2 flex lg:flex-row flex-col justify-between text-black'>
            <div className='lg:lg:w-1/2 w-4/5'>
                <p className='text-[#8576FF] font-bold'>Crocto</p>
                <h3 className="lg:text-4xl text-2xl font-bold mb-10 py-2">How To Use Our Device</h3>
                <ul className="relative font-bold text-sm lg:text-xl ">
                    <li className="flex items-center relative pb-10 ">
                        <div className="absolute left-10 top-10 bottom-0 border-l-2 border-dotted border-purple-400"></div>
                        <span className="z-10">
                            <Image alt="Cozita Logo" src={'/images/steps/1.png'} className="h-20 w-20" height={1000} width={1000} />
                        </span>

                        <span className="ml-4 lg:w-1/2 w-4/5">
                            Fix Crocto Pads Comfortably On Your Stomach or Pain Area
                        </span>
                    </li>

                    <li className="flex items-center relative pb-10">
                        <div className="absolute left-10 top-10 bottom-0 border-l-2 border-dotted border-purple-400"></div>
                        <span className="z-10">
                            <Image alt="Cozita Logo" src={'/images/steps/2.png'} className="h-20 w-20" height={1000} width={1000} />
                        </span>
                        <span className="ml-4 lg:w-1/2 w-4/5">
                            Attach The Crocto Device To Crocto Pads
                        </span>
                    </li>

                    <li className="flex items-center relative pb-10">
                        <div className="absolute left-10 top-10 bottom-0 border-l-2 border-dotted border-purple-400"></div>
                        <span className="z-10">
                            <Image alt="Cozita Logo" src={'/images/steps/3.png'} className="h-20 w-20" height={1000} width={1000} />
                        </span>
                        <span className="ml-4 lg:w-1/2 w-4/5">
                            Press The On Button
                        </span>
                    </li>

                    <li className="flex items-center relative">
                        <span className="z-10">
                            <Image alt="Cozita Logo" src={'/images/steps/4.png'} className="h-20 w-20" height={1000} width={1000} />
                        </span>
                        <span className="ml-4 lg:w-1/2 w-4/5">
                            Adjust The Intensity Levels As Needed 
                        </span>
                    </li>
                </ul>

            </div>
            <Image alt="Cozita Logo" src={'/images/usehow.png'} className='h-full lg:w-[500px] w-[300px] pt-8 lg:pt-0' height={1000} width={1000} />
        </div>
    );
};

export default HowToUse;