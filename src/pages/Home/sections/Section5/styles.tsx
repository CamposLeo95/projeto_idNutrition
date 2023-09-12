import styled from "styled-components"

export const Wrapper = styled.section`
    // Medidas
    width: 100vw;
    padding: 80px 0;
    gap: 20px;

    // Layouts
    display: flex;
    flex-direction: column;
    align-items: center;

    // Estilos
    /* background-color: ${props => props.theme.secondColor}; */
    background-image: linear-gradient(180deg, #232323, #232323, #fff);
    color: ${props => props.theme.whiteColor};

    @media (min-width: ${props => props.theme.desk}) {
        flex-direction: row;

    }

`

export const Wrapper1 = styled.div`

    // Medidas
    width: 100%;
    padding: 15px;
    gap: 15px;

    // Layouts
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    // Estilos;


    & img{

        // Medidas
        width: 50px;

        // Layouts
        
        // Estilos
    }

`
export const Wrapper2 = styled.div`

    // Medidas
    width: 100%;
    padding: 20px 0;

    // Layouts
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    order: -1;

    // Estilos
    font-size: ${props => props.theme.text_xs};
    /* background-image: radial-gradient(${props => props.theme.whiteColor}, ${props => props.theme.whiteColor}, ${props => props.theme.secondColor}, transparent); */


    & img{
        width: 300px;
        margin-bottom: 20px;
    }

    & div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: ${props => props.theme.desk}) {
        order: 0;
    }

`
export const Wrapper3 = styled.div`
    // Medidas
    width: 100vw;
    gap: 20px;


    // Layouts
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    // Estilos
    text-align: center;

    @media (min-width: ${props => props.theme.desk}) {
        text-align: start;
        align-items: start;
    }

`

export const Card = styled.div`

    // Medidas
    width: 250px;
    gap: 20px;
    margin-top: 20px;

    // Layouts
    display: flex;
    align-items: center;

    // Estilos
    font-size: ${props => props.theme.text_xs};

`

export const Title = styled.div`
        // Medidas
        width: 100%;

        // Layouts
        display: flex;
        flex-direction: column;
        align-items: center;

        // Estilos
        font-size: ${props => props.theme.text_lg};
        text-align: center;

        & p{
            margin: 15px 0;
            font-size: ${props => props.theme.text_xs};           
        }

        
    @media (min-width: ${props => props.theme.desk}) {
        text-align: start;
        align-items: start;
    }

`
export const Price = styled.div`

        // Medidas
        width: 300px;
        margin-top: 20px;
       

        // Layouts
        font-size: ${props => props.theme.text_xs};
        flex: 1;

        // Estilos

        & h3 {
            font-size: ${props => props.theme.text_3xl};
            margin-top: 20px;
        }

        & span {
            font-size: ${props => props.theme.text_sm};
        }

        & p{          
            font-size: ${props => props.theme.text_sm};
        }

        @media (min-width: ${props => props.theme.desk}) {

            // Medidas
            margin: 40px 0;

            // Layouts

            // Estilos
        }

`
export const Action = styled.div`

    // Medidas
    width: 300px;
    gap: 20px;

    // Layouts
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    text-align: center;

    // Estilos
    font-size: ${props => props.theme.text_xs};
    

    
    @media (min-width: ${props => props.theme.desk}) {

        // Medidas
        margin-top: 20px;
        
        // Layouts
        align-items: start;
        text-align: start;

        // Estilos
    }

`

export const Button = styled.button`

    // Medidas
    width: 200px;
    padding: 20px;

    // Layouts


    // Estilos
    border: none;
    border-radius: 2px;
    color: ${props => props.theme.whiteColor};
    background-color: #00d100;
    font-size: ${props => props.theme.text_lg};
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 0 10px #000000ab;
    transition: 0.3s ease-in-out;

    &:hover{
        // Estilos
        background-color: #00d100ca;
        scale: 1.1;
    }

`



