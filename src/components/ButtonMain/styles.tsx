import { styled } from "styled-components";

interface IBtnContainerProps {
    bgcolor: string
}

export const BtnContainer = styled.button<IBtnContainerProps>`

    // Medidas
    padding: 6px 10px;
    gap: 5px;

    // Layouts
    display: flex;
    align-items: center;
    justify-content: space-around;
    

    // Estilos
    border: none;
    border-radius: 3px;
    background-color: ${props => props ? `${props.theme.whiteColor}`: `#000`};
    color: ${props => props ? `${props.bgcolor}`: `#111111`};
    cursor: pointer;
    transition: 0.2s ease-in;
    text-transform: capitalize; 
    font-weight: lighter;
    font-size: ${props => props.theme.text_sm};
    font-weight: 500;
    border: 2px solid ${props => props ? `${props.bgcolor}`: `#000`};

    &:hover{
        // Estilos
        background-color: ${props => props ? `${props.bgcolor}`: `#000`};
        color: ${props => props.theme.whiteColor};
    }

    & img{
        // Medidas
        width: 25px;
    }

    @media (min-width: ${props => props.theme.mobile}) {
        // Estilos
        font-size: ${props => props.theme.text_lg}
    }
`