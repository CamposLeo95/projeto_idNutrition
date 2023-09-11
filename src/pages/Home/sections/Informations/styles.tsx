import styled from "styled-components"

type configContainer = {
    order?: boolean
}

export const Wrapper = styled.section`
    width:100vw;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 1024px) {
        flex-direction: row;

    }

`

export const ImageContainer = styled.div`
    width:100%;
    order: 2;
    overflow-y: hidden;

   & img{
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
   }

   @media (min-width: 1024px) {
        height: 100%;
   }

`

export const ContentContainer = styled.div<configContainer>`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    font-size: 18px;
    background-color: #232323;
    color: #fff;
    padding: 40px 0;

    & h3{
        width: 400px;
        color: #1d7bff;
        font-size: 28px;
    }

    & p{
        width: 400px;
    }

    @media (min-width: 1024px) {
        order: ${props => props.order ? 1 : 2};
    }
`