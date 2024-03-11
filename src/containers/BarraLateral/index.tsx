import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import { Botao, Campo, Titulo } from '../../styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Enums'
import * as S from './styles'
import { Imagem } from './styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Titulo>Meus Contatos</Titulo>
        <Imagem src='/lista-telefonica.png' alt='Ícone de lista de contatos' style={{width: '100px', height: '100px'}} />
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.CONTATO}
                criterio="status"
                legenda="contato(s)"
              />
              <FiltroCard
                valor={enums.Status.IMPORTANTE}
                criterio="status"
                legenda="importante(s)"
              />
              <FiltroCard criterio="todas" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar para lista de contatos</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
