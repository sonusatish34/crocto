// components/WhyChooseCrocto.tsx

import Image from 'next/image';

export default function WhyChooseCrocto() {
  const features = [
    {
      icon: '/images/whychoose/1.png',
      title: '10-Minute Instant Relief',
      desc: 'Feel better quickly with targeted TENS therapy.',
      bgcolor: '#FAB76C'
    },
    {
      icon: '/images/whychoose/2.png',
      title: 'Without Medicines',
      desc: 'Instant Period Pain Relief in 10 Mins',
    },
    {
      icon: '/images/whychoose/3.png',
      title: 'Fits In Your Pocket',
      desc: 'Slim, lightweight design you can carry anywhere.',
    },
    {
      icon: '/images/whychoose/4.png',
      title: 'Rechargeable & Long-Lasting',
      desc: 'USB charging, ready when you need it.',
    },
    {
      icon: '/images/whychoose/5.png',
      title: 'Designed for Women’s Comfort',
      desc: 'Gentle yet effective for Period Pain Relief.',
    },
  ];

  return (
    <section className="lg:px-24 px-2 py-16">
      <div className="flex flex-col lg:flex-row lg:gap-12 gap-4">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-[2rem] overflow-hidden">
            <Image
              src="/images/why.png" // Replace with actual file path
              alt="Why Choose Crocto"
              width={1000}
              height={1000}
              className=" w-[503px] h-fit object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Features */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#8660f6] text-xl sm:text-3xl font-semibold mb-2">
            Why Choose Crocto ?
          </h2>
          <div className="h-1 w-24 bg-[#8660f6] mb-6 rounded"></div>
          <ul className="space-y-10">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                {/* <span className={`lg:text-2xl text-xs w-10 h-10 bg-[${item.bgcolor}] flex justify-center items-center h-10 w-10 bg-[#FAB76C]   rounded-full`}>{item.icon}</span> */}
                <Image
                  src={item.icon} // Replace with actual file path
                  alt={item.title}
                  width={40}
                  height={40}
                  className=" w-12 h-12"
                  priority
                />
                <div>
                  <h3 className="lg:text-xl text-xs font-semibold text-gray-900">{item.title}</h3>
                  <p className="lg:text-base text-xs text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
