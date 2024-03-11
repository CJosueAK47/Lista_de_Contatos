import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Campo = styled.input`
  display: block;
  margin-bottom: 10px;
`

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
`
export const BotaoCadastrar = styled(Botao)`
  background-color: ${variaveis.verde};
  margin-top: 8px;
  display: grid;
`
