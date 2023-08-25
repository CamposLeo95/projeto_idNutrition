import styled from "styled-components"


export const Wrapper = styled.section`

    // Medidas
    width: 100vw;
    padding: 70px 70px;

    // Layouts

    // Estilos
    background-color: #f2f2f2;


    @media (max-width: ${props => props.theme.mobile}) {
        // Medidas
        padding: 0px;
    }
`

export const CardContainer = styled.div`

    // Medidas
    margin: 30px 0;

    // Layouts
    display: flex;
    justify-content: center;
    align-items: center;

    // Estilos


    @media (max-width: ${props => props.theme.tablet_max}) {
        // Medidas

        // Layouts
        flex-direction: column

        // Estilos
        
    }

`