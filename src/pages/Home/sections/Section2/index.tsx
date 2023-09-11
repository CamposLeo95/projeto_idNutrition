// Styles
import * as S from "./styles"

import Pessoa from "../../../../assets/pessoaAgachada.png"

export default function Section2(){
    return(
        <S.Wrapper >
            <S.MainTitle>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </S.MainTitle>
            <S.SubTitle >
                Lorem, ipsum dolor sit amet consectetur adipisicing 
            </S.SubTitle>
            <S.ImgPessoa src={Pessoa} />
        </S.Wrapper>
    )
}