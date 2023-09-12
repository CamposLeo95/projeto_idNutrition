// Styles
import * as S from "./styles"

// Images
import creatina from "../../../../assets/creatina.png"

// Components
import ButtonMain from "../../../../components/ButtonMain"

export default function SectionMain(){
    return(
        <>
            <S.Wrapper id="inicio">
                <S.ImgContainer>
                    <S.ImgDesk src={ creatina }/>
                </S.ImgContainer>
                <S.MainContainer>
                    <S.TextMain>
                        <span>ID Creatina,</span> sua marca sua identidade!
                    </S.TextMain>
                    <S.ImgMobile src={ creatina }/>
                    <S.TextSecondary>
                        A mais alta tecnologia em um suplemento para o seu treino!
                    </S.TextSecondary>
                    <S.BtnDiv>
                        <ButtonMain 
                            bgcolor="#1d8afe" 
                            link="https://produto.mercadolivre.com.br/MLB-3817117392-pure-creatine-100-id-nutrition-300g-creatina-em-po-_JM"
                        >saber mais</ButtonMain>
                    </S.BtnDiv>
                </S.MainContainer>       
            </S.Wrapper>
        </>
    )
}