import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import UsuarioService from '../services/UsuarioService';

const Login = ({ history }) => {
  const [credenciais, setCredenciais] = useState({ email: '', senha: '' });
  const { login } = useContext(AuthContext);
  const usuarioService = new UsuarioService();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredenciais({ ...credenciais, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await usuarioService.login(credenciais);
      login(response.data);
      history.push('/');
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credenciais.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={credenciais.senha}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;