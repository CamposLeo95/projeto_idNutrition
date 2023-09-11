//styles
import * as S from "./styles"

//images
import Digital from "../../assets/Digital.svg"
import IconFace from "../../assets/icon-face.svg"
import IconInsta from "../../assets/icon-insta.svg"
import IconYoutube from "../../assets/icon-yt.svg"

export default function Footer(){
    return(
        <S.Wrapper>
            <S.TextMain>
                <span className="title">ID Nutrition</span> 
                <span className="subTitle">Sua marca, sua identidade.</span> 
            </S.TextMain>
            <S.Info>
                <S.Copy>
                    <S.Logo src={Digital}/>
                    <p>Copyright © 2023</p>
                    <p>small change. Big change</p>
                </S.Copy>
                <S.Actions>
                    <S.Links>
                        <S.CardLink>
                            <S.Link>Ínicio</S.Link> 
                           <S.Link>Sobre Nós</S.Link>
                        </S.CardLink>
                        <S.CardLink>
                            <S.Link>Produtos</S.Link> 
                            <S.Link>Sobre</S.Link>
                        </S.CardLink>
                        <S.CardLink>
                            <S.Link>Politica de Privacidade</S.Link> 
                        </S.CardLink>
                    </S.Links>
                    <S.Social>
                        <S.ImgSocial src={IconFace}></S.ImgSocial>
                        <S.ImgSocial src={IconInsta}></S.ImgSocial>
                        <S.ImgSocial src={IconYoutube}></S.ImgSocial>
                    </S.Social>
                </S.Actions>
            </S.Info>
            <img src={Digital} className="img_footer" />
        </S.Wrapper>
    )
}