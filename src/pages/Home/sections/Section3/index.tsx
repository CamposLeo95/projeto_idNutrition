// Styles
import * as S from "./styles"

// Componentes
import TitleSection from "../../../../components/TitleSection";
import FirstCard from "../../../../components/FirstCard";

// Imagens
import campo from "../../../../assets/campo.png"
import surf from "../../../../assets/surf.png"
import praia from "../../../../assets/praia.png"

// Icons
import { BsFillEmojiLaughingFill } from "react-icons/bs";

export default function Section3(){

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
    ]

    return(
        <S.Wrapper id="contatos">
            <TitleSection 
                title="Lorem ipsum dolor sit amet consectetur"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque placeat esse repudiandae rem a quas"
            />
            <S.CardContainer>

            {listCards.map((item, key) => (
            <FirstCard 
              img={item.img} 
              textCard={item.cardText}
              textImg={item.imgText}
              icon={item.icon}
              link={item.link}
              textcolor={item.textColor}
            />
            ))}
            </S.CardContainer>
        </S.Wrapper>
    )
}