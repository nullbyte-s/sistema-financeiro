package sistema.financeiro.api.pessoa;

import sistema.financeiro.api.endereco.Endereco;

public record DadosDetalhamentoPessoa(
        Long id, String nome,
        Endereco endereco) {
            public DadosDetalhamentoPessoa(Pessoa pessoa) {
                this(pessoa.getId(),
                        pessoa.getNome(),
                        pessoa.getEndereco());
            }
        }
