// Styles
import * as S from "./styles"

// Components
import BtnMain from "../BtnMain"

// Interface
interface NavBarProps {
    list: {
        id: string
        name: string
    }[]
}

export default function NavBar({ list } : NavBarProps){
    return(
        <S.NavBar>
            {list.map((item, key) => (
                <a href={`#${item.id}`}>
                    <li key={key}>{item.name}</li>
                </a>
            ))}
            <BtnMain bgcolor="#fe731d" >comprar</BtnMain>
        </S.NavBar>
    )
}