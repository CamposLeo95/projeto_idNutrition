import { ReactNode } from "react"

// Styles
import * as S from "./styles"

// Swipper
import { Swiper } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// Import Swiper styles
import 'swiper/css';

interface SliderCoverFlowProps{
  children: ReactNode
}

export default function SliderCoverFlow ({ children }: SliderCoverFlowProps) {

  return (
    <S.Container>
      <Swiper
        style={{ height: '450px' }}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow, FreeMode]}
        pagination
        navigation
        slidesPerView={3}
        loop
        autoplay ={true}
        freeMode = {{
          sticky: true,
          momentumVelocityRatio: 0.2,
        }}
        centeredSlides={true}
      >
        {children}
      </Swiper>
    </S.Container>
  );
};