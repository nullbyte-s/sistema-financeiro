package sistema.financeiro.api.lancamento;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import sistema.financeiro.api.categoria.Categoria;
import sistema.financeiro.api.pessoa.Pessoa;

import java.math.BigDecimal;
import java.time.LocalDate;

@Table(name = "lancamentos")
@Entity(name = "Lancamento")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Lancamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private TipoLancamento lancamento;
    private String descricao;
    private LocalDate vencimento;
    private LocalDate pagamento;
    private BigDecimal valor;
    private String observacao;
    private Boolean ativo;

    @ManyToOne
    @JoinColumn(name = "id_categoria")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "id_pessoa")
    private Pessoa pessoa;

    public Lancamento(DadosCadastroLancamento dados) {
        this.ativo = true;
        this.lancamento = dados.lancamento();
        this.descricao = dados.descricao();
        this.vencimento = dados.dataVencimento();
        this.pagamento = dados.dataPagamento();
        this.valor = dados.valor();
        this.observacao = dados.observacao();
    }

    public void atualizarInformacoes(DadosAtualizacaoLancamento dados) {
        if(dados.lancamento() != null) {
            this.lancamento = dados.lancamento();
        }
        if(dados.descricao() != null) {
            this.descricao = dados.descricao();
        }
        if(dados.dataVencimento() != null) {
            this.vencimento = dados.dataVencimento();
        }
        if(dados.dataPagamento() != null) {
            this.pagamento = dados.dataPagamento();
        }
        if(dados.valor() != null) {
            this.valor = dados.valor();
        }
        if(dados.observacao() != null) {
            this.observacao = dados.observacao();
        }
    }

    public void excluir() {
        this.ativo = false;
    }
}
