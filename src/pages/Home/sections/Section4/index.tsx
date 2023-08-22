// Styles
import * as S from "./styles"

// Componentes
import SliderCoverFlow from "../../../../components/SliderCoverFlow"
import TitleSection from "../../../../components/TitleSection"
import FirstCard from "../../../../components/FirstCard"

// Swipper
import {  SwiperSlide } from 'swiper/react'

import DB from "../../../../db/db"

export default function Section4(){
    

    return(
        <S.Wrapper id="contatos">
            <TitleSection 
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ratione quidem asperiores nulla, impedit odit. Libero,"
            />
            <SliderCoverFlow>
                {DB && DB.map((item, key) => (
                    <SwiperSlide className="card" key={key}style={{ height: '400px' }}>
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