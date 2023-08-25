import styled from 'styled-components'

export const Container = styled.div`
    // Medidas
    width: 100vw;
    height:100vh;

    // Layouts
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    // Estilos
`
export const ContainerText = styled.div`
    // Medidas

    // Layouts
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    position: absolute;
    top: 35%;
    text-align:center;
    
    // Estilos
    font-size: ${props => props.theme.text_2xl};


    & .second-text{
        // Medidas

        // Layouts
        display: flex;
        flex-direction: column;
        
        // Estilos

    }

    & .text-1{
        // Medidas

        // Layouts
        
        // Estilos
        font-weight: 700;
        text-transform: uppercase;
    }

    & .text-2{
        // Medidas

        // Layouts
        
        // Estilos
        text-transform: uppercase;
    }

    & .text-3{
        // Medidas

        // Layouts
        
        // Estilos
        color: #04044d;
    }

    & .text-4{
        // Medidas

        // Layouts
        
        // Estilos
        color: #0cbffb;
    }

    @media (min-width: ${props => props.theme.mobile}) {
        // Medidas

        // Layouts
        top: 40%;
        
        // Estilos
        font-size: ${props => props.theme.text_5xl};

        & .second-text{
            // Medidas
            gap: 10px;

            // Layouts
            flex-direction: row;

            // Estilos

        }
    }

`

export const ContainerLogo = styled.div`
    // Medidas
    gap: 25px;
    margin-top: 35px;

    // Layouts
    display: flex;
    align-items: center;
    justify-content: center;
    
    // Estilos

`

export const ImgMain = styled.img`
    // Medidas
    width: 325px;

    // Layouts
    
    // Estilos


    @media (min-width: ${props => props.theme.mobile}) {
        // Medidas
        width: 500px;

        // Layouts
        
        // Estilos

    }
`

export const ImgLogo = styled.img`
    // Medidas
    width: 40px;

    // Layouts
    
    // Estilos
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        // Medidas
        width: 45px;

        // Layouts
        
        // Estilos

    }
`

