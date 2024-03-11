import { useSelector } from 'react-redux';
import Contato from '../../components/Contato';
import { MainContainer, Titulo } from '../../styles';
import { RootReducer } from '../../store';;

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  );

const filtraContatos = () => {
  let contatosFiltrados = itens;
  if (termo !== undefined) {
    contatosFiltrados = contatosFiltrados.filter(
      (item) => item.nome.toLowerCase().includes(termo.toLowerCase())
    );
  }
  if (criterio === 'status') {
    contatosFiltrados = contatosFiltrados.filter(
      (item) => item.status === valor
    );
  }
  return contatosFiltrados;
};


  const resultadoFiltragem = (quantidade: number) => {
    let mensagem = '';
    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s)`;
    } else {
      mensagem = `${quantidade} contato(s)`;
    }
    return mensagem;
  };

  const contatos = filtraContatos();
  const mensagem = resultadoFiltragem(contatos.length);

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              celular={c.celular}
              nome={c.nome}
              email={c.email}
              status={c.status}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default ListaContatos;
