import styled from "styled-components";

export const Header = styled.header`
    width: 100vw;
    height: 70px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 0px 20px;
    z-index: 1000;
    background-color: ${props => props.theme.whiteColor};
   
    .icons{
        color: ${props => props.theme.primaryColor};
        font-size: ${props => props.theme.text_2xl};
        font-weight: 700px;
        margin: 0 30px;
        cursor: pointer;
    }

    @media (min-width: ${props => props.theme.tablet_min}) {
        padding: 0 70px;
        .icons{
            display: none;
        }
    }
`

export const Logo = styled.img`
    width: 40%;
    max-width: 200px;
`
