import styled from "styled-components"

interface IpropsInterface{
    active:  boolean;
}


export const Nav = styled.nav<IpropsInterface>`
    background-color: #5858585b;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 70px;
    opacity: ${props => props.active ? '1' : '0'};
    transition: .5s;

`

export const MenuNav = styled.ul<IpropsInterface>`
    width: 70%;
    height: 100vh;
    position: absolute;
    background-color: #ffffff;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    animation: ${props => props.active ? 'showSideBar .4s' : 'closeSideBar .4s'};

    li{
        margin-top: 20px;
    }

    @keyframes showSideBar {
        from{
            opacity: 0;
            width: 0
        }
        to{
            opacity: 1;
            width: 300;
        }
    }

    @keyframes closeSideBar {
        from{
            opacity: 1;
            width: 300;
        }
        to{
            opacity: 0;
            width: 0;
        }
    }


`