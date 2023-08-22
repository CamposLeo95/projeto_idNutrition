import  styled  from "styled-components";

export const Wrapper = styled.section`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;

`

export const MainTitle = styled.h3`
    color: ${props => props.theme.darkGrayColor};

 @media (min-width: ${props => props.theme.mobile}) {
    font-size: ${props => props.theme.text_3xl};
 }

 @media (min-width: ${props => props.theme.desk}) {
    font-size: ${props => props.theme.text_4xl};
 }
`
export const SubTitle = styled.p`
    color: ${props => props.theme.primaryColor};

    @media (min-width: ${props => props.theme.mobile}) {
    font-size: ${props => props.theme.text_2xl};
 }
`