// Styles
import * as S from "./styles"

// Components
import BtnMain from "../BtnMain";

interface SideBarProps {
    showmenu: boolean;
    setShowMenu:React.Dispatch<React.SetStateAction<boolean>>
    list: string[]
}

export default function SideBar({ showmenu, setShowMenu, list } :SideBarProps){

    const handleLink = () => {
        setShowMenu(false)
    }

    return(
        <S.Nav showmenu={ showmenu.toString()}>
            <S.MenuNav showmenu={ showmenu.toString() }>
                {list.map((item, key) => (
                    <li key={key} onClick={handleLink}>{item}</li>
                ))}
                <BtnMain bgcolor="#fe731d" handleClick={() => console.log("clic")}>comprar</BtnMain>
            </S.MenuNav>
        </S.Nav>
    )
}