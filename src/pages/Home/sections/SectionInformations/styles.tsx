import styled from "styled-components"

type configContainer = {
    order?: boolean
}

export const Wrapper = styled.section`
    width:100vw;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;

    }

`

export const ImageContainer = styled.div`
    width:100%;
    order: 2;

   & img{
    width: 100%;
    height: 100%;
   }

   @media (min-width: 768px) {
        width:50%;
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
    padding: 40px 10px;

    & h3{
        color: #1d7bff;
        font-size: 28px;
    }

    
    @media (min-width: 768px) {
        width:50%;
        order: ${props => props.order ? 1 : 2};

        & h3{
            width: 90%;
        }

        & p{
            width: 90%;
        }

    }

    @media (min-width: 1024px) {

        & h3{
            width: 500px;
        }

        & p{
            width: 500px;
        }

    }
`