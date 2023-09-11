import * as S from "./styles"

import NutritionTable from "../../../../components/NutritionTable"

import scoop from "../../../../assets/scoop.png"
import creatina from "../../../../assets/creatina.png"


export default function ComponentName(){
    return(
        <S.Wrapper>
            <S.title>TABELA NUTRICIONAL</S.title>
            <NutritionTable  Attention={true}/>
            <img src={scoop} className="img_scoop" alt="scoop" />
            <img src={creatina} className="img_creatina" alt="id_creatina" />
        </S.Wrapper>
    )
}