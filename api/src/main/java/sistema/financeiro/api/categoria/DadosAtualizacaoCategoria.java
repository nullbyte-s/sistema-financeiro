package sistema.financeiro.api.categoria;

import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoCategoria(@NotNull Long id,
        String nome) {
}
