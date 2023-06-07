const meses = [
    {nome: "janeiro"},
    {nome: "fevereiro"},
    {nome: "marco"},
    {nome: "abril"},
    {nome: "maio"},
    {nome: "junho"},
    {nome: "julho"},
    {nome: "agosto"},
    {nome: "setembro"},
    {nome: "outubro"},
    {nome: "novembro"},
    {nome: "dezembro"}
];

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



const saldoInicial = 0
lancamentosJaneiro = [
    new lancamento('receita', 3000, 'salario'),
    new lancamento('despesa', 1000, 'aluguel'),
    new lancamento('despesa',  200, 'conta_de_luz'),
    new lancamento('despesa',  100, 'conta_de_agua'),
    new lancamento('despesa',  100, 'internet'),
    new lancamento('despesa',  300, 'transporte'),
    new lancamento('despesa',  300, 'lazer'),
    new lancamento('despesa',  500, 'alimentacao'),
    new lancamento('despesa',  300, 'condominio'),
    new lancamento('despesa',  100, 'farmacia')
]

lancamentosFevereiro = [
    new lancamento('receita', 3000, 'salario'),
    new lancamento('despesa', 1200, 'aluguel'),
    new lancamento('despesa',  250, 'conta_de_luz'),
    new lancamento('despesa',  100, 'conta_de_agua'),
    new lancamento('despesa',  100, 'internet'),
    new lancamento('despesa',  500, 'transporte'),
    new lancamento('despesa', 1000, 'alimentacao'),
    new lancamento('despesa',  400, 'condominio')
]

lancamentosMarco = [
    new lancamento('receita', 4000, 'salario'),
    new lancamento('despesa', 1200, 'aluguel'),
    new lancamento('despesa',  200, 'conta_de_luz'),
    new lancamento('despesa',  100, 'conta_de_agua'),
    new lancamento('despesa',  200, 'internet'),
    new lancamento('despesa',  500, 'transporte'),
    new lancamento('despesa',  800, 'lazer'),
    new lancamento('despesa', 1000, 'alimentacao'),
    new lancamento('despesa',  400, 'condominio')
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

function calcularFinancas(nomeMes, saldoInicial, lancamentos) {
    const esseMes = new mes (nomeMes, saldoInicial, lancamentos)
    esseMes.detalhesDoMes.saldo = saldoInicial;
    for (const lancamento of esseMes.lancamentos) {
        if (lancamento.tipo === "receita") {
            esseMes.detalhesDoMes.receitas += lancamento.valor;
        };
        if (lancamento.tipo === "despesa") {
            esseMes.detalhesDoMes.despesas += lancamento.valor;
        };
    };

    calcularPercentualDespesas(esseMes.lancamentos, esseMes.detalhesDoMes.despesas, esseMes.detalhesDoMes.percentualDespesas);

    esseMes.detalhesDoMes.saldo += esseMes.detalhesDoMes.receitas - esseMes.detalhesDoMes.despesas;

    const estaNegativo = esseMes.detalhesDoMes.saldo < 0;
    if (estaNegativo) {
        esseMes.detalhesDoMes.juros = calcularJuros(esseMes.detalhesDoMes.saldo);
        esseMes.detalhesDoMes.saldo = arredondar(esseMes.detalhesDoMes.saldo + esseMes.detalhesDoMes.juros);
    } else {
        esseMes.detalhesDoMes.rendimentos = calcularRendimentos(esseMes.detalhesDoMes.saldo);
        esseMes.detalhesDoMes.saldo = arredondar(esseMes.detalhesDoMes.saldo + esseMes.detalhesDoMes.rendimentos);
    };

    return esseMes;
};



saldo1 = calcularFinancas("janeiro", saldoInicial, lancamentosJaneiro);
console.log(saldo1);

saldo2 = calcularFinancas("fevereiro", saldo1.detalhesDoMes.saldo, lancamentosFevereiro);
console.log(saldo2);

saldo3 = calcularFinancas("marco", saldo2.detalhesDoMes.saldo, lancamentosMarco);
console.log(saldo3);