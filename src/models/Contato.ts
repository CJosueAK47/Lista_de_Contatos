import * as enums from '../utils/enums/Enums'

class Contato {
  nome: string
  celular: string
  email: string
  status: enums.Status
  id: number

  constructor(
    nome: string,
    celular: string,
    email: string,
    status: enums.Status,
    id: number
  ) {
    this.nome = nome
    this.celular = celular
    this.email = email
    this.status = status
    this.id = id
  }
}

export default Contato
