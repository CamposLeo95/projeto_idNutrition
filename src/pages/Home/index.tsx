import * as S from "./styles"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header"
import Section1 from "../../sections/Section1";

export default function Home(){
    const isBuild = false
    const navigate = useNavigate()

    useEffect(()=>{
        if(isBuild){
           navigate("/page_build")
        }
    },[])

    return(
        <>
            <Header />
            <S.Wrapper>
                <div className="text-cinza">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <Section1 />
            </S.Wrapper>
        </>
    )
}