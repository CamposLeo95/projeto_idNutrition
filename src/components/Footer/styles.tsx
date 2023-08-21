import styled from "styled-components"

export const Wrapper = styled.footer`
    width: 100vw;
    padding: 30px;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.whiteColor};
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;


    & .img_footer{
        width: 550px;
        position: absolute;
        right: -80px;
        top: -80px;
        opacity: 0.1;
    }

    @media (min-width: 768px) {
        
    }
`

export const TextMain = styled.div`
    width: 100vw;
    font-size: ${props => props.theme.text_6xl};
    display: flex;
    flex-direction: column;

`
export const Info = styled.div`
    display: flex;
    margin-top: 80px;
    flex-direction: column-reverse;

    @media (min-width: 913px) {
        flex-direction: row;
        align-items: center;
        padding: 10px 0;
    }
`
export const Logo = styled.img`
    width: 50px;

`
export const Copy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
    font-size: ${props => props.theme.text_lg}; 
    gap: 10px; 
    flex-direction: column;
    
    @media (min-width: 913px) {
        width: 30%;
        align-items: start;
    }

`
export const Actions = styled.div`
    flex: 1;
`
export const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

`

export const CardLink = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; 
    font-size: ${props => props.theme.text_base}; 
    z-index: 10;

`

export const Link = styled.div`
    width: 200px;
    border-left: 3px solid ${props => props.theme.whiteColor};
    color: ${props => props.theme.whiteColor};
    padding: 5px 10px;
    transition: background-color 0.5s ease-in-out;
    cursor: pointer;
    
    &:hover{
        background-color: ${props => props.theme.whiteColor};
        /* border-left: 3px solid ${props => props.theme.secondColor}; */
        color: ${props => props.theme.primaryColor};
        /* animation: mouseOn 0.3s ease-in; */
    }

    @keyframes mouseOn {
        from{ width: 0; }
        to{ width: 100%; }
    }

`

export const Social = styled.div`
    flex: 1;
    padding: 10px 30px;
    display: flex;
    justify-content: center;
    gap: 10px;
    border-top: 2px solid ${props => props.theme.whiteColor};
    margin-top: 50px;

    @media (min-width: 768px) {
        justify-content: end;
    }

`

export const ImgSocial = styled.img`
    width: 30px;
    cursor: pointer;
    z-index: 5;
`
