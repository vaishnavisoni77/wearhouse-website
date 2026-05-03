"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-medium text-sm sm:text-base text-white bg-blue px-3 py-1 rounded-full uppercase tracking-wider">
                Up to 80% Off
              </span>
              <span className="block text-dark-4 text-sm sm:text-base tracking-widest uppercase">
                Premium Outlet
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-heading-3 mb-4 leading-tight">
              Premium Quality.<br/>Minimal Price.
            </h1>

            <p className="text-dark-5 text-custom-sm sm:text-base mb-8">
              Wear your favorite brands without hooking your pockets. We believe in delivering great quality products at minimal prices.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3.5 px-9 ease-out duration-200 hover:bg-blue"
            >
              Explore Collection
            </a>
          </div>

          <div>
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-medium text-sm sm:text-base text-white bg-blue px-3 py-1 rounded-full uppercase tracking-wider">
                Up to 80% Off
              </span>
              <span className="block text-dark-4 text-sm sm:text-base tracking-widest uppercase">
                Premium Outlet
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-heading-3 mb-4 leading-tight">
              Uncompromised<br/>Style.
            </h1>

            <p className="text-dark-5 text-custom-sm sm:text-base mb-8">
              Embrace unparalleled style with our exclusive collection of premium apparel. Exceptional quality that speaks for itself.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3.5 px-9 ease-out duration-200 hover:bg-blue"
            >
              Explore Collection
            </a>
          </div>

          <div>
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
