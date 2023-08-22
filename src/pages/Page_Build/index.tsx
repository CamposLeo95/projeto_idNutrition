// Styles
import * as S from "./styles"

// Images
import Digital from "../../assets/Digital.svg"
import IconFace from "../../assets/icon-face.svg"
import IconInsta from "../../assets/icon-insta.svg"
import IconLinkedin from "../../assets/icon-linkedin.svg"
import IconYoutube from "../../assets/icon-yt.svg"

export default function PageBuild() {

  return (
      <S.Container>
        <S.ImgMain src={Digital} alt="" /> 
        <S.ContainerText>
          <p>
            <span className="text-1">Em </span> 
            <span className="text-2">breve</span>
          </p>
          <p className="second-text">
            <span className="text-3">sua marca, </span> 
            <span className="text-4">sua identidade</span>
          </p>
        </S.ContainerText>
        <S.ContainerLogo>
          <a href="https://instagram.com/id.nutrition?igshid=MzRlODBiNWFlZA==" target="_blank">
            <S.ImgLogo  src={IconInsta} alt="icone Instagram" />  
          </a>
          <a href="#">
            <S.ImgLogo src={IconFace} alt="icone Facebook" />   
          </a>
          <a href="#">
            <S.ImgLogo  src={IconLinkedin} alt="icone Linkedin" />
          </a>
          <a href="#">
            <S.ImgLogo  src={IconYoutube} alt="icone Youtube" />
          </a>
        </S.ContainerLogo>
      </S.Container>   
  )
}

