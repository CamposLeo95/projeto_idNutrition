// Styles
import * as S from "./styles"

// Componentes
import TitleSection from "../../../../components/TitleSection"
import FirstCard from "../../../../components/FirstCard"

// Imagens
import man from "../../../../assets/homem_treinando.jpg"
import woman from "../../../../assets/woman_gym.jpg"
import halter from "../../../../assets/halter_gym.jpg"

// Icons
import { BsFillEmojiLaughingFill } from "react-icons/bs"

export default function Section3(){

    const listCards = [
        {
          id: "horario",
          img: man,
          imgText: "Lorem ipsum dolor sit",
          title: "Melhor horário para tomar Creatina ",
          cardText: "O suplemento de creatina apresenta seus benefícios através do uso crônico. Por isso...",
          icon: BsFillEmojiLaughingFill,
          link: "http://google.com",
          textColor: true,
        },
        {
          id: "efeitos",
          img: woman,
          imgText: "Lorem ipsum dolor sit",
          title: "Efeitos colaterais da creatina",
          cardText: "Via de regra, a creatina é um suplemento totalmente seguro. Existem alguns relatos relacionados a problemas...",
          icon: BsFillEmojiLaughingFill,
          link: "http://google.com",
          textColor: false,
        },
        {
          id: "treino",
          img: halter,
          imgText: "Lorem ipsum dolor sit",
          title: "Creatina antes ou depois do treino",
          cardText: "Os pesquisadores não chegaram a um consenso com relação a esse assunto. Enquanto alguns...",
          icon: BsFillEmojiLaughingFill,
          link: "http://google.com",
          textColor: true,
        },
    ]

    return(
        <S.Wrapper  id ="consumo">
            <TitleSection 
                title="COMO CONSUMIR CREATINA"
                subtitle=""
            />
            <S.CardContainer>

            {listCards.map((item, key) => (
              <FirstCard key={key}
                title={item.title}
                img={item.img} 
                textCard={item.cardText}
                textImg={item.imgText}
                icon={item.icon}
                link={item.link}
                textcolor={item.textColor}
                id = {item.id}
              />
            ))}
            </S.CardContainer>
        </S.Wrapper>
    )
}