import  styled  from "styled-components";

export const Wrapper = styled.main`
    // Medidas
    margin-top: 70px;

    & .text-cinza{
        // Medidas
        width: 100vw;
        padding: 10px;

        // Layouts
        text-align: center;
        
        // Estilos
        background-color: ${props => props.theme.lightGrayColor};

        @media (min-width: ${props => props.theme.tablet_min}) {
            // Medidas

            // Layouts
            display: none;
            // Estilos

        }
    }
`