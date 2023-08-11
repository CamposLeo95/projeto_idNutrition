import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const ContainerText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    
    font-size: 35px;
    position: absolute;
    top: 35%;
    text-align:center;

    & .second-text{
        display: flex;
        flex-direction: column;
    }

    & .text-1{
        font-weight: 700;
        text-transform: uppercase;
    }

    & .text-2{
        text-transform: uppercase;
    }

    & .text-3{
        color: #04044d;
    }

    & .text-4{
        color: #0cbffb;
    }

    @media (min-width: 768px) {
        font-size: 40px;
        top: 40%;

        & .second-text{
            flex-direction: row;
            gap: 10px;
        }
    }

`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin-top: 35px;

`

export const ImgMain = styled.img`
    width: 325px;

    @media (min-width: 768px) {
        width: 500px;
    }
`

export const ImgLogo = styled.img`
    width: 40px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        width: 45px;
    }
`

