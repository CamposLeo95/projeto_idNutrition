import styled from "styled-components"

interface IpropsInterface{
    showmenu:  string | undefined;
}

export const Nav = styled.nav<IpropsInterface>`
    background-color: #5858585b;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 70px;
    opacity: ${props => props.showmenu == "true" ? '1' : '0'};
    transition: .5s;
    z-index: ${props => props.showmenu == "true" ? '5' : '-1'};
    font-size: ${props => props.theme.text_lg};

`

export const MenuNav = styled.ul<IpropsInterface>`
    width: 70%;
    height: 100vh;
    position: absolute;
    background-color: ${props => props.theme.whiteColor};
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 50px;
    animation: ${props => props.showmenu == "true" ? 'showSideBar .4s' : 'closeSideBar .4s'};

    & .link{
        transition: 0.3s ease-in-out;
    }

    & .link:hover{
        scale: 1.2;
        color: #fe731d;
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