// Styles
import * as S from "./styles"

// Components
import BtnMain from "../BtnMain";


import { Link  } from "react-scroll";

// Interface
interface SideBarProps {
    showmenu: boolean;
    setShowMenu:React.Dispatch<React.SetStateAction<boolean>>
    list:{
        id: string
        name: string
    }[]
}

export default function SideBar({ showmenu, setShowMenu, list } :SideBarProps){

    const handleLink = () => {
        setShowMenu(false)
    }

    return(
        <S.Nav showmenu={ showmenu.toString()}>
            <S.MenuNav showmenu={ showmenu.toString() }>
                {list.map((item, key) => (
                    <Link
                        className="links"
                        key ={key}
                        activeClass="active"
                        to={item.id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleLink}
                    >{item.name}</Link>
                ))}
                <BtnMain bgcolor="#fe731d" handleClick={() => console.log("click")}>comprar</BtnMain>
            </S.MenuNav>
        </S.Nav>
    )
}