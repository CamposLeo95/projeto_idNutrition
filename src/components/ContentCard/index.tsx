// Styles
import { Button } from "react-scroll"
import * as S from "./styles"

//Icons 
import { IconType } from 'react-icons'

import BtnMain from "../ButtonMain"

import { Link  } from "react-scroll"

// Interface
interface FirstCardProps {
    image: string
    icon?: IconType
    title:string
    resume: string
    textcolor?: boolean
    link?: string
    button?: boolean
    id: string
}

export default function ContentCard({ image, title, resume, textcolor, id } : FirstCardProps){
    return(
        <S.CardContainer>
            <S.ImgCard img={image} textcolor={textcolor ? "true" : "false"}>
            </S.ImgCard>
            <S.TextCard>
                <h3>{title}</h3>
                <p>{resume}</p>
                {Button 
                    ? <Link  
                    activeClass="active"
                    to={id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    > 
                        <BtnMain bgcolor="#ff6c11">Ver Mais</BtnMain> 
                    </Link> 
                    : null }
            </S.TextCard>
        </S.CardContainer>
    )
}