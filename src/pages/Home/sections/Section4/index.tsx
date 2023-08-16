// Styles
import * as S from "./styles"

// Componentes
import SliderCoverFlow from "../../../../components/SliderCoverFlow"
import TitleSection from "../../../../components/TitleSection"
import FirstCard from "../../../../components/FirstCard"

// Swipper
import {  SwiperSlide } from 'swiper/react'

// Imagens
import campo from "../../../../assets/campo.png"
import surf from "../../../../assets/surf.png"
import praia from "../../../../assets/praia.png"

// Icons
import { BsFillEmojiLaughingFill } from "react-icons/bs";

export default function Section4(){
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

    return(
        <S.Wrapper id="sobre">
            <TitleSection 
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ratione quidem asperiores nulla, impedit odit. Libero,"
            />
            <SliderCoverFlow>
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
            </SliderCoverFlow>
        </S.Wrapper>
    )
}