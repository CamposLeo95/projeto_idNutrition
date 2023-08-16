import  styled  from "styled-components";

export const Wrapper = styled.main`
    margin-top: 70px;

    & .text-cinza{
        width: 100vw;
        text-align: center;
        padding: 0 30px;
        background-color: ${props => props.theme.lightGrayColor};

        @media (min-width: ${props => props.theme.tablet_min}) {
            display: none;
        }
    }
`