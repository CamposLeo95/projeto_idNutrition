import * as S from "./styles"

interface SideBarProps {
    active: boolean;
    setActive:React.Dispatch<React.SetStateAction<boolean>>
}

export default function SideBar({ active, setActive } : SideBarProps){

    const handleLink = () => {
        setActive(false)
    }
    return(
        <S.Nav active={ active }>
            <S.MenuNav active={ active }>
                <li onClick={handleLink}>Inicio</li>
                <li onClick={handleLink}>Produtos</li>
                <li onClick={handleLink}>Contato</li>
                <li onClick={handleLink}>Sobre Nós</li>
            </S.MenuNav>
        </S.Nav>
    )
}