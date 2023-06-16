class Lancamento {
    constructor(tipo, valor, categoria) {
        if (tipo !== 'despesa' && tipo !== 'receita') {
            throw new Error('parameter "tipo" cannot be different than "despesa" or "receita"');
        };
        if (valor < 0) {
            throw new Error('parameter "valor" cannot be lower than 0');
        };
        if (categoria === '') {
            throw new Error('you must define a "categoria"');
        };
        this.tipo = tipo;
        this.valor = valor;
        this.categoria = categoria;
    };
}


class Mes {
    constructor(nome, saldoInicial, lancamentos) {
        if (nome === "") {
            throw new Error('"nome" cannot be empty');
        }
        this.nome = nome;
        this.detalhesDoMes = { saldo: 0, juros: 0, saldoInicial, rendimentos: 0, receitas: 0, despesas: 0, percentualDespesas: [] };
        this.lancamentos = lancamentos;
    };

    adicionarLancamentos(lancamento) {
        this.lancamentos.push(lancamento);
    };

    calcularSaldo() {
        this.detalhesDoMes.saldo += this.detalhesDoMes.saldoInicial;
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "receita") {
                this.detalhesDoMes.saldo += arredondar(lancamento.valor);
                this.detalhesDoMes.receitas += arredondar(lancamento.valor);
            };
            if (lancamento.tipo === "despesa") {
                this.detalhesDoMes.saldo -= arredondar(lancamento.valor);
                this.detalhesDoMes.despesas += arredondar(lancamento.valor);
            };
        };
    };

    calcularPercentualDespesas() {
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa")
                this.detalhesDoMes.percentualDespesas.push({ percentual: arredondar(lancamento.valor / this.detalhesDoMes.despesas * 100), categoria: lancamento.categoria })
        }
    };

    calcularJuros() {
        this.detalhesDoMes.juros = arredondar(this.detalhesDoMes.saldo * 0.1)
        this.detalhesDoMes.saldo -= this.detalhesDoMes.juros
    };

    calcularRendimentos() {
        this.detalhesDoMes.rendimentos = arredondar(this.detalhesDoMes.saldo * 0.005)
        this.detalhesDoMes.saldo += this.detalhesDoMes.rendimentos
    };

    definirJurosOuRendimento() {
        if (this.detalhesDoMes.saldo < 0) {
            this.calcularJuros();
        };
        if (this.detalhesDoMes.saldo > 0) {
            this.calcularRendimentos();
        };
    };

    calcularFinancas() {
        this.calcularSaldo();
        this.calcularPercentualDespesas();
        this.definirJurosOuRendimento();
    };

}