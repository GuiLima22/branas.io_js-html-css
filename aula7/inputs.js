const janeiro = new Mes("janeiro");

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


const fevereiro = new Mes("fevereiro");

fevereiro.adicionarLancamentos(new Lancamento('receita', 3000, 'salario'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 1200, 'aluguel'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 250, 'conta_de_luz'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 100, 'conta_de_agua'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 100, 'internet'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 500, 'transporte'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 1000, 'alimentacao'))
fevereiro.adicionarLancamentos(new Lancamento('despesa', 400, 'condominio'))


const marco = new Mes("marco");

marco.adicionarLancamentos(new Lancamento('receita', 4000, 'salario'))
marco.adicionarLancamentos(new Lancamento('despesa', 1200, 'aluguel'))
marco.adicionarLancamentos(new Lancamento('despesa', 200, 'conta_de_luz'))
marco.adicionarLancamentos(new Lancamento('despesa', 100, 'conta_de_agua'))
marco.adicionarLancamentos(new Lancamento('despesa', 200, 'internet'))
marco.adicionarLancamentos(new Lancamento('despesa', 500, 'transporte'))
marco.adicionarLancamentos(new Lancamento('despesa', 800, 'lazer'))
marco.adicionarLancamentos(new Lancamento('despesa', 1000, 'alimentacao'))
marco.adicionarLancamentos(new Lancamento('despesa', 400, 'condominio'))


// console.log(janeiro);
// console.log(fevereiro);
// console.log(marco);


// janeiro.adicionarLancamentos(new Lancamento('despesa', 500, 'escola'))

const ano2023 = new Ano(2023)

ano2023.adicionarMes(janeiro);
ano2023.adicionarMes(fevereiro);
ano2023.adicionarMes(marco)
ano2023.calcularSaldo();