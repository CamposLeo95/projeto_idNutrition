import { styled } from "styled-components";

export const NavBar = styled.div`
    display: none;
    gap: 20px;
    font-size: ${props => props.theme.text_base};

    @media ( min-width: ${props => props.theme.tablet_min}) {
        display: flex;
        align-items: center;
    }
`
