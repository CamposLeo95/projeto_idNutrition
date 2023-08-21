// Styles
import * as S from "./styles"

// React-Hooks
import { useEffect, useState } from "react"

// Router-Hooks
import { useNavigate } from "react-router-dom"

// Components
import Header from "../../components/Header"
import SideBar from "../../components/SideBar"
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"
import Section3 from "./sections/Section3"
import Section4 from "./sections/Section4"
import Footer from "../../components/Footer"

export default function Home(){

    const isBuild = false
    const navigate = useNavigate()
    const listNav = [
        {
            id: "inicio",
            name: "Início",
        },
        {
            id: "produtos",
            name: "Produtos"
        }, 
        {
            id: "contatos",
            name: "Contatos"
        }, 
        {
            id: "sobre",
            name: "Sobre Nós"
        }
    ]

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
                <Section3 />
                <Section4 />
            </S.Wrapper>
            <Footer />
        </>
    )
}