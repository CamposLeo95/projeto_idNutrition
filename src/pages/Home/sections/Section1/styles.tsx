import styled  from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    padding: 0 30px;
    width:100vw;
    display: flex;
    justify-content: center;
    
    @media (min-width: 913px) {
        margin-top: 80px;
        gap: 20px;
    }
`

export const MainContainer = styled.div`
     display: flex;
     width: 100%;
     flex-direction: column;
     gap: 25px;
     align-items: center;
     justify-content: start;
     position: relative; 
     padding: 50px 0;

     @media (min-width: ${props => props.theme.tablet_max}) {
        margin-top: 150px;
        width: 50%;
        height: 65vh;  
     }

`

export const TextMain = styled.h1`
    width: 100%;
    font-size: ${props => props.theme.text_2xl};
    text-align: center;

    & span {
        color: ${props => props.theme.primaryColor};
    }

    @media (min-width: ${props => props.theme.tablet_max}) {
        text-align: start;
        width: 100%;
        font-size: ${props => props.theme.text_4xl};

    }

`

export const ImgDesk = styled.img`
    position: relative;
    top: 0px; 
    max-width: 40%;
    min-width: 550px;
    height: 100%;
    
    @media (max-width: ${props => props.theme.tablet_max}) {       
        display: none;
    }
`

export const ImgMobile = styled.img`
    position: relative;
    max-width: 70%;
    @media (min-width: ${props => props.theme.tablet_max}){
        display: none;
    }
`

export const TextSecondary = styled.p`
    font-size: 16px;
    text-align: center;

    @media (min-width: ${props => props.theme.tablet_max}) {
        font-size: ${props => props.theme.text_lg};
        text-align: start;
        width: 100%;
    }
`

export const BtnDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;

    @media (min-width: ${props => props.theme.tablet_max}) {
        margin-top: 50px;
        text-align: start;
        position: relative;
        justify-content: start;
    }


`


