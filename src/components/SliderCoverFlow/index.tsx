import { ReactNode } from "react"

// Styles
import * as S from "./styles"

// Swipper
import { Swiper } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// Import Swiper styles
import 'swiper/css';

interface SliderCoverFlowProps{
  children: ReactNode
}

export default function SliderCoverFlow ({children}: SliderCoverFlowProps) {

  return (
    <S.Container>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        // pagination
        slidesPerView={4}
        loop
        autoplay ={true}
        effect={'coverflow'}
        centeredSlides={true}
        coverflowEffect={
          {
            rotate: 0,
            depth: 70,
            modifier: 7,
            slideShadows: false
          }
        }
      >
        {children}
      </Swiper>
    </S.Container>
  );
};