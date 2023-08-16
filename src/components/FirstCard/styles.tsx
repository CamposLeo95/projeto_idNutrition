import styled from "styled-components"

type ImgCardProps ={
    img: string
    textcolor?: string
}

export const CardContainer = styled.div`
    width: 20%;
    min-width: 250px;
    gap: 20px;
    margin: 10px;
    background-color: #fff;
`
export const ImgCard = styled.div <ImgCardProps>`
    position: relative;
    width: 100%;
    height: 350px;
    border-radius: 15px;
    padding: 30px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: start;
    color: ${props => props.textcolor == "true" ? "#fff" : "#000"};

`

export const ImgConteudo = styled.div`
    font-size: ${props => props.theme.text_lg};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const ImgLink = styled.a`
    position: absolute;
    background: #fff;
    width: 100px;
    padding: 8px;
    left: 0;
    bottom: 20px;
    font-size: ${props => props.theme.text_xs};
    border-radius: 0 8px 8px 0;
    text-align: center;
    cursor: pointer;
    
`

export const TextCard = styled.div`
    width: 100%;
    padding: 5px;

    font-size: ${props => props.theme.text_sm};
`