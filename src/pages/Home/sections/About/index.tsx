import * as S from "./styles"

import { useState } from "react"

import Digital from "../../../../assets/Digital.svg"
import creatina from "../../../../assets/creatina.png"

import NutritionTable from "../../../../components/NutritionTable"
import BtnMain from "../../../../components/BtnMain"

export default function Teste(){

    const [showTable, setShowTable] = useState<boolean>(false)

    const handleTable = () =>{
        setShowTable(!showTable)
    }   

    return(
        <S.Wrapper id="produtos">
            <S.ImgBackGround src={Digital}/>
            <S.Container>
                <S.TitleContainer>
                    <h2>creatina</h2>
                    <p>100% Pure, Creatine</p>
                </S.TitleContainer>

                <S.TextContainer>
                    <h2>
                        MAIS EFICIÊNCIA E MAIOR DESEMPENHO NO TREINO 
                    </h2>
                    <span className="linha" />
                    <p>
                    A Creatina monohidratada aumenta a capacidade do músculo de gerar força e, consequentemente, a capacidade de treino. Além disso, previne o catabolismo muscular e influencia a transcrição gênica. 
                    </p>
                    <BtnMain 
                            bgcolor="#ff0000" 
                            link="https://produto.mercadolivre.com.br/MLB-3817117392-pure-creatine-100-id-nutrition-300g-creatina-em-po-_JM"
                    >Ver mais</BtnMain>
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