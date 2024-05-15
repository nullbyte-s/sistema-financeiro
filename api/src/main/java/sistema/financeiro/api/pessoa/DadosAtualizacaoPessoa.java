package sistema.financeiro.api.pessoa;

import jakarta.validation.constraints.NotNull;
import sistema.financeiro.api.endereco.DadosEndereco;

public record DadosAtualizacaoPessoa(@NotNull
                                         Long id,
                                     String nome,
                                     DadosEndereco endereco){
}
