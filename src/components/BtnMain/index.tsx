// React-Imports
import { ReactNode } from "react"

import * as S from "./styles"

import ImgMain from "../../assets/Digital.svg"

// Interface
interface IBtnMainProps {
    children: ReactNode
    bgcolor: string
    handleClick?: () => void
}

export default function BtnMain({children, bgcolor, handleClick}: IBtnMainProps){
    return(
        <S.BtnContainer bgcolor={bgcolor} onClick={handleClick}>
            {children}
            <img src={ImgMain}/>
        </S.BtnContainer>
    )

}