// Styles
import * as S from "./styles"

// React-Hooks
import { useEffect, useState } from "react"

// Router-Hooks
import { useNavigate } from "react-router-dom"

// Components
import SideBar from "../../components/SideBar"

//DB
import { DBTextos, listNav }  from "../../db/db"

// Sections
import SectionHeader from "./sections/SectionHeader"
import SectionMain from "./sections/SectionMain"
import Section2 from "./sections/Section2"
import SectionCards from "./sections/SectionCards"
import SectionDescription from "./sections/SectionDescription"
import SectionTable from "./sections/SectionTable"
import SectionInformations from "./sections/SectionInformations"
import SectionFooter from "./sections/SectionFooter"
import SectionAbout from "./sections/SectionAbout"

export default function Home(){

    const isBuild = false
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState<boolean>(false)

    useEffect(()=>{
        if(isBuild){
           navigate("/page_build")
        }
    },[])

    return(
        <>
            <SectionHeader showmenu ={showMenu} setShowMenu={setShowMenu} listNav={listNav} />
            <S.Wrapper>
                <div className="text-cinza">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <SideBar showmenu={ showMenu } setShowMenu={ setShowMenu } list = { listNav }/>
                <SectionMain />
                <SectionAbout />
                <Section2 />
                <SectionCards DBtextos = { DBTextos }/>  
                { DBTextos.map(({order, title, content, image, id}) => (
                    <SectionInformations order={order} title={title} contents={content} image={image} id={id}/>
                ))}
                <SectionDescription /> 
                <SectionTable />
            </S.Wrapper>
            <SectionFooter />
        </>
    )
}