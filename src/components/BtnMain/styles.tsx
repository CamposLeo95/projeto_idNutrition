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
    border-radius: 3px;
    /* background-color: ${props => props ? `${props.bgcolor}`: `#000`}; */
    background-color: ${props => props ? `${props.theme.whiteColor}`: `#000`};
    /* color: ${props => props.theme.whiteColor}; */
    color: ${props => props ? `${props.bgcolor}`: `#111111`};
    font-weight:lighter;
    text-transform: capitalize; 
    font-size: ${props => props.theme.text_sm};
    font-weight: 500;
    transition: 0.2s ease-in;
    border: 2px solid ${props => props ? `${props.bgcolor}`: `#000`};
    cursor: pointer;

    &:hover{
        /* background-color: ${props => props ? `${props.theme.whiteColor}`: `#000`}; */
        background-color: ${props => props ? `${props.bgcolor}`: `#000`};
        /* color: ${props => props ? `${props.bgcolor}`: `#000`}; */
        color: ${props => props.theme.whiteColor};
        /* scale: 1.1; */
    }

    & img{
        width: 25px;
    }

    @media (min-width: ${props => props.theme.mobile}) {
        font-size: ${props => props.theme.text_lg}
    }
`