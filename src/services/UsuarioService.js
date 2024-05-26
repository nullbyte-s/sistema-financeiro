import api from '../api/axios';

class UsuarioService {
    login(credenciais) {
        return api.post('/auth/login', credenciais);
    }

    obterSaldoUsuario(id) {
        return api.get(`/usuarios/${id}/saldo`);
    }
}

export default UsuarioService;
