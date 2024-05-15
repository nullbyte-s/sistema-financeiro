package sistema.financeiro.api.lancamento;

import jakarta.validation.constraints.NotNull;
import sistema.financeiro.api.endereco.DadosEndereco;

import java.math.BigDecimal;
import java.time.LocalDate;

public record DadosAtualizacaoLancamento(@NotNull
                                         Long id,
                                         TipoLancamento lancamento,
                                         String descricao,
                                         LocalDate dataVencimento,
                                         LocalDate dataPagamento,
                                         BigDecimal valor,
                                         String observacao) {
}
