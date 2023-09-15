import man from "../assets/man_gym.jpg"
import woman from "../assets/woman_gym.jpg"
import halter from "../assets/halter_gym.jpg"

//imagens
import treino from "../assets/treino.jfif"
import relogio from "../assets/relogio.jfif"
import efeitos from "../assets/efeitos.jfif"

import { BsFillEmojiLaughingFill } from "react-icons/bs"

export const DB = [
        {
            img: man,
            imgText: "Lorem ipsum dolor sit",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
            icon: BsFillEmojiLaughingFill,
            link: "http://google.com",
            textColor: true
        },
        {
            img: woman,
            imgText: "Lorem ipsum dolor sit",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
            icon: BsFillEmojiLaughingFill,
            link: "http://google.com",
            textColor: false
        },
        {
            img: halter,
            imgText: "Lorem ipsum dolor sit",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
            icon: BsFillEmojiLaughingFill,
            link: "http://google.com",
            textColor: true
        },
        {
            img: man,
            imgText: "Lorem ipsum dolor sit",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
            icon: BsFillEmojiLaughingFill,
            link: "http://google.com",
            textColor: false
        },
        {
            img: woman,
            imgText: "Lorem ipsum dolor sit",
            cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni ipsam in ab officia voluptatibus illum",
            icon: BsFillEmojiLaughingFill,
            link: "http://google.com",
            textColor: true
        },
]

export const DBTextos =  [
    {
        title: "Melhor horário para tomar Creatina",
        content: [
            "O suplemento de creatina apresenta seus benefícios através do uso crônico. Por isso, após iniciado seu consumo, deve ser ingerida todos os dias.",

            " Levarão alguns dias até que os benefícios possam ser observados em sua totalidade. A creatina é insulinodependente, ou seja, é preciso consumi-la junto com alimentos ou suplementos que influenciam a produção de insulina (que possuem alto índice glicêmico), como por exemplo, dextrose, maltodextrina, arroz, pão, macarrão ou proteínas de alto índice insulinêmico como leite ou whey protein." ,

            "A sugestão de consumo determinada pela ANVISA é de 3g ao dia. Quanto ao horário, não há um consenso entre os pesquisadores. Porém, existem evidências que apontam para maiores benefícios quando o produto é consumido ao final do treino."
        ],
        resume: "",
        image: relogio,
        id: "relogio",
        link: "http://google.com",

    },
    {
        title: "Efeitos colaterais da creatina",
        content:[ 
            "Via de regra, a creatina é um suplemento totalmente seguro. Existem alguns relatos relacionados a problemas como diarreia, queda de cabelo e dores de cabeça, entretanto, são muito escassos e citados em poucos estudos sobre o assunto.",
        
            "Por isso podemos dizer que o uso de creatina é seguro, trazendo, inclusive, benefícios terapêuticos para os usuários. Nesse sentido, não há nenhuma evidência científica que aponte risco associado ao uso de creatina em curto ou longo prazo em quantidades de até 30g ao dia por um período de cinco anos.",
        
            "Se você tem qualquer patologia, é fundamental informar ao seu nutricionista a fim de que ele avalie os melhores suplementos para atender às suas individualidades biológicas e eventuais especificidades."
        ],
        resume: "",
        image: efeitos,
        id: "efeitos",
        order: true,
        link: "http://google.com",
    },{
        title: "Creatina antes ou depois do treino",
        content:[ 
            "Os pesquisadores não chegaram a um consenso com relação a esse assunto. Enquanto alguns especialistas defendem a ideia de que o seu consumo antes ou depois não influencia no resultado, outros acreditam que o consumo pós-treino é o mais indicado.",
        
            "Estudos realizados com fisiculturistas indicam que a administração da creatina após a prática de atividades físicas pode proporcionar mudanças positivas se comparada com a ingestão pré-exercício.",
            
            "Desta forma, a orientação é que você busque o suporte do seu nutricionista. Ele poderá avaliar a sua dieta, estratégia, eventual necessidade de suplementação com creatina e os melhores horários para administração do suplemento com base nos seus objetivos."
        ],
        resume: "",
        image: treino,
        id: "treino",
        link: "http://google.com",
    }
]

export const listNav = [
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
