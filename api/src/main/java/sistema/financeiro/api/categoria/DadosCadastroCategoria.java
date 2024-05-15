package sistema.financeiro.api.categoria;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastroCategoria(
                @NotBlank String nome) {
}
