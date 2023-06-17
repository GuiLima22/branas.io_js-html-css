const janeiro = new Mes("janeiro", 0, lancamentosJaneiro);
janeiro.calcularFinancas();
console.log(janeiro);

const fevereiro = new Mes("fevereiro", janeiro.detalhesDoMes.saldo, lancamentosFevereiro);
fevereiro.calcularFinancas();
console.log(fevereiro);

const marco = new Mes("marco", fevereiro.detalhesDoMes.saldo, lancamentosMarco);
marco.calcularFinancas();
console.log(marco);

janeiro.adicionarLancamentos(new Lancamento('despesa', 500, 'escola'))