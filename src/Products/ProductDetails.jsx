import React, { useContext, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Context from "../Context";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Qualities from "../Home/Qualities/Qualities";
import Button from "../components/Button";

const ProductDetails = () => {
  const { product } = useParams();
  const { productsData } = useContext(Context);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const productDetails = productsData.find((item) => item.link === product);

  if (!productDetails) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="container font-DM-Sans">
      <div className="py-6 inline-flex items-center gap-1 text-blue-olinger-c12 text-xs">
        <Link to="/produtos">Produtos</Link>
        <span>{">"}</span>
        <p>{productDetails.name}</p>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
          <Swiper
            style={{
              "--swiper-navigation-color": "#3B38AC",
              "--swiper-pagination-color": "#3B38AC",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {Array.from({ length: productDetails.total }).map((_, index) => (
              <SwiperSlide key={index} className="max-h-[600px] ">
                <img
                  src={`/img/${productDetails.link}/img-${index + 1}.png`}
                  className="object-cover aspect-[9/16]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiperThumb"
          >
            {Array.from({ length: productDetails.total }).map((_, index) => (
              <SwiperSlide key={index} className="max-h-[100px]">
                <img src={`/img/${productDetails.link}/img-${index + 1}.png`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-8 order-1 lg:order-2 flex flex-col items-start gap-14">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-blue-olinger-c12 text-[40px]">
              {productDetails.name}
            </h2>
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-blue-olinger-c12">Descrição</p>
              <p className="text-gray-olinger-c11 whitespace-pre-wrap empty:hidden">
                {productDetails.description}
              </p>
            </div>
          </div>
          <Button arrow>Adicionar ao orçamento</Button>
        </div>
      </div>
      <Qualities />
    </div>
  );
};

export default ProductDetails;
