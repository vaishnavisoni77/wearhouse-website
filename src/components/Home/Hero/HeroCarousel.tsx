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
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="premium apparel"
              className="object-cover rounded-2xl shadow-xl"
              width={350}
              height={350}
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
              src="https://images.unsplash.com/photo-1434389678219-16ffb4f0b2f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="premium apparel"
              className="object-cover rounded-2xl shadow-xl"
              width={350}
              height={350}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
