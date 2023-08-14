// Styles
import * as S from "./styles"

// React-Hooks
import { useEffect, useState } from "react"

// Router-Hooks
import { useNavigate } from "react-router-dom"

// Components
import Header from "../../components/Header"
import Section1 from "../../sections/Section1"
import Section2 from "../../sections/Section2"
import SideBar from "../../components/SideBar"

export default function Home(){
    const isBuild = false
    const navigate = useNavigate()
    const listNav = ["Ínicio", "Produtos", "Contatos", "Sobre Nós"]

    const [showMenu, setShowMenu] = useState<boolean>(false)

    useEffect(()=>{
        if(isBuild){
           navigate("/page_build")
        }
    },[])

    return(
        <>
            <Header showmenu ={showMenu} setShowMenu={setShowMenu} listNav={listNav} />
            <S.Wrapper>
                <div className="text-cinza">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <SideBar showmenu={ showMenu } setShowMenu={ setShowMenu } list = { listNav }/>
                <Section1 />
                <Section2 />
            </S.Wrapper>
        </>
    )
}