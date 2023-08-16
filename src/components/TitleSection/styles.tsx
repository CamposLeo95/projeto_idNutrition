import styled from "styled-components"

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 10px;
    padding: 0 70px;
    margin-top: 20px;
`

export const Title = styled.h3`
    margin-top: 20px;
    font-size: ${props => props.theme.text_2xl}
`

export const SubTitle = styled.p`
    font-size: ${props => props.theme.text_lg}
`