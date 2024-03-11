import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Enums'
import { Botao } from '../../styles'

type TagProps = {
  status?: enums.Status
  parametro: 'status'
}

function retornaCorFundo(props: TagProps): string {
    if (props.status === enums.Status.CONTATO) return variaveis.cinza
    if (props.status === enums.Status.IMPORTANTE) return variaveis.verde2
    return '#ccc'
  }


export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  width: 50%;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: inline-block;
`
export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 24px;
  line-height: 20px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margim-bottom: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.amarelo2};

`
export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
