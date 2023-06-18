const janeiro = new Mes("janeiro", 0);

janeiro.adicionarLancamentos(new Lancamento('receita', 3000, 'salario'))
janeiro.adicionarLancamentos(new Lancamento('despesa', 1000, 'aluguel'))
janeiro.adicionarLancamentos(new Lancamento('despesa', 200, 'conta_de_luz'))
janeiro.adicionarLancamentos(new Lancamento('despesa', 100, 'conta_de_agua'))
janeiro.adicionarLancamentos(new Lancamento('despesa', 100, 'internet'))
janeiro.adicionarLancamentos(new Lancamento('despesa', 300, 'transporte'))
janeiro.adicionarLancamentos(new Lancamento('despesa', 300, 'lazer'))
janeiro.adicionarLancamentos(new Lancamento('despesa', 500, 'alimentacao'))
janeiro.adicionarLancamentos(new Lancamento('despesa', 300, 'condominio'))
janeiro.adicionarLancamentos(new Lancamento('despesa', 100, 'farmacia'))

janeiro.calcularFinancas();


const fevereiro = new Mes("fevereiro", janeiro.detalhesDoMes.saldo);

fevereiro.adicionarLancamentos(new Lancamento('receita', 3000, 'salario'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 1200, 'aluguel'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 250, 'conta_de_luz'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 100, 'conta_de_agua'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 100, 'internet'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 500, 'transporte'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 1000, 'alimentacao'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 400, 'condominio'))

fevereiro.calcularFinancas();


const marco = new Mes("marco", fevereiro.detalhesDoMes.saldo);

marco.adicionarLancamentos(new Lancamento('receita', 4000, 'salario'))
marco.adicionarLancamentos(new Lancamento('despesa', 1200, 'aluguel'))
marco.adicionarLancamentos(new Lancamento('despesa', 200, 'conta_de_luz'))
marco.adicionarLancamentos(new Lancamento('despesa', 100, 'conta_de_agua'))
marco.adicionarLancamentos(new Lancamento('despesa', 200, 'internet'))
marco.adicionarLancamentos(new Lancamento('despesa', 500, 'transporte'))
marco.adicionarLancamentos(new Lancamento('despesa', 800, 'lazer'))
marco.adicionarLancamentos(new Lancamento('despesa', 1000, 'alimentacao'))
marco.adicionarLancamentos(new Lancamento('despesa', 400, 'condominio'))


marco.calcularFinancas();


console.log(janeiro);
console.log(fevereiro);
console.log(marco);


janeiro.adicionarLancamentos(new Lancamento('despesa', 500, 'escola'))