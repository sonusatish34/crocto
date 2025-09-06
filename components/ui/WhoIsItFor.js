// components/HowItWorks.js

import Image from 'next/image';

export default function WhoIsItFor() {
    return (
        <section className="bg-white px-4 py-16 lg:px-24 "  >
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                Who Is It For ?
            </h2>
            <div className="h-1 w-24 bg-[#8660f6] mx-auto rounded mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-red-100 rounded-2xl p-5 relative flex flex-co justify-between">
                    <span className="absolute top-[-1rem] left-[-1rem] text-3xl">🌸</span>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Women</h3>
                        <p className="text-sm text-gray-700">who experience <span className='font-bold'>period pain & lower abdominal pain</span> </p>
                        <button className="mt-4 self-start bg-white text-black font-semibold text-sm px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
                            Read More
                        </button>
                    </div>

                    <div className="mt-4 w-full">
                        <Image
                            src="/images/lady.png"
                            alt="Blocks Pain Signals"
                            width={400}
                            height={300}
                            className="w-full h-[200px] object-contain"
                        />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-red-100 rounded-2xl p-5 relative flex flex-co justify-between">

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Without Tablets</h3>
                        <p className="text-sm text-gray-700">Those seeking a
                            drug-free alternative
                            to painkillers</p>
                        <button className="mt-4 self-start bg-white text-black font-semibold text-sm px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
                            Read More
                        </button>
                    </div>

                    <div className="mt-4 w-full">
                        <Image
                            src="/images/lady.png"
                            alt="Blocks Pain Signals"
                            width={400}
                            height={300}
                            className="w-full h-[200px] object-contain"
                        />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-green-100 rounded-2xl p-5 relative flex flex-co justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Anyone</h3>
                        <p className="text-sm text-gray-700">
                            who wants fast relief on-the-go
                        </p>
                        <button className="mt-4 self-start bg-white text-black font-semibold text-sm px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
                            Read More
                        </button>
                    </div>



                    <div className="mt-4 w-full">
                        <Image
                            src="/images/lady.png"
                            alt="Natural Relief"
                            width={400}
                            height={300}
                            className="w-full h-[200px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
