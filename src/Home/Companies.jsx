import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const Companies = () => {
  const swiperRef = useRef(null);
  const companiesImg = [
    { name: "A", img: "DAF-logo" },
    { name: "B", img: "home-img-2" },
    { name: "C", img: "home-img-3" },
    { name: "D", img: "jaqueta" },
    { name: "E", img: "moletom" },
    { name: "F", img: "polo" },
    { name: "G", img: "social" },
  ];

  return (
    <section className="bg-blue-olinger-c2 py-12 font-DM-Sans">
      <Swiper
        ref={swiperRef}
        slidesPerView={2}
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        freeMode={true}
        speed={2000}
        modules={[Autoplay, FreeMode]}
        className="companiesSwiper"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide className="self-center" key={index}>
            <img
              src={`/img/companies/company-${index + 1}.png`}
              alt={`Logotipo da empresa ${index + 1}`}
              className="aspect-video object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-20 h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="pt-16 px-4 font-semibold text-blue-olinger-c12 text-center">
        Mais de 100 empresas confiam no nosso trabalho!
      </p>
    </section>
  );
};

export default Companies;
