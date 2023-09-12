// Styles
import * as S from "./styles"

// Components
import BtnMain from "../ButtonMain"


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
                    duration={1000}
                >
                    {item.name}
                </Link>
            ))}
            <BtnMain 
                bgcolor="#fe731d" 
                link="https://produto.mercadolivre.com.br/MLB-3817117392-pure-creatine-100-id-nutrition-300g-creatina-em-po-_JM"
            >Saber Mais</BtnMain>
        </S.NavBar>
    )
}