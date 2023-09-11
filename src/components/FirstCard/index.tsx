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
    title:string
    textImg: string
    textCard: string
    textcolor?: boolean
    link?: string
    button?: boolean
}

export default function FirstCard({ img, title, textCard, textcolor } : FirstCardProps){
    return(
        <S.CardContainer>
            <S.ImgCard img={img} textcolor={textcolor ? "true" : "false"}>
                <S.ImgConteudo>

                </S.ImgConteudo>
            </S.ImgCard>
            <S.TextCard>
                <h3>{title}</h3>
                <p>{textCard}</p>
                {Button ?  <BtnMain bgcolor="#f45">Ver Mais</BtnMain> : null }
            </S.TextCard>
        </S.CardContainer>
    )
}