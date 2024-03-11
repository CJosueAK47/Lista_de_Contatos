import { Link } from 'react-router-dom'
import { Circulo } from './styles'

const BotaoAdicionar = () => (
  <Link to="/novo">
    <Circulo>+</Circulo>
  </Link>
)

export default BotaoAdicionar
