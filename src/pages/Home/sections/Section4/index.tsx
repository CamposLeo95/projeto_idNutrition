// Styles
import * as S from "./styles"

// Componentes
import SliderCoverFlow from "../../../../components/SliderCoverFlow"
import TitleSection from "../../../../components/TitleSection"

export default function Section4(){
    return(
        <S.Wrapper id="sobre">
            <TitleSection 
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ratione quidem asperiores nulla, impedit odit. Libero,"
            />
            <SliderCoverFlow />
        </S.Wrapper>
    )
}