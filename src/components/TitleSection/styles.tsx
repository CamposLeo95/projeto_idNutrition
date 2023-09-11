import styled from "styled-components"

export const TitleContainer = styled.div`

    // Medidas
    margin-top: 20px;
    padding: 0 30px;
    gap: 10px;

    // Layouts
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    // Estilos

    @media (min-width: 768px) {
        padding: 0 70px;
    }
 
`

export const Title = styled.h3`

    // Medidas
    margin-top: 20px;

    //Layout

    //Estilos
    font-size: ${props => props.theme.text_xl};

    @media (min-width: 768px) {
        font-size: ${props => props.theme.text_5xl};
    }
`

export const SubTitle = styled.p`
    // Medidas

    // Layouts

    // Estilos
    color: ${props => props.theme.darkGrayColor};
    font-size: ${props => props.theme.text_lg};

    @media (min-width: 768px) {
        font-size: ${props => props.theme.text_2xl};
    }
`