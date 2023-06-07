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
    
    adicionarLancamentos(lancamento){
        this.lancamentos.push(lancamento);
    };
}