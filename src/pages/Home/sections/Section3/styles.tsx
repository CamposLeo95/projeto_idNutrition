import styled from "styled-components"


export const Wrapper = styled.section`
    width: 100vw;
    padding: 0 70px;

    @media (max-width: ${props => props.theme.mobile}) {
        padding: 0px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    gap: 20px;
    padding: 0 70px;


    @media (max-width: ${props => props.theme.tablet_min}) {
        flex-direction: column
    }

`