import { styled } from "styled-components";

export const NavBar = styled.div`
    // Medidas

    // Layouts
    gap: 20px;

    // Estilos
    display: none;
    font-size: ${props => props.theme.text_base};
    color: ${props => props ? `${props.theme.darkGrayColor}`: `#262626`};


    & .link{
        // Estilos
        transition: 0.3s ease-in-out;
    }

    & .link:hover{
        // Estilos
        scale: 1.2;
        color: #fe731d;
    }

    @media ( min-width: ${props => props.theme.tablet_min}) {
        // Layouts
        display: flex;
        align-items: center;
    }
`
