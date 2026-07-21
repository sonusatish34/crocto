"use client";

import ScrollReveal from './ScrollReveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const reviews = [
    { initial: "PS", name: "Priya S.", loc: "Software Engineer, Hyderabad", text: "I used to pop two Meftal every month without fail. After three cycles with Crocto, I haven't touched a single tablet." },
    { initial: "AR", name: "Ananya R.", loc: "Marketing Manager, Bengaluru", text: "I carry it in my bag every day during my period. Used it during a client meeting once — nobody had any idea. The pain vanished." },
    { initial: "SM", name: "Sneha M.", loc: "Student, Hyderabad", text: "As someone with PCOS, my cramps were next-level. This is the first non-medication thing that actually helps in the moment." },
    { initial: "DK", name: "Divya K.", loc: "UI/UX Designer, Hyderabad", text: "The heat patches usually fall off when I move around, but this fits snugly and gives constant relief while sitting at my desk all day." },
    { initial: "NM", name: "Nisha M.", loc: "Content Creator, Hyderabad", text: "Honestly was skeptical at first, but it completely takes away that dull lower back ache. Game changer for long shooting schedules." }
  ];

  return (
    <section id="reviews" className="bg-[#F5ECE4] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9446B] bg-[#C9446B]/10 px-3 py-1 rounded-full mb-3">
            Real Women · Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E0A2A] tracking-tight">
            What Crocto users say
          </h2>
        </div>
        
        {/* Swiper Carousel Container */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="!pb-16"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8D8EB]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-[#C9446B] text-xs gap-0.5">
                        ★★★★★
                      </div>
                      <span className="text-3xl text-[#F2A7BB]/60 leading-none select-none font-serif">“</span>
                    </div>

                    <p className="text-sm text-[#1E0A2A]/80 leading-relaxed mb-6 font-normal">
                      "{r.text}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-[#F5ECE4]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C9446B] to-[#4B1D5E] text-white font-semibold flex items-center justify-center text-xs shrink-0 shadow-sm">
                      {r.initial}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#1E0A2A] truncate">{r.name}</h4>
                      <p className="text-[11px] text-[#7A6480] truncate">{r.loc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ScrollReveal>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #7A6480 !important;
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #C9446B !important;
          opacity: 1;
          width: 20px !important;
          border-radius: 9999px !important;
        }
      `}</style>
    </section>
  );
}