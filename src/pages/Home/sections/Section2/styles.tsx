import  styled  from "styled-components";

export const Wrapper = styled.section`
    // Medidas
    padding: 80px 50px;
    gap: 10px;

    // Layouts
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    // Estilos

`

export const MainTitle = styled.h3`
    // Medidas

    // Layouts
    
    // Estilos
    color: ${props => props.theme.darkGrayColor};
    font-size: ${props => props.theme.text_2xl};

 @media (min-width: ${props => props.theme.mobile}) {
      // Medidas

      // Layouts
      
      // Estilos
      font-size: ${props => props.theme.text_3xl};
 }

 @media (min-width: ${props => props.theme.desk}) {
      // Medidas

      // Layouts
      
      // Estilos
      font-size: ${props => props.theme.text_4xl};
 }
`
export const SubTitle = styled.p`
    // Medidas

    // Layouts
    
    // Estilos
    color: ${props => props.theme.primaryColor};
    font-size: ${props => props.theme.text_base};

    @media (min-width: ${props => props.theme.mobile}) {
         // Medidas

         // Layouts
         
         // Estilos
         font-size: ${props => props.theme.text_2xl};
 }
`