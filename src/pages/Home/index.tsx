// Styles
import * as S from "./styles"

// React-Hooks
import { useEffect, useState } from "react"

// Router-Hooks
import { useNavigate } from "react-router-dom"

//imagens
import treino from "../../assets/treino.jfif"
import relogio from "../../assets/relogio.jfif"
import efeitos from "../../assets/efeitos.jfif"

// Components
import SideBar from "../../components/SideBar"


// Sections
import SectionHeader from "./sections/SectionHeader"
import SectionMain from "./sections/SectionMain"
import Section2 from "./sections/Section2"
import Section3 from "./sections/Section3"
import Section5 from "./sections/Section5"
import SectionTable from "./sections/SectionTable"
import SectionInformations from "./sections/SectionInformations"
import SectionFooter from "./sections/SectionFooter"
import SectionAbout from "./sections/SectionAbout"

const title1 = "Melhor horário para tomar Creatina"
const content1 = [
                
    "O suplemento de creatina apresenta seus benefícios através do uso crônico. Por isso, após iniciado seu consumo, deve ser ingerida todos os dias.",

   " Levarão alguns dias até que os benefícios possam ser observados em sua totalidade. A creatina é insulinodependente, ou seja, é preciso consumi-la junto com alimentos ou suplementos que influenciam a produção de insulina (que possuem alto índice glicêmico), como por exemplo, dextrose, maltodextrina, arroz, pão, macarrão ou proteínas de alto índice insulinêmico como leite ou whey protein." ,

    "A sugestão de consumo determinada pela ANVISA é de 3g ao dia. Quanto ao horário, não há um consenso entre os pesquisadores. Porém, existem evidências que apontam para maiores benefícios quando o produto é consumido ao final do treino."

]

const title2 = "Efeitos colaterais da creatina"
const content2 =[ 
    "Via de regra, a creatina é um suplemento totalmente seguro. Existem alguns relatos relacionados a problemas como diarreia, queda de cabelo e dores de cabeça, entretanto, são muito escassos e citados em poucos estudos sobre o assunto.",

    "Por isso podemos dizer que o uso de creatina é seguro, trazendo, inclusive, benefícios terapêuticos para os usuários. Nesse sentido, não há nenhuma evidência científica que aponte risco associado ao uso de creatina em curto ou longo prazo em quantidades de até 30g ao dia por um período de cinco anos.",

    "Se você tem qualquer patologia, é fundamental informar ao seu nutricionista a fim de que ele avalie os melhores suplementos para atender às suas individualidades biológicas e eventuais especificidades."
]

const title3 = "Creatina antes ou depois do treino"
const content3 =[ 
    "Os pesquisadores não chegaram a um consenso com relação a esse assunto. Enquanto alguns especialistas defendem a ideia de que o seu consumo antes ou depois não influencia no resultado, outros acreditam que o consumo pós-treino é o mais indicado.",

    "Estudos realizados com fisiculturistas indicam que a administração da creatina após a prática de atividades físicas pode proporcionar mudanças positivas se comparada com a ingestão pré-exercício.",
    
    "Desta forma, a orientação é que você busque o suporte do seu nutricionista. Ele poderá avaliar a sua dieta, estratégia, eventual necessidade de suplementação com creatina e os melhores horários para administração do suplemento com base nos seus objetivos."
]



export default function Home(){

    const isBuild = false
    const navigate = useNavigate()
    const listNav = [
        {
            id: "inicio",
            name: "Início",
        },
        {
            id: "produtos",
            name: "Produto"
        }, 
        {
            id: "consumo",
            name: "Consumo"
        }, 
        {
            id: "tabela",
            name: "Tabela Nutricional"
        }
    ]

    const [showMenu, setShowMenu] = useState<boolean>(false)

    useEffect(()=>{
        if(isBuild){
           navigate("/page_build")
        }
    },[])

    return(
        <>
            <SectionHeader showmenu ={showMenu} setShowMenu={setShowMenu} listNav={listNav} />
            <S.Wrapper>
                <div className="text-cinza">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <SideBar showmenu={ showMenu } setShowMenu={ setShowMenu } list = { listNav }/>
                <SectionMain />
                <SectionAbout />
                <Section2 />
                <Section3 />  
                               
                <SectionInformations order title={title1} contents={content1} image={relogio} id="horario"/>
                <SectionInformations  title={title2} contents={content2} image={efeitos} id="efeitos"/>
                <SectionInformations order title={title3} contents={content3} image={treino} id="treino"/>   
                <Section5 /> 
                <SectionTable />
            </S.Wrapper>
            <SectionFooter />
        </>
    )
}