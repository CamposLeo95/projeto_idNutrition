import * as S from "./styles"
import { BsSearch, BsList, BsXLg } from "react-icons/bs";


import logo from "../../assets/logo.png"
import SideBar from "../SideBar"


import { useState } from "react";

export default function Header(){

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    return(
        <S.Header>
            <BsSearch className="icons"/>
            <S.Logo src={ logo } alt="" />
            {menuOpen 
                ? <BsXLg className="icons" onClick={() => setMenuOpen(false)}/>
                : <BsList className="icons" onClick={() => setMenuOpen(true)}/> 
            }
            <SideBar active={ menuOpen } setActive={setMenuOpen}/>
        </S.Header>
    )
}