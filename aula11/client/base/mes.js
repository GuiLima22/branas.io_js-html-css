class Mes {
    constructor(nome, saldoInicial) {
        if (nome === "") {
            throw new Error('"nome" cannot be empty');
        }
        this.nome = nome;
        this.saldoInicial = saldoInicial;
        this.lancamentos = [];
    }

    adicionarLancamentos(lancamento) {
        this.lancamentos.push(lancamento);
    }

    calcularSaldo() {
        this.detalhesDoMes.saldo += this.saldoInicial;
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "receita") {
                this.detalhesDoMes.saldo += arredondar(lancamento.valor);
                this.detalhesDoMes.receitas += arredondar(lancamento.valor);
            }
            if (lancamento.tipo === "despesa") {
                this.detalhesDoMes.saldo -= arredondar(lancamento.valor);
                this.detalhesDoMes.despesas += arredondar(lancamento.valor);
            }
        }
    }

    calcularPercentualDespesas() {
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa")
                this.detalhesDoMes.percentualDespesas.push({ percentual: arredondar(lancamento.valor / this.detalhesDoMes.despesas * 100), categoria: lancamento.categoria })
        }
    }

    calcularJuros() {
        this.detalhesDoMes.juros = arredondar(this.detalhesDoMes.saldo * 0.1)
        this.detalhesDoMes.saldo -= this.detalhesDoMes.juros
    }

    calcularRendimentos() {
        this.detalhesDoMes.rendimentos = arredondar(this.detalhesDoMes.saldo * 0.005)
        this.detalhesDoMes.saldo += this.detalhesDoMes.rendimentos
    }

    definirJurosOuRendimento() {
        if (this.detalhesDoMes.saldo < 0) {
            this.calcularJuros();
        }
        if (this.detalhesDoMes.saldo > 0) {
            this.calcularRendimentos();
        }
    }

    calcularFinancas() {
        this.detalhesDoMes = { saldo: 0, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, percentualDespesas: [] };
        this.calcularSaldo();
        this.calcularPercentualDespesas();
        this.definirJurosOuRendimento();
    }

}