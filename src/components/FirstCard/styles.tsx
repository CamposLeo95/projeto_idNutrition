import styled from "styled-components"

type ImgCardProps ={
    img: string
    textcolor?: string
}

export const CardContainer = styled.div`
    position: relative;
    min-width: 350px;
    width: 400px;
    height: 100%;
    margin: 10px;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #dadada;
    overflow: hidden;
    transition: 0.3s ease-in-out;
    display: flex;
    overflow: hidden;

    &:hover{
        box-shadow: 1px 1px 10px #6c6c6c;
    }
`
export const ImgCard = styled.div <ImgCardProps>`
    position: relative;
    width: 100%;
    min-height: 250px;
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
    cursor: pointer;
    filter: blur(0.6px);

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
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: ${props => props.theme.text_sm};
`