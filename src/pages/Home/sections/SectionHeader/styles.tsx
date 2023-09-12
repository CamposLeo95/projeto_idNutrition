import styled from "styled-components";

export const Header = styled.header`

    // Medidas
    width: 100vw;
    height: 70px;
    padding: 0px 20px;

    // Layouts
    display: flex;
    align-items:center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1000;

    // Estilos
    background-color: ${props => props.theme.whiteColor};
    box-shadow: 0 0 5px ${props => props.theme.blackColor};
 
    .icons{
        // Medidas
        margin: 0 30px;

        // Layouts

        // Estilos       
        color: ${props => props.theme.primaryColor};
        font-size: ${props => props.theme.text_2xl};
        font-weight: 700px;
        cursor: pointer;
    }

    @media (min-width: ${props => props.theme.tablet_min}) {
        // Medidas
        padding: 0 70px;

        // Layouts

        // Estilos

        .icons{
            // Estilos
            display: none;
        }
    }
`

export const Logo = styled.img`
    // Medidas
    width: 40%;
    max-width: 200px;

    // Layouts

    // Estilos
`
