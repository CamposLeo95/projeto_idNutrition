import styled from "styled-components"

export const TitleContainer = styled.div`

    // Medidas
    margin-top: 20px;
    padding: 0 70px;
    gap: 10px;

    // Layouts
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    // Estilos

 
`

export const Title = styled.h3`

    // Medidas
    margin-top: 20px;

    //Layout

    //Estilos
    font-size: ${props => props.theme.text_2xl}
`

export const SubTitle = styled.p`
    // Medidas

    // Layouts

    // Estilos
    font-size: ${props => props.theme.text_lg}
`