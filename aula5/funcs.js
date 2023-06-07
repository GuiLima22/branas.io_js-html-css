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
    const esseMes = new Mes (nomeMes, saldoInicial, lancamentos)
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