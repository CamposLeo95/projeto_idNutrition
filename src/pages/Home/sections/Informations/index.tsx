import * as S from "./styles"

interface InformationsProps {
    order?: boolean
    contents: string[]
    title: string
    image: string
    id: string
}

export default function Informations({ order, contents, title, image, id } : InformationsProps){
    return(
        <S.Wrapper id={id}>
            <S.ImageContainer>
                <img src={image} alt="" />
            </S.ImageContainer>
            <S.ContentContainer order={order}>
                <h3>{title}</h3>
                {contents.map((content) => (
                    <p>{content}</p>
                ))}     
            </S.ContentContainer>
        </S.Wrapper>
    )
}