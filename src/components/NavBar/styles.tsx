import { styled } from "styled-components";

export const NavBar = styled.div`
    display: none;
    gap: 20px;
    font-size: ${props => props.theme.text_base};
    color: ${props => props ? `${props.theme.blackColor}`: `#111111`};
    

    & .link{
        transition: 0.3s ease-in-out;
    }

    & .link:hover{
        scale: 1.2;
        color: #fe731d;
    }

    @media ( min-width: ${props => props.theme.tablet_min}) {
        display: flex;
        align-items: center;
    }
`
