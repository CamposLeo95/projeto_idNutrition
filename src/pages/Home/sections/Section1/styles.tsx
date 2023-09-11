import styled  from "styled-components";

export const Wrapper = styled.div`
    // Medidas
    padding: 0px 20px 50px 20px;
    width:100vw;
    height: 100vh;

    // Layouts
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

 
    @media (min-width: 913px) {
        // Medidas
        margin-top: 80px;
        gap: 20px;

    }
`

export const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${props => props.theme.tablet_max}){
        display: none;
    }

`

export const MainContainer = styled.div`
    // Medidas
    width: 100%;
    gap: 25px;

    // Layouts
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    position: relative; 
    
    // Estilos

     @media (min-width: ${props => props.theme.tablet_max}) {
        // Medidas
        width: 100%;
        height: 100%;  

        // Layouts

        // Estilos

     }
`

export const TextMain = styled.h1`
    // Medidas
    width: 100%;

    // Layouts
    text-align: center;
    
    // Estilos
    font-size: ${props => props.theme.text_2xl};


    & span {
    // Medidas

    // Layouts
    
    // Estilos
        color: ${props => props.theme.primaryColor};
    }

    @media (min-width: ${props => props.theme.tablet_max}) {
        // Medidas
        width: 100%;

        // Layouts
        text-align: start;
        
        // Estilos
        font-size: ${props => props.theme.text_4xl};

    }

`

export const ImgDesk = styled.img`
    // Medidas
    max-width: 50%;
    /* width: 100%; */
    /* min-width: 550px; */
    /* height: 300px; */

    // Layouts
    position: relative;
    top: 0px; 
    
    // Estilos
        filter: drop-shadow(-25px 25px 20px #000000e0);


    @media (max-width: ${props => props.theme.tablet_max}) { 
        // Medidas

        // Layouts
        display: none;

        // Estilos      

    }
`

export const ImgMobile = styled.img`
    // Medidas
    max-width: 60%;

    // Layouts
    position: relative;
    
    // Estilos


    @media (min-width: ${props => props.theme.tablet_max}){
        // Medidas

        // Layouts
        
        // Estilos
        display: none;
    }
`

export const TextSecondary = styled.p`
    // Medidas

    // Layouts
    text-align: center;
    
    // Estilos
    font-size: 16px;


    @media (min-width: ${props => props.theme.tablet_max}) {
        // Medidas
        width: 100%;

        // Layouts
        text-align: start;
        
        // Estilos
        font-size: ${props => props.theme.text_lg};

    }
`

export const BtnDiv = styled.div`
    // Medidas
    width: 100%;
    gap: 10px;

    // Layouts
    display: flex;
    justify-content: center;
    
    // Estilos


    @media (min-width: ${props => props.theme.tablet_max}) {
        // Medidas
        margin-top: 50px;

        // Layouts
        position: relative;
        text-align: start;
        justify-content: start;
        
        // Estilos

    }


`


