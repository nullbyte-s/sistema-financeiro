import React from 'react';

export const Form = ({ onSubmit }) => {
    const [descricao, setDescricao] = React.useState('');
    const [valor, setValor] = React.useState('');
    const [vencimento, setVencimento] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(descricao, valor, vencimento);
        setDescricao('');
        setValor('');
        setVencimento('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />
            <input
                type="date"
                placeholder="Vencimento"
                value={vencimento}
                onChange={(e) => setVencimento(e.target.value)}
            />
            <span> até </span>
            <input
                type="date"
                placeholder="Vencimento"
                value={vencimento}
                onChange={(e) => setVencimento(e.target.value)}
            />
            <button type="submit">Pesquisar</button>
        </form>
    );
};

export const Lancamentos = ({ lancamentos }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Pessoa</th>
                    <th>Descrição</th>
                    <th>Vencimento</th>
                    <th>Pagamento</th>
                    <th>Valor</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {lancamentos.map((lancamento) => (
                    <tr key={lancamento.descricao}>
                        <td>{lancamento.descricao}</td>
                        <td>{lancamento.vencimento}</td>
                        <td>{lancamento.valor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};