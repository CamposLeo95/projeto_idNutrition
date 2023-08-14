import { styled } from "styled-components";

interface IBtnContainerProps {
    bgcolor: string
}

export const BtnContainer = styled.button<IBtnContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 6px 10px;
    gap: 5px;
    border: none;
    border-radius: 30px;
    background-color: ${props => props ? `${props.bgcolor}`: `#000`};
    color: ${props => props.theme.whiteColor};
    font-weight:lighter;
    text-transform: capitalize; 
    font-size: ${props => props.theme.text_lg};
    cursor: pointer;

    & img{
        width: 25px;
    }
`