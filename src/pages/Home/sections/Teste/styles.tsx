import styled from "styled-components";


type configProps = {
    show: boolean
}

export const Wrapper = styled.section`

    //medidas
    height: 110vh;
    overflow: hidden;

    //Layouts 
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    //estilos
    background-image: linear-gradient(45deg, #ff690c, #ff9900);
    color: #fff;
    
    
`

export const ImgBackGround = styled.img`

    //medidas
    height: 100vh;

    //Layouts 
    position: absolute;
    right: -50px; 
    bottom: 150px;

    //estilos
    opacity: 0.2;  
    filter: blur(2px);
  
`

export const Container = styled.div`

    //medidas
    width: 90%;
    max-width: 900px;    
    height: 80%;
    padding: 30px;
    
    //Layouts 
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    //estilos
    z-index: 1;  
    border-radius: 10px;
    background-color: #ffffff3a;
    box-shadow: -10px 10px 30px #000000be;

    & .imgCreatina{
        position: relative;
        width: 100px;
        z-index: 1;
        filter: drop-shadow(-25px 25px 15px #000000e0);
        animation: scale 1s ease-in 0s alternate forwards;
        cursor: pointer;
        rotate: 10deg;  
        top: 50px;
        transition: 0.3s ease-in-out;
    }

    & .imgCreatina:hover{
        transform: scale(1.1);
        filter: drop-shadow(-10px 10px 15px #000000e0);
    }

    & .sombra{
        width: 25%;
        position: absolute;
        left: 34%;
        opacity: 0.3;
        filter: blur(15px);
        z-index: -1;
    }

    
    @keyframes scale {
        from {
            scale: 0.5;
        }
        to {
            scale: 1;
        }
    } 

    @media (min-width: 375px) {
       
        & .imgCreatina{
            position: relative;
            width: 200px;
            z-index: 1; 
            top: 50px
        }
   }

    @media (min-width: 768px) {
       
        & .imgCreatina{
            width: 290px;
            top: 0px
        }
    }

    @media (min-width: 1024px) {
       
       & .imgCreatina{
           width: 200px;
           top: 0px
       }
   }

`

export const TitleContainer = styled.div`
    
    // medidas
    width: 400px;

    // Layout
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 13%;

    //Estilos

    & h2 {
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 700;
        position: relative;
        animation: showLeft 1.5s ease-in 0s forwards;
    }

    & p {
        align-self: self-end;
        text-transform: uppercase;
        font-size: 14px;
        position: relative;
        animation: showRightMobile 1.5s ease-in 0s forwards;
    }

    @keyframes showLeft {
        from {
            opacity: 0;
            right: 100px;
        }
        to {
            opacity: 1;
            right: 0px;
        }
    }

    @keyframes showRightMobile {
        from {
            opacity: 0;
            left: 100px;
        }
        to {
            opacity: 1;
            left: -120px; 
        }
    }

    @media (min-width: 375px) {
        
        & h2{
            font-size: 6rem;
        }

        & p {
            font-size: 14px;
            animation: showRightDesk 1.5s ease-in 0s forwards;
        }

        @keyframes showRightDesk {
            from {
                opacity: 0;
                left: 100px;
            }
            to {
                opacity: 1;
                left: -100px; 
            }
        }

    }



    @media (min-width: 768px) {
        
        & h2{
            font-size: 8rem;
        }

        & p {
            font-size: 14px;
            animation: showRightDesk 1.5s ease-in 0s forwards;
        }

    }

`

export const TextContainer = styled.div`

    //medidas
    width: 90%;
    padding: 0 20px;
    
    //Layouts 
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 10px;
    top: 40px;
    gap: 15px;

    //estilos  
    font-size: 1.1rem;
    animation: showLeft 0.8s ease-in 0s forwards;

    & span {
        //medidas
        width: 90%;
        height: 2px;

        //estilos
        background-color: #fff;
    }

    & p {
        //medidas
        width: 250px;
    }

    & button {

        // medidas
        width: 50%;
        padding: 10px;

        // layouts

        // Estilos
        border: 2px solid #fff;
        background-color: transparent;
        color: #fff;   
        border-radius: 3px;
        transition: 0.3s ease-in-out;
        cursor: pointer;
    }

    & button:hover{
        background-color: #fff;
        color: #ff690c;
    }

    @keyframes showLeft {
        from {
            opacity: 0;
            right: 100px;
        }
        to {
            opacity: 1;
            right: 0px;
        }
    }

    @media (min-width: 375px) {
        //medidas
        width: 270px;
        padding: 0 0;

        //layouts
        left: 40px;

        //Estilos
        font-size: 1.3rem;
    }

`

export const Price = styled.div`
    // medidas
    width: 300;

    // Layout
    position: absolute;
    display: none;
    align-items: center;

    //Estilos
    font-weight: bold;

    & .linePrice {
        //medidas
        width: 100%;
        height: 1.5px;

        //estilos
        opacity:0;   
        background-color: #fff;
        animation: linePrice 0.8s ease-in 1.5s forwards;
    }

    
    @keyframes linePrice {
        from{
            width: 0%;
        }to{
            width: 100%;
            opacity: 1;
        }
    }

    @media (min-width: 768px) {
        //layout
        display: flex;
        left: 8%;
    }

    @media (min-width: 1024px) {
        //layout
        left: 20%;
    }

`

export const Value = styled.div`
    // medidas
    width: 200px;
    height: 0px;


    // Layout
    display: flex;
    align-items: center;
    justify-content: center;

    //Estilos
    border-radius: 8px;
    font-size: 16px;
    border: 1.5px solid #fff;
    animation: open 0.5s ease-in 2.5s forwards;
    opacity: 0;

    & h2{
        opacity: 0;
        animation: show 1s ease-in 2s forwards;    
    }

    & span{
        opacity: 0;
        font-size: 12px;
        animation: show 1s ease-in 1s forwards;
    }

    @keyframes open {
        from{
            height: 0px;
        }to{
            height: 80px;
            opacity: 1;
        }
    }

    
    @keyframes show {
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }

`

export const ContainerTable = styled.div`
    //layout
    position: absolute;
    right: 20px;
    top: 20px;

`

export const Nutrition =styled.div`

    //medidas
    width:350px;

    //layouts
    display: flex;
    position: absolute;
    right: 0px;
    top: 20px;
    justify-content: center;

    //estilos
     animation: show 1s ease-in forwards;

    @keyframes showLeft {
        from {
            opacity: 0;
            right: 100px;
        }
        to {
            opacity: 1;
            right: 0px;
        }
    }

`

export const ShowTableContainer = styled.div<configProps>`


    //layouts
    display:none;
    position: absolute;
    top: 170px;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    & p{
        font-size: 20px;
    }

    @media (min-width: 768px) {
            display: ${props => props.show ? "none": "flex"};
        }

    @media (min-width: 1024px) {
        //layouts
       top: 45px;
    }

`

export const ButtonShowTable = styled.button`

    //medidas
    padding: 20px;

    //layouts
    position: absolute;

    //estilos
    cursor: pointer;
    background-color: transparent;
    box-shadow: 2px -2px 0 1px #fff inset;
    border: solid transparent;
    border-width: 0 0 4px 4px;
    transform: rotate(315deg);
    animation: move 0.5s infinite alternate;

    @keyframes move {
        from{
            top: 40px;
        }to{
            top: 30px;
        }
    }
`