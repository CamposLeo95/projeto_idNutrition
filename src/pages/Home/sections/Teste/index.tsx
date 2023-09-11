import * as S from "./styles"

import { useState } from "react"

import Digital from "../../../../assets/Digital.svg"
import creatina from "../../../../assets/creatina.png"

import NutritionTable from "../../../../components/NutritionTable"

export default function Teste(){

    const [showTable, setShowTable] = useState<boolean>(false)

    const handleTable = () =>{
        setShowTable(!showTable)
    }   

    return(
        <S.Wrapper>
            <S.ImgBackGround src={Digital}/>
            <S.Container>
                <S.TitleContainer>
                    <h2>creatina</h2>
                    <p>100% Pure, Creatine</p>
                </S.TitleContainer>

                <S.TextContainer>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur!adipisicing elit. 
                    </h2>
                    <span className="linha" />
                    <p>
                        adipisicing elit. Velit sit dolor voluptate, voluptatem quasi ut quis id nemo ab culpa, minima quisquam? Accusamus dolorum 
                    </p>
                    <button>Nutrition Facts</button>
                </S.TextContainer>
                <S.Price>
                    <S.Value>
                        <span>R$</span><h2>113,</h2><span>59</span>
                    </S.Value>
                    <span className="linePrice"/>
                </S.Price>
                <S.ShowTableContainer show = {showTable}>
                    <p>Ver tabela Nutricional</p>
                    <S.ButtonShowTable/>
                </S.ShowTableContainer>
                <img src={creatina} className="imgCreatina" onClick={handleTable}/>
                {showTable 
                ? <S.Nutrition>
                    <NutritionTable Attention={false} color={"fff"}/>
                </S.Nutrition>
                : null
                }
                
            </S.Container>
        </S.Wrapper>
    )
}