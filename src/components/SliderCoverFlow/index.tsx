// Styles
import * as S from "./styles"

// Swipper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { register } from 'swiper/element'

// Components
import FirstCard from "../FirstCard"

// Imagens
import campo from "../../assets/campo.png"
import surf from "../../assets/surf.png"
import praia from "../../assets/praia.png"

// Icons
import { BsFillEmojiLaughingFill } from "react-icons/bs";

register()

// Import Swiper styles
import 'swiper/css';

export default function SliderCoverFlow () {

  const listCards = [
    {
      img: campo,
      imgText: "Lorem ipsum dolor sit",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
      icon: BsFillEmojiLaughingFill,
      link: "http://google.com",
      textColor: true,
    },
    {
      img: surf,
      imgText: "Lorem ipsum dolor sit",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
      icon: BsFillEmojiLaughingFill,
      link: "http://google.com",
      textColor: false,
    },
    {
      img: praia,
      imgText: "Lorem ipsum dolor sit",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
      icon: BsFillEmojiLaughingFill,
      link: "http://google.com",
      textColor: true,
    },
    {
      img: surf,
      imgText: "Lorem ipsum dolor sit",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
      icon: BsFillEmojiLaughingFill,
      link: "http://google.com",
      textColor: false,
    },
    {
      img: campo,
      imgText: "Lorem ipsum dolor sit",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
      icon: BsFillEmojiLaughingFill,
      link: "http://google.com",
      textColor: true,
    },
    {
      img: praia,
      imgText: "Lorem ipsum dolor sit",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
      icon: BsFillEmojiLaughingFill,
      link: "http://google.com",
      textColor: false,
    },
    {
      img: campo,
      imgText: "Lorem ipsum dolor sit",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
      icon: BsFillEmojiLaughingFill,
      link: "http://google.com",
      textColor: true,
    },
    {
      img: surf,
      imgText: "Lorem ipsum dolor sit",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
      icon: BsFillEmojiLaughingFill,
      link: "http://google.com",
      textColor: false,
    },

    {
      img: praia,
      imgText: "Lorem ipsum dolor sit",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
      icon: BsFillEmojiLaughingFill,
      link: "http://google.com",
      textColor: true,
    },

    {
      img: surf,
      imgText: "Lorem ipsum dolor sit",
      cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
      icon: BsFillEmojiLaughingFill,
      link: "http://google.com",
      textColor: true,
    },



  ]

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
        {listCards.map((item, key) => (
          <SwiperSlide className="card" key={key}>
            <FirstCard 
              img={item.img} 
              textCard={item.cardText}
              textImg={item.imgText}
              icon={item.icon}
              link={item.link}
              textcolor={item.textColor}
            />
        </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};