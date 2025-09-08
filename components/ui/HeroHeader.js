// components/HeaderHero.tsx

import Image from 'next/image';
import { IoCall } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import Link from 'next/link';

export default function HeaderHero() {
    return (
        <section
            className="relative bg-cover bg-center lg:h-screen pb-10 lg:pb-0"
            style={{
                backgroundImage: "url('/images/bg-pink.png')",
            }}
        >
            {/* Navbar */}
            <header className="absolute top-0 left-0 w-full bg-black/10 z-20">
                <div className="max-w-7xl mx-auto flex  justify-between items-center py-2 px-4  lg:pr-60">
                    <Image
                        src="/images/logo.png"
                        alt="Cozita Logo"
                        width={1000}
                        height={1000}
                        className="lg:h-[80px] h-[50px]  w-auto mb-2 scale-110 "
                    />
                    <nav className="flex  gap-2 lg:gap-20 text-black font-bold text-sm md:text-lg text-center z-20">
                        <Link href="/ds" className="hover:underline">Home</Link>
                        <Link href="#" className="hover:underline">About Us</Link>
                        <Link href="#" className="hover:underline">Contact Us</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Content */}
            <div className="flex flex-row gap-6  px-4 lg:px-28    relative z-10 lg:pt-40 pt-10">
                {/* Text Block */}
                <div className="text-black lg:w-3/5 text-left pt-20 ">
                    <ul className='flex flex-col gap-y-4 pb-8'>
                        <li className="text-xl lg:text-[4rem] font-bold leading-tight">
                            Without Tablets
                        </li>
                        <li className="text-sm lg:text-[1.9rem] font-medium">
                            Crocto Periods Instant Pain Relief In 10 mins
                        </li>
                        <li className="text-sm lg:text-[2rem] font-normal tracking-wide">
                            TENS therapy.
                        </li>
                    </ul>

                    <div className="flex gap-1 lg:gap-4 text-xs lg:text-lg justify-center lg:justify-start">
                        <button className="flex gap-x-2 justify-center items-center bg-purple-600 text-white lg:px-6 py-2 lg:py-3 rounded-2xl hover:bg-purple-700 w-20 lg:w-52">
                            <IoCall size={20} /> Call Us
                        </button>
                        <button className="flex gap-x-2 justify-center items-center bg-green-600 text-white lg:px-6 py-2 lg:py-3 rounded-2xl hover:bg-green-700 w-32 lg:w-80">
                            <SiWhatsapp size={20} /> Whatsapp Us
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative lg:bottom-24 top-14 lg:top-0">
                    <Image
                        src="/images/lady.png"
                        alt="Hero"
                        width={600}
                        height={600}
                        className="lg:h-[570px]  object-contain h-[280px] scale-150 lg:scale-100"
                    />
                </div>
            </div>
        </section>
    );
}
