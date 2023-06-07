class lancamento {
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
};


class mes {
    constructor(nome, saldoInicial, lancamentos) {
        if (nome === "") {
            throw new Error('"nome" cannot be empty');
        }
        this.nome = nome;
        this.detalhesDoMes = { saldo: 0, juros: 0, saldoInicial, rendimentos: 0, receitas: 0, despesas: 0, percentualDespesas: [] };
        this.lancamentos = lancamentos;
    }
    adicionarLancamentos(lancamento){
        this.lancamentos.push(lancamento);
    };
};

saldoInicial = 0
lancamentosJaneiro = [
    new lancamento('receita', 3000, 'salario'),
    new lancamento('despesa', 1000, 'aluguel'),
    new lancamento('despesa', 200, 'conta_de_luz'),
    new lancamento('despesa', 100, 'conta_de_agua'),
    new lancamento('despesa', 100, 'internet'),
    new lancamento('despesa', 300, 'transporte'),
    new lancamento('despesa', 300, 'lazer'),
    new lancamento('despesa', 500, 'alimentacao'),
    new lancamento('despesa', 300, 'condominio'),
    new lancamento('despesa', 100, 'farmacia'),
]

lancamentosFevereiro = [
    { tipo: "receita", valor: 3000, categoria: "Salário" },
    { tipo: "despesa", valor: 1200, categoria: "Aluguel" },
    { tipo: "despesa", valor: 250, categoria: "Conta de Luz" },
    { tipo: "despesa", valor: 100, categoria: "Conta de Água" },
    { tipo: "despesa", valor: 100, categoria: "Internet" },
    { tipo: "despesa", valor: 500, categoria: "Transporte" },
    { tipo: "despesa", valor: 1000, categoria: "Alimentação" },
    { tipo: "despesa", valor: 400, categoria: "Condomínio" }
]

lancamentosMarco = [
    { tipo: "receita", valor: 4000, categoria: "Salário" },
    { tipo: "despesa", valor: 1200, categoria: "Aluguel" },
    { tipo: "despesa", valor: 200, categoria: "Conta de Luz" },
    { tipo: "despesa", valor: 100, categoria: "Conta de Água" },
    { tipo: "despesa", valor: 200, categoria: "Internet" },
    { tipo: "despesa", valor: 500, categoria: "Transporte" },
    { tipo: "despesa", valor: 800, categoria: "Lazer" },
    { tipo: "despesa", valor: 1000, categoria: "Alimentação" },
    { tipo: "despesa", valor: 400, categoria: "Condomínio" }
]



function arredondar(valor) {
    return Math.round(valor * 100) / 100
}

function calcularJuros(valor) {
    juros = arredondar(valor * 0.1)
    return juros
}

function calcularRendimentos(valor) {
    rendimentos = arredondar(valor * 0.005)
    return rendimentos
}

function calcularPercentualDespesas(lancamentos, total, percentualDespesas) {
    for (const lancamento of lancamentos) {
        if (lancamento.tipo === "despesa")
            percentualDespesas.push({ percentual: arredondar(lancamento.valor / total * 100), categoria: lancamento.categoria })
    }
    return percentualDespesas
}

function calcularFinancas(mes, saldoInicial, lancamentos) {
    console.log(mes);
    console.log(lancamentos[0].categoria)
    const detalhesDoMes = { saldo: 0, juros: 0, saldoInicial, rendimentos: 0, receitas: 0, despesas: 0, percentualDespesas: [] };
    detalhesDoMes.saldo = saldoInicial;
    for (const lancamento of lancamentos) {
        if (lancamento.tipo === "receita") {
            detalhesDoMes.receitas += lancamento.valor;
        };
        if (lancamento.tipo === "despesa") {
            detalhesDoMes.despesas += lancamento.valor;
        };
    };

    calcularPercentualDespesas(lancamentos, detalhesDoMes.despesas, detalhesDoMes.percentualDespesas);

    detalhesDoMes.saldo += detalhesDoMes.receitas - detalhesDoMes.despesas;

    const estaNegativo = detalhesDoMes.saldo < 0;
    if (estaNegativo) {
        detalhesDoMes.juros = calcularJuros(detalhesDoMes.saldo);
        detalhesDoMes.saldo = arredondar(detalhesDoMes.saldo + detalhesDoMes.juros);
    } else {
        detalhesDoMes.rendimentos = calcularRendimentos(detalhesDoMes.saldo);
        detalhesDoMes.saldo = arredondar(detalhesDoMes.saldo + detalhesDoMes.rendimentos);
    };

    return detalhesDoMes;
};



saldo1 = calcularFinancas("janeiro", saldoInicial, lancamentosJaneiro);
console.log(saldo1);

saldo2 = calcularFinancas("fevereiro", saldo1.saldo, lancamentosFevereiro);
console.log(saldo2);

saldo3 = calcularFinancas("marco", saldo2.saldo, lancamentosMarco);
console.log(saldo3);



const janeiro = new mes("janeiro", 0, lancamentosJaneiro);
console.log(janeiro)

const fevereiro = new mes("fevereiro", 0, lancamentosFevereiro);
console.log(fevereiro)