import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-gray-1 border border-gray-3 py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              Premium Polos (USPA & Lacoste)
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              UP TO 80% OFF
            </h2>

            <p>
              Experience the pinnacle of everyday elegance with our collection of branded polo t-shirts.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Buy Now
            </a>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="promo img"
            className="hidden sm:block absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 -z-1 object-cover rounded-xl shadow-lg"
            width={300}
            height={300}
          />
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-gray-2 border border-gray-3 py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="https://images.unsplash.com/photo-1594938298596-af34907a7266?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="promo img"
              className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1 object-cover rounded-xl shadow-lg"
              width={200}
              height={200}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                Formal Collection (Rare Rabbit)
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Smart Formals
              </h2>

              <p className="font-semibold text-custom-1 text-blue">
                Flat 80% off
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-blue py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-9"
              >
                Grab Now
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-gray-1 border border-gray-3 py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="https://images.unsplash.com/photo-1489987707023-afc7f29f9e57?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="promo img"
              className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1 object-cover rounded-xl shadow-lg"
              width={200}
              height={200}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Smart Casuals (Hackett)
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Up to <span className="text-blue">80%</span> off
              </h2>

              <p className="max-w-[285px] text-custom-sm">
                Tailored perfection strikes the perfect balance of sophistication and modern style.
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-blue py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
