// Styles
import * as S from "./styles"

// Componentes
import Slider from "../../../../components/Slider"
import TitleSection from "../../../../components/TitleSection"
import ContentCard from "../../../../components/ContentCard"

// Swipper
import {  SwiperSlide } from 'swiper/react'

import DB from "../../../../db/db"


export default function SectionMain(){

    return(
        <S.Wrapper>
            <TitleSection 
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ratione quidem asperiores nulla, impedit odit. Libero,"
            />
            <Slider>
                {DB && DB.map((item, key) => (
                    <SwiperSlide className="card" key={key}style={{ height: '400px' }}>
                        <ContentCard 
                          img={item.img} 
                          textCard={item.cardText}
                          textImg={item.imgText}
                          icon={item.icon}
                          link={item.link}
                          textcolor={item.textColor}
                          button= {false}
                          title={""}
                          id=""
                        />
                    </SwiperSlide>
                ))}
            </Slider>
        </S.Wrapper>
    )
}