import styled from "styled-components"

export const Wrapper = styled.footer`
    // Medidas
    width: 100vw;
    padding: 30px;

    // Layouts
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    // Estilos
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.whiteColor};


    & .img_footer{
        // medidas
        width: 550px;

        // Layouts
        position: absolute;
        right: -80px;
        top: -80px;

        // Estilos
        opacity: 0.1;
    }
`

export const TextMain = styled.div`

    // Medidas
    width: 100vw;

    // Layouts
    display: flex;
    flex-direction: column;

    // Estilos
    font-size: ${props => props.theme.text_5xl};

    & .subTitle{
        font-size: ${props => props.theme.text_3xl};
        font-weight: 100;
    }


`
export const Info = styled.div`

    // Medidas
    margin-top: 80px;

    // Layouts
    display: flex;
    flex-direction: column-reverse;


    @media (min-width: 913px) {
        // Medidas

        // Layouts
        flex-direction: row;
        align-items: center;
        padding: 10px 0;
        
        // Estilos

    }
`
export const Logo = styled.img`
    // medidas
    width: 50px;

    // Layouts

    // Estilos
`
export const Copy = styled.div`
    // Medidas
    width: 100%;
    padding: 30px;

    // Loyouts
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px; 

    // Estilos
    font-size: ${props => props.theme.text_lg}; 

    @media (min-width: 913px) {
        // Medidas
        width: 30%;

        // Layouts
        align-items: start;
    }

`
export const Actions = styled.div`

    // Layouts
    flex: 1;
`
export const Links = styled.div`

    // Medidas
    gap: 20px;

    // Layouts
    display: flex;
    flex-wrap: wrap;

    // Estilos

`

export const CardLink = styled.div`

    // Medidas
    gap: 10px; 

    // Layouts
    display: flex;
    flex-direction: column;
    z-index: 10;

    // Estilos
    font-size: ${props => props.theme.text_base}; 

`

export const Link = styled.div`

    // Medidas
    width: 200px;
    padding: 5px 10px;

    // Layouts

    // Estilos
    border-left: 3px solid ${props => props.theme.whiteColor};
    color: ${props => props.theme.whiteColor};
    transition: background-color 0.5s ease-in-out;
    cursor: pointer;
    
    &:hover{
        // Estilos
        background-color: ${props => props.theme.whiteColor};
        color: ${props => props.theme.primaryColor};
    }

    @keyframes mouseOn {
        from{ width: 0; }
        to{ width: 100%; }
    }

`

export const Social = styled.div`

    // Medidas
    padding: 10px 30px;
    gap: 10px;
    margin-top: 50px;

    // Layouts
    display: flex;
    justify-content: center;
    flex: 1;

    // Estilos
    border-top: 2px solid ${props => props.theme.whiteColor};

    @media (min-width: 768px) {
        // Layouts
        justify-content: end;
    }

`

export const ImgSocial = styled.img`

    // Medidas
    width: 30px;

    // Layouts
    z-index: 5;

    // Estilos
    cursor: pointer;

`
