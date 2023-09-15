// Styles
import * as S from "./styles"

// Componentes
import TitleSection from "../../../../components/TitleSection"
import ContentCard from "../../../../components/ContentCard"

interface Section3Props {
  DBtextos: {
        title: string,
        content: string[],
        image: string,
        id: string,
        link: string,
        resume: string,
  }[]
}

export default function Section3({ DBtextos }:Section3Props){

    return(
        <S.Wrapper  id ="consumo">
            <TitleSection 
                title="COMO CONSUMIR CREATINA"
                subtitle=""
            />
            <S.CardContainer>

            {DBtextos.map((item, key) => (
              <ContentCard key={key}
              // img, title, resume, textcolor, id
                title={item.title}
                image={item.image} 
                resume={item.resume}
                link={item.link}
                id = {item.id}
              />
            ))}
            </S.CardContainer>
        </S.Wrapper>
    )
}