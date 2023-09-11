import styled from "styled-components"

export const Wrapper = styled.div`

    // Medidas
    width: 100vw;
    padding: 80px 0;
    gap: 30px;

    // Layouts
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    // Estilos
    border-radius: 105px;

    & .img_scoop{
        width: 50%;
        position: absolute;
        filter: drop-shadow(0px 10px 20px #000);
        top: 670px;
        z-index: 1;
    }

    & .img_creatina{
        width: 250px;
        position: absolute;
        filter: blur(1px);
        bottom: 100px;
        right: 100px;   
        display: none;
    }

    @media (max-height: 569px) {
        & .img_scoop{
            width: 50%;
            top: 800px;
        }
    }

    @media (min-width: 768px) {
        & .img_scoop{
            width: 50%;
            top: 380px;
            right: 0px;
        }
    }

    @media (min-width: 1280px) {
        & .img_scoop{
            width: 450px;
            top: 370px;
            right: 200px;
        }
    }

`

export const title = styled.h2`
     font-size: ${props => props.theme.text_3xl};
`