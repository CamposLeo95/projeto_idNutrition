// Styles
import * as S from "./styles"

//Icons 
import { IconType } from 'react-icons';

// Interface
interface FirstCardProps {
    img: string
    icon: IconType
    textImg: string
    textCard: string
    textcolor?: boolean
    // link: string
}

export default function FirstCard({img, icon: Icon, textImg, textCard, textcolor} : FirstCardProps){
    return(
        <S.CardContainer>
            <S.ImgCard img={img} textcolor={textcolor ? "true" : "false"}>
                <S.ImgConteudo>
                    <Icon/>
                    <p>{textImg}</p>
                </S.ImgConteudo>
                <S.ImgLink href={link} target="_blank">
                    <p>Veja Mais</p>
                </S.ImgLink>
            </S.ImgCard>
            <S.TextCard>
                <p>{textCard}</p>
            </S.TextCard>
        </S.CardContainer>
    )
}