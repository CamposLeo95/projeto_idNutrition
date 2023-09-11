import * as S from "./styles"

interface ComponentNameProps {
    Attention: boolean
    color?: string
}

export default function ComponentName({ Attention, color } : ComponentNameProps){
    return(
        <S.Container color={color}>
            <S.TableContainer color={color}>
                <S.Title color={color}>
                    <h2>INFORMAÇÃO NUTRICIONAL</h2>
                    <p>Porção por emabalagem: 100</p>
                    <p>Porção: 3g (1 dosador)</p>
                </S.Title>
                <table>
                    <tr>
                        <th>Quantidade por Porção</th>
                        <th className="td-middle"> </th>
                        <th className="td-final">%VD*</th>
                    </tr>
                    
                    <tr>
                        <td>Creatina</td>
                        <td className="td-middle">3g</td>
                        <td className="td-final"> </td>
                    </tr>
                </table>
                <p>(*) % Valores Diários de referência com base em uma dieta de 2.000 kcal ou 8.400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.</p>    
            </S.TableContainer>
            {Attention && 
                <S.AttentionContainer>
                <p>
                <S.TextBold>
                    ATENÇÃO:
                </S.TextBold>
                    Produto indicado para o grupo populacional 19 anos. ESTE PRODUTO NÃO É UM MEDICAMENTO. NÃO EXCEDER A RECOMENDAÇÃO DIÁRIA DE CONSUMO INDICADA NA EMBALAGEM. MANTENHA FORA DO ALCANCE DAS CRIANÇAS. Este produto não deve ser consumido por gestantes, lactantes e crianças.
                </p>
                <p>
                <S.TextBold>
                    IMPORTANTE:
                </S.TextBold>
                    Não contém quantidades significaivas de valor energético, carboidratos, proteínas, gorduras totais, gorduras saturadas, gorduras trans, fibras alimentares e sódio.
                </p>
            </S.AttentionContainer>
            }
            
        </S.Container>
    )
}