// Styles
import * as S from "./styles"

// Icons
import { BsList, BsXLg } from "react-icons/bs"

// Images
import logo from "../../../../assets/logo.png"

// Components
import NavBar from "../../../../components/NavBar"

// Inteface
interface IHeaderProps {
    showmenu: boolean
    setShowMenu:React.Dispatch<React.SetStateAction<boolean>>
    listNav: {
        id: string
        name: string
    }[]
}

export default function SectionHeader( {showmenu, setShowMenu, listNav } : IHeaderProps){

    return(
        <S.Header>
            {/* <BsSearch className="icons"/> */}
            <S.Logo src={ logo } alt="" />
            {showmenu 
                ? <BsXLg className="icons" onClick={() => setShowMenu(false)}/>
                : <BsList className="icons" onClick={() => setShowMenu(true)}/> 
            }
            
            <NavBar list={ listNav }></NavBar>
        </S.Header>
    )
}