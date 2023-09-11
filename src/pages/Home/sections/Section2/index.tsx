// Styles
import * as S from "./styles"

import Pessoa from "../../../../assets/pessoaAgachada.png"

export default function Section2(){
    return(
        <S.Wrapper >
            <S.MainTitle>
                A creatina com pureza elevada e alto padrão de qualidade
            </S.MainTitle>
            <S.SubTitle >
                A creatina com pureza elevada e alto padrão de qualidade
            </S.SubTitle>
            <S.ImgPessoa src={Pessoa} />
        </S.Wrapper>
    )
}