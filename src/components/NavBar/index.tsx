// Styles
import * as S from "./styles"

// Components
import BtnMain from "../BtnMain"

interface NavBarProps {
    list: string[]
}

export default function NavBar({ list } : NavBarProps){
    return(
        <S.NavBar>
            {list.map((item, key) => (
                <li key={key}>{item}</li>
            ))}
            <BtnMain bgcolor="#fe731d" >comprar</BtnMain>
        </S.NavBar>
    )
}