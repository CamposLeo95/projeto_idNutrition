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
                    Experimente a revolução fitness com nossa creatina de alta tecnologia, projetada para maximizar seus resultados com uma fórmula inovadora de última geração.
                    </S.TextSecondary>
                    <S.ButtonDiv>
                        <ButtonMain 
                            bgcolor="#1d8afe" 
                            link="https://produto.mercadolivre.com.br/MLB-3817117392-pure-creatine-100-id-nutrition-300g-creatina-em-po-_JM"
                        >saber mais</ButtonMain>
                    </S.ButtonDiv>
                </S.MainContainer>       
            </S.Wrapper>
        </>
    )
}