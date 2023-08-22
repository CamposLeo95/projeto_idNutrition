// Styles
import * as S from "./styles"

// Hooks
import { useEffect, useState } from "react"

// Componentes
import SliderCoverFlow from "../../../../components/SliderCoverFlow"
import TitleSection from "../../../../components/TitleSection"
import FirstCard from "../../../../components/FirstCard"

// Swipper
import {  SwiperSlide } from 'swiper/react'

// Icons
import { BsFillEmojiLaughingFill } from "react-icons/bs";

// Axios
import api from "../../../../services/api"

type listaDBProps ={
  cardText: string
  img: string
  imgText: string
  link: string
  textColor: boolean
}

export default function Section4(){

      const [listaDB, setListaDB] = useState<listaDBProps[]>([])

      useEffect(()=>{
        api
          .get("/db.json")
          .then((res)=> setListaDB(res.data))
          .catch((err) => {
            console.log(err)
          })     
      }, [])

      listaDB ? console.log(listaDB) : console.log("vazio") 

    return(
        <S.Wrapper id="contatos">
            <TitleSection 
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ratione quidem asperiores nulla, impedit odit. Libero,"
            />
            <SliderCoverFlow>
                {listaDB && listaDB.map((item, key) => (
                    <SwiperSlide className="card" key={key}style={{ height: '400px' }}>
                        <FirstCard 
                          img={item.img} 
                          textCard={item.cardText}
                          textImg={item.imgText}
                          icon={BsFillEmojiLaughingFill}
                          link={item.link}
                          textcolor={item.textColor}
                        />
                    </SwiperSlide>
                ))}
            </SliderCoverFlow>
        </S.Wrapper>
    )
}