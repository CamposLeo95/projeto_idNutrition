// Styles
import * as S from "./styles"

// Components
import BtnMain from "../BtnMain"


import { Link  } from "react-scroll"

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
                <Link
                    className ="link"
                    key ={key}
                    activeClass="active"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    {item.name}
                </Link>
            ))}
            <BtnMain bgcolor="#fe731d" >comprar</BtnMain>
        </S.NavBar>
    )
}