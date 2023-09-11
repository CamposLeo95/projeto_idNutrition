import styled from "styled-components"


interface ConfigsProps {
    color?: string
}


export const Container = styled.div <ConfigsProps>`

    // Medidas
    width: 80%;
    max-width: 550px;
    padding: 5px; 

    // Layout

    // Estilos
    border: 7px solid ${props => props.color ? `#${props.color}` : "#000"};
    font-size: 14px;

`

export const TableContainer = styled.div <ConfigsProps>`
    // Medidas
    padding: 10px;
    gap: 5px;

    // Layout
    display: flex;
    flex-direction: column;

    // Estilos
    border: 3px solid ${props => props.color ? `#${props.color}` : "#000"};

    & table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;

        & th {
            text-align: start;
            border-bottom: 1px solid ${props => props.color ? `#${props.color}` : "#000"};
            padding: 5px 0; 
        }

        & td {
            width: 33%;
            padding: 8px 0;
            border-bottom: 1px solid ${props => props.color ? `#${props.color}` : "#000"}; 
        }

        & .td-middle{
            text-align: center;
        }

        & .td-final{
            text-align: end;
        }
    }
`;



export const AttentionContainer = styled.div`

        // Medidas
        padding: 10px; 
        gap: 10px;

        // Layout
        display: flex;
        flex-direction: column;

        // Estilos

`
export const Title = styled.div<ConfigsProps>`
    border-bottom: 8px solid ${props => props.color ? `#${props.color}` : "#000"}; 
`

export const TextBold = styled.span`
    font-weight: 700;
`