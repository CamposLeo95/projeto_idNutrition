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

interface SliderProps{
  children: ReactNode
}

export default function Slider ({ children }: SliderProps) {

  return (
    <S.Container>
      <Swiper
        style={{ height: '450px' }}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow, FreeMode]}
        pagination
        navigation
        loop
        autoplay ={true}
        freeMode = {{
          sticky: true,
          momentumVelocityRatio: 0.2,
        }}
        centeredSlides={true}
        breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }
        }
      >
        {children}
      </Swiper>
    </S.Container>
  );
};