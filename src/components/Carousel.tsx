'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import images from '@/helpers/imageLoader';
import Image from 'next/image';

import '@/styles/Carousel.css';

type CarouselProps = {
  className?: string;
};

export default function Carousel(props: CarouselProps) {
  return (
    <div className={`${props.className}`}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Zoom, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 3000,
        }}
        centeredSlides={true}
        initialSlide={0}
        loop={true}
        pagination
        zoom
        slideActiveClass="swiper-slide-active"
        breakpoints={{
          // Pequenos dispositivos (ex: smartphones)
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Tablets
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // Telas médias (ex: laptops pequenos)
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // Telas maiores (ex: desktops)
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className="max-w-[400px] max-h-[400px] object-contain"
              src={image}
              alt="Imagem do carrosel de imagens"
              width={400}
              height={400}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
