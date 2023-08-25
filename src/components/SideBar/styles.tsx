import styled from "styled-components"

interface IpropsInterface{
    showmenu:  string | undefined;
}

export const Nav = styled.nav<IpropsInterface>`

    // Medidas
    width: 100vw;
    height: 100vh;

    // Layouts
    position: fixed;
    top: 70px;

    // Estilos
    font-size: ${props => props.theme.text_lg};
    background-color: #5858585b;
    opacity: ${props => props.showmenu == "true" ? '1' : '0'};
    z-index: ${props => props.showmenu == "true" ? '5' : '-1'};
    transition: .5s;

`

export const MenuNav = styled.ul<IpropsInterface>`

    // Medidas
    width: 70%;
    height: 100vh;
    padding-top: 50px;
    gap: 50px;

    // Layouts
    position: absolute;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    // Estilos
    background-color: ${props => props.theme.whiteColor};
    animation: ${props => props.showmenu == "true" ? 'showSideBar .4s' : 'closeSideBar .4s'};

    & .link{

        // Estilos
        transition: 0.3s ease-in-out;
    }

    & .link:hover{
        
        // Estilos
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