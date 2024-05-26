import React from 'react';
import { AuthContext } from '../context/AuthContext';
import UsuarioService from '../services/UsuarioService';
import './Home.css';

class Home extends React.Component {
  static contextType = AuthContext;

  constructor() {
    super();
    this.apiService = new UsuarioService();
  }

  state = {
    user: '',
    saldo: 0,
  };

  componentDidMount() {
    const { usuarioAutenticado } = this.context;
    if (usuarioAutenticado) {
      this.setState({ user: usuarioAutenticado.nome });
      this.apiService.obterSaldoUsuario(usuarioAutenticado.id).then(response => {
        this.setState({ saldo: response.data });
      }).catch(error => {
        console.log(error);
      });
    }
  }

  cadastrarLancamentos = () => {
    this.props.history.push('/cadastro-lancamento');
  };

  verLancamentos = () => {
    this.props.history.push('/consulta-lancamento');
  };

  primeiroNome = () => {
    const primeiroNome = this.state.user.split(' ').shift();
    return primeiroNome.toUpperCase().charAt(0).concat(primeiroNome.slice(1));
  };

  render() {
    const saldoClass = this.state.saldo > 0 ? 'saldo positivo' : 'saldo negativo';

    return (
      <div className="jumbotron" id="dark-1">
        <h1 className="display-3">
          Bem Vindo {this.primeiroNome()}!
        </h1>
        <p className="lead">
          Essa é a sua área administrativa. <br />
          Veja o seu saldo atual
        </p>
        <p className={saldoClass}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(this.state.saldo)}
        </p>
        <hr className="lead" />
        <p className="lead">
          <button onClick={this.cadastrarLancamentos} className="btn btn-success">
            Novo Lançamento
          </button>
          <button onClick={this.verLancamentos} className="btn btn-secondary">
            Ver Lançamentos
          </button>
        </p>
      </div>
    );
  }
}

export default Home;