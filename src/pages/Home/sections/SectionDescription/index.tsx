//styles
import * as S from "./styles"

//imagens
import Digital from "../../../../assets/Digital.svg"
import creatina from "../../../../assets/creatina.png"

export default function SectionDescription(){
    return(
        <S.Wrapper>
            <S.Wrapper1>
                <S.Card>
                <S.Title>
                    <h3>A CREATINA COM PUREZA ELEVADA E ALTO PADRÃO DE QUALIDADE</h3>        
                </S.Title>
                </S.Card>
                <S.Card>
                    <div><img src={Digital} /></div>
                    <p>A CREATINA AUXILIA NA MANUTENÇÃO DOS NÍVEIS DE ENERGIA DURANTE O TREINO</p>
                </S.Card>
                <S.Card>
                    <img src={Digital} />
                    <p>CREATINA COM PUREZA ELEVADA</p>
                </S.Card>
                <S.Card>
                    <img src={Digital} />
                    <p>AUMENTO DE VOLUME MUSCULAR</p>
                </S.Card>
            </S.Wrapper1>
            <S.Wrapper2>
                <img src={creatina} />
            </S.Wrapper2>       
            <S.Wrapper3>
                <S.Title>
                    <h2>ID Nutrition Creatina</h2>
                    <p> QUALIDADE INTERNACIONAL E PREÇO DE FÁBRICA</p>
                </S.Title>
                <S.Price> 
                    <h2>QUALIDADE INTERNACIONAL E PREÇO DE FÁBRICA</h2>
                    <h3>R$ 113,52 <span>(cada)</span></h3> 
                    <p>No boleto ou no pix</p>
                </S.Price>
                <S.Action>
                    <S.Button>Ver no Site!</S.Button>
                </S.Action>
            </S.Wrapper3>
        </S.Wrapper>
    )
}