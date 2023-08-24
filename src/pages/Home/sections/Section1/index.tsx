// Styles
import * as S from "./styles"

// Images
import ImgMain from "../../../../assets/Digital.svg"

// Components
import BtnMain from "../../../../components/BtnMain"

export default function Section1(){
    return(
        <S.Wrapper id="inicio">
            <S.ImgDesk src={ ImgMain }/>
            <S.MainContainer>
                <S.TextMain>
                    <span>Lorem ipsum </span> dolor sit  amet consectetur adipi consectetur adipiadipiadipi ead
                </S.TextMain>
                <S.ImgMobile src={ ImgMain }/>
                <S.TextSecondary>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </S.TextSecondary>
                <S.BtnDiv>
                    <BtnMain bgcolor="#1d8afe" handleClick={() => console.log("clicou")}>saber mais</BtnMain>
                    <BtnMain 
                        bgcolor="#fe731d" 
                        link="https://produto.mercadolivre.com.br/MLB-3817117392-pure-creatine-100-id-nutrition-300g-creatina-em-po-_JM">
                            comprar
                    </BtnMain>
                </S.BtnDiv>
            </S.MainContainer>
        </S.Wrapper>
    )
}