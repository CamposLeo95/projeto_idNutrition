import * as S from "./styles"

import NutritionTable from "../../../../components/NutritionTable"
import TitleSection from "../../../../components/TitleSection"

import scoop from "../../../../assets/scoop.png"


export default function Tabela(){
    return(
        <S.Wrapper id="tabela">
            <TitleSection
                title="TABELA NUTRICIONAL"
                subtitle=""
            />
            <NutritionTable  Attention={true}/>
            <img src={scoop} className="img_scoop" alt="scoop" />
        </S.Wrapper>
    )
}