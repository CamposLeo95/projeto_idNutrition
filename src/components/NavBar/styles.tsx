import { styled } from "styled-components";

export const NavBar = styled.div`
    display: none;
    gap: 20px;
    font-size: ${props => props.theme.text_lg};

    @media ( min-width: 835px ) {
        display: flex;
        align-items: center;
    }
`
