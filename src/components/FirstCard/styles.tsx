import styled from "styled-components"

type ImgCardProps ={
    img: string
    textcolor?: string
}

export const CardContainer = styled.div`
    // Medidas
    min-width: 350px;
    width: 70%;
    height: 100%;
    margin: 10px;
    border-radius: 2px;
    border: 1px solid #dadada;
    overflow: hidden;

    // layout
    position: relative;
    display: flex;
    
    // Estilos
    background-color: #fbfbfb;

    &:hover{
        // Estilos
        box-shadow: 1px 1px 10px #6c6c6c;
    }
`
export const ImgCard = styled.div <ImgCardProps>`

    // Medidas
    width: 100%;
    min-height: 250px;
    padding: 30px;

    // layout
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    // Estilos
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${props => props.textcolor == "true" ? "#fff" : "#000"};
    cursor: pointer; 
    filter: blur(0.6px);

`

export const ImgConteudo = styled.div`

    // Medidas
    gap: 10px;

    // Layouts
    display: flex;
    align-items: center;
    flex-direction: column;

    // Estilos
    font-size: ${props => props.theme.text_lg};

`

export const ImgLink = styled.a`

    // Medidas
    width: 100px;
    padding: 8px;

    // Layouts
    position: absolute;
    left: 0;
    bottom: 20px;
    text-align: center;

    // Estilos
    background: #fff;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    font-size: ${props => props.theme.text_xs};

`

export const TextCard = styled.div`

    // Medidas
    width: 100%;
    padding: 15px;
    // Layouts
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    // Estilos
    font-size: ${props => props.theme.text_sm};
`