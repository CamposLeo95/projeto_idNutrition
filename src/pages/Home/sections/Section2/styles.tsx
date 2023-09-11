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
    position: relative;
    
    // Estilos
    background-color: #212121;

`

export const MainTitle = styled.h3`
    // Medidas

    // Layouts
    
    // Estilos
    /* color: ${props => props.theme.darkGrayColor}; */
    color: #fff;
    font-size: ${props => props.theme.text_2xl};
    z-index: 1;

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
    z-index: 1;

    @media (min-width: ${props => props.theme.mobile}) {
         // Medidas

         // Layouts
         
         // Estilos
         font-size: ${props => props.theme.text_2xl};
 }
`
export const ImgPessoa = styled.img`
     width: 350px;
     position: absolute;
     /* top: 50px; */
     right: -150px;
     filter:grayscale();
     opacity: 0.3;

     @media (min-width: 768px){
          width: 580px;
          right: -200px;
          opacity: 1;
     }
`
