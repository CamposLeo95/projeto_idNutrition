// Styles
import { Button } from "react-scroll"
import * as S from "./styles"

//Icons 
import { IconType } from 'react-icons'

import BtnMain from "../BtnMain"

// Interface
interface FirstCardProps {
    img: string
    icon?: IconType
    textImg: string
    textCard: string
    textcolor?: boolean
    link?: string
    button?: boolean
}

export default function FirstCard({ img, textCard, textcolor } : FirstCardProps){
    return(
        <S.CardContainer>
            <S.ImgCard img={img} textcolor={textcolor ? "true" : "false"}>
                <S.ImgConteudo>
                    {/* {Icon && <Icon/>} */}
                    {/* <p>{textImg}</p> */}
                </S.ImgConteudo>
                {/* <S.ImgLink href={link} target="_blank">
                    <p>Veja Mais</p>
                </S.ImgLink> */}
            </S.ImgCard>
            <S.TextCard>
                <p>{textCard}</p>
                {Button ?  <BtnMain bgcolor="#f45">Ver Mais</BtnMain> : null }
            </S.TextCard>
        </S.CardContainer>
    )
}