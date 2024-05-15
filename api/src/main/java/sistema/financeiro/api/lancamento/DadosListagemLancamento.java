package sistema.financeiro.api.lancamento;

import org.jetbrains.annotations.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

public record DadosListagemLancamento(Long id,
                                      TipoLancamento lancamento,
                                      String descricao,
                                      LocalDate dataVencimento,
                                      LocalDate dataPagamento,
                                      BigDecimal valor,
                                      String observacao) {
    public DadosListagemLancamento(@NotNull Lancamento lancamento){
        this(lancamento.getId(),
                lancamento.getLancamento(),
                lancamento.getDescricao(),
                lancamento.getVencimento(),
                lancamento.getPagamento(),
                lancamento.getValor(),
                lancamento.getObservacao());
    }
}
