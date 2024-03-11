import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/Enums'
import { remover, editar, alteraStatus } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  celular: celularOriginal,
  email: emailOriginal,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [celular, setCelular] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (celularOriginal.length > 0) {
      setCelular(celularOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [nomeOriginal, celularOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setCelular(celularOriginal)
    setEmail(emailOriginal)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
      <S.Card>
      <label htmlFor={nome}>
        <input
          type="checkbox"
          id={nome}
          checked={status === enums.Status.IMPORTANTE}
          onChange={alteraStatusTarefa} />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {nome}
        </S.Titulo>
      </label>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={celular}
        onChange={(evento) => setCelular(evento.target.value)} />
      <S.Descricao
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)} />
        <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    celular,
                    email,
                    status,
                    id
                  })
                )
                setEstaEditando(false)
              } }
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Contato
