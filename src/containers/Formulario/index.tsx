import { FormEvent, useState } from 'react'
import { MainContainer, Titulo } from '../../styles'
import { useNavigate } from 'react-router-dom'
import { Campo } from '../../styles'
import { Form } from './styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Enums'
import { cadastrar } from '../../store/reducers/contatos'
import InputMask from 'react-input-mask'
import styled from 'styled-components'
import { BotaoCadastrar } from './styles'

const CampoComMascara = styled(InputMask)`
padding: 8px;
background-color: #fff;
border-radius: 8px;
font-weight: bold;
color: #666666;
border-color: #666666;
width: 37%;
margin-bottom: 8px;
font-size: 24px;
`;

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [celular, setCelular] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        celular,
        email,
        status: enums.Status.CONTATO
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <CampoComMascara
          mask="(99) 999999999"
          value={celular}
          onChange={(evento) => setCelular(evento.target.value)}
          placeholder="Celular"
        />
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
