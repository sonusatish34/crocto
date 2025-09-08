// components/HowItWorks.js

import Image from 'next/image';

export default function HowItWorks() {
    return (
        <section className="bg-white px-4 py-16 lg:px-24 "  >
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                How Does It Work ?
            </h2>
            <div className="h-1 w-24 bg-[#8660f6] mx-auto rounded mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-[#FEF0C3] rounded-2xl p-5 relative flex flex-co justify-between">
                    <Image alt='how crocto works' src={'/images/flower.png'} height={500} width={500} className="w-10 h-10 absolute top-[-1rem] left-[-1rem] text-3xl"></Image>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Gentle Pulses</h3>
                        <p className="text-sm text-gray-700">TENS therapy sends soft electrical signals through the skin.</p>
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
                            className="w-full h-[150px] object-contain lg:scale-150 scale-110"
                        />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-red-100 rounded-2xl p-5 relative flex flex-co justify-between overflow-hidden">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Blocks Pain Signals</h3>
                        <p className="text-sm text-gray-700">Prevents Period Pain</p>
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
                            className="w-full lg:h-[230px] h-[161px] object-contain lg:scale-150 scale-110"
                        />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-green-100 rounded-2xl p-5 relative flex flex-co justify-between overflow-hidden">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Natural Relief</h3>
                        <p className="text-sm text-gray-700">
                            Triggers endorphins, your body’s own painkillers.
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
                            className="w-full h-[180px] object-contain scale-150"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
