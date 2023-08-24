// React-Imports
import { ReactNode } from "react"

import * as S from "./styles"

import ImgMain from "../../assets/Digital.svg"

// Interface
interface IBtnMainProps {
    children: ReactNode
    bgcolor: string
    handleClick?: () => void
    link?: string
}

export default function BtnMain({children, bgcolor, handleClick, link}: IBtnMainProps){
    return(
        <a href={link} target="_blank">
            <S.BtnContainer bgcolor={bgcolor} onClick={handleClick}>
                    {children}
                    <img src={ImgMain}/>
            </S.BtnContainer>
        </a>
    )

}