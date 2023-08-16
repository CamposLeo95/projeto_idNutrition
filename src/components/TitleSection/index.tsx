// Styles
import * as S from "./styles"

// Interface
interface TitleSectionProps {
    title: string
    subtitle: string
}

export default function TitleSection({title, subtitle} : TitleSectionProps){
    return(
        <S.TitleContainer>
            <hr />
            <S.Title>
                { title }
            </S.Title>
            <S.SubTitle>
                {subtitle}
            </S.SubTitle>
        </S.TitleContainer>
    )
}