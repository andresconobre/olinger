import React, { useRef } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const posts = [
  "https://www.instagram.com/reel/DNn_EGvRtOU",
  "https://www.instagram.com/reel/DNk5c84OPOv",
  "https://www.instagram.com/p/DMQeMj0OQn1",
  "https://www.instagram.com/p/C-LpJt-vWU6",
  "https://www.instagram.com/p/CoXusFGOKTz",
  "https://www.instagram.com/p/CoGJz-rOcP0",
];

const InstagramPosts = () => {
  const swiperRef = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className="py-12 md:py-24 font-DM-Sans">
      <div className="container">
        <h2 className="font-semibold text-[32px]/9 text-blue-olinger-c12 text-center pb-12">
          Visite nosso Instagram e conheça mais sobre a malharia!
        </h2>
        <div className="flex items-center justify-center gap-2 lg:gap-5">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Voltar slide"
            className="shrink-0"
          >
            <img
              src="/img/arrow-right-blue-icon.svg"
              alt="Ícone de seta para direita"
              className="hidden min-[768px]:block w-6 xl:w-8 h-6 xl:h-8 object-contain rotate-180"
            />
          </button>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            autoplay={
              isMobile ? { delay: 3000, disableOnInteraction: false } : false
            }
            breakpoints={{
              1: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            loop
          >
            {posts.map((postUrl, idx) => (
              <SwiperSlide key={idx}>
                <InstagramEmbed url={postUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Avançar slide"
            className="shrink-0"
          >
            <img
              src="/img/arrow-right-blue-icon.svg"
              alt="Ícone de seta para direita"
              className="hidden min-[768px]:block w-6 xl:w-8 h-6 xl:h-8 object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramPosts;
