
saldo1 = calcularFinancas("janeiro", saldoInicial, lancamentosJaneiro);
console.log(saldo1);

saldo2 = calcularFinancas("fevereiro", saldo1.detalhesDoMes.saldo, lancamentosFevereiro);
console.log(saldo2);

saldo3 = calcularFinancas("marco", saldo2.detalhesDoMes.saldo, lancamentosMarco);
console.log(saldo3);