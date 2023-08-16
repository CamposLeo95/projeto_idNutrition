import  styled  from "styled-components";


export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 50px;
    cursor: pointer;
    gap: 10px;
    
    & .swiper{
        width: 100%;
    }

    & .card{
        display: flex;
        justify-content: center;
        text-align: center;
        width: 100vw;
    }
`